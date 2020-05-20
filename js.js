var coords =  {
    lat: 45.8841,
    lng: -123.9686
};

var APIKey = 'db417286ffd067d079c3760d5405b45d';

function initMap() {
    // var queryURL = "https://api.openweathermap.org/data/2.5/weather?" + "lat=" + coords.lat + "&lon=" + coords.lng + "&appid=" + APIKey;
    var queryTwoURL = "https://api.openweathermap.org/data/2.5/forecast?" + "lat=" + coords.lat + "&lon=" + coords.lng + "&appid=" + APIKey;
    var queryThreeURL = "https://api.openweathermap.org/data/2.5/weather?" + "lat=" + coords.lat + "&lon=" + coords.lng + "&appid=" + APIKey;

    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 5, center: coords});

    var marker = new google.maps.Marker({
        position: coords, map: map
    })

    
    //Today API Call - On Load
    $.ajax({    
        url: queryThreeURL,      
        method: "GET"
    })
        .then(function(response) {
        
        // console.log("New Coords:" + JSON.stringify(coords));

        $(".today-city").html("<h1>" + response.name + "</h1>");
        $(".today-wind").text("Wind Speed: " + response.wind.speed + " MPH");
        $(".today-humidity").text("Humidity: " + response.main.humidity + " %");

        // Display Weather Icons
        // Icon sample => <i class="owf owf-200"></i>
        $("#display-icon").html("<i class='owf owf-" + response.weather[0].id + " owf-5x'" + "></i>");

        // // Convert the temp to fahrenheit    
        var tempF = (response.main.temp - 273.15) * 1.80 + 32;
        console.log(tempF);

        // add temp content to html
        $(".today-temp").text("Temperature (K) " + response.main.temp);
        $(".today-tempF").text("Temperature: " + tempF.toFixed(2) + " (°F)");

        // Log the data in the console as well
        console.log("Wind Speed: " + response.wind.speed);
        console.log("Humidity: " + response.main.humidity);
        console.log("Temperature (F): " + tempF);
    });

    //Next Four Day API Call - On Load
    $.ajax({    
        url: queryTwoURL,      
        method: "GET"
    })
        .then(function(response) {

        // Log the queryURL
        console.log(queryTwoURL);

        // Log the resulting object
        console.log('!!!!!!!!!! :' + JSON.parse(JSON.stringify(response)));

        // // Transfer content to HTML
        for (i = 0; i <= 40; i += 8) {

            $("#wind-"+[i]).text("Wind Speed: " + response.list[i].wind.speed + " MPH");
            $("#humidity-"+[i]).text("Humidity: " + response.list[i].main.humidity + " %");

            // Display Weather Icons
            $("#show-me-"+[i]).html("<i class='owf owf-" + response.list[i].weather[0].id + " owf-3x'" + "></i>");

            // // Convert the temp to fahrenheit    
            var tempF = (response.list[i].main.temp - 273.15) * 1.80 + 32;
            console.log("Day: " + [i] + " Temp: " + tempF);

            // add temp content to html
            $(".temp").text("Temperature (K) " + response.list[i].main.temp);
            $("#tempF-"+[i]).text("Temperature: " + tempF.toFixed(2) + " (°F)");

            // Log the data in the console as well
            console.log("Wind Speed: " + response.list[i].wind.speed);
            console.log("Humidity: " + response.list[i].main.humidity);
            console.log("Temperature (F): " + tempF);
        };
    });

    //Last Day API Call - On Load
    $.ajax({    
        url: queryTwoURL,      
        method: "GET"
    })
        .then(function(response) {

        // Log the queryURL
        console.log(queryTwoURL);

        // Log the resulting object
        console.log('!!!!!!!!!! :' + JSON.stringify((response)));

        // // Transfer content to HTML
        $("#wind-"+[39]).text("Wind Speed: " + response.list[39].wind.speed + " MPH");
        $("#humidity-"+[39]).text("Humidity: " + response.list[39].main.humidity + " %");

        // Display Weather Icons
        $("#show-me-"+[39]).html("<i class='owf owf-" + response.list[39].weather[0].id + " owf-3x'" + "></i>");

        // // Convert the temp to fahrenheit    
        var tempF = (response.list[39].main.temp - 273.15) * 1.80 + 32;
        console.log("Day: " + [39] + " Temp: " + tempF);

        // add temp content to html
        $(".temp").text("Temperature (K) " + response.list[39].main.temp);
        $("#tempF-"+[39]).text("Temperature: " + tempF.toFixed(2) + " (°F)");

        // Log the data in the console as well
        console.log("Wind Speed: " + response.list[39].wind.speed);
        console.log("Humidity: " + response.list[39].main.humidity);
        console.log("Temperature (F): " + tempF);
    });
}

