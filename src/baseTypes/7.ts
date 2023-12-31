/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Weekend {
  Saturday = "saturday",
  Sunday = "sunday",
}

function isWeekend(day: string): boolean {
  switch (day.toLowerCase()) {
    case Weekend.Saturday:
      return true;
      break;
    case Weekend.Sunday:
      return true;
      break;
    default:
      return false;
      break;
  }
}
