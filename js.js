$( document ).ready(function() {
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];
    
    btn.onclick = function() {
    modal.style.display = "block";
    }
    
    span.onclick = function() {
    modal.style.display = "none";
    }
    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

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
    }

    $('#pyramid').click(function () {
        coords =  {
            lat: 29.9792,
            lng: 31.1342
        };
        pyramidCard()
        todayWeather()
        forecastWeather ()
    });
        
    $('#cocas').click(function () {
        coords =  {
            lat: 5.5282,
            lng: -87.0574
        };
        cocasCard()
        todayWeather()
        forecastWeather ()
    });

    $('#nuestra').click(function () {
        coords =  {
            lat: 24.32,
            lng: -82.2
        };
        nuestraCard()
        todayWeather()
        forecastWeather ()
    });

    $('#natzi').click(function () {
        coords =  {
            lat: 47.6448,
            lng: 13.9338
        };
        natziCard()
        todayWeather()
        forecastWeather ()
    });

    $('#triste').click(function () {
        coords =  {
            lat: 19.435,
            lng: -99.131
        };
        nocheCard()
        todayWeather()
        forecastWeather ()
    });

    $('#borne').click(function () {
        coords =  {
            lat: 30.0281,
            lng: -89.6175
        };
        borneCard()
        todayWeather()
        forecastWeather ()
    });

});