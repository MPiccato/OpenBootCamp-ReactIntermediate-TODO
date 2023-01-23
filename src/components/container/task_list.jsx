import React, {useState, useEffect} from 'react';
import { LEVELS } from '../../models/levels.enum';
import {Task} from '../../models/task.class';
import TaskComponent from '../pure/task';

import '../../styles/task.scss'
import TaskForm from '../pure/forms/taskForm';

const TaskListComponent = () => {


    const defaultTask1 = new Task('Ejemplo 1', 'Default Description 1',true,LEVELS.NORMAL)
    const defaultTask2 = new Task('Ejemplo 2', 'Default Description 2',false,LEVELS.URGENT)
    const defaultTask3 = new Task('Ejemplo 3', 'Default Description 3',true,LEVELS.BLOCKING)
    
    //Estado del Componente
    const [tasks, setTasks]= useState([defaultTask1, defaultTask2, defaultTask3]);
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

                            {tasks.map ((task,index) => {
                                return (
                                    <TaskComponent 
                                        key = {index} 
                                        task={task}
                                        
                                    />
                                )
                            })}
                            
                        </tbody>
                        
                    </table>
                </div>
                <TaskForm/>
            
            </div>
            
            
        </div>
    )
}

export default TaskListComponent;