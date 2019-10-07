$(document).ready(readyNow);

function readyNow() {
    $('#submitButton').on('click', appendInfo);
    $('#submitButton').on('click', calculateSalary);
    $('table').on('click', '.delete', deleteRow);
    $('table').on('click', '.delete', calculateSalary);
}

let employees = [];
let index = 0;

function appendInfo() {
    // grab all values from input fields
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let id = $('#id').val();
    let title = $('#title').val();
    let salary = $('#salary').val();
    let salaryCommas = addCommas(salary);
    // if any inputs are falsy (weren't entered), alert user and end function
    if (!firstName || !lastName || !id || !title || !salary) {
        alert('You missed an input...');
        return null;
    }
    // create and append string include a table row and six table data with all the input values and a button
    let infoString = $(`<tr><td>${firstName}</td><td>${lastName}</td><td class="idNumber">${id}</td><td>${title}</td><td>$${salaryCommas}</td><td><button class="delete">Delete</button></td></tr>`);
    $('.tableBody').append(infoString);
    // create object with input values and push it into employee array
    let newEmployeeObject = {
        firstName: firstName,
        lastName: lastName,
        id: id,
        title: title,
        salary: salary
    }
    employees.push(newEmployeeObject);

    // clear input fields
    $('#firstName').val('');
    $('#lastName').val('');
    $('#id').val('');
    $('#title').val('');
    $('#salary').val('');
}

// change this to check for employee number, so there can be no duplicates
function deleteRow() {
    // grab the name of the employee in the to-be-deleted to use for removeEmployee
    let id = $(this).parent().siblings('.idNumber').text();
    removeEmployee(employees, id);
    // remove the entire row from the table
    $(this).closest('tr').remove();
}

// loops through array of employees for a matching name, then splices the whole object
function removeEmployee(employeeArray, id) {
    for (i = 0; i < employeeArray.length; i++) {
        if (employeeArray[i].id == id) {
            employees.splice(i, 1);
        }
    }
}

// calculates monthly salary for all employees
// change back-ground color to red if monthlySalary exceeds 20k
// updates text on DOM with updated monthlySalary
function calculateSalary() {
    let monthlySalary = 0;
    let employeeArray = employees;

    for (let i = 0; i < employeeArray.length; i++) {
        monthlySalary += Number(employeeArray[i].salary);
    }

    monthlySalary /= 12;
    monthlySalary = roundToDollar(monthlySalary);
    $('h2').remove();
    $('.totalMonthly').append('<h2>Total Monthly Salary: $' + addCommas(monthlySalary) + '<br><span id="note">(rounded to the nearest dollar)</span></h2>')

    if (monthlySalary >= 20000) {
        $('h2').css('background-color', 'red');
    }
}

function addCommas(number) {
    let originalString = String(number);
    let stringLength = originalString;
    let newString = '';

    for (let i = 1; i < stringLength.length + 1; i++) {
        // grab the last number of the string
        // concat the number onto the beginning newString
        newString = originalString.charAt(originalString.length - 1) + newString;
        // remove the last number from string
        originalString = originalString.slice(0, originalString.length - 1)
        // if index == stringLength.length, concat the number with no comma
        // otherwise, when index % 3 == 0 add a comma in from of the number
        // unless it's
        if (i == stringLength.length) {
            newString = originalString.charAt(originalString.length - 1) + newString;
            return newString;
        }
        else if (i % 3 == 0) {
            newString = ',' + newString;
        }
    }
    return newString;
}

function roundToDollar(number) {
    let stringNumber = String(number)
    let indexOfPeriod = stringNumber.indexOf('.');

    // if the number has a decimal, find index and slice string accordingly
    if (stringNumber.includes('.')) {
        let newNumber = stringNumber.slice(0, indexOfPeriod);
        if (stringNumber.slice(indexOfPeriod + 1, indexOfPeriod + 3) >= 50) {
            return Number(newNumber) + 1;
        }
        return Number(newNumber);
    }
    else {
        return number;
    }
}