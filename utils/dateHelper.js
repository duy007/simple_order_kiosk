export const dateISO8601String = (date) => {
    return `${date.getUTCFullYear()}:${(date.getUTCMonth() < 9) ? "0" + (date.getUTCMonth() + 1) : date.getUTCMonth() + 1}:${date.getUTCDate()} ${date.getUTCHours()}:${date.getUTCMinutes()}:${date.getUTCSeconds()}`;
}