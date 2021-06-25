//Here I use the interface to type the component for a better visibility 
interface Props{
    bgColor: string, 
    text: string
}
const MeteoDisplay: React.FC<Props> = ({bgColor, text})=>{
    return(
        <div className={ 'container ' + bgColor}>
            <div className="content">
                <h1>Page Meteo</h1>
                <h2>il fait {text}</h2>
            </div>
        </div>
    )
}
export default MeteoDisplay