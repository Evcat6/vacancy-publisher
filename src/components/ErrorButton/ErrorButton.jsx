import { Link } from 'react-router-dom';
import styles from './ErrorButton.module.css';

const ErrorLink = ({children}) => {
  return <Link className={styles.btn}  to='/' >{children}</Link>
}

export default ErrorLink;
