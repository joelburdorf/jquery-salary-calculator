console.log('in js');

$(document).ready(onReady);

//employee app
let employees = [];

function onReady() {
    console.log('in onReady');
    $('#addInfoButton').on('click', addEmpInfo);
   // $('#songsOut').on('click', '.digButton', digSong);
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
        annualSalery: $('#annualSaleryIn').val()
    }
        //empty inputs (using .val as a "setter")
        $('#firstNameIn').val('');
        $('#lastNameIn').val('');
        $('#idIn').val('');
        $('#titleIn').val('');
        $('#annualSaleryIn').val('');
        //push new emp object into employees array
        employees.push( newObj);
        //display employeeInfo
        displayEmployee();
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
        el.append(`<li> ${employees[i].firstName} ${employees[i].lastName}, ${employees[i].id}, ${employees[i].title}, 
        ${employees[i].annualSalery} </li>`)
    }//end for
}//end displayEmployee

employees.push( {
    firstName: 'John',
    lastName: 'Doe',
    id: 222,
    title: 'Engineer',
    annualSalery: 5000
});