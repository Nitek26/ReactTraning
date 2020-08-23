import React, { useState } from 'react';

function logRandom() {
    console.log(Math.random());
}

function ButtonFunction() {
    //const[currentSatateValue,functionToSetNewStateValue] =useState(initialStateValue);
    const [counter, setCounter] = useState(0);
    return <>
        <button onClick={logRandom}>Hello ! push me! {Math.random()}</button>
        <button onClick={() => console.log(Math.random())}>Hello ! push me! {Math.random()}</button>
        <button onClick={() => setCounter(counter + 1)}>Count - {counter}</button>
    </>

}

export default ButtonFunction;