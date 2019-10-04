$(document).ready(readyNow);

function readyNow() {
    $('#submitButton').on('click', appendInfo);
    $('table').on('click', '.delete', deleteRow); 
    // $('#submitButton').on('click', calculateSalary);
    // $('.delete').on('click', calculateSalary);
}

let employees = [];

function appendInfo() {
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let id = $('#id').val();
    let title = $('#title').val();
    let salary = $('#salary').val();
    let infoString = $(`<tr><td>${firstName}</td><td>${lastName}</td><td>${id}</td><td>${title}</td><td>${salary}</td><td><button class="delete">Delete</button></td></tr>`);
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
    $(this).closest('tr').remove();
}