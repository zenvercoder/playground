/**
 * Created by lisa on 7/22/16.
 */
var value;
var lastNameValue;
var role;
var newImage;
var option;

var roles;

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
        //make sure it's not undefined with if statement
        if(data){
            $('select').append("<option value='selectOption'>Select an option here</option>");
            //create object to save data to own object
            roles = data;
            for(key in data){
                console.log(data[key].title)
                var roleTitle = data[key].title;
                var roleImage = data[key].img;
                console.log("data[key].img= " , data[key].img)
                $('select').append("<option value='selectOption'>" + data[key].title + "</option>");

            //value is how you determine which option you've selected
            //    used the key and put that in the value that will be the position of the object
            }
        //can append variable options to select
        //    any time you take a drop down, a change event is fired.
        //    broke out of ajax call made two extra functions.
        }
    }
});





//keydown v keyup... keydown is suuuper slow
//keydown, we get the previous value, one behind.
