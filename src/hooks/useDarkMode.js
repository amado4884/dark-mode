import useLocalStorage from "./useLocalStorage";

const useDarkMode = (enabled) => {
  const [darkMode, setDarkMode] = useLocalStorage("dark-mode", enabled);
  return [darkMode, setDarkMode];
};

export default useDarkMode;
