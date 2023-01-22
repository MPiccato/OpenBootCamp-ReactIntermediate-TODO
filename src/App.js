import logo from './logo.svg';
import './App.css';
// import Greeting from './components/pure/Greeting';
//import GreetingF from './components/pure/GreetingF';
//import TaskListComponent from './components/container/task_list';
//import Ejemplo1 from './hooks/Ejemplo1';
//import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente Greeting JSX */}
        {/* <Greeting name="Martin"/> */}
        {/* Componente funcional de Greeting */}
        {/* <GreetingF name="Martin"/>         */}
        
          {/* Componente de listado de tareas  */}
        {/* <TaskListComponent/> */}
        {/* Ejemplo de useState */}
        {/* <Ejemplo1/> */}
        {/* Ejemplo 2 de uso de useState, useRef, useEffect */}
        {/* <Ejemplo2/> */}
        {/* Ejemplo3 con useContext */}
        <MiComponenteConContexto/>

      </header>
    </div>
  );
}

export default App;