// Treasure Location Buttons

$('#pyramid').click(function pyramidMap() {
    coords =  {
        lat: 29.9792,
        lng: 31.1342
    };
    todayWeather()
    forecastWeather ()
});
    
$('#cocas').click(function () {
    coords =  {
        lat: 5.5282,
        lng: -87.0574
    };
    todayWeather()
    forecastWeather ()
});

$('#nuestra').click(function () {
    coords =  {
        lat: 24.32,
        lng: -82.2
    };
    todayWeather()
    forecastWeather ()
});

$('#natzi').click(function () {
    coords =  {
        lat: 47.6448,
        lng: 13.9338
    };
    todayWeather()
    forecastWeather ()
});

$('#triste').click(function () {
    coords =  {
        lat: 19.435,
        lng: -99.131
    };
    todayWeather()
    forecastWeather ()
});

$('#borne').click(function () {
    coords =  {
        lat: 30.0281,
        lng: -89.6175
    };
    todayWeather()
    forecastWeather ()
});

function todayWeather () {
    var queryThreeURL = "https://api.openweathermap.org/data/2.5/weather?" + "lat=" + coords.lat + "&lon=" + coords.lng + "&appid=" + APIKey;
    $.ajax({    
        url: queryThreeURL,      
        method: "GET"
    })
        .then(function(response) {
        
        // console.log("New Coords:" + JSON.stringify(coords));

        $(".today-city").html("<h1> Cocas Island </h1>");
        $(".today-wind").text("Wind Speed: " + response.wind.speed + " MPH");
        $(".today-humidity").text("Humidity: " + response.main.humidity + " %");

        // Display Weather Icons
        // Icon sample => <i class="owf owf-200"></i>
        $("#display-icon").html("<i class='owf owf-" + response.weather[0].id + " owf-5x'" + "></i>");

        // // Convert the temp to fahrenheit    
        var tempF = (response.main.temp - 273.15) * 1.80 + 32;
        console.log(tempF);

        // add temp content to html
        $(".today-temp").text("Temperature (K) " + response.main.temp);
        $(".today-tempF").text("Temperature: " + tempF.toFixed(2) + " (°F)");

        // Log the data in the console as well
        console.log("Wind Speed: " + response.wind.speed);
        console.log("Humidity: " + response.main.humidity);
        console.log("Temperature (F): " + tempF);

        initMap();
    });
}

function forecastWeather () {
    var queryTwoURL = "https://api.openweathermap.org/data/2.5/forecast?" + "lat=" + coords.lat + "&lon=" + coords.lng + "&appid=" + APIKey;
    $.ajax({    
        url: queryTwoURL,      
        method: "GET"
    })
        .then(function(response) {

        // Log the queryURL
        console.log(queryTwoURL);

        // Log the resulting object
        console.log('!!!!!!!!!! :' + JSON.parse(JSON.stringify(response)));

        // // Transfer content to HTML
        for (i = 0; i <= 40; i += 8) {

            $("#wind-"+[i]).text("Wind Speed: " + response.list[i].wind.speed + " MPH");
            $("#humidity-"+[i]).text("Humidity: " + response.list[i].main.humidity + " %");

            // Display Weather Icons
            $("#show-me-"+[i]).html("<i class='owf owf-" + response.list[i].weather[0].id + " owf-3x'" + "></i>");

            // // Convert the temp to fahrenheit    
            var tempF = (response.list[i].main.temp - 273.15) * 1.80 + 32;
            console.log("Day: " + [i] + " Temp: " + tempF);

            // add temp content to html
            $(".temp").text("Temperature (K) " + response.list[i].main.temp);
            $("#tempF-"+[i]).text("Temperature: " + tempF.toFixed(2) + " (°F)");

            // Log the data in the console as well
            console.log("Wind Speed: " + response.list[i].wind.speed);
            console.log("Humidity: " + response.list[i].main.humidity);
            console.log("Temperature (F): " + tempF);
        };
    });
}


