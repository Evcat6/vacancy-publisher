import React from 'react';
import styles from './JobBoard.module.css';
import { useSelector } from 'react-redux';
import { VacancyItem } from '../../components'

const JobBoard = () => {

  const vacancies = useSelector(state => state.jobs.jobs)

  return (
    <section className={styles.container} >
      {
        vacancies.length > 0? vacancies.map(e => (
          <VacancyItem 
            rec_name={e.rec_name} 
            rec_email={e.contact_email} 
            rec_phone={e.phone_number} 
            experience={e.work_experience} 
            work_stack={e.work_stack} 
            salary={e.salary} 
            date={e.created_at} 
            key={e.id}  
          />
        ))
        :
        <h1 className={styles.no_vacancies} >No vacancies Yet</h1>
      }
    </section>
  )
}

export default JobBoard;
