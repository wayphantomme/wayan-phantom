"use client";

import Image from "next/image";

type CloudinaryImageProps = {
  src: string; // The public ID or path to the asset in Cloudinary
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
};

export default function CloudinaryImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
}: CloudinaryImageProps) {
  // Pull cloud name from environment variables safely
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

  if (!cloudName) {
    console.error(
      "NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME is not set in environment variables."
    );
    return null;
  }

  // Construct the Cloudinary URL
  // If the src is already a full URL, we can just use it, otherwise build it
  const isUrl = src.startsWith("http://") || src.startsWith("https://");
  const imageUrl = isUrl
    ? src
    : `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto/${
        src.startsWith("/") ? src.slice(1) : src
      }`;

  return (
    <Image
      src={imageUrl}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
    />
  );
}
