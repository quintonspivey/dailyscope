import React , {useState}from 'react';
import Display from './Display.js';

function SignSection() {
    const [sign, setSign] = useState("");
    let [responseObj, setResponseObj] = useState("")
    const getSign = (e) => {
        e.preventDefault();
         fetch(`https://aztro.sameerkumar.website/?sign=${sign}&day=today`,
        {
            method:'POST'
        })
        .then(response => response.json()) 
            .then(json => {
                setResponseObj(json);
            })
        
       
    }
    
    
 

    return (
        <div>
        <form onSubmit={getSign}>
                <input
                    type="text"
                    placeholder="Enter Sign"
                    maxLength="50"
                    value={sign}
                    onChange={(e) => setSign(e.target.value)}
                   
                    />
                    </form>
      <Display responseObj={responseObj}/>
        </div>
    )
}


export default SignSection;
