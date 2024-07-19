import { FiSun, FiMoon } from 'react-icons/fi';

const Header = ({
  darkMode,
  setDarkMode,
}: {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}) => {
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header className="p-4 flex items-center sticky top-0 backdrop-blur shadow text-slate-700 bg-slate-800/20 dark:bg-slate-900/90 dark:text-slate-300">
      <div className="flex items-center">
        <div className="rounded-full border-4 mr-2">
          <span className="text-sm font-extrabold py-1 px-2">F</span>
        </div>
        <span className="text-xl font-bold">Filmapp</span>
      </div>
      <div className="ml-auto flex items-center">
        <button onClick={toggleDarkMode} className="text-xl mr-2 bg-slate-800 dark:bg-blue-500 rounded-full p-2">
          {darkMode ? <FiSun className='text-white' /> : <FiMoon className="text-white" />}
        </button>
      </div>
    </header>
  );
};

export default Header;
