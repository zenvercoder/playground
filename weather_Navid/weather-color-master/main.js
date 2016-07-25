$(".location").on("submit", function(event) {
     event.preventDefault();
    var city = $("#city").val();
    var state = $("#state").val();
    var one ="http://api.openweathermap.org/data/2.5/weather?q="
    var three = "&APPID=4a65b376674b79616a44453ad31d01b4&units=imperial"

    var urladd = one + city +three;


    $.ajax({
        url:urladd,
        method: 'GET',
        success: function(data) {
            var fahrenheit =data.main.temp;

            $(".location").on("submit" ,function() {
                var hsl= gFahrenheit*6
                var t1=  "hsl("
                var t2=", 100%, 50%)"
                var color=t1+hsl+t2;
                $("body").css("background-color", color)

                $('body').append('<h1>')
                $('h1').text("gFahrenheit= " + gFahrenheit);

                $('body').append('<h2>')
                $('h2').text("hsl= " + hsl);
            })

           getFahrenheit(fahrenheit);
        }
    })
});

var gFahrenheit;
function getFahrenheit(fahrenheit) {
    gFahrenheit=fahrenheit;
}
