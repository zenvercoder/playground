/**
 * Created by lisa on 7/22/16.
 */
var value;
var lastNameValue;
var role;
var newImage;

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
    newImage = $('#user_image');

    //$('.Role').text(role);
});

$('#submit_button').on('click', function(event){
    event.preventDefault(event);
    $(".firstName").text(value);
    $(".lastName").text(lastNameValue);
    $('.Role').text(role);
});

$.ajax({
    "url": "http://galvanize-student-apis.herokuapp.com/gpersonnel/roles",
    "type": "GET",

    success: function(data) {
        for (var item of data) {
            console.log("item.title= " + item.title);
        }
    }
});



//keydown v keyup... keydown is suuuper slow
//keydown, we get the previous value, one behind.
