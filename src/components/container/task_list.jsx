import React, {useState, useEffect} from 'react';
import { LEVELS } from '../../models/levels.enum';
import {Task} from '../../models/task.class';
import TaskComponent from '../pure/task';

const TaskListComponent = () => {


    const defaultTask = new Task('Ejemplo 1', 'Default Description',false,LEVELS.NORMAL)
    
    //Estado del Componente
    const [tasks, setTasks]= useState(defaultTask);
    const [loading, setLoading] = useState(true)

    //Control del ciclo de vida
    useEffect(() => {
        console.log('modificando tareas');
        setLoading(false)
        return () => {
            console.log('Tareas por desaparecer')
        }
        
    }, [tasks]);

    const changeCompleted = (id) => {
        console.log('Controlando el estado completado')
    }


    
   

    return (
        <div>
            <div>
               <h1>Your Task</h1> 
            </div>
            {/* Aplicar un map para renderizar una lista */}
            <TaskComponent task={defaultTask}/>
        </div>
    )
}

export default TaskListComponent;