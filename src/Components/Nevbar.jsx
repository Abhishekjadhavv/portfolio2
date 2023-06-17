import React from 'react'

const Nevbar = ({toggleSiderBar}) => {
  return (
    <div className='navbar flex justify-between'>
         <div className="logo flex align-center justify-center">
            <svg width="25" height="25" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.493 3.897a.598.598 0 0 0-.397-.75.6.6 0 0 0-.75.397l-4.8 15.6a.6.6 0 0 0 1.147.353l4.8-15.6ZM7.744 6.895a.6.6 0 0 1 0 .85L3.968 11.52l3.776 3.775a.6.6 0 0 1-.85.85l-4.2-4.2a.6.6 0 0 1 0-.85l4.2-4.2a.6.6 0 0 1 .85 0Zm7.55 0a.599.599 0 0 0 0 .85l3.777 3.775-3.776 3.775a.604.604 0 0 0 0 .85.599.599 0 0 0 .85 0l4.2-4.2a.6.6 0 0 0 0-.85l-4.2-4.2a.6.6 0 0 0-.85 0Z"></path>
            </svg>
            <b>Abh<span>i</span></b>
        </div>
        <div className="menu-bar" onClick={toggleSiderBar}>
            <svg width="30" height="30" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
               <path fillRule="evenodd" d="M4.92 17.28a.6.6 0 0 1 .6-.6h12a.599.599 0 1 1 0 1.2h-12a.6.6 0 0 1-.6-.6Zm0-4.8a.6.6 0 0 1 .6-.6h12a.599.599 0 1 1 0 1.2h-12a.6.6 0 0 1-.6-.6Zm0-4.8a.6.6 0 0 1 .6-.6h12a.6.6 0 1 1 0 1.2h-12a.6.6 0 0 1-.6-.6Z" clipRule="evenodd"></path>
            </svg>
        </div>
    </div>
  )
}

export default Nevbar