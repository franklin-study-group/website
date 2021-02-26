import React, { useState } from 'react';
import Tutor from './tutor'
import styles from '../styles/register.module.css';
import Finished from './Finished'

const InputForm = () => {
  const [ifCompleted, setIfCompleted] = useState(false)
  const [ifError, setIfError] = useState(false)
  var [person, setPerson] = useState({id:1, name: '', bio: '', pic: '', email: ''})

  const handleSubmit = (event) =>{
    event.preventDefault()

    var check = true
    Object.keys(person).forEach(function (k){
      if (!person[k]) {
          check = false
      }
    })

    if (check){
      console.log(person)
      setIfCompleted(true)
      setTimeout(()=>{ setIfCompleted(false) }, 4000);
      setPerson({id:1, name: '', bio: '', pic: '', email: ''})
    }
    else{
      setIfError(true)
      setTimeout(()=>{ setIfError(false) }, 4000);
    }
  }

  const handleChange = (event) =>{
    const name = event.target.name
    const value = event.target.value
    setPerson({...person, [name]: value})
  }
  
  return <>
      <div>
        <article className={styles.single_tutor}>
          <form className={styles.form} onSubmit={handleSubmit}>
            
            <div className={styles.form_control}>
              <label htmlFor="firstName">Name: </label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={person.name}
                onChange={handleChange}
              />
            </div>

            <div className={styles.form_control}>
              <label htmlFor="email">Email: </label>
              <input 
                type="text" 
                id="email" 
                name="email" 
                value={person.email}
                onChange={handleChange} 
              />
            </div>

            <div className={styles.form_control}>
              <label htmlFor="bio">Bio: </label>
              <input 
                type="text" 
                id="bio" 
                name="bio" 
                value={person.bio}
                onChange={handleChange}
              />
            </div>

            <div className={styles.form_control}>
              <label htmlFor="camera">Link: </label>
              <input 
                type="text" 
                id="pic" 
                name="pic"
                value={person.pic}
                onChange={handleChange}
              />
            </div>

            <button type="submit" onClick={handleSubmit}>add Person</button>
          
          </form>

          {ifCompleted && <Finished text='Finished!'/>}
          {ifError && <Finished text='All Fields must be Completed'/>}
        </article>
      </div>

      <Tutor key={person.id} {...person}/>
  </>
};

export default InputForm;
