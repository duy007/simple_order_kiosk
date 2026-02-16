export const dateISO8601String = (date) => {
    return `${date.getFullYear()}-${(date.getMonth() < 9) ? "0" + (date.getMonth() + 1) : date.getMonth() + 1}-${addLeadingZero(date.getDate())} ${addLeadingZero(date.getHours())}:${addLeadingZero(date.getMinutes())}:${addLeadingZero(date.getSeconds())}`;
}

const addLeadingZero = (num) => {
    return (num < 10) ? `0${num}` : num;
}