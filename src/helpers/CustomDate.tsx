const date = new Date();

const day = date.getDate();
const month = date.getMonth() + 1; // getMonth() returns month from 0 to 11
const year = date.getFullYear();
const monthName = date.toLocaleString('default', { month: 'long' });

const now = date;
const start = new Date(now.getFullYear(), 0, 0);
const diff = now.valueOf() - start.valueOf();
const oneDay = 1000 * 60 * 60 * 24;
const dayOfTheYear = Math.floor(diff / oneDay);
const dayName = now.toLocaleString('en-us', { weekday: 'long' });
const shortDayName = now.toLocaleString('en-us', { weekday: 'short' });

export { day, month, year, monthName, dayOfTheYear, dayName, shortDayName };
