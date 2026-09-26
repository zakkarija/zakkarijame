/** "2021–2026", or "2026–now" while an entry is current. */
export function formatPeriod(start: number, end: number | null): string {
  if (end === start) return String(start);
  return `${start}–${end ?? "now"}`;
}

/** "13 August 2025" from an ISO date string. */
export function formatPostDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

/** The current moment as a fractional year, e.g. 2026.73, for placing "now" on an axis. */
export function fractionalYear(date: Date = new Date()): number {
  const year = date.getUTCFullYear();
  const start = Date.UTC(year, 0, 1);
  const end = Date.UTC(year + 1, 0, 1);
  return year + (date.getTime() - start) / (end - start);
}
