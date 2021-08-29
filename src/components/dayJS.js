// const dayjs = require("dayjs");
// require("dayjs/locale/ru");
// dayjs.locale("ru");
import dayjs from "dayjs";
import ruLocale from "dayjs/locale/ru";
dayjs.locale(ruLocale);

export function getNameMonth(monthNumber = 1) {
  return dayjs(`1970-${monthNumber}-1`).format("MMMM");
}
export function getDaysInMonth(year = 1970, monthNumber = 1) {
  return dayjs(`${year}-${monthNumber + 1}-1`).daysInMonth();
}
export function getActYear() {
  return dayjs().year();
}
