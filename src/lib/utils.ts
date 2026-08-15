import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function whatsappUrl(message?: string) {
  const base = "https://wa.me/919971627900";
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
