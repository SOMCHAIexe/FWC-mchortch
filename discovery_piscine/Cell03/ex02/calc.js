// 1. Select DOM Elements
const leftInput = document.getElementById('leftOperand');
const operatorSelect = document.getElementById('operator');
const rightInput = document.getElementById('rightOperand');
const submitBtn = document.getElementById('submitBtn');

// Validation helper: checks if string contains ONLY digits (0 or positive integers)
function isNonNegativeInteger(str) {
    return /^\d+$/.test(str);
}

// 2. Main Calculation Function
function calculate() {
    const leftVal = leftInput.value.trim();
    const rightVal = rightInput.value.trim();
    const op = operatorSelect.value;

    // Validation Check 1: Must be positive integers (>= 0)
    if (!isNonNegativeInteger(leftVal) || !isNonNegativeInteger(rightVal)) {
        alert('Error :(');
        return;
    }

    const leftNum = parseInt(leftVal, 10);
    const rightNum = parseInt(rightVal, 10);

    // Validation Check 2: Prevent Division and Modulo by Zero
    if ((op === '/' || op === '%') && rightNum === 0) {
        alert("It's over 9000!");
        console.log("It's over 9000!");
        return;
    }

    // Step 3: Perform calculation
    let result;
    switch (op) {
        case '+':
            result = leftNum + rightNum;
            break;
        case '-':
            result = leftNum - rightNum;
            break;
        case '*':
            result = leftNum * rightNum;
            break;
        case '/':
            result = leftNum / rightNum;
            break;
        case '%':
            result = leftNum % rightNum;
            break;
    }

    // Step 4: Output result to both alert and console
    alert(result);
    console.log(result);
}

// 3. Attach click event listener
submitBtn.addEventListener('click', calculate);

// 4. Timer: Display alert popup every 30 seconds (30,000 milliseconds)
setInterval(function() {
    alert('Please, use me...');
}, 30000);