import React from 'react';

const Child = ({ name }) => {

    const pressButton = () => {
        alert(`Default text`);

    }
    const pressButtonParams = (text) => {
        alert(`Text: ${text}`);

    }
    
    return (
        <div>
            <p onMouseOver={()=> console.log('ONMOUSE OVER')}>Child Component</p>
            <button 
                onClick={()=> console.log('Botón 1 pulsado')
            }>
                Botón 1
            </button>
            <button 
                onClick={pressButton}  
            >
                Botón 2
            </button>
            <button 
                onClick={()=>pressButtonParams('Hola')}  
            >
                Botón 3
            </button>
            <input 
                type="text" 
                placeholder='Inserte un texto' 
                onFocus={() => console.log('Input Focus')} 
                onChange={(e)=> console.log('Input changed:', e.target.value)}
                onCopy={()=> console.log('Texto copiado desde input')}
                
            />
        </div>
    )
}

export default Child;