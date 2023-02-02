import { useRef , useState } from "react"
import Button from "./Button";
import Content from "./Content";
import "../App.css";

function Box({defaultValue}) {
    const [time , setTime] = useState(defaultValue ? defaultValue : 0);
    const myInterval = useRef(null);
    const userPrompt = useRef(0);

    function handleChange() {
        userPrompt.current = parseInt(prompt("enter time value"))
        setTime(userPrompt.current)
    }

    function handleReset(){
        setTime(0)
    }

    function startReverse() {
        clearInterval(myInterval.current)

        myInterval.current = setInterval(function CountDown(){
    
        setTime((prevTime)=>{
            if(prevTime > 0) {
                return prevTime - 1;
            }else{
                clearInterval(myInterval)
                return 0;
            }
        })
    } , 1000)
    }

    function handlePause(){
        clearInterval(myInterval.current)
    }
    
    function handleRestart() {
        setTime(userPrompt.current)
        startReverse()
    }

    return(
        <div className="box">
            <Content time={time} className="box__content"/>
            <div>
                <Button buttonName={"Change"} className="box__button--change" onClick={handleChange}/>    
                <Button buttonName={"Reset"} className="box__button--reset" onClick={handleReset}/>    
                <Button buttonName={"Pause"} className="box__button--pause" onClick={handlePause}/>    
                <Button buttonName={"Start"} className="box__button--start" onClick={startReverse}/>    
                <Button buttonName={"Restart"} className="box__button--restart" onClick={handleRestart}/>
            </div>    
        </div>
    )
    
}
export default Box;