export const getDateAndTime = (dateTimeString: string) => {
    const dateTime = new Date(dateTimeString);
    return {
        date: `${dateTime.getFullYear()}-${dateTime.getMonth() + 1}-${dateTime.getDate()}`,
        time: `${dateTime.getHours()}:${dateTime.getMinutes()}`
    };
}