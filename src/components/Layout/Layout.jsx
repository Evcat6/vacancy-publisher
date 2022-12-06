import React from 'react'
import { Outlet } from 'react-router-dom'
import styles from './Layout.module.css';
import { NavigatePanel } from '..';

const Layout = () => {
  return (
    <>
      <header className={styles.header} >
        <NavigatePanel/>
      </header>
      <Outlet/>
    </>
  )
}

export default Layout;
