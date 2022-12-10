import { useState } from 'react';
import { Input, FormButton } from '..'
import styles from './Login.module.css';
import { supabase } from '../../supabaseClient';
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate()

  const fields = {
    email: "",
    password: "",
  }

  const [field, setField] = useState(fields)


  const signIn = async(e) => {
    e.preventDefault();

    if(!field.email || !field.password) {
      return alert('Please fill all inputs');
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email: field.email,
      password: field.password
    })

    if(error !== null && error.message === "Invalid login credentials") {
      return alert('Wrong email or password')
    }


    if(error === null) {
      navigate('/vacancy-form')
    }

    window.location.reload(true);
  }
  
  const updateFields = (e) => {
    setField({...field, [e.target.name]: e.target.value})
  }

  return (
    <form className={styles.form} onSubmit={(e) => signIn(e)} >
      <div className={styles.input_group} >
        <Input 
          label="Enter your Email" 
          type="email"
          name="email"
          labelStyle="signIn"
          placeholder='Enter your email'
          onChange={(e) => updateFields(e)}
        />
        <Input
          label="Enter your password"
          type="password"
          name="password"
          labelStyle="signIn"
          placeholder='Enter your password'
          onChange={(e) => updateFields(e)}
        />
      </div>
      <FormButton colorType='login' >Sign In</FormButton>
    </form>
  )
}

export default Login
