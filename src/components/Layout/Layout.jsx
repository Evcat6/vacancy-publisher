import React from 'react'
import { Outlet } from 'react-router-dom'
import styles from './Layout.module.css';
import { CustomNavLink, LogOutButton } from '..'
import { useSelector } from 'react-redux';

const Layout = () => {

  const userToken = useSelector(state => state.auth.token)

  return (
    <section>
      <header className={styles.header} >
        <nav className={styles.nav} >
          <ul className={styles.link_list} >
            <li className={styles.link} >
              <CustomNavLink to='/' >Job Board</CustomNavLink>
            </li>
            {userToken?
              <li className={styles.link} >
              <CustomNavLink to='vacancy-form' >Vacancy Form</CustomNavLink>
              </li> 
              :
              <li className={styles.link} >
              <CustomNavLink to='/auth' >Login Page</CustomNavLink>
            </li>
            }
          </ul>
          {
            userToken &&
            <div className={styles.log_out} >
              <LogOutButton>Log Out</LogOutButton>
            </div>
          }
        </nav>
      </header>
      <Outlet/>
    </section>
  )
}

export default Layout;
