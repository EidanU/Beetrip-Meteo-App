import { useEffect, useState } from "react";
import getApi from "../commons/services";
import MeteoDisplay from "../components/MeteoDisplay";
import LoadingData from "../components/Loading";

const WeatherResultPage: React.FC = () => {
  // Here I get the url and split it to get only the last part with the name of the city
  const pathArray: string[] = window.location.pathname.split("/");
  const lastUrlItem: string = pathArray[pathArray.length - 1];
  const [weather, setWeather] = useState<any>();

  //Loading because the api call is asynchronous
  const [loading, setLoading] = useState<Boolean>(true);

  // When the page is mounted I make a new API call to get every data to display and set the loading to false
  useEffect(() => {
    getApi(lastUrlItem).then((weather) => {
      setWeather(weather);
      setLoading(false);
    });
  }, []);

  if (loading) return <LoadingData />;
  else {
    return (
      <>
        <MeteoDisplay weather={weather.data.main.temp} />
      </>
    );
  }
};
export default WeatherResultPage;
