import React from 'react'
import styles from './LogOutButton.module.css';
import { supabase } from '../../supabaseClient';
import { useDispatch } from 'react-redux';
import { clearUserDataAction } from '../../store/authReducer'

const LogOutButton = ({children}) => {

  const dispatch = useDispatch()

  async function signOut() {
    const { error } = await supabase.auth.signOut()
    dispatch(clearUserDataAction())
  }

  return (
    <button type="button" onClick={signOut}  className={styles.btn} >
        {children}
    </button>
  )
}

export default LogOutButton
