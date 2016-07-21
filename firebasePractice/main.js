var punchline = [
  "oh hai",
    "Did I do that?",
    "yo momma!",
    "clap along if you feel like a room without a roof!",
    "I’ll have what she’s having.",
    "That's when I developed my drinking problem",
    "You're supposed to stop inserting the q-tip when you feel resistance",
    "And I’m Ron Burgundy. Go fuck yourself, San Diego.",
    "It’s just a flesh wound.",
    "I’m letting you off easy! I was going to ask for the whole wig.",
    "I really don’t care for the way you’re speaking to me.",
    "Well, there goes your social life",
    "We are the knights who say ni!!",
    "She turned me into a newt... I got better",
    "That rabbit's got a vicious streak a mile wide! It's a killer!",
    "Oh! Now we see the violence inherent in the system! Help, help, I'm being repressed!",
    "Bring out your dead!"



];
// primary purpose of a function: to return something
function generatePunchLine(){
    // generate a random number from 1 - array length
    return Math.floor(Math.random() * punchline.length);
}
$(".btn-1").click(function(){
    $('#result h1').html(punchline[generatePunchLine()]);
});


var imageArray = [
    "https://i.ytimg.com/vi/d_rC9c200wg/hqdefault.jpg",
    "https://pbs.twimg.com/profile_images/3153378667/5bbfbbb82568cc1f8b468268a1acf985_400x400.jpeg",
    "https://s-media-cache-ak0.pinimg.com/236x/f0/f8/f5/f0f8f5889fb6ff45e802cf33201177c5.jpg",
    "http://i.giphy.com/PqM1wJBvvIBZS.gif",
    "http://i.giphy.com/dDArd5rbZ1alq.gif",
    "http://i.giphy.com/YiNtOZm6srLpe.gif",
    "http://i.giphy.com/JfvdoqEyVHb3y.gif",
    "http://i.giphy.com/ovt5W1f1EuYyA.gif",
    "http://i.giphy.com/ItWzWnWSjPsbe.gif",
    "http://i.giphy.com/WAazKNEk4s0Ug.gif",
    "http://i.giphy.com/pg3D0DkUGxBug.gif",
    "http://i.giphy.com/N8Lfh9gWcWYIU.gif",
    "http://i.giphy.com/Vpdzoviaa1P3y.gif",
    "http://i.giphy.com/euqFD0jqYA0bS.gif",
    "http://i.giphy.com/xThuWdkfrKQ64eSToA.gif",
    "http://i.giphy.com/ZrGJNAD4A7kXu.gif",
    "http://i.giphy.com/eOI6bXMKsK0ow.gif",
    "http://i.giphy.com/Lw4f38T1CuQla.gif",
    "http://i.giphy.com/N0wCfSOVtX7PO.gif",
];
// primary purpose of a function: to return something
function generateImage(){
    // generate a random number from 1 - array length
    return Math.floor(Math.random() * imageArray.length);
}
$('.btn-2').on('click', function(){
    $('img').attr('src', imageArray[generateImage()]);
});