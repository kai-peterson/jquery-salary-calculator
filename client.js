$(document).ready(readyNow);

function readyNow() {
    $('#submitButton').on('click', appendInfo);
    $('#submitButton').on('click', calculateSalary);
    $('table').on('click', '.delete', deleteRow); 
    $('table').on('click', '.delete', calculateSalary);
}

let employees = [];

function appendInfo() {
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let id = $('#id').val();
    let title = $('#title').val();
    let salary = $('#salary').val();
    let infoString = $(`<tr><td class="theFirstName">${firstName}</td><td>${lastName}</td><td>${id}</td><td>${title}</td><td>${salary}</td><td><button class="delete">Delete</button></td></tr>`);
    $('.tableBody').append(infoString);
    let newEmployeeObject = {
        firstName: firstName,
        lastName: lastName,
        id: id,
        title: title,
        salary: salary
    }
    employees.push(newEmployeeObject);
    
    $('#firstName').val('');
    $('#lastName').val('');
    $('#id').val('');
    $('#title').val('');
    $('#salary').val('');
}

function deleteRow() {
    let name = $(this).parent().siblings('.theFirstName').text();
    testingThis(employees, name);
    $(this).closest('tr').remove();
}

function calculateSalary() {
    let monthlySalary = 0;
    let employeeArray = employees;
    for (let i = 0; i < employeeArray.length; i++) {
        monthlySalary += Number(employeeArray[i].salary);
    }
    $('h2').text('Total Monthly Salary: $' + monthlySalary);
}

function testingThis(employeeArray, name) {
    for (i = 0; i < employeeArray.length; i++) {
        if (employeeArray[i].firstName == name) {
            employees.splice(i, 1);
        }
    }
}