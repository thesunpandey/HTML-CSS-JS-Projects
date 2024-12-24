document.addEventListener("DOMContentLoaded", () => {
    const screen = document.getElementById("screen");
    const buttons = document.querySelectorAll(".btn");
    const clearButton = document.getElementById("clear");
    const equalButton = document.getElementById("equal");

    let currentInput = "";

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const value = button.getAttribute("data-value");
            currentInput += value;
            screen.value = currentInput;
        });
    });

    clearButton.addEventListener("click", () => {
        currentInput = "";
        screen.value = "";
    });

    equalButton.addEventListener("click", () => {
        try {
            currentInput = eval(currentInput).toString();
            screen.value = currentInput;
        } catch {
            screen.value = "Error";
            currentInput = "";
        }
    });
});