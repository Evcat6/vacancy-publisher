import React from 'react'
import styles from './Input.module.css'

const Input = ({label, type, name, placeholder, labelStyle = 'default', ...props}) => {

  const style = {
    color: labelStyle === "default" 
    ? 
    "black" 
    : 
    labelStyle === "signUp"
    ? 
    '#DDDDDD' 
    : 
    labelStyle === "signIn"
    ?
    '#4F7CAC' 
    : 
    ""
  }

  return (
    <div className={styles.input} >
    <label 
      className={styles.label} 
      style={style}
    >
      {label}
    </label>
    <input 
      className={styles.input_body} 
      type={type} {...props} 
      placeholder={placeholder} 
      name={name} 
      required
    />
    </div>
  )
}

export default Input;
