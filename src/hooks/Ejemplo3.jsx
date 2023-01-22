/**
 * Ejemplo de useState, useContext
 */
import React, {useState, useContext} from 'react';

/**
 * 
 * Componente 1 dispone de un contexto que va a tener un valor que 
 * recibe del padre
 */
const miContexto = React.createContext(null);

const Componente1 = () => {

    const state = useContext(miContexto);

    

    return (
        <div>
            <h1>
                El token es: {state.token}
            </h1>
           
            <Componente2/>
        </div>
    )
}



const Componente2 = () => {

    const state = useContext(miContexto);

    return (
        <div>
            <h2>
                La sesión es: {state.sesion}
            </h2>
        
        </div>
    )
}


const MiComponenteConContexto = () => {

    const estadoInicial = {
        token: "1234567",
        sesion: 1
    }

    //Creamos el estado del componente

    const [sesionData, setSesionData] = useState(estadoInicial);

    const actualizarSesion = () => {
        setSesionData({
            token: 'jwt234',
            sesion: sesionData.sesion + 1
        })
    }
    
    return (
        <miContexto.Provider value={sesionData}>
        {/* Todo lo que esta aqui puede leer los datos de SesionData
         ademas si se actualizan los componentes desde aqui, se actualizan en todos */}
         <Componente1 />
         <button onClick={actualizarSesion}   >Actualizar sesión</button>

        </miContexto.Provider>
    )
}

export default MiComponenteConContexto

