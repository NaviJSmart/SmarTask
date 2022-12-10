import React from "react";
import useLocalStorage from "use-local-storage";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { setTheme } from "../../store/reducers/themeReducer";
import "./InputToggle.scss";

const InputToggle = () => {
  const [isChecked, setIsChecked] = useLocalStorage("isChecked", false);
  const theme = useAppSelector((state) => state.colorTheme);
  const dispatch = useAppDispatch();

  // function getChecked () {
  //   if(localStorage.getItem('isChecked')) {
  //     return JSON.parse(localStorage.getItem('isChecked') || '')
  //   } else {
  //     return false
  //   }
  // }

  React.useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
    localStorage.setItem("isChecked", JSON.stringify(isChecked));
    const next = isChecked ? "dark" : "light";
    dispatch(setTheme(next));
  }, [theme, isChecked, dispatch]);

  return (
    <div className="InputToggle">
      <input
        type="checkbox"
        id="toggle-button"
        className="toggle-button"
        onChange={() => setIsChecked(!isChecked)}
        checked={isChecked}
      />
    </div>
  );
};

export default InputToggle;
