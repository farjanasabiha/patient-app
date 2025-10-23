export interface TimeOption {
    value: string;
    label: string;
}

export function generateTimeOptions(intervalMinutes: number = 15): TimeOption[] {
    const intervalsPerHour = 60 / intervalMinutes;
    const totalIntervals = 24 * intervalsPerHour;

    return Array.from({ length: totalIntervals }, (_, i) => {
        const hour = Math.floor(i / intervalsPerHour);
        const minute = (i % intervalsPerHour) * intervalMinutes;
        const period = hour >= 12 ? "PM" : "AM";
        const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;

        return {
            value: `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`,
            label: `${displayHour}:${minute.toString().padStart(2, "0")} ${period}`,
        };
    });
}

/**
 * Format a date for single day view
 * @param date The date to format
 * @returns Formatted date string like "November 25, 2024"
 */
export function formatDayDate(date: Date): string {
    return date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });
}

/**
 * Format date range for week view
 * @param startDate The start date of the week
 * @param endDate The end date of the week
 * @returns Formatted date range string like "November 25 - December 1, 2024"
 */
export function formatWeekDateRange(startDate: Date, endDate: Date): string {
    const startFormatted = startDate.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
    });

    const endFormatted = endDate.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });

    return `${startFormatted} - ${endFormatted}`;
}

/**
 * Format a date in MM/DD/YYYY format
 * @param date The date to format
 * @returns Formatted date string like "11/25/2024"
 */
export function formatShortDate(date: Date): string {
    return date.toLocaleDateString("en-US", {
        month: "numeric",
        day: "numeric",
        year: "numeric",
    });
}

/**
 * Get the start date of a week (Monday) for a given date
 * @param date The reference date
 * @returns Date object for the Monday of the week
 */
export function getWeekStartDate(date: Date): Date {
    const day = date.getDay();
    // If Sunday (0), go back 6 days to previous Monday
    // Otherwise go back (day - 1) days
    const diff = day === 0 ? 6 : day - 1;
    const monday = new Date(date);
    monday.setDate(date.getDate() - diff);
    return monday;
}

/**
 * Get the end date of a week (Sunday) for a given date
 * @param date The reference date
 * @returns Date object for the Sunday of the week
 */
export function getWeekEndDate(date: Date): Date {
    const startDate = getWeekStartDate(date);
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 6);
    return endDate;
} 