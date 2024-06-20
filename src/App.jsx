import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

  function App()  {
    let [result, setresult] = useState("0");
    function clearDisplay() {
      setresult("0");
    }
    function appendCharacter(character) {
      if (result === "0" && character !== "." || result === "Error") {
        setresult(character);
      } 
      else {
        setresult((prevResult) => prevResult + character);
      }
    }
  
    function calculateResult() {
      try {
        setresult(eval(result));
      } catch (error) {
        setresult("Error");
      }
    }
  return (
    <>
    <div className="main">
  <div className="first ">
    <p id="result">{result}</p>
    {/* <input type="text" value="0" id="result"> */}
  </div>
  <div className="second">
    <table>
      <tbody>
        <tr>
          <td>
           
            <button value="+" onClick={() => appendCharacter('+')}>
              +
            </button>
          </td>
          <td>
            {" "}
            <button value="-" onClick={() => appendCharacter('-')}>
              -
            </button>
          </td>
          <td>
            {" "}
            <button value="*" onClick={() => appendCharacter('*')}>
              *
            </button>
          </td>
          <td>
            {" "}
            <button value="/" onClick={() => appendCharacter('/')}>
              /
            </button>
          </td>
        </tr>
        <tr>
          <td>
            {" "}
            <button value={7} onClick={()=>appendCharacter('7')}>
              7
            </button>
          </td>
          <td>
            {" "}
            <button value={8} onClick={()=>appendCharacter('8')}>
              8
            </button>
          </td>
          <td>
            {" "}
            <button value={9} onClick={()=>appendCharacter('9')}>
              9
            </button>
          </td>
          <td rowSpan={3}>
            {" "}
            <button className="equal"  onClick={()=>calculateResult('=')}>
              =
            </button>
          </td>
        </tr>
        <tr>
          <td>
            {" "}
            <button value={4} onClick={()=>appendCharacter('4')}>
              4
            </button>
          </td>
          <td>
            {" "}
            <button value={5} onClick={()=>appendCharacter('5')}>
              5
            </button>
          </td>
          <td>
            {" "}
            <button value={6} onClick={()=>appendCharacter('6')}>
              6
            </button>
          </td>
        </tr>
        <tr>
          <td>
            {" "}
            <button value={1} onClick={()=>appendCharacter('1')}>
              1
            </button>
          </td>
          <td>
            {" "}
            <button value={2} onClick={()=>appendCharacter('2')}>
              2
            </button>
          </td>
          <td>
            {" "}
            <button value={3} onClick={()=>appendCharacter('3')}>
              3
            </button>
          </td>
        </tr>
        <tr>
          <td>
            {" "}
            <button value={0} onClick={()=>appendCharacter('0')}>
              0
            </button>
          </td>
          <td>
            {" "}
            <button value="." onClick={()=>appendCharacter('.')}>
              .
            </button>
          </td>
          <td>
            {" "}
            <button onClick={()=>clearDisplay()}>C</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

    </>
  )
}

export default App
