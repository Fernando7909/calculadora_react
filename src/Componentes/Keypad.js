import React from 'react';
import '../styles/Keypad.css';

function Keypad({ handleClick }) {
  // Lista de botones de la calculadora organizada por columnas
  const buttons = [
    'C', '7', '8', '9', '+',  // Primera fila
    '4', '5', '6', '-',       // Segunda fila
    '1', '2', '3', '*',       // Tercera fila
    '0', '.', '=', '/',       // Cuarta fila
  ];

  // Define los botones que son operadores
  const operatorButtons = ['+', '-', '*', '/', '='];

  return (
    <div className="keypad">
      {buttons.map((btn, index) => (
        <button 
          key={index} 
          onClick={() => handleClick(btn)}
          // Aplica una clase diferente si es un operador o el botón "C"
          className={
            btn === 'C' ? 'clear' : 
            operatorButtons.includes(btn) ? 'operator' : ''
          }
        >
          {btn}
        </button>
      ))}
    </div>
  );
}

export default Keypad;
