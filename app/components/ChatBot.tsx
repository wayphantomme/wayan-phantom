"use client";

import { useState, useRef, useEffect, useCallback } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Message {
  role: "user" | "model";
  content: string;
}

// ─── Suggested starter questions ─────────────────────────────────────────────

const SUGGESTIONS = [
  "What tech stack does Wayan use?",
  "Tell me about his Web3 experience",
  "What projects has he built?",
  "Is he open to new opportunities?",
];

// ─── Markdown-lite renderer (bold + links only) ───────────────────────────────

function renderText(text: string) {
  // Split by lines, render each
  return text.split("\n").map((line, i) => {
    if (line.trim() === "") return <br key={i} />;

    // Bold: **text**
    const parts = line.split(/(\*\*[^*]+\*\*)/g);
    const rendered = parts.map((part, j) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={j}>{part.slice(2, -2)}</strong>;
      }
      // Inline links: [label](url)
      const linkParts = part.split(/(\[[^\]]+\]\([^)]+\))/g);
      return linkParts.map((lp, k) => {
        const match = lp.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (match) {
          return (
            <a
              key={k}
              href={match[2]}
              target="_blank"
              rel="noopener noreferrer"
              className="chatbot-link"
            >
              {match[1]}
            </a>
          );
        }
        return <span key={k}>{lp}</span>;
      });
    });

    return <p key={i} className="chatbot-msg-line">{rendered}</p>;
  });
}

// ─── Typing indicator ─────────────────────────────────────────────────────────

function TypingDots() {
  return (
    <div className="chatbot-typing">
      <span />
      <span />
      <span />
    </div>
  );
}

// ─── Single message bubble ────────────────────────────────────────────────────

function Bubble({ msg }: { msg: Message }) {
  const isUser = msg.role === "user";
  return (
    <div className={`chatbot-bubble-row ${isUser ? "chatbot-bubble-row-user" : "chatbot-bubble-row-bot"}`}>
      {!isUser && (
        <div className="chatbot-avatar" aria-hidden="true">
          WP
        </div>
      )}
      <div className={`chatbot-bubble ${isUser ? "chatbot-bubble-user" : "chatbot-bubble-bot"}`}>
        {renderText(msg.content)}
      </div>
    </div>
  );
}

// ─── Main ChatBot component ───────────────────────────────────────────────────

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [usedModel, setUsedModel] = useState<string | null>(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  // Focus input when chat opens
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [open]);

  // Show tooltip after 2s, hide after 5s — only once
  useEffect(() => {
    if (tooltipDismissed || open) return;
    const showTimer = setTimeout(() => setShowTooltip(true), 2000);
    const hideTimer = setTimeout(() => {
      setShowTooltip(false);
      setTooltipDismissed(true);
    }, 7000);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [tooltipDismissed, open]);

  const sendMessage = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || loading) return;

      const userMsg: Message = { role: "user", content: trimmed };
      const next = [...messages, userMsg];
      setMessages(next);
      setInput("");
      setLoading(true);
      setError(null);

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: next }),
        });

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error ?? "Something went wrong");
        }

        setMessages((prev) => [
          ...prev,
          { role: "model", content: data.message },
        ]);
        if (data.model) setUsedModel(data.model);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to get response");
      } finally {
        setLoading(false);
      }
    },
    [messages, loading]
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  const showSuggestions = messages.length === 0 && !loading;

  return (
    <>
      {/* ── Chat window ──────────────────────────────────────────────────── */}
      <div
        className={`chatbot-window ${open ? "chatbot-window-open" : "chatbot-window-closed"}`}
        role="dialog"
        aria-label="Wayan Phantom AI Chat"
        aria-modal="true"
      >
        {/* Header */}
        <div className="chatbot-header">
          <div className="chatbot-header-info">
            <div className="chatbot-header-avatar" aria-hidden="true">WP</div>
            <div>
              <p className="chatbot-header-name">Wayan Phantom Bot</p>
              <p className="chatbot-header-sub">Ask me anything about Wayan</p>
            </div>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="chatbot-close-btn"
            aria-label="Close chat"
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Messages area */}
        <div className="chatbot-messages" role="log" aria-live="polite">
          {/* Welcome */}
          {messages.length === 0 && (
            <div className="chatbot-welcome">
              <div className="chatbot-welcome-avatar" aria-hidden="true">WP</div>
              <p className="chatbot-welcome-title">Hi! I&apos;m Wayan Phantom Bot 👋</p>
              <p className="chatbot-welcome-sub">
                Ask me anything about Wayan&apos;s skills, experience, projects, or availability.
              </p>
            </div>
          )}

          {/* Suggestion chips */}
          {showSuggestions && (
            <div className="chatbot-suggestions" role="list">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  role="listitem"
                  className="chatbot-suggestion-chip"
                  onClick={() => sendMessage(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Message bubbles */}
          {messages.map((msg, i) => (
            <Bubble key={i} msg={msg} />
          ))}

          {/* Typing indicator */}
          {loading && (
            <div className="chatbot-bubble-row chatbot-bubble-row-bot">
              <div className="chatbot-avatar" aria-hidden="true">WP</div>
              <div className="chatbot-bubble chatbot-bubble-bot">
                <TypingDots />
              </div>
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="chatbot-error" role="alert">
              ⚠️ {error}
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Model badge */}
        {usedModel && (
          <div className="chatbot-model-badge" aria-label={`Powered by ${usedModel}`}>
            ✦ {usedModel}
          </div>
        )}

        {/* Input area */}
        <div className="chatbot-input-area">
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about Wayan…"
            className="chatbot-input"
            rows={1}
            disabled={loading}
            aria-label="Chat message"
          />
          <button
            onClick={() => sendMessage(input)}
            disabled={loading || !input.trim()}
            className="chatbot-send-btn"
            aria-label="Send message"
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
          </button>
        </div>
      </div>

      {/* ── Floating trigger button + animations ─────────────────────────── */}
      <div className="chatbot-fab-wrap">
        {/* Tooltip bubble */}
        {!open && showTooltip && (
          <div className="chatbot-tooltip" role="status">
            <span>Ask me anything 👋</span>
            <button
              className="chatbot-tooltip-close"
              aria-label="Dismiss"
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(false);
                setTooltipDismissed(true);
              }}
            >
              ×
            </button>
          </div>
        )}

        {/* Pulse rings — only when closed */}
        {!open && (
          <>
            <span className="chatbot-pulse chatbot-pulse-1" aria-hidden="true" />
            <span className="chatbot-pulse chatbot-pulse-2" aria-hidden="true" />
          </>
        )}

        <button
          onClick={() => {
            setOpen((v) => !v);
            setShowTooltip(false);
            setTooltipDismissed(true);
          }}
          className={`chatbot-fab ${open ? "chatbot-fab-active" : ""}`}
          aria-label={open ? "Close chat" : "Open Wayan Phantom Bot"}
          aria-expanded={open}
        >
          {open ? (
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
            </svg>
          )}
        </button>
      </div>
    </>
  );
}
