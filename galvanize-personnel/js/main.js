/**
 * Created by lisa on 7/22/16.
 */
var value;
var lastNameValue;
var currentRole;
var newImage;
var option;

var roles;

//$("#firstName").on("keyup", function(event){
//    value = $(this).val();
//    //$(".firstName").text(value);
//});
//
//$("#lastName").on("keyup", function(event){
//    lastNameValue = $(this).val();
//    //$(".lastName").text(lastNameValue);
//});
//
$('#role').on('change', function(event){
    currentRole = roles[event.target.value];
    $('#profile_pic').attr('src', currentRole.img);
});

// made it a fat arrow function
//var showMessage = (message) => $('.save-status').text(message).show();
var showMessage = (message) => $('.save-status').text(message).fadeIn(500);

$('#submit_button').on('click', function(event){
    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    $.ajax({
        "url": "http://galvanize-student-apis.herokuapp.com/gpersonnel/users",
        "type": "POST",
        "data": { firstName: firstName, lastName: lastName, role: currentRole.title },
        success: function(data) {
            //make sure it's not undefined with if statement
            if(data && data.message === "Success!"){
                showMessage(data.message);
                setTimeout(function(){
                        $('.save-status').fadeOut(500);
                        console.log("hide");
                    },
                    2000);
            }
        },
        error: function(){
            showMessage("Not quite");
            setTimeout(function(){
                    $('.save-status').fadeOut(500);
                },
                2000);

        }

    });
});

$.ajax({
    "url": "http://galvanize-student-apis.herokuapp.com/gpersonnel/roles",
    "type": "GET",

    success: function(data) {
        //make sure it's not undefined with if statement
        if(data){
            var roleElement = $('#role');
            roleElement.append("<option value='selectOption'>Select an option here</option>");
            //create object to save data to own object
            roles = data;
            for(key in data){
                roleElement.append("<option value='"  + key + "'>" + data[key].title + "</option>");
            }
        }

    }
});
