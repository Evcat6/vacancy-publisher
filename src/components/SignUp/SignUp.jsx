import React, { useState } from 'react'
import styles from './SignUp.module.css';
import { Input, FormButton } from '..'
import { supabase } from '../../supabaseClient';

const SignUp = () => {

  const fields = {
    email: "",
    password: "",
    confirmPassword: ""
  }

  const [field, setField] = useState(fields)

  const signUp = async(e) => {
    e.preventDefault();

    if(!field.email || !field.password || !field.confirmPassword) {
      return alert('Please fill all inputs');
    }

    if(field.password !== field.confirmPassword) {
      return alert("confirming Password is incorrect")
    }

    const { data, error } = await supabase.auth.signUp({
      email: field.email,
      password: field.password,
    })

    return alert("please check your email")
  }

  const updateFields = (e) => {
    setField({...field, [e.target.name]: e.target.value})
  }
  

  return (
    <form className={styles.form} onSubmit={signUp} >
      <div className={styles.input_group} >
        <Input 
          label="Enter your Email" 
          type="email"
          name="email"
          value={field.email}
          labelStyle="signUp"
          placeholder='Enter your Email'
          onChange={(e) => updateFields(e)}
        />
        <Input
          label="Enter your password"
          type="password"
          name="password"
          placeholder='Enter your password'
          value={field.password}
          labelStyle="signUp"
          onChange={(e) => updateFields(e)}
        />
        <Input
          label="Repeat your password"
          type="password"
          placeholder='Repeat your password'
          name="confirmPassword"
          labelStyle="signUp"
          value={field.confirmPassword}
          onChange={(e) => updateFields(e)}
        />
      </div>
      <FormButton colorType='signup' >Sign Up</FormButton>
    </form>
  )
}

export default SignUp;
