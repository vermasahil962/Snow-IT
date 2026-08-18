/**
 * Utility functions for dynamically calculating and formatting upcoming batch dates.
 * Rule: Always calculate and show the 2nd Next Monday for live batch schedules.
 */

/**
 * Calculates the date of the 2nd Next Monday from the given reference date (defaults to today).
 * 
 * Logic:
 * Day 0 = Sunday, 1 = Monday, 2 = Tuesday, 3 = Wednesday, 4 = Thursday, 5 = Friday, 6 = Saturday
 * Days to 1st next Monday:
 *   If Sunday (0)   -> 1 day
 *   If Monday (1)   -> 7 days (next Monday)
 *   If Tuesday (2)  -> 6 days
 *   If Wednesday (3)-> 5 days
 *   If Thursday (4) -> 4 days
 *   If Friday (5)   -> 3 days
 *   If Saturday (6) -> 2 days
 * Formula for 1st Monday: ((1 - day + 7) % 7) || 7
 * Formula for 2nd Next Monday: daysTo1stMonday + 7
 */
export function getSecondNextMonday(baseDate: Date = new Date()): Date {
  const date = new Date(baseDate);
  const day = date.getDay();
  const daysToFirstMonday = ((1 - day + 7) % 7) || 7;
  const daysToSecondMonday = daysToFirstMonday + 7;
  
  date.setDate(date.getDate() + daysToSecondMonday);
  return date;
}

/**
 * Calculates the date of the 2nd Next Saturday (for weekend batches).
 */
export function getSecondNextSaturday(baseDate: Date = new Date()): Date {
  const date = new Date(baseDate);
  const day = date.getDay();
  const daysToFirstSaturday = ((6 - day + 7) % 7) || 7;
  const daysToSecondSaturday = daysToFirstSaturday + 7;
  
  date.setDate(date.getDate() + daysToSecondSaturday);
  return date;
}

/**
 * Returns the ordinal suffix for a day number (e.g. 1st, 2nd, 3rd, 4th, 31st).
 */
function getOrdinalSuffix(day: number): string {
  if (day > 3 && day < 21) return 'th';
  switch (day % 10) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
}

/**
 * Formats the 2nd Next Monday into clean display strings for UI components.
 * 
 * Examples (assuming 2nd next Monday is Aug 31):
 * - 'full': "Monday, 31st August 2026"
 * - 'standard': "Monday, 31st August"
 * - 'short': "31 Aug 2026"
 * - 'dayMonth': "Monday, 31 Aug"
 * - 'badge': "Starts Mon, 31 Aug"
 * - 'dropdown': "Upcoming Batch (Monday, 31 Aug)"
 */
export function getFormattedBatchDate(
  format: 'full' | 'standard' | 'short' | 'dayMonth' | 'badge' | 'dropdown' = 'standard',
  baseDate: Date = new Date()
): string {
  const d = getSecondNextMonday(baseDate);
  const day = d.getDate();
  const dayName = d.toLocaleDateString('en-US', { weekday: 'long' });
  const shortDayName = d.toLocaleDateString('en-US', { weekday: 'short' });
  const monthName = d.toLocaleDateString('en-US', { month: 'long' });
  const shortMonthName = d.toLocaleDateString('en-US', { month: 'short' });
  const year = d.getFullYear();
  const ordinal = getOrdinalSuffix(day);

  switch (format) {
    case 'full':
      return `${dayName}, ${day}${ordinal} ${monthName} ${year}`;
    case 'short':
      return `${day} ${shortMonthName} ${year}`;
    case 'dayMonth':
      return `${dayName}, ${day} ${shortMonthName}`;
    case 'badge':
      return `Starts Mon, ${day} ${shortMonthName}`;
    case 'dropdown':
      return `Upcoming Batch (${dayName}, ${day} ${shortMonthName})`;
    case 'standard':
    default:
      return `${dayName}, ${day}${ordinal} ${monthName}`;
  }
}

/**
 * Formats the 2nd Next Saturday for weekend-specific batches.
 */
export function getFormattedWeekendBatchDate(
  format: 'full' | 'standard' | 'short' | 'dayMonth' | 'badge' = 'standard',
  baseDate: Date = new Date()
): string {
  const d = getSecondNextSaturday(baseDate);
  const day = d.getDate();
  const dayName = d.toLocaleDateString('en-US', { weekday: 'long' });
  const shortDayName = d.toLocaleDateString('en-US', { weekday: 'short' });
  const monthName = d.toLocaleDateString('en-US', { month: 'long' });
  const shortMonthName = d.toLocaleDateString('en-US', { month: 'short' });
  const year = d.getFullYear();
  const ordinal = getOrdinalSuffix(day);

  switch (format) {
    case 'full':
      return `${dayName}, ${day}${ordinal} ${monthName} ${year}`;
    case 'short':
      return `${day} ${shortMonthName} ${year}`;
    case 'dayMonth':
      return `${dayName}, ${day} ${shortMonthName}`;
    case 'badge':
      return `Starts Sat, ${day} ${shortMonthName}`;
    case 'standard':
    default:
      return `${dayName}, ${day}${ordinal} ${monthName}`;
  }
}
