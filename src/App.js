import logo from './logo.svg';
import './App.css';
// import Greeting from './components/pure/Greeting';
//import GreetingF from './components/pure/GreetingF';
import TaskListComponent from './components/container/task_list';

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
        <TaskListComponent/>

      </header>
    </div>
  );
}

export default App;
