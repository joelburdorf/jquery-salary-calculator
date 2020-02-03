console.log('in js');

$(document).ready(onReady);

//employee app
let employees = [];

// create counter to increment a uniqueID automatically 
let counter = 1000;

function onReady() {
    console.log('in onReady');
    $('#addInfoButton').on('click', addEmpInfo);
    $('#empOut').on('click', '.cell', fireEmp); 
   
} //end onReady

function addEmpInfo(event){
    event.preventDefault();   //prevents default action of page refresh form
    console.log('in addEmpInfo', employees);
    // sellect inputs by their ID 
    //use their data in a newObj (using .val as a "getter")
    let newObj = {
        firstName: $('#firstNameIn').val(),
        lastName: $('#lastNameIn').val(),
        id: $('#idIn').val(),
        uniqueId: counter,                //add uniqueID counter and increment by one
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
         counter += 1;
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
            //following code could be written in multiple ways and I chose mouseenter/leave
            $('.monthlyPost').mouseenter(redLineOverage); 
            $('.monthlyPost').mouseleave(redLineOverageClear); 
            //$('.monthlyPost').addclass('red');
        } else {
            //$('.monthlyPost').addclass('red');
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
        <td class="cell"> uniqueID:${employees[i].uniqueId}</td>        //added uniqueID here for testing
        <td class="cell"> <button data-uniqueId="${employees[i].uniqueId}" class="deleteButton" >Fire Employee!</button></td>
    </tr>`)
    }//end for
   
}//end displayEmployee

function fireEmp () {
   //target this and remove obj
    console.log('in fireEmp');
    // let el = $(this).parent();
    // console.log(el, 'in el');
    // el.remove();

    ///////Following code is to target obj I remove with button, but can't figure out how to target correctly
    // let selectId = $(this).parent()[0].innerText;  //// this line is where my code is wrong
    let selectId = $(this).data('uniqueId');
    console.log('this is selectId', selectId);
    //selectId.remove();
    for (let i = 0; i < employees.length; i++) {
        let idHolder = employees[i].uniqueId;
        console.log(idHolder);
        
        if (idHolder === selectId) {
            employees.splice(i, 1);
            console.log('employees array after termination', employees);
        }
    } 
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

