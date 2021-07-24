import React, {useState} from "react";
import './styles/timelinegridweek.css';
import Entrytimelineday from "./Entrytimelineday"; 


function Timelinegridday (props){

        let today = new Date(props.date);
        
 
   

    let arr=[];

    for(var i = 1; i<=7; i++){
        let month = today.toLocaleString('default', { month: 'short' });
        let day = today.getUTCDate();

        const weekCol = {
            daydate: day,
            month: month,
            day: i
        }

        arr.push(weekCol); 
        today.setDate(today.getDate() + 1); 

    }

    function createWeekCol(e){
        return <div className="day-column">
        <h1>Day {e.day}</h1>
        <p>{e.month} {e.daydate}</p>
          </div>
    }

    const subtasks=[{subtask: "Select Important Variables", due:"25/06"}, {subtask: "Identify Setup Equipment", due:"27/06"} ]; 
    const desc = "Review variables you can change, cataloging set up. This period has " + subtasks.length + " subtasks ";
    return <div>

    {arr.map(createWeekCol)}

  
            <Entrytimelineday top="5rem" left="0rem"
                color="#CA662E"
                title="Pre-Exp Research"
                phase="Experiment"
                desc={desc}
                subtasks={subtasks}
            />
            <Entrytimelineday top="11.5rem" left="25rem" 
                color="#2E9CCA"
                title="Pre-Exp Research"
                phase="Experiment"
                desc={desc}
                subtasks={subtasks}
            />
        </div>
}

export default Timelinegridday; 