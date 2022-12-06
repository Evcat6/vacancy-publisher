import React from 'react'
import styles from './VacancyItem.module.css';
import PropTypes from 'prop-types';
import { RiDeleteBin7Fill } from 'react-icons/ri';

const VacancyItem = (
    {
        rec_name,
        rec_email, 
        rec_phone, 
        experience, 
        work_stack, 
        salary, 
        date, 
        user_page = false,
        deleteItem,
        ...props
    }
    ) => {

  return (
    <article className={styles.container} {...props} >
        <div className={styles.recruiter_info}>
            {
                user_page && 
                <span className={styles.clear_icon} onClick={deleteItem} ><RiDeleteBin7Fill/></span>
            }
            <h1 className={styles.title} >Recruiter Info</h1>
            <p><span className='bold'>Name: </span>{rec_name}</p>
            <p><span className='bold' >Email: </span><a className={styles.contact_link} href={`mailto:${rec_email}`} >{rec_email}</a></p>
            <p><span className='bold' >Phone Number: </span><a className={styles.contact_link}  href={`tel:${rec_phone}`} >{rec_phone}</a></p>
        </div>
        <div className={styles.dual_group}  >
            <div className={styles.requirements} >
                <h1 className={styles.title} >Requirements</h1>
                <p><span className='bold'>Work Experience: </span>{experience} years</p>
                <p><span className='bold'>Work Stack: </span>{work_stack}</p>
            </div>
            <div className={styles.salary} >
                <h1 className={styles.title} >Suggested</h1>
                <p><span className='bold'>Salary: </span>{salary}$</p>
            </div>
            <div className={styles.published} >
                <h1 className={styles.title} >Published</h1>
                <p><span className='bold' >Date: </span>{date}</p>
            </div>
        </div>
    </article>
  )
}

VacancyItem.propTypes = {
    rec_name: PropTypes.string,
    rec_email: PropTypes.string, 
    rec_phone: PropTypes.string, 
    experience: PropTypes.string, 
    work_stack: PropTypes.string, 
    salary: PropTypes.string, 
    date: PropTypes.string,
    deleteItem: PropTypes.func,
}

export default VacancyItem;
