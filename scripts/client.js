console.log('in js');

$(document).ready(onReady);

//employee app
let employees = [];

function onReady() {
    console.log('in onReady');
    $('#addInfoButton').on('click', addEmpInfo);
    $('#empOut').on('click', '.cell', fireEmp); 
   
} //end onReady

function addEmpInfo(){
    console.log('in addEmpInfo', employees);
    // sellect inputs by their ID 
    //use their data in a newObj (using .val as a "getter")
    let newObj = {
        firstName: $('#firstNameIn').val(),
        lastName: $('#lastNameIn').val(),
        id: $('#idIn').val(),
        title: $('#titleIn').val(),
        annualSalary: $('#annualSalaryIn').val()
    } // end newObj
        //empty inputs (using .val as a "setter")
        $('#firstNameIn').val('');
        $('#lastNameIn').val('');
        $('#idIn').val('');
        $('#titleIn').val('');
        $('#annualSalaryIn').val('');
        //push new emp object into employees array
        employees.push( newObj);
        //display employeeInfo
        displayEmployee();
        calcMonthlyAve(); 
}

function calcMonthlyAve() {
    let annualTotal = 0;
    let monthlyAve = 0;
    console.log('in calcMonthyAve');
    //loop through employees array
    for (let i=0; i<employees.length; i++){
        annualTotal += Number(employees[i].annualSalary);
    } //end loop
        //target an output element by ID
        let el = $('#totalMonthlyOut');
        //empty out el
        el.empty();
        //calc monthly average and round to nearest integer
        monthlyAve = Math.round(annualTotal/12);
        el.append(monthlyAve)
        if (monthlyAve>20000){
            $('.monthlyPost').mouseenter(redLineOverage); 
            $('.monthlyPost').mouseleave(redLineOverageClear); 
        }
}

function displayEmployee (){
    console.log('in displayEmployee');
    //target an output element by ID
    let el = $('#empOut');
    //empty out el
    el.empty();
    //loop through employees array
    for (let i=0; i<employees.length; i++){
        //append each employee to the DOM
        el.append(` <tr id="row">
        <td class="cell"> ${employees[i].firstName}</td>
        <td class="cell"> ${employees[i].lastName}</td>
        <td class="cell"> ${employees[i].id}</td>
        <td class="cell"> ${employees[i].title}</td>
        <td class="cell"> $${employees[i].annualSalary}</td>
        <td class="cell"> <button class="deleteButton">Fire Employee!</button></td>
    </tr>`)
    }//end for
   
}//end displayEmployee

function fireEmp () {
   //target this and remove obj
    console.log('in fireEmp');
    let el = $(this).parent();
    el.remove();
}

function redLineOverage() {
   //target this and change color when mousing over
    $(this).css({"border-color": "black", 
    "background-color": "red",
    "border-weight":"4px",
    "border-style":"solid", 
    });
}

function redLineOverageClear() {
    //target this and change color when mouse leave
    $(this).css({"border-color": "black", 
    "background-color": "pink",
    "border-weight":"4px",
    "border-style":"solid"});
}

// employees.push( {
//     firstName: 'John',
//     lastName: 'Doe',
//     id: 222,
//     title: 'Engineer',
//     annualSalary: 75000
// });