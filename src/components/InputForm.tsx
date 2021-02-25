import React, { useState } from 'react';
import data from '../pages/RegisterPage/data'
import Tutor from './tutor'
import styles from '../styles/register.module.css';

const InputForm = () => {
  const [firstName, setFirstName] = useState(data.name)
  const [firstBio , setBio] = useState(data.bio)
  const [firstPic , setPic] = useState(data.pic)
  const handleSubmit = (event) =>{
    event.preventDefault()
    console.log(data)
  }
  
  return <>
    <article className={styles.single_tutor}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.form_control}>
          <label htmlFor="firstName">Name: </label>
          <input 
            type="text" 
            id="firstName" 
            name="firstName" 
            value={firstName}
            onChange={(event)=>{
              setFirstName(event.target.value)
              data.name = event.target.value
            }}
          />
        </div>

        <div className={styles.form_control}>
          <label htmlFor="email">Bio: </label>
          <input 
            type="text" 
            id="firstBio" 
            name="firstBio" 
            value={firstBio}
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
            value={firstPic}
            onChange={(event)=>{
              setPic(event.target.value)
              data.pic = event.target.value
            }} 
          />
        </div>

        <button type="submit" onClick={handleSubmit}>add Person</button>
      
      </form>
    </article>

    <Tutor {...data}/>

  </>
};

export default InputForm;
