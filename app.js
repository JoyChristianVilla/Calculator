$(document).ready(function() {
//Assign total to an empty string that can be added to as the user inputs numbers and operators
var total = '';
//Define function that will take input from buttons
function write(val) {
  //Concatenate value from button with total
  total += val;
  //Check if total fits and display it
  if (total.length <= 15) {
  $('#total').html(total);
} else {
  //If it's too long, display only the end of the string (as much as fits)
  $('#total').html(total.slice(total.length - 15));
}
}
//Onclick events that call the write function to add whatever is on the button to the total
$('#seven').click(function() {
  write(7);
});
$('#eight').click(function() {
  write(8);
});
$('#nine').click(function() {
  write(9);
});
$('#divide').click(function() {
  write('/');
});
$('#four').click(function() {
  write(4);
});
$('#five').click(function() {
  write(5);
});
$('#six').click(function() {
  write(6);
});
$('#times').click(function() {
  write('*');
});
$('#one').click(function() {
  write(1);
});
$('#two').click(function() {
  write(2);
});
$('#three').click(function() {
  write(3);
});
$('#minus').click(function() {
  write('-');
});
$('#zero').click(function() {
  write(0);
});
$('#point').click(function() {
  write('.');
});
$('#plus').click(function() {
  write('+');
});
//Onclick event for the equals button
$('#equals').click(function() {
  //Evaluate the mathematical expression in the string and assign it to total
  total = eval(total);
  //Turn total back into a string
  total = total.toString();
  //If the total fits, display it
  if (total.length <= 15) {
  $('#total').html(total);
} else {
  //If it's too long, display 'Err'
  $('#total').html('Err');
}
  //Reset total to an empty string so that it is ready for the next calculation
    total = '';
});
//Onclick function for clear button
$('#clear').click(function() {
  //Replace the text displayed with an empty string
  $('#total').html('');
  //Reassign total to an empty string
  total = '';
});
//Onclick function for backspace button
$('#backspace').click(function() {
  //Reassign total to its previous value but without the last character
  total = total.slice(0, -1);
  //Display total
  $('#total').html(total);
});
});
