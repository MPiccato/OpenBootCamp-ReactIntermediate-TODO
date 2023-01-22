import React, {useState} from 'react';
// Definiendo estilos en constantes

const loggedStyle = {
    color: 'white'
};

// ? Estilo para usuario no logueado

const unLoggedStyle = {
    color: 'tomato',
    fontWeight: 'bold'
};

// Generamos un estado para controlar si el usuario esta logueado





const GreetingStyled = (props) => {

    const [logged, setLogged] = useState(false);
  

    return (
        <div style= {logged ? loggedStyle : unLoggedStyle}>
            {logged ? 
                (<p>Hola, {props.name}</p>)
                :
                (<p>Por favor logueate</p>)    
            }
            
            
            <button onClick={()=> setLogged(!logged)} >
                {logged ? 'LogOut' : 'LogIn'}
            </button>
            
        </div>
    )
}

export default GreetingStyled