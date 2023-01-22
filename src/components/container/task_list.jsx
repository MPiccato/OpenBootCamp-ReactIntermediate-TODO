import React from 'react';
import { LEVELS } from '../../models/levels.enum';
import {Task} from '../../models/task.class';
import TaskComponent from '../pure/task';

const TaskListComponent = () => {
    
    const defaultTask = new Task('Ejemplo 1', 'Default Description',false,LEVELS.NORMAL)

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