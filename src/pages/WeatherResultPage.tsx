import { useEffect, useState } from 'react';
import getApi from '../commons/services';
import MeteoDisplay from '../components/MeteoDisplay';


const WeatherResultPage: React.FC = ()=> {

    const pathArray: string[] = window.location.pathname.split('/');
    const lastUrlItem: string = pathArray[pathArray.length -1];
    const [item, setstate] = useState<string>(lastUrlItem);
    const [weather, setWeather] = useState<any>({});
    const [loading, setLoading] = useState<Boolean>(true);

    useEffect(()=>{
         getApi(item).then((weather)=>{
             setWeather(weather);
             setLoading(false);
            });
    },[]);

    if(loading) return <p>La data charge</p>;
    else{ 
        return (
            <>
                { weather.data.main.temp - 273.15 < 15
                ? 
                <MeteoDisplay bgColor={'cold'} text={'froid'}/>
                :
                <MeteoDisplay bgColor={'hot'} text={'chaud'}/>
                }
                </>
        )
    };
};
export default WeatherResultPage;

