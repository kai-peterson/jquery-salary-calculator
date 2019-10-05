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
    // if any inputs are falsy (weren't entered), alert user and end function
    if (!firstName || !lastName || !id || !title || !salary) {
        alert('You missed an input...');
        return null;
    }
    // create and append string include a table row and six table data with all the input values and a button
    let infoString = $(`<tr><td class="theFirstName">${firstName}</td><td>${lastName}</td><td>${id}</td><td>${title}</td><td>$${salary}</td><td><button class="delete">Delete</button></td></tr>`);
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
    let name = $(this).parent().siblings('.theFirstName').text();
    removeEmployee(employees, name);
    // remove the entire row from the table
    $(this).closest('tr').remove();
}

// loops through array of employees for a matching name, then splices the whole object
function removeEmployee(employeeArray, name) {
    for (i = 0; i < employeeArray.length; i++) {
        if (employeeArray[i].firstName == name) {
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
    if (monthlySalary >= 20000) {
        $('h2').css('background-color', 'red');
    }
    $('h2').text('Total Monthly Salary: $' + monthlySalary);
}