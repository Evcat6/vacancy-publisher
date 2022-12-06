import React from 'react'
import { NavLink } from 'react-router-dom';


const CustomNavLink = ({children, to, ...props}) => {

    const activeStyle = {
      textDecoration: 'none',
      color: '#4F7CAC',
      backgroundColor: 'white',
      padding: '10px',
      borderRadius: '8px'
    }
  
    const noActiveStyle = {
      textDecoration: 'none',
      color: "white",
      padding: '10px',
      borderRadius: '8px'
    }

  return (
    <NavLink
    to={to}
    {...props}
    style={({isActive}) =>
      isActive ? activeStyle : noActiveStyle
    }
    >{children}</NavLink>
  )
}

export default CustomNavLink;
