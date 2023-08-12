import React from 'react'

export const Footer = () => {
  let styled={
    width:"100%",
    position:"relative",
    top:"20vh"
  };
 
  return (
    
    
   <footer className='bg-dark text-light py-3' style={styled}>
      <p className="text-center">
        Copyright &copy; Nirajan'sTodos.com
      </p>
   </footer>
  )
}
