import React from 'react'
import styles from './LogOutButton.module.css';
import { supabase } from '../../supabaseClient';

const LogOutButton = ({children}) => {


  async function signOut() {
    await supabase.auth.signOut()
    localStorage.clear();
    window.location.reload(true);
  }

  return (
    <button type="button" onClick={signOut}  className={styles.btn} >
        {children}
    </button>
  )
}

export default LogOutButton
