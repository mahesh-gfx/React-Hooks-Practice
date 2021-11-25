import { useState } from "react";
import { useEffect } from "react";

const UseEffectExamples = () => {
  const [temp, setTemp] = useState("0");
  const [place, setPlace] = useState("");

  useEffect(() => {
    const getLocation = async () => {
      var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      };

      //Geolocation Api
      await navigator.geolocation.getCurrentPosition(success, error, options);

      async function success(pos: any) {
        var latitude = pos.coords.latitude;
        var longitude = pos.coords.longitude;

        var accessToken = "pk.d2a483ead28060cc7405107f8b3e40de";
        var revGeocodingUrl = `https://us1.locationiq.com/v1/reverse.php?key=${accessToken}&lat=${latitude}&lon=${longitude}&format=json`;

        var loc = "";

        //Reverse geolocation API call
        await fetch(revGeocodingUrl)
          .then(function (response) {
            return response.json();
          })
          .then((data) => {
            loc += data.address.county;
            loc += ", ";
            loc += data.address.country;
            setPlace(loc);
          });
      }
      function error(err: any) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }
    };
    getLocation();
  }, [place]);

  useEffect(() => {
    const checkWeather = () => {
      var url = `http://api.weatherapi.com/v1/current.json?key=981c56aab5ba4484a7a105826210109&q=${place}`;
      fetch(url)
        .then(function (response) {
          return response.json();
        })
        .then((data) => {
          setTemp(data.current.temp_c);
        })
        .catch((error) => {
          console.log(error);
          return;
        });
      return true;
    };
    if (place != "") {
      checkWeather();
    }
  }, [place, temp]);

  return (
    <>
      <p>
        Current temperature in {place}: {temp}&#176;
      </p>
    </>
  );
};

export default UseEffectExamples;
