import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Task} from '../../models/task.class';
import '../../styles/task.scss'

const TaskComponent = ({ task }) => {

    useEffect(() => {
        console.log('Tarea creada')
        return () => {
            console.log(`Tarea ${task.name} está por desmontarse`)
        };
    }, [task]);

  return (

    <tr className='fw-normal'>
        <th>
           <span className='ms-2'>{task.name}</span> 
        </th>
        <td className='align-middle'>
            <span>{task.description}</span>
        </td>
        <td className='align-middle'>
        {/* Sustituir por un badge */}
            <span>{task.level}</span>
        </td>
        <td className='align-middle'>
        {/* Sustituir por iconos */}
            {task.completed ?
                (<i className='bi-toggle-on'></i>)
                :
                (<i className='bi-toggle-off'></i>)
            }



            {/* <span>{task.completed ? 'Completed': 'Pending'}</span> */}
        </td>

    </tr>


    // <div>
    //     <h2 className='task-name'>
    //         Nombre: { task.name }
    //     </h2>
    //     <h3>
    //         Description: { task.description }
    //     </h3>
    //     <h4>
    //         Nivel: { task.level }
    //     </h4>
    //     <h5>
    //         Esta tarea está: { task.completed ? 'Completed':'Pending' }
    //     </h5>
    
    // </div>
  )
}

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
}

export default TaskComponent;