$(document).ready(function() {
//Assign total to an empty string that can be added to as the user inputs numbers and operators
var total = '';
//Define function that will take input from buttons
function displayValues(val) {
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
$('.btn-primary').on('click', function() {
      displayValues($(this).data('value'));
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
