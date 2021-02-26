import React, { useState } from 'react';
import data from '../pages/RegisterPage/data'
import Tutor from './tutor'
import styles from '../styles/register.module.css';
import Finished from './Finished'
/* import { data } from 'autoprefixer'; */

const InputForm = () => {
  const [name, setName] = useState('')
  const [bio , setBio] = useState('')
  const [pic , setPic] = useState('')
  const [email, setEmail] = useState('')
  const [ifCompleted, setIfCompleted] = useState(false)
  const [ifError, setIfError] = useState(false)

  const handleSubmit = (event) =>{
    event.preventDefault()
    if (name && bio && pic && email){
      setIfCompleted(true)
      setTimeout(()=>{ setIfCompleted(false) }, 4000);
      setBio('')
      setName('')
      setEmail('')
      setPic('')
      data.bio = '';
      data.name = '';
      data.email = '';
      data.pic = '';
    }
    else{
      setIfError(true)
      setTimeout(()=>{ setIfError(false) }, 4000);
    }
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
                value={name}
                onChange={(event)=>{
                  setName(event.target.value)
                  data.name = event.target.value
                }}
              />
            </div>

            <div className={styles.form_control}>
              <label htmlFor="email">Email: </label>
              <input 
                type="text" 
                id="email" 
                name="email" 
                value={email}
                onChange={(event)=>{
                  setEmail(event.target.value)
                  data.email = event.target.value
                }} 
              />
            </div>

            <div className={styles.form_control}>
              <label htmlFor="bio">Bio: </label>
              <input 
                type="text" 
                id="bio" 
                name="bio" 
                value={bio}
                onChange={(event)=>{
                  setBio(event.target.value)
                  data.bio = event.target.value
                }} 
              />
            </div>

            <div className={styles.form_control}>
              <label htmlFor="camera">Link: </label>
              <input 
                type="text" 
                id="pic" 
                name="pic"
                value={pic}
                onChange={(event)=>{
                  setPic(event.target.value)
                  data.pic = event.target.value
                }} 
              />
            </div>

            <button type="submit" onClick={handleSubmit}>add Person</button>
          
          </form>

          {ifCompleted && <Finished text='Finished!'/>}
          {ifError && <Finished text='All Fields must be Completed'/>}
        </article>
      </div>

      <Tutor {...data}/>
  </>
};

export default InputForm;
