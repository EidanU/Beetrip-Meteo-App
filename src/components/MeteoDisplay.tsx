interface Props{
    bgColor: string, 
    text: string
}

const MeteoDisplay: React.FC<Props> = ({bgColor, text})=>{
    return(
        <div className={bgColor}>
            <h1>il fait {text}</h1>
        </div>
    )
}
export default MeteoDisplay