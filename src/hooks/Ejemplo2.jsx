/**
 * Ejemplo de uso de:
 * useState
 * useRef
 * useEffect
 */
import React, {useState, useRef, useEffect} from 'react';

const Ejemplo2 = () => {

    /**
     * Creamos dos contadores distintos con efectos diferentes
     */

    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    // Creamos un useRef para asociar con una variable del Dom

    const miRef = useRef();

    const incrementar1 = () => {
        setContador1(contador1 + 1)

    };
    const incrementar2 = () => {
        setContador2(contador2 + 1)

    };

    /** Trabajando con useEffect */

    /**
     * ? Caso 1: ejecutar siempre un snippet de cod.
     * Cada vez que cambie el estado del componente
     * se ejecuta aquello que esté dentro del useEffect
     */

    // useEffect(() => {
    //     console.log('cambio en el estado del componente')
    //     console.log('Mostrando referencia al elemento del DOM')
    //     console.log(miRef)
       
    // });
    /**
     * ? Caso 2: cambio en el estado del contador 1 y el contador 2
     * No se modifica cuando cambiar el contador 2
     */

    useEffect(() => {
        console.log('cambio en el estado del contador 1');
        console.log('Mostrando referencia al elemento del DOM');
        console.log(miRef)

        
    }, [contador1,contador2]);




    return (
        <div>
            <h1>Ejemplo de useState, useRef, useEffect</h1>
            <h2>Contador 1: {contador1}</h2>
            <h2>Contador 2: {contador2}</h2>
            {/* Elemento referenciado */}
            <h4 ref={miRef}>
                Ejemplo de elemento referenciado
            </h4>
            {/* Botones para cambiar los contadores */}
            <div>
                <button onClick={incrementar1}>Incrementar Contador 1</button>
                <button onClick={incrementar2}>Incrementar Contador 2</button>
            </div>
        </div>
    )
}

export default Ejemplo2