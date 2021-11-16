import { useState } from 'react';
import './App.scss';

function App() {
  const [value, setValue] = useState(399981);
  const [theme, setTheme] = useState(1);
  const [operator, setOperator] = useState();
  const [queue, setQueue] = useState();

  const handleClick = (input) => {
    console.log("TODO: calculate", input);
  };

  const handleThemeChange = (value) => {
    setTheme(+value);
  };

  return (
    <div className={`app theme${theme}`}>
      <div className="calculator-container">
        <header className="calculator-header">
            <div className="app-name">calc</div>
            <div className="theme-chooser">
                <span className="theme-chooser-label">THEME</span>
                <div className="theme-controls">
                  <div className="theme-options">
                    <span className="theme-label" onClick={() => handleThemeChange(1)}>1</span>
                    <span className="theme-label" onClick={() => handleThemeChange(2)}>2</span>
                    <span className="theme-label" onClick={() => handleThemeChange(3)}>3</span>
                  </div>
                  <input type="range" min="1" max="3" value={theme} onChange={(evt) => handleThemeChange(evt.target.value)} list="tickmarks" />
                </div>
            </div>
        </header>

        <div className="calculator-results">
          {value.toLocaleString()}
        </div>

        <div className="calculator-buttons">
          <button type="button" className="seven" onClick={() => handleClick(7)}>7</button>
          <button type="button" className="eight" onClick={() => handleClick(8)}>8</button>
          <button type="button" className="nine" onClick={() => handleClick(9)}>9</button>
          <button type="button" className="delete" onClick={() => handleClick('delete')}>DEL</button>
          <button type="button" className="four" onClick={() => handleClick(4)}>4</button>
          <button type="button" className="five" onClick={() => handleClick(5)}>5</button>
          <button type="button" className="six" onClick={() => handleClick(6)}>6</button>
          <button type="button" className="plus" onClick={() => handleClick('add')}>+</button>
          <button type="button" className="one" onClick={() => handleClick(1)}>1</button>
          <button type="button" className="two" onClick={() => handleClick(2)}>2</button>
          <button type="button" className="three" onClick={() => handleClick(3)}>3</button>
          <button type="button" className="minus" onClick={() => handleClick('subtract')}>-</button>
          <button type="button" className="period" onClick={() => handleClick('.')}>.</button>
          <button type="button" className="zero" onClick={() => handleClick(0)}>0</button>
          <button type="button" className="divide" onClick={() => handleClick('divide')}>/</button>
          <button type="button" className="multiply" onClick={() => handleClick('multiply')}>x</button>
          <button type="button" className="reset" onClick={() => handleClick('reset')}>RESET</button>
          <button type="button" className="equals" onClick={() => handleClick('equals')}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
