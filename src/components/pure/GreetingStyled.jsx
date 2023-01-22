import React, {useState} from 'react';
// Definiendo estilos en constantes

const loggedStyle = {
    color: 'blue'
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
            <p>Hola, {props.name}</p>
            <button onClick={()=> setLogged(!logged)} >
                {logged ? 'LogOut' : 'LogIn'}
            </button>
            
        </div>
    )
}

export default GreetingStyled