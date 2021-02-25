import React from 'react';
import styles from '../styles/register.module.css';
const Tutor = ({id, name, pic,bio}) =>{
    const [readMore, setReadMore] = React.useState(false)
        return <div className="flexUnit"> 
        <article className={styles.single_tutor}>
            <div className={styles.image_container}>
                <img src={pic} alt={name} className={styles.special_img}/>
            </div>
            <footer className={styles.pad}>
                <div>
                    <div className={styles.contact_panel}>
                        <h4 className={styles.reg_h4}>Hi I'm {name}</h4>
                        {/* <Contacts /> */}
                    </div>
                    <p className={styles.reg_p}>{readMore ? bio: `${bio.substring(0,20)}...`}
                        <button onClick={()=>setReadMore(!readMore)}>
                        {readMore ? 'show less': 'read more'}
                        </button>
                    </p>

                    <button className={styles.btn_special}>
                        Let's Talk
                    </button>
                </div> 
            </footer>
        </article>
    </div>
}

export default Tutor