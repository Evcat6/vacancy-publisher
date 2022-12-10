import React, { useEffect } from 'react'
import styles from './AuthPage.module.css';
import { SignUp, Login } from '../../components'
import icon from '../../assets/vacancy.svg'

const AuthPage = () => {

  useEffect(() => {
    localStorage.clear();
  }, [])

  return (
    <section className={styles.container}>
      <div className={styles.title_group} >
        <h1 className={styles.title} >Vacancy <span className={styles.left_part}>Publisher</span></h1>
        <img className={styles.img} src={icon} width='70' />
        </div>
      <main className={styles.form_group} >
        <SignUp/>
        <Login/>
      </main>
    </section>
  )
}

export default AuthPage
