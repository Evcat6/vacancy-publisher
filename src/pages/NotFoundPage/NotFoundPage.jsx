import styles from './NotFoundPage.module.css';
import { ErrorButton } from '../../components'

const NotFoundPage = () => {
  return (
    <section className={styles.container} > 
      <h1 className={styles.title} >Error <span className='bold' >404</span> Page not found <span className={styles.emoji} >:(</span></h1>
      <ErrorButton>Go to Job Board</ErrorButton>
    </section>
  )
}

export default NotFoundPage;
