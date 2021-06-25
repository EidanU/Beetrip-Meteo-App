//Here I use the interface to type the component for a better visibility
interface propsMeteoDisplay {
  weather: number;
}
const MeteoDisplay: React.FC<propsMeteoDisplay> = ({ weather }) => {
  let data = weather > 288.15 ? "cold" : "hot";

  return (
    <div className={`container ${data}`}>
      <div className="content">
        <h1>Meteo page</h1>
        <h2>it's {data}</h2>
      </div>
    </div>
  );
};
export default MeteoDisplay;
