function calculate(operation) {
    const num1 = document.getElementById("num1").value.trim();
    const num2 = document.getElementById("num2").value.trim();
    const resultField = document.getElementById("result");

    // Перевірка пустих полів
    if (!num1 || !num2) {
        resultField.textContent = "Результат: Введіть обидва числа!";
        return;
    }

    const a = parseFloat(num1);
    const b = parseFloat(num2);

    // Перевірка неправильних даних
    if (isNaN(a) || isNaN(b)) {
        resultField.textContent = "Результат: Ви ввели некоректні дані!";
        return;
    }

    let result;

    switch (operation) {
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;
        case "*":
            result = a * b;
            break;
        case "/":
            if (b === 0) {
                resultField.textContent = "Результат: На нуль ділити не можна!";
                return;
            }
            result = (a / b).toFixed(2);
            break;
        default:
            result = "Невідома операція";
            break;
    }

    resultField.textContent = `Результат: ${result}`;
}
