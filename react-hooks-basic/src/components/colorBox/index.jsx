import React, { useState } from 'react';
import './ColorBox.scss';

ColorBox.propTypes = {
    
};
function getRandomColor(){
  const ColorList= ['deeppink','green','yellow','black','blue'];
  const randomIndex = Math.trunc(Math.random()*5);
  return ColorList[randomIndex];
}

function ColorBox() {
    
    // const unitColor = localStorage.getItem('box_color') || 'deeppink';
    // const[color, setColor]=useState(unitColor);
    
    const[color, setColor]=useState(()=>{
        const unitColor = localStorage.getItem('box_color') || 'deeppink';
        return unitColor;
    });

    function handleBoxClick(){
        const newColor=getRandomColor();
        setColor(newColor);
        localStorage.setItem('box_color', newColor);
    }
    return (
        <div 
        className='color-box' 
        style={{backgroundColor:color}} 
        onClick = {handleBoxClick}>
        </div>
    );
}

export default ColorBox;