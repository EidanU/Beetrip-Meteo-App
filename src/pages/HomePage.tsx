import { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import getApi from "../commons/services";

interface myCity {
  city: string;
}

const HomePage: React.FC = () => {
  // This const will able the display of a text if the vity is not find in the API
  const [cityNotFound, setCityNotFound] = useState<Boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //I use the useHystory to redirect the user to a other url
  let history = useHistory();

  const onSubmit = (data: myCity) => {
    getApi(data.city)
      .then((weather) => {
        history.push(`/WeatherPage/${weather.data.name}`);
      })
      .catch(() => {
        setCityNotFound(true);
      });
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue="Paris" {...register("city")} />
        {errors.exampleRequired && <span>This field is required</span>}
        <input type="submit" />
        {cityNotFound && <p>We can't find you city</p>}
      </form>
    </div>
  );
};
export default HomePage;
