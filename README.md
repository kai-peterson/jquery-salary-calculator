# Project Name

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

Your project description goes here. What problem did you solve? How did you solve it?

Additional README details can be found [here](https://github.com/PrimeAcademy/github-finalization-assignment).


- create and source necessary files
    - index.html
    - main.css
    - client.js
    - jQuery
    - bootstrap

- create HTML shell
    - add h1
    - add subheaders (h3s)
    - add inputs and submit button
    - create table header and empty tbody
    - add Total Monthly Salary below table (h2)

- create basic styling with CSS
    - style container with background that will hold everything we need
    - center h1 and positions h3s
    - center all inputs and submit button (in a div)
    - table styling: center, borders, background-color
    - total monthly salary styling: float right, set right margins

- write Javascript
    - when user clicks submit button
        - grab all values from input fields
        - confirm input something for every field
        - create and append a string with a new <tr> and multiple <td>'s with values from input fields, and a delete button
        - create a new employee object with same inputs, and push into array of employees
        - empty input fields
        - calculate new total monthly salary and display on DOM
    - when user clicks delete button
        - grab the ID of employee being deleted
        - remove the closest <tr> (table row) to the button clicked (AKA that employee)
        - remove that employee's object from overall array using their ID
        - calculate and update new total monthly salary
    - write two new functions to clean up how dollar amounts are displayed on the DOM
        - one function to round a number to the nearest dollar
        - second function to add appropriate commas to large numbers (works with any whole number)