import '../Home/style.css'
import React, { useState } from 'react';
import { Card } from '../../Components/Card';

export function Home() {

  const [studentName, setstudentName] = useState() //isso é um estado
  const [students, setstudents] = useState([]);

  function handleAddStudents(){
      const newStudent = {
          name: studentName,
          time: new Date().toLocaleTimeString("pt-br", {
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit'
          })
      }

      setstudents(prevstate => [...students, newStudent])

  }

  return (
    <>
      <div className='container'>
            <header>
              <h1>Lista de presença</h1>

                <div>
                    <strong>Gean Andrade</strong>
                    <img src="https://github.com/PedroHenrique99.png" alt="imagem de perfil" />
                </div>

            </header>
          <input 
              type="text" 
              placeholder='Digite seu nome aqui...' 
              onChange={e => setstudentName(e.target.value)}
              />
          <button type='button' onClick={handleAddStudents}>Adicionar</button>

          {

            students.map(student => 
              <Card 
                key={student.time}
                name={student.name} 
                time={student.time}
              />)
          }

      </div>
    </>

  )
}