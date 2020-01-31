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
}


employees.push( {
    firstName: 'John',
    lastName: 'Doe',
    id: 222,
    title: 'Engineer',
    annualSalery: 5000
});