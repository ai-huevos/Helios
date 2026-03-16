import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Utility function to merge Tailwind CSS classes
 * Combines clsx (conditional classes) with tailwind-merge (deduplication)
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
