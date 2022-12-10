import React from 'react'
import styles from './LogOutButton.module.css';
import { supabase } from '../../supabaseClient';

const LogOutButton = ({children}) => {

  const userToken = JSON.parse(localStorage.getItem(import.meta.env.VITE_APP_STORAGE_KEY));

  async function signOut() {
    await supabase.auth.signOut(userToken.access_token)
    window.location.reload(true);
  }

  return (
    <button type="button" onClick={signOut}  className={styles.btn} >
        {children}
    </button>
  )
}

export default LogOutButton
