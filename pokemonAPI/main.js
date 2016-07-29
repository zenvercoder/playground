/**
 * Created by lisa on 7/27/16.
 */
// Using the PokeAPI https://pokeapi.co/
// jQuery 3 is already included
// $.get("https://pokeapi.co/api/v2/pokemon/1")
// .then(function (data) {console.log(data);});

// Do these exercises

// Retrieve the data for the pokemon with id 1
// Hint: Add a ".catch" and console.log if you want to see errors.

    // GET returns a promise
var promise = $.get("https://pokeapi.co/api/v2/pokemon/1");

    // You can add chained resolution functions
    promise.then(function (data) {
        console.log(data);
        return (data);
        // data gets returned, so it is pokemon on the next line
    }).then(function(pokemon){
        console.log("ability: " + pokemon.abilities[0].ability);
        return $.get(pokemon.abilities[0].ability.url);
    });


// Using the previous Promise, continue the "then" chain and get details
// on one of Bulbasaur's moves




// Create a function that returns a promise that
// retrieves the data of a Pokemon with an id generated randomly between 1-150




// Stretch: Use "Promise.all" to fetch the first 10 pokemons' data
// and get all the results in a single ".then"
/*
$.when(
    $.ajax("/first/call"),
    $.ajax("/second/call"),
    $.ajax("/third/call")
    )
    .done(function(first_call, second_call, third_call){
        //do something
    })
    .fail(function(){
        //handle errors
    });*/