$( document ).ready(function() {
    const searchButton = document.querySelector('.search-button');
    const searchList = document.querySelector('.search-list');
    var inputValue = document.getElementById('search-input');
    var keyNum = 0;
    var APIKey = "db417286ffd067d079c3760d5405b45d";
    // var EXAMPLE = "https://api.openweathermap.org/data/2.5/weather?" + "q=Chicago,IL,US&appid=" + APIKey; 
    // var queryURL = "https://api.openweathermap.org/data/2.5/weather?" + "q=" + inputValue.value + ",US&appid=" + APIKey;
    // var queryTwoURL = "https://api.openweathermap.org/data/2.5/forecast?" + "q=" + inputValue.value + ",US&appid=" + APIKey; 

    //Show Current Date & Time

    function dayToday() {
        var NowMoment = moment().format("dddd MMM Do YYYY");
        var eDisplayMoment = document.getElementById('display-moment');
        eDisplayMoment.innerHTML = NowMoment;    
    }
    
    //Show future Date & Time
    function dayFuture() {
        var dayOneMoment = moment().add(1, 'days').format('dddd MMM Do');
        var dayOneShow = document.getElementById('day-one');
        var dayTwoMoment = moment().add(2, 'days').format('dddd MMM Do');
        var dayTwoShow = document.getElementById('day-two');
        var dayThreeMoment = moment().add(3, 'days').format('dddd MMM Do');
        var dayThreeShow = document.getElementById('day-three');
        var dayFourMoment = moment().add(4, 'days').format('dddd MMM Do');
        var dayFourShow = document.getElementById('day-four');
        var dayFiveMoment = moment().add(5, 'days').format('dddd MMM Do');
        var dayFiveShow = document.getElementById('day-five');
        dayOneShow.innerHTML = dayOneMoment;
        dayTwoShow.innerHTML = dayTwoMoment;
        dayThreeShow.innerHTML = dayThreeMoment;
        dayFourShow.innerHTML = dayFourMoment;
        dayFiveShow.innerHTML = dayFiveMoment;
        console.log('******* :' + dayOneShow);
    }

    dayToday();
    dayFuture();

    //Event Listeners
    // searchButton.addEventListener('click', addSearch);
    // searchList.addEventListener('click', deleteCheck);

    //User Search & Store

    $('.search-button').click(function recordSearch() {
        //Increment keyNum Variable
        keyNum++;
        console.log("keyNum value = :" + keyNum);
        const key = keyNum;
        const value = inputValue.value;
        console.log(key);
        console.log(value);
    
        if (key && value) {
            localStorage.setItem(key, value);
            location.reload;
        }
        
        // Prevent form from submitting
        event.preventDefault();

        //Create Button
        const newSearch = document.createElement('button');
        newSearch.innerText = value;
        newSearch.classList.add("prior-search");
        newSearch.setAttribute('type', "submit");
        newSearch.setAttribute('id',keyNum);

        var queryURL = "https://api.openweathermap.org/data/2.5/weather?" + "q=" + inputValue.value + ",US&appid=" + APIKey;
        var queryTwoURL = "https://api.openweathermap.org/data/2.5/forecast?" + "q=" + inputValue.value + ",US&appid=" + APIKey; 
        
        //Today API Call
        $.ajax({    
            url: queryURL,      
            method: "GET"
        })
            .then(function(response) {

            // Log the queryURL
            console.log(queryURL);

            // Log the resulting object
            console.log('******* :' + JSON.parse(JSON.stringify(response)));

            coords =  {
                lat: response.coord.lat,
                lng: response.coord.lon
            };
            
            initMap();

            // console.log("New Coords:" + JSON.stringify(coords));

            $(".today-city").html("<h1>" + response.name + "</h1>");
            $(".today-wind").text("Wind Speed: " + response.wind.speed + " MPH");
            $(".today-humidity").text("Humidity: " + response.main.humidity + " %");

            // Display Weather Icons
            // Icon sample => <i class="owf owf-200"></i>
            $("#display-icon").html("<i class='owf owf-" + response.weather[0].id + " owf-5x'" + "></i>");

            // // Convert the temp to fahrenheit    
            var tempF = (response.main.temp - 273.15) * 1.80 + 32;
            console.log(tempF);

            // add temp content to html
            $(".today-temp").text("Temperature (K) " + response.main.temp);
            $(".today-tempF").text("Temperature: " + tempF.toFixed(2) + " (°F)");

            // Log the data in the console as well
            console.log("Wind Speed: " + response.wind.speed);
            console.log("Humidity: " + response.main.humidity);
            console.log("Temperature (F): " + tempF);
        });

        //Next Four Day API Call
        $.ajax({    
            url: queryTwoURL,      
            method: "GET"
        })
            .then(function(response) {

            // Log the queryURL
            console.log(queryTwoURL);

            // Log the resulting object
            console.log('!!!!!!!!!! :' + JSON.parse(JSON.stringify(response)));

            // // Transfer content to HTML
            for (i = 0; i <= 40; i += 8) {

                $("#wind-"+[i]).text("Wind Speed: " + response.list[i].wind.speed + " MPH");
                $("#humidity-"+[i]).text("Humidity: " + response.list[i].main.humidity + " %");

                // Display Weather Icons
                $("#show-me-"+[i]).html("<i class='owf owf-" + response.list[i].weather[0].id + " owf-3x'" + "></i>");

                // // Convert the temp to fahrenheit    
                var tempF = (response.list[i].main.temp - 273.15) * 1.80 + 32;
                console.log("Day: " + [i] + " Temp: " + tempF);

                // add temp content to html
                $(".temp").text("Temperature (K) " + response.list[i].main.temp);
                $("#tempF-"+[i]).text("Temperature: " + tempF.toFixed(2) + " (°F)");

                // Log the data in the console as well
                console.log("Wind Speed: " + response.list[i].wind.speed);
                console.log("Humidity: " + response.list[i].main.humidity);
                console.log("Temperature (F): " + tempF);
            };
        });

        //Last Day API Call
        $.ajax({    
            url: queryTwoURL,      
            method: "GET"
        })
            .then(function(response) {

            // Log the queryURL
            console.log(queryTwoURL);

            // Log the resulting object
            console.log('!!!!!!!!!! :' + JSON.stringify((response)));

            // // Transfer content to HTML
            $("#wind-"+[39]).text("Wind Speed: " + response.list[39].wind.speed + " MPH");
            $("#humidity-"+[39]).text("Humidity: " + response.list[39].main.humidity + " %");

            // Display Weather Icons
            $("#show-me-"+[39]).html("<i class='owf owf-" + response.list[39].weather[0].id + " owf-3x'" + "></i>");

            // // Convert the temp to fahrenheit    
            var tempF = (response.list[39].main.temp - 273.15) * 1.80 + 32;
            console.log("Day: " + [39] + " Temp: " + tempF);

            // add temp content to html
            $(".temp").text("Temperature (K) " + response.list[39].main.temp);
            $("#tempF-"+[39]).text("Temperature: " + tempF.toFixed(2) + " (°F)");

            // Log the data in the console as well
            console.log("Wind Speed: " + response.list[39].wind.speed);
            console.log("Humidity: " + response.list[39].main.humidity);
            console.log("Temperature (F): " + tempF);
        });
        
        //Clear Search Input Value
        inputValue.value = "";
    });
});


