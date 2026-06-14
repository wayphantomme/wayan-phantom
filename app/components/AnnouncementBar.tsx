export default function AnnouncementBar() {
  return (
    <div
      id="announcement-bar"
      className="w-full bg-[#F3F4F6] py-2 px-4"
      role="banner"
      aria-label="Site announcement"
    >
      <p className="text-center text-sm font-medium text-slate-600 tracking-tight">
        🔥 Q3 2026 Development Slots Now Open.{" "}
        <span className="font-semibold text-[#111111]">
          Only 2 slots remaining for this quarter.
        </span>{" "}
        <a
          href="#contact"
          className="underline underline-offset-2 hover:text-[#111111] transition-colors duration-200 ml-1"
        >
          Secure yours →
        </a>
      </p>
    </div>
  );
}
