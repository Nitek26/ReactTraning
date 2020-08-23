import React, { useState } from 'react';


function ButtonFunction() {
    //const[currentSatateValue,functionToSetNewStateValue] =useState(initialStateValue);    
    const [counter, setCounter] = useState(0);

    const increment = (e) => {
        e.preventDefault();
        setCounter(counter + 1);
    };

    return <>
        <button type="button"
            onClick={(e) => increment(e)}>Count - {counter}
        </button>
    </>

}

export default ButtonFunction;