// ==============================
// Task 1 : Even or Odd
// ==============================

function checkEvenOdd() {

    let number = Number(document.getElementById("evenOddInput").value);

    let result = document.getElementById("evenOddResult");

    if (number % 2 === 0) {
        result.innerHTML = "✅ Even Number";
    } else {
        result.innerHTML = "✅ Odd Number";
    }

}

// ==============================
// Task 2 : Positive Negative Zero
// ==============================

function checkPNZ() {

    let number = Number(document.getElementById("pnzInput").value);

    let result = document.getElementById("pnzResult");

    if (number > 0) {
        result.innerHTML = "✅ Positive Number";
    }
    else if (number < 0) {
        result.innerHTML = "✅ Negative Number";
    }
    else {
        result.innerHTML = "✅ Zero";
    }

}

// ==============================
// Task 3 : Largest Number
// ==============================

function largestNumber() {

    let first = Number(document.getElementById("num1").value);

    let second = Number(document.getElementById("num2").value);

    let result = document.getElementById("largestResult");

    if (first > second) {
        result.innerHTML = first + " is Largest";
    }
    else if (second > first) {
        result.innerHTML = second + " is Largest";
    }
    else {
        result.innerHTML = "Both numbers are Equal";
    }

}

// ==============================
// Task 4 : Leap Year
// ==============================

function checkLeapYear() {

    let year = Number(document.getElementById("leapYear").value);

    let result = document.getElementById("leapResult");

    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        result.innerHTML = year + " is Leap Year";
    }
    else {
        result.innerHTML = year + " is Not Leap Year";
    }

}

// ==============================
// Task 5 : Voting Eligibility
// ==============================

function checkVoting() {

    let age = Number(document.getElementById("age").value);

    let result = document.getElementById("voteResult");

    if (age >= 18) {
        result.innerHTML = "✅ Eligible to Vote";
    }
    else {
        result.innerHTML = "❌ Not Eligible to Vote";
    }

}

// ==============================
// Task 6 : Calculator
// ==============================

function calculator() {

    let num1 = Number(document.getElementById("calNum1").value);

    let num2 = Number(document.getElementById("calNum2").value);

    let operator = document.getElementById("operator").value;

    let result = document.getElementById("calResult");

    let answer;

    switch (operator) {

        case "+":
            answer = num1 + num2;
            break;

        case "-":
            answer = num1 - num2;
            break;

        case "*":
            answer = num1 * num2;
            break;

        case "/":
            if (num2 == 0) {
                result.innerHTML = "Cannot Divide by Zero";
                return;
            }
            answer = num1 / num2;
            break;

    }

    result.innerHTML = "Answer = " + answer;

}

// ==============================
// Task 7 : Grade Calculator
// ==============================

function calculateGrade() {

    let marks = Number(document.getElementById("marks").value);

    let result = document.getElementById("gradeResult");

    if (marks >= 90) {
        result.innerHTML = "Grade A+";
    }
    else if (marks >= 80) {
        result.innerHTML = "Grade A";
    }
    else if (marks >= 70) {
        result.innerHTML = "Grade B";
    }
    else if (marks >= 60) {
        result.innerHTML = "Grade C";
    }
    else if (marks >= 50) {
        result.innerHTML = "Grade D";
    }
    else {
        result.innerHTML = "Fail";
    }

}

// ==============================
// Task 8 : Multiplication Table
// ==============================

function multiplicationTable() {

    let number = Number(document.getElementById("tableNumber").value);

    let output = "";

    for (let i = 1; i <= 10; i++) {

        output += number + " × " + i + " = " + (number * i) + "<br>";

    }

    document.getElementById("tableResult").innerHTML = output;

}

// ==============================
// Task 9 : Factorial
// ==============================

function factorial() {

    let number = Number(document.getElementById("factorialNumber").value);

    let result = 1;

    for (let i = 1; i <= number; i++) {

        result = result * i;

    }

    document.getElementById("factorialResult").innerHTML =
        "Factorial = " + result;

}

// ==============================
// Task 10 : Prime Number
// ==============================

function primeNumber() {

    let number = Number(document.getElementById("primeNumber").value);

    let result = document.getElementById("primeResult");

    if (number <= 1) {

        result.innerHTML = "Not a Prime Number";

        return;

    }

    for (let i = 2; i < number; i++) {

        if (number % i === 0) {

            result.innerHTML = "Not a Prime Number";

            return;

        }

    }

    result.innerHTML = "Prime Number";

}