// Grab the display element
const display = document.getElementById('display');

// Variable to hold the current expression
let currentExpression = '';

// Function to update the display
function updateDisplay(value) {
  display.textContent = value;
}

// Add event listeners to number buttons
document.querySelectorAll('[data-number]').forEach(button => {
  button.addEventListener('click', () => {
    // Append the number or decimal point to the expression
    currentExpression += button.getAttribute('data-number');
    updateDisplay(currentExpression);
  });
});

// Add event listeners to operator buttons
document.querySelectorAll('[data-operator]').forEach(button => {
  button.addEventListener('click', () => {
    // Prevent two operators in a row and allow negative numbers
    if (currentExpression === '' && button.getAttribute('data-operator') !== '-') {
      return;
    }
    const lastChar = currentExpression[currentExpression.length - 1];
    if (['+', '-', '*', '/'].includes(lastChar)) {
      // Replace the operator if the last character is already an operator
      currentExpression = currentExpression.slice(0, -1);
    }
    currentExpression += button.getAttribute('data-operator');
    updateDisplay(currentExpression);
  });
});

// Event listener for the clear button
document.getElementById('clear').addEventListener('click', () => {
  currentExpression = '';
  updateDisplay('0');
});

// Event listener for the backspace button
document.getElementById('backspace').addEventListener('click', () => {
  currentExpression = currentExpression.slice(0, -1);
  updateDisplay(currentExpression || '0');
});

// Event listener for the equals button to evaluate the expression
document.getElementById('equals').addEventListener('click', () => {
  try {
    // Evaluate the expression. In a real application, avoid using eval().
    const result = eval(currentExpression);
    updateDisplay(result);
    currentExpression = result.toString();
  } catch (error) {
    updateDisplay('Error');
    currentExpression = '';
  }
});
