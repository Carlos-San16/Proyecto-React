/* Asi se hacia en la manera antigua
 const element = document.createElement('h1')
element.innerText ='Hola React'
const container = document.getElementById('root')
container.appendChild(element) */

import React from 'react'
import ReactDOM from 'react-dom'
//Creo un objeto con 2 termino
const user = { 
    firstName: 'Carlos',
    lastName: 'Sandoval',
    avatar: 'https://www.beahero.gg/wp-content/uploads/2019/09/mobpsychothumb.jpg'
  };
// creo una funcion para llamar los terminos del objeto
function formatName(user) { 
    return user.firstName + ' ' + user.lastName;
  }

  function condicional(user) {
      if(user){
        return <h1>Hola {formatName(user)} </h1>
      }
      return <h1>Hola estraño</h1>
  }

const element = (
    <div>
        <h1>{condicional(user)}</h1>
        <img src={user.avatar} />;
    </div>
)
const container = document.getElementById('root')

ReactDOM.render(element, container)