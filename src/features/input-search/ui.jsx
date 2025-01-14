import { useDispatch } from "react-redux";
import { setWeekCity } from "../../app/store/reducers/weatherWeekSlice";
import { setTodayCity } from "../../app/store/reducers/weatherTodaySlice";

import "./index.css";

export const InputSearch = () => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(setWeekCity(e.target.value));
    dispatch(setTodayCity(e.target.value));
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Поиск по городу"
        onChange={handleChange}
      />
    </div>
  );
};
