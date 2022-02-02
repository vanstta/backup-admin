import React from 'react';
import './admin.scss';
import { admin } from '../../actions/admin'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux' 

const AdminProfile = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.admin.users)
  const title = useSelector((state) => state.admin.titles)
  console.log(user)
  console.log(title)

  useEffect(() => {
    const mostrarData = () => {
      dispatch(admin())
    }
    mostrarData()
  },[])

  return user ? (
    <>
      <h2 className='mi-perfil'>{title.profile}</h2>
      <div className='contenedor-card'>
        <div className='contenedor-foto'>
          <img className= 'foto-perfil' src={user.picture} alt='persona' />
        </div>
        <div className='contenedor-perfil'>
          <div className='perfil'>
            <h2>{user.name} {user.lastname}</h2>
              <p className='dato-perfil admin'>{user.position}</p>
              <p className='dato-perfil upper'>{title.email}</p>
              <p className='info-perfil'>{user.email}</p>
              <p className='dato-perfil upper'>{title.phone}</p>
              <p className='info-perfil'>{user.cell}</p>
              <p className='dato-perfil upper'>{title.linkedin}</p>
              <p className='info-perfil'>{user.linkedin}</p>
          </div>
        </div>
      </div>
      </>
  ) : null
};

export default AdminProfile;
