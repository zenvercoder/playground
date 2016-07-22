/**
 * Created by lisa on 7/21/16.
 */
$(document).ready(function(){
    //notice the "." dot in front of ajax
    $.ajax({
        //in a normal object, you don't need it to be in quotes, in a json object, the url does need to be in quotes because of all of those other languages
        "url": 'https://www.reddit.com/r/programming/.json',
        //"url": 'http://pokeapi.co/api/v2/pokemon/1/',
        error: function(err){console.error(err)},
        method: 'GET',
        success: function(data){
            console.log(data);
            //var pokeName = data.name;
            //$('h1').text(pokeName)
        }
    })
});





