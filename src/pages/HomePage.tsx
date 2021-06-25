import {useState} from 'react';
import { useForm } from "react-hook-form";
import {useHistory} from "react-router-dom";
import getApi from '../commons/services';

const HomePage: React.FC = ()=> {

const [cityNotFound, setCityNotFound] = useState<Boolean>(false);
    let history: any = useHistory();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data: any) =>{
        console.log(data);
       try{
            getApi(data.city).then(weather=>{
                history.push(`/WeatherPage/${weather.data.name}`);
            });
       } catch (error){
           setCityNotFound(true);
       }
    };
    
    return(
        <>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input defaultValue="Paris" {...register("city")} />
                        {errors.exampleRequired && <span>This field is required</span>}
                    <input type="submit" />
                    {cityNotFound && <p>Votre ville est introuvable</p>}
                </form>
            </div>
        </>
    );
};
export default HomePage;
