import React from 'react'
import { CustomNavLink, LogOutButton } from '..'
import styles from './NavigatePanel.module.css';

const Header = () => {

  const userToken = JSON.parse(localStorage.getItem(import.meta.env.VITE_APP_STORAGE_KEY));

  return (
    <nav className={styles.nav} >
      <ul className={styles.link_list} >
        <li className={styles.link} >
          <CustomNavLink to='/' >Job Board</CustomNavLink>
        </li>
        {userToken?
          <>
            <li className={styles.link} >
            <CustomNavLink to='/vacancy-form' >Vacancy Form</CustomNavLink>
            </li>
            <li className={styles.link} >
            <CustomNavLink to='/user/user-page' >Your Vacancies</CustomNavLink>
            </li>
          </>
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
  )
}

export default Header;
