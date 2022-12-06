import React from 'react';
import { VacancyItem } from '../../components';
import styles from './UserPage.module.css';
import { supabase  } from '../../supabaseClient'
import { useSelector } from 'react-redux';

const UserPage = () => {
  const user_vacancies = useSelector(state => state.jobs.jobs);
  const user_email = useSelector(state => state.auth.email);

  const vacancies = user_vacancies.filter(e => e.contact_email === user_email);


  const deleteItemFromDb = async(id) => {
    alert("Do you really want to delete this vacancy?");
    await supabase
    .from('vacancy')
    .delete()
    .eq('id', id)
  }

  return (
    <div className={styles.container} >
      {
        vacancies.length > 0? vacancies.map(e => (
          <section className={styles.vacancies_container}  >
          <VacancyItem 
            rec_name={e.rec_name} 
            rec_email={e.contact_email} 
            rec_phone={e.phone_number} 
            experience={e.work_experience} 
            work_stack={e.work_stack} 
            salary={e.salary} 
            user_page={true}
            date={e.created_at} 
            key={e.id}  
            deleteItem={() => deleteItemFromDb(e.id)}
          />
          </section>
        ))
        :
        <h1 className={styles.no_vacancies} >You haven't posted any vacancies yet</h1>
      }
    </div>
  )
}

export default UserPage;
