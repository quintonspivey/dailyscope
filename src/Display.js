import React from 'react'

function Display({responseObj}) {
    return (
        <div className="signinfo">
        
        {responseObj ? <div className="sign-info">
            <h1>Current Date: {responseObj.current_date}</h1> 
            <p>Who are you compatable with?: {responseObj.compatibility}</p>
            <p>Lucky Number:{responseObj.lucky_number}</p>
            <p>Color:{responseObj.color}</p>
            <p>Date Range:{responseObj.date_range}</p>
            <p>Mood:{responseObj.mood}</p>
            <p className="sign-description">{responseObj.description}</p>
            </div>


        : null}


    </div>
    )
}

export default Display
