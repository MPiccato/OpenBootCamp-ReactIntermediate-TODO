/**
 * Componente que contendrá formulario para autenticar usuarios
 */

import React, {useState} from 'react'

const LoginForm = () => {

    const initialCredentials = [
        {
            user: '',
            password: ''
        }
    ];

    const [credentials, setCredentials] = useState(initialCredentials);

    return (
        <div>loginForm</div>
    )
}

export default LoginForm