$(document).ready(function() {
  // console.log('sanity check');

  //globals
  var IP = 0;
  var latitude = 0;
  var longitude = 0;
  var currentCity = '';
  var describeCurrent = '';

  //getting IP and adding to the page
    var getIP = $.ajax({
      url: 'http://jsonip.com',
      method: "GET",
      success: function(data) {
        console.log(data);
        IP = data.ip;

        $('#tuning').html('Your IP Address:  ' + IP);
      }
    });

    //getting city, long, lat, and colloquial description
    var getDescription = $.ajax({
      url: 'http://api.openweathermap.org/data/2.5/weather?q=denver,co&APPID=23eda5ada275f21ef9e1431db006b7df',
      method: "GET",
      success: function(data) {
        console.log(data);
      // adding city to the page
      $('#currentLoc').html('Current location: ' + data.name);
      //loading longitude and latitude, easily accessed since object
        latitude = data.coord.lat;
        longitude = data.coord.lon;
        $('#long').html('(Longitude: ' + Math.floor(longitude) + ', ');
        $('#lat').html('Latitude: ' + Math.floor(latitude) + ')');
        //colloquial description
        var weatherData = data.weather;
        $('#colloquial').html(weatherData[0].description);
      }
    });
// ==========================================
    //on click function
    $('#submit').on('click', function() {
      //variables
      var userInput = $('#userInput').val();
      var cityState = userInput.toLowerCase().split(' ').join('');
      var searchLatitude = 0;
      var searchLongitude = 0;


      //make disappear id hide
      $('#disappear').hide();
      //request using entered data
      $.ajax({
      url: 'http://api.openweathermap.org/data/2.5/weather?q='+cityState+'&APPID=23eda5ada275f21ef9e1431db006b7df',
      method: "GET",
      success: function(data) {
// adding city to the page
      $('#searchLoc').html(data.name);
      //loading longitude and latitude, easily accessed since object
        searchLatitude = data.coord.lat;
        searchLongitude = data.coord.lon;
        $('#searchLong').html('(Longitude: ' + Math.floor(searchLongitude) + ', ');
        $('#searchLat').html('Latitude: ' + Math.floor(searchLatitude) + ')');
        //colloquial description
        var weatherData = data.weather;
        $('#searchColloquial').html(weatherData[0].description);



    }

   });
  });
});