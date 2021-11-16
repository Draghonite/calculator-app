import { useState } from 'react';
import './App.scss';

function App() {
  const [value, setValue] = useState(399981);
  const [theme, setTheme] = useState(1);

  const handleClick = (evt) => {
    console.log("[handleClick]", evt);
  };

  const handleThemeChange = (evt) => {
    setTheme(+evt.target.value);
  };

  return (
    <div className={`app theme${theme}`}>
      {/* TODO: set theme dynamically */}
      <div className="calculator-container">
        <header className="calculator-header">
            <div className="app-name">calc</div>
            <div className="theme-chooser">
                <span className="theme-chooser-label">THEME</span>
                <div className="theme-controls">
                  <div className="theme-options">
                    <span className="theme-label">1</span>
                    <span className="theme-label">2</span>
                    <span className="theme-label">3</span>
                  </div>
                  <input type="range" min="1" max="3" value={theme} onChange={handleThemeChange} list="tickmarks" />
                </div>
            </div>
        </header>

        <div className="calculator-results">
          {value.toLocaleString()}
        </div>

        <div className="calculator-buttons">
          <button type="button" className="seven" onClick={handleClick}>7</button>
          <button type="button" className="eight" onClick={handleClick}>8</button>
          <button type="button" className="nine" onClick={handleClick}>9</button>
          <button type="button" className="delete" onClick={handleClick}>DEL</button>
          <button type="button" className="four" onClick={handleClick}>4</button>
          <button type="button" className="five" onClick={handleClick}>5</button>
          <button type="button" className="six" onClick={handleClick}>6</button>
          <button type="button" className="plus" onClick={handleClick}>+</button>
          <button type="button" className="one" onClick={handleClick}>1</button>
          <button type="button" className="two" onClick={handleClick}>2</button>
          <button type="button" className="three" onClick={handleClick}>3</button>
          <button type="button" className="minus" onClick={handleClick}>-</button>
          <button type="button" className="period" onClick={handleClick}>.</button>
          <button type="button" className="zero" onClick={handleClick}>0</button>
          <button type="button" className="divide" onClick={handleClick}>/</button>
          <button type="button" className="multiply" onClick={handleClick}>x</button>
          <button type="button" className="reset" onClick={handleClick}>RESET</button>
          <button type="button" className="equals" onClick={handleClick}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
