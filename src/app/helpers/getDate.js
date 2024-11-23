export const getDate = () => {
  const date = new Date();
  function getCurrentDate() {
    const formattedDate = new Intl.DateTimeFormat("ru-RU", {
      weekday: "long", // день недели (например, "Суббота")
      day: "numeric", // день месяца (например, "23")
      month: "long", // месяц (например, "ноября")
    }).format(date);

    const newDate = formattedDate.slice(0, 1).toUpperCase() + formattedDate.slice(1);
    return newDate;
  }

  function getWeekDay() {
    const daysArray = [];

    for (let i = 1; i <= 6; i++) {
      const newDate = new Date(date);
      newDate.setDate(date.getDate() + i);
      daysArray.push(newDate);
    }

    const formattedDays = daysArray.map(item => {
      return new Intl.DateTimeFormat("ru-RU", {
        weekday: "long", // день недели (например, "Суббота")
        day: "numeric", // день месяца (например, "23")
        month: "long", // месяц (например, "ноября")
      }).format(item)
    })
    return formattedDays;
  }

  function getCurrentTime() {
    const now = new Date(); // Получаем текущую дату и время

    const hours = String(now.getHours()).padStart(2, "0"); // Получаем часы и добавляем ведущий ноль, если необходимо
    const minutes = String(now.getMinutes()).padStart(2, "0"); // Получаем минуты и добавляем ведущий ноль, если необходимо

    return `${hours}:${minutes}`; // Возвращаем строку в формате 00:00
  }
  return {
    getCurrentDate,
    getCurrentTime,
    getWeekDay
  };
};
