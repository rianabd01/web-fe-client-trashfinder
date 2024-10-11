import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function saveToSessionStorage(name: string, value: string) {
  try {
    sessionStorage.setItem(name, value);
  } catch (e) {
    console.error(e);
  }
}
