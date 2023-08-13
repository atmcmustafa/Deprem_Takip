import { useContext } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);
  return (
    <div className="w-full px-6 sm:px-0 bg-zinc-200 py-8 dark:bg-slate-800 dark:text-white">
      <div className="flex justify-between max-w-xl mx-auto w-full">
        <h1 className="text-3xl  w-full ">Son 100 Deprem</h1>
        <button onClick={toggleTheme}>
          {theme === "dark" ? (
            <BsFillSunFill size={24} />
          ) : (
            <BsFillMoonStarsFill size={24} />
          )}
        </button>
      </div>
    </div>
  );
};

export default Header;
