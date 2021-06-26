import { useEffect, useState } from "react";
import getApi from "../commons/services";
import MeteoDisplay from "../components/MeteoDisplay";
import LoadingData from "../components/Loading";
import CityNotFound from "../components/errors/CityNotFound";

const WeatherResultPage: React.FC = () => {
  // Here I get the url and split it to get only the last part with the name of the city
  const pathArray: string[] = window.location.pathname.split("/");
  const lastUrlItem: string = pathArray[pathArray.length - 1];
  const [weather, setWeather] = useState<any>();
  const [cityNotFound, setCityNotFound] = useState<Boolean>(false);

  //Loading because the api call is asynchronous
  const [loading, setLoading] = useState<Boolean>(true);

  // When the page is mounted I make a new API call to get every data to display and set the loading to false
  useEffect(() => {
    getApi(lastUrlItem)
      .then((weather) => {
        setWeather(weather);
        setLoading(false);
      })
      .catch(() => {
        setCityNotFound(true);
      });
  }, []);

  //The only part of the code that I'm not proud
  if (cityNotFound) return <CityNotFound />;
  else if (loading) return <LoadingData />;
  else return <MeteoDisplay weather={weather.data} />;
};
export default WeatherResultPage;
