var punchline = [
  "oh hai",
    "Did I do that?",
    "yo momma!",
    "clap along if you feel like a room without a roof!",

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
    "http://67.media.tumblr.com/4d430e086ecaffa7e98c8b3b42a6ca24/tumblr_ndxpmdQX9C1rbibvmo1_1280.jpg",
    "https://i.ytimg.com/vi/d_rC9c200wg/hqdefault.jpg",
    "https://pbs.twimg.com/profile_images/3153378667/5bbfbbb82568cc1f8b468268a1acf985_400x400.jpeg",
    "https://s-media-cache-ak0.pinimg.com/236x/f0/f8/f5/f0f8f5889fb6ff45e802cf33201177c5.jpg",
];
// primary purpose of a function: to return something
function generateImage(){
    // generate a random number from 1 - array length
    return Math.floor(Math.random() * imageArray.length);
}
$('.btn-2').on('click', function(){
    $('img').attr('src', imageArray[generateImage()]);
});