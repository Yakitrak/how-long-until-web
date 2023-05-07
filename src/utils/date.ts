export const isValidDate = (stringDate: string) => {
    const date = new Date(stringDate);
    return !isNaN(date.getTime());
}

export const isValidISODate = (stringDate: string) => {
    const date = new Date(stringDate);
    return date.toISOString() === stringDate;
}

export const isDateInFuture = (stringDate: string) => {

}

export const getFormattedDateTime = (date: Date) => {
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
}