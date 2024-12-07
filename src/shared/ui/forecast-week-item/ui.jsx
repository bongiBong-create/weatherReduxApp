import { IconWeather } from "../icon-weather/ui";
import "./index.css";
export const ForeCastWeekItem = ({ day }) => {

  return (
    <div className="forecast__week--item">
      <div className="forecast__week--item__day">{day.datetime}</div>
      <div className="forecast__week--item__temp">{day.temp}°</div>
      <div className="forecast__week--item__weather">
        <IconWeather weather={day.icon} />
      </div>
      <div className="forecast__week--item__feels">
        Ощущается как {day.feelslike}°
      </div>
    </div>
  );
};
