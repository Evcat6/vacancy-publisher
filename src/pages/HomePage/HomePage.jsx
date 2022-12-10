import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Input, FormButton } from '../../components';
import styles from './HomePage.module.css';
import { supabase } from '../../supabaseClient'
import { getJobList } from '../../asyncActions/jobs';

const HomePage = () => {
  const dispatch = useDispatch();
  const storage = localStorage.getItem('sb-eorfivltlacpljrejidk-auth-token');

  const storageParsed = JSON.parse(storage);

  const fields = {
    rec_name: '',
    phone_number: "",
    work_experience: '',
    work_stack: "",
    salary: ""
  }
  
  const [field, setField] = useState(fields)
  
  const updateFields = (e) => {
    setField({...field, [e.target.name]: e.target.value})
  }
  
  const updateDatabase = async(e) => {

    e.preventDefault();

    await supabase
    .from('vacancy')
    .insert({
      rec_name: field.rec_name,
      contact_email: storageParsed.user.email,
      phone_number: field.phone_number,
      work_experience: field.work_experience,
      work_stack: field.work_stack,
      salary: field.salary,
      created_at: new Date().toISOString().split('T')[0]
    })


    setField(fields)
    dispatch(getJobList())
    return alert("The vacancy has been successfully posted!")
  }


  return (
    <section className={styles.container} >
    <form className={styles.form} onSubmit={(e) => updateDatabase(e)} >
        <h1 className={styles.title} >Contact Info</h1>
      <div className={styles.contact_info} >
        <Input 
          type="text" 
          name="rec_name" 
          label="Your Name" 
          placeholder="Enter Your Name"
          value={field.rec_name} 
          onChange={(e) => updateFields(e)}
        />
        <Input 
          type="text" 
          name="phone_number" 
          placeholder="Enter Your Phone Number"
          label="Contact Phone Number" 
          value={field.phone_number} 
          onChange={(e) => updateFields(e)}
        />
      </div>
        <h1 className={styles.title} >Requirements</h1>
      <div className={styles.requirements} >
        <Input
          type="text" 
          name="work_experience" 
          label="Required work experience"  
          value={field.work_experience} 
          onChange={(e) => updateFields(e)}
          placeholder="Enter number value"
        />
        <Input 
          type="text" 
          name="work_stack" 
          label="Required work stack"  
          placeholder="Enter the required work stack"
          value={field.work_stack} 
          onChange={(e) => updateFields(e)}
        />
      </div>
        <h1 className={styles.title} >Salary</h1>
      <div className={styles.salary} >
        <Input 
          type="text" 
          name="salary" 
          label="Proposed salary" 
          placeholder="Enter number value in USD"
          value={field.salary} 
          onChange={(e) => updateFields(e)}
        /> 
      </div>
      <div className={styles.bottom_section} > 
      <FormButton>Submit</FormButton>
      </div>
    </form>
    </section>
  )
}

export default HomePage
