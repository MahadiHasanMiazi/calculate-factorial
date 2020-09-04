import React, {useState} from 'react';
import './App.css';

function App() {
  const [factorialNumber, setFactorialNumber] = useState(0);
  const [inputValue, setInputValue] = useState(0);

  const factorial = (n) => {
    if(n < 0) {
      return 'Number must be > or = to 0'
    }
    if(n == 0) {
      return 1;
    }
    return n * factorial(n-1);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value)
  };

  return (
    <div className="App">
        <h1>Factorial Calculator</h1>
        <form>
          <input type="number" placeholder="Enter a number..." onChange={handleChange}/>
          <br /> <br />
          <button type="button" onClick={() => setFactorialNumber(factorial(inputValue))}>Calculate Factorial</button>
        </form>
        <h2>Factorial: {factorialNumber}</h2>
    </div>
  );
}

export default App;
