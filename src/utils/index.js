export const converterCels = (temp) => {
  return (((temp - 32) * 5) / 9).toFixed(1);
};

export const converterDate = (string) => {
  // Функция для преобразования даты
  const date = new Date(string); // Создаем объект Date из строки

  // Массивы для дней недели и месяцев
  const daysOfWeek = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];
  const months = [
    "Января",
    "Февраля",
    "Марта",
    "Апреля",
    "Мая",
    "Июня",
    "Июля",
    "Августа",
    "Сентября",
    "Октября",
    "Ноября",
    "Декабря",
  ];

  // Получаем день недели и месяц
  const dayOfWeek = daysOfWeek[date.getDay()]; // getDay() возвращает индекс дня недели
  const day = String(date.getDate()).padStart(2, "0"); // getDate() возвращает день месяца
  const month = months[date.getMonth()]; // getMonth() возвращает индекс месяца

  // Возвращаем отформатированную строку
  return `${dayOfWeek}, ${day} ${month}`;
};