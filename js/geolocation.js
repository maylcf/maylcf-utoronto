$(document).ready (function () {

  var locationMessage = $("#locationMessage");
  var provinceSelector = $("#provinceSelector");
  var mapElement = $("#map");
    var teste = $("result-default-msg");
  var mapHeight = 400;

  if (Modernizr.geolocation)
  {
    if (Modernizr.geolocation == undefined)
    {
      selectProvinceManually();
    }

    navigator.geolocation.getCurrentPosition (
      function (position) {
        var longitude = position.coords.longitude;
        var latitude = position.coords.latitude;

        var url = 'http://api.geonames.org/countrySubdivisionJSON?lat=' + latitude + '&lng=' + longitude + '&username=maylcf';

        $.ajax({
        				type: 'GET',
        				url: url,
        				success: function(response) {
                  console.log(response);
                  var province = response.adminName1;
                  var provinceCode = response.codes[0].code;
                  provinceSelector.val(provinceCode);
        				}
        			});

        // Set text
        locationMessage.text ("Lat: " + latitude + ", Lng: " + longitude);
        locationMessage.css('color', 'black');

        // display map
        mapElement.css("visibility", "visible");
        mapElement.css({"height":mapHeight + "px"} );

        // Populate Map
        var uluru = {lat: latitude, lng: longitude};

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });

        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });

        // Disable province provinceSelector
        provinceSelector.attr('disabled', 'disabled');
        provinceSelector.attr("required", false);
      },
      function (error) {
        selectProvinceManually();
      });
  }
  else
  {
    selectProvinceManually();
  }

  function selectProvinceManually() {
    var locationMessage = $("#locationMessage");
    var provinceSelector = $("#provinceSelector");
    var map = $("#map");

    // hide maps
    map.css("visibility", "hidden");
    map.css({"height":"0px"} );

    // display msg
    locationMessage.css('color', 'red');
    locationMessage.text ("Geolocation support is not available. Please enter your province manually on the form below.");

    // enable manual input for province
    provinceSelector.removeAttr('disabled');
    provinceSelector.attr("required", true);
  }

});
