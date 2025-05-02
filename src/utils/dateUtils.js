// @ts-nocheck
export function groupByMonth(data) {
    const result = {};

    for (const entry of data) {
        const date = new Date(entry.date);
        if (isNaN(date)) continue;

        const key = `${date.getFullYear()}-${(date.getMonth() + 1)
            .toString()
            .padStart(2, '0')}`; // e.g., 2025-04

        if (!result[key]) {
            result[key] = [];
        }
        result[key].push(entry);
    }

    return result;
}
