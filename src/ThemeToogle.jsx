import { useGlobalContext } from './context';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
const ThemeToogle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();
  return (
    <section className="toggle-container">
      <button className="dark-toggle" onClick={toggleDarkTheme}>
        {isDarkTheme ? (
          <MdDarkMode className="toggle-icon" />
        ) : (
          <MdLightMode className="toggle-icon" />
        )}
      </button>
    </section>
  );
};
export default ThemeToogle;
