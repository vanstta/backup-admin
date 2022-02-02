import React from 'react';
import { mentees } from '../../actions/mentees'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux' 
import iconoPersona from '../../assets/icono-persona.svg'
import './mentees.scss'

const MenteesList = () => {
  const dispatch = useDispatch()
  const {users} = useSelector((state) => state.mentees)

  useEffect(() => {
    const mostrarData = () => {
      dispatch(mentees())
    }
    mostrarData()
  },[])
  return users ? (
    <div>
      <h2>Nuevos orientados</h2>
    <div className='contenedor-cards-mentees'> 
      {users.slice(0,9).map((item, index)=> {
            return (
              <div 
                key={index}
                className='card-mentees'
                >
                <div> 
                  <img className='img-mentee' src={users[index].foto} /> 
                </div>
                
                <div className='p-mentees' index={index}> 
                    <p>{users[index].name}</p>
                    <p>{users[index].colegio}</p>
                </div>
                {
                  users[index].asignado[0] == 't' &&
                  <div>
                    <img 
                    src={iconoPersona}
                    className='icono-persona'
                   /> 
                  </div>
                }
              </div>
            )
      })} 
    
    </div>
    </div>
    ) : <></>;
};

export default MenteesList;
