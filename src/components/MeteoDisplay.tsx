//Here I use the interface to type the component for a better visibility
interface propsMeteoDisplay {
  weather: any;
}

const MeteoDisplay: React.FC<propsMeteoDisplay> = ({ weather }) => {
  const city: string = weather.name;
  const temperature: number = Math.round(weather.main.temp - 273.15);
  const coldOrHot: string = temperature < 15 ? "cold" : "hot";

  return (
    <div className={`container ${coldOrHot}`}>
      <div className="content">
        <h1>
          Temperature at {city} : {temperature}°C
        </h1>
        <h2>it's {coldOrHot}</h2>
      </div>
    </div>
  );
};
export default MeteoDisplay;
