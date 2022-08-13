import './App.css';
import * as React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderRow from './components/header-row';

function App() {
  const [darkMode, setDarkMode] = React.useState(false);

  const handleModeChange = () => {
    setDarkMode(mode => !mode);
  }

  return (
    <div className={`App ${darkMode ? 'dark' : 'light'}-mode`}>
      <HeaderRow mode={darkMode} modeChangeHandler={handleModeChange} />
      <Outlet />
    </div>
  );
};

export default App;
