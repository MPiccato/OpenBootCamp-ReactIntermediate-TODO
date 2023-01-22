import React, {useState, useEffect} from 'react';
import { LEVELS } from '../../models/levels.enum';
import {Task} from '../../models/task.class';
import TaskComponent from '../pure/task';

import '../../styles/task.scss'

const TaskListComponent = () => {


    const defaultTask = new Task('Ejemplo 1', 'Default Description',true,LEVELS.NORMAL)
    
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
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h5>Your Task</h5>
                    </div>
                </div>
                {/* Card Body (content) */}
                <div className='card-body' data-mdb-perfect-scrollbar='true' style={ {position:'relative', height:'400px' } }>
                    <table>
                        <thead>
                            <tr>
                                <th scope='col'>Title</th>
                                <th scope='col'>Description</th>
                                <th scope='col'>Priority</th>
                                <th scope='col'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* TODO: iterar sobre una lista de tareas */}
                            <TaskComponent task={defaultTask}/>
                        </tbody>
                        
                    </table>
                </div>
            
            </div>
            
            
        </div>
    )
}

export default TaskListComponent;