//     $.ajax({    
//         url: queryThreeURL,      
//         method: "GET"
//     })
//         .then(function(response) {
        
//         // console.log("New Coords:" + JSON.stringify(coords));

//         $(".today-city").html("<h1>" + response.name + "</h1>");
//         $(".today-wind").text("Wind Speed: " + response.wind.speed + " MPH");
//         $(".today-humidity").text("Humidity: " + response.main.humidity + " %");

//         // Display Weather Icons
//         // Icon sample => <i class="owf owf-200"></i>
//         $("#display-icon").html("<i class='owf owf-" + response.weather[0].id + " owf-5x'" + "></i>");

//         // // Convert the temp to fahrenheit    
//         var tempF = (response.main.temp - 273.15) * 1.80 + 32;
//         console.log(tempF);

//         // add temp content to html
//         $(".today-temp").text("Temperature (K) " + response.main.temp);
//         $(".today-tempF").text("Temperature: " + tempF.toFixed(2) + " (°F)");

//         // Log the data in the console as well
//         console.log("Wind Speed: " + response.wind.speed);
//         console.log("Humidity: " + response.main.humidity);
//         console.log("Temperature (F): " + tempF);

//         initMap();
//     });


//////////////////////===WORKBENCH===//////////////////////

//Button Click Search

// $("#pyramid").click(function pyramidMap() {
//     function initMap() {
//         var coords =  {
//             lat: 29.976480,
//             lng: 31.131302
//         };
//         // console.log(coords);
//         var map = new google.maps.Map(
//             document.getElementById('map'), {
//                 zoom: 15, center: coords});
//         var marker = new google.maps.Marker({
//             position: coords, map: map
//         });
//     }
//     initMap()
// });

//MY FUNCTION WAS BROKE
// $("#pyramid").click(function pyramidMap() {
//     var coords =  {
//         lat: 29.976480,
//         lng: 31.131302
//     };
//     initMap()
// });

//MATT'S WORKED!
// function initMap() {
//     var queryThreeURL = "https://api.openweathermap.org/data/2.5/weather?" + "lat=" + coords.lat + "&lon=" + coords.lng + "&appid=" + APIKey;

//     var map = new google.maps.Map(
//         document.getElementById('map'), {
//             zoom: 15, center: coords});

//     var marker = new google.maps.Marker({
//         position: coords, map: map
//     })

//////////////////////===WORKBENCH===//////////////////////