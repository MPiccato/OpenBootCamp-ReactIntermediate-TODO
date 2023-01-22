import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Task} from '../../models/task.class';
import '../../styles/task.scss'
import { LEVELS } from '../../models/levels.enum';
const TaskComponent = ({ task }) => {

    useEffect(() => {
        console.log('Tarea creada')
        return () => {
            console.log(`Tarea ${task.name} está por desmontarse`)
        };
    }, [task]);

    /**
     * Function que retorna un badge dependiendo
     * del nivel de la tarea
     */
    const taskLevelBadge = () => {
        switch (task.level) {
            case LEVELS.NORMAL:
                return (
                <h6 className='mb-0'> 
                    <span className='badge bg-primary'>{task.level}</span>
                </h6>)
            case LEVELS.URGENT:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-warning'> {task.level}</span>
                    </h6>
                )
            case LEVELS.BLOCKING:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-danger'>{task.level}</span>
                    </h6>
                )
            default:
                break;
        }

    }

    /** Funcion para completar el icono que corresponde segun
     * si se completo o no la tarea
     */
    const taskIconCompleted = () => {
        if (task.completed) {
            return (<i className='bi-toggle-on' style={{color: 'green', fontWeight:'bold'}}></i>)
        } else {
            return (<i className='bi-toggle-off' style={{color:'gray'}} ></i>)
        }
         
    }

  return (

    <tr className='fw-normal'>
        <th>
           <span className='ms-2'>{task.name}</span> 
        </th>
        <td className='align-middle'>
            <span>{task.description}</span>
        </td>
        <td className='align-middle'>
            {/* Funcion que ejecuta el badge del elemento */}
            {taskLevelBadge()}
        </td>
        <td className='align-middle'>
        
            {/* Ejecucion de la funcion que dibuja el icono dependiendo del estado */}
            {taskIconCompleted()}
            <i className='bi-trash' style={{color:'tomato', fontSize:'17px'}}></i>



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