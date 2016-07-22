/**
 * Created by lisa on 7/22/16.
 */
var value;
var lastNameValue;
var role;

$("#firstName").on("keyup", function(event){
    value = $(this).val();
    //$(".firstName").text(value);
});

$("#lastName").on("keyup", function(event){
    lastNameValue = $(this).val();
    //$(".lastName").text(lastNameValue);
});

$('#role').on('change', function(event){
    role = $(this).val();
    //$('.Role').text(role);
});

$('#button').on('click', function(event){
    event.preventDefault(event);
    $(".firstName").text(value);
    $(".lastName").text(lastNameValue);
    //$('.Role').text(role);
});

//keydown v keyup... keydown is suuuper slow
//keydown, we get the previous value, one behind.