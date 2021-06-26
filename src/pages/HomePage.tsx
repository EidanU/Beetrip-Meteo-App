import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useHistory } from "react-router-dom";
import getApi from "../commons/services";

// type for the useform
type myCity = {
  city: string;
};

const HomePage: React.FC = () => {
  //I use the useHystory to redirect the user to a other url
  let history = useHistory();

  // This const will able the display of an error if the city is not find in the API
  const [cityNotFound, setCityNotFound] = useState<Boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<myCity>();

  const onSubmit: SubmitHandler<myCity> = (data) => {
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
        <input defaultValue="Paris" {...register("city", { required: true })} />
        {errors.city && <p>This field is required</p>}
        <input type="submit" />
        {cityNotFound && <p>We can't find you city</p>}
      </form>
    </div>
  );
};
export default HomePage;
