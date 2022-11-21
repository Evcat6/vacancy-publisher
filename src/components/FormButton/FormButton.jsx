import styles from './FormButton.module.css';

const FormButton = ({children, colorType = "login"}) => {

  const style = {
    backgroundColor: colorType === 'login'? '#4F7CAC' : '#DDDDDD',
    color: colorType === 'login'? '#DDDDDD' : '#4F7CAC'
  }

  return (
    <div className={styles.btn} >
    <button className={styles.button}  style={style} type="submit" >{children}</button>
    </div>
  )
}

export default FormButton
