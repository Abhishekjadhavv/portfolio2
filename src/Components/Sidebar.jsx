import React, { useEffect, useState,useRef} from "react";

const Sidebar = () => {

  // useState here -----
  const [activeLink, setActiveLink] = useState('Home');

  const sidebarRef = useRef(null);
  

  //  ------- this method is use to show the DropdownMenu ----
  const showDropdownMenu = () => {
    document.querySelector(".dropdown-menu").classList.toggle("active");
  }
  // ---- this method is use to toggle the mode ---
  const lightMode = () => {
    localStorage.setItem("mode", 'light');
    document.body.classList.remove("active")
    document.querySelector(".dropdown-menu").classList.remove("active");
  }

  const darkMode = () => {
    localStorage.setItem("mode", 'dark');
    document.body.classList.add("active")
    document.querySelector(".dropdown-menu").classList.remove("active");
  }

  useEffect(() => {
    const currentMode = localStorage.getItem('mode');
    currentMode === "light" ? lightMode() : darkMode();

    // ----- remove sidebar ---
    const menuBar = document.querySelector(".menu-bar svg")
    const dropdownToggleBtn = document.querySelector(".dropdown-toggle")
    const handleOutsideClick = (event) => {
      if (sidebarRef.current && event.target !== menuBar && event.target !==  dropdownToggleBtn) {
         document.querySelector(".Sidebar").classList.remove("active")
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [])


  useEffect(() => {
    const handleScroll = () => {
      const homePos = document.getElementById('Home').offsetTop;
      const aboutPos = document.getElementById('About').offsetTop;
      const servicesPos = document.getElementById('Services').offsetTop;
      const portfolioPos = document.getElementById('Portfolio').offsetTop;
      const contactPos = document.getElementById('Contact').offsetTop;
      const scrollPos = window.scrollY;

      if (scrollPos >= homePos && scrollPos <= aboutPos) {
        setActiveLink('Home');
      } else if (scrollPos >= aboutPos && scrollPos <= servicesPos) {
        setActiveLink('About');
      }
      else if (scrollPos >= servicesPos && scrollPos <= portfolioPos) {
        setActiveLink('Services');
      }
      else if (scrollPos >= portfolioPos && scrollPos <= contactPos) {
        setActiveLink('Portfolio');
      }
      else{
        setActiveLink('Contact');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  return (
    <div className='Sidebar flex flex-col' ref={sidebarRef}>
      <div className="logo align-center justify-center">
        <svg
          width="25"
          height="25"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14.493 3.897a.598.598 0 0 0-.397-.75.6.6 0 0 0-.75.397l-4.8 15.6a.6.6 0 0 0 1.147.353l4.8-15.6ZM7.744 6.895a.6.6 0 0 1 0 .85L3.968 11.52l3.776 3.775a.6.6 0 0 1-.85.85l-4.2-4.2a.6.6 0 0 1 0-.85l4.2-4.2a.6.6 0 0 1 .85 0Zm7.55 0a.599.599 0 0 0 0 .85l3.777 3.775-3.776 3.775a.604.604 0 0 0 0 .85.599.599 0 0 0 .85 0l4.2-4.2a.6.6 0 0 0 0-.85l-4.2-4.2a.6.6 0 0 0-.85 0Z"></path>
        </svg>
        <b>
          Abh<span>i</span>
        </b>
      </div>
      <ul className="main-menu flex justify-center flex-col">
        <li className={activeLink === "Home" ? 'active' : ''}>
          <a href="#Home" className="flex justify-center flex-col align-center">
            <span className="flex align-center justify-center">
              <svg
                width="36"
                height="36"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.905 3.295a.6.6 0 0 0-.85 0l-7.2 7.2a.6.6 0 0 0-.175.425v8.4a.6.6 0 0 0 .6.6h5.4a.6.6 0 0 0 .6-.6v-4.8h2.4v4.8a.6.6 0 0 0 .6.6h5.4a.6.6 0 0 0 .6-.6v-8.4a.602.602 0 0 0-.175-.425L18.48 8.872V4.92a.6.6 0 0 0-.6-.6h-1.2a.6.6 0 0 0-.6.6v1.552l-3.175-3.177ZM5.88 18.72v-7.55l6.6-6.6 6.6 6.6v7.551h-4.2v-4.8a.6.6 0 0 0-.6-.6h-3.6a.6.6 0 0 0-.6.6v4.8h-4.2Z"></path>
              </svg>
            </span>
            <span>Home</span>
          </a>
        </li>
        <li className={activeLink === "About" ? 'active' : ''}>
          <a
            href="#About"
            className="flex justify-center flex-col align-center"
          >
            <span className="flex align-center justify-center">
              <svg
                width="36"
                height="36"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 12a3.6 3.6 0 1 0 0-7.2 3.6 3.6 0 0 0 0 7.2Zm2.4-3.6a2.4 2.4 0 1 1-4.801 0 2.4 2.4 0 0 1 4.8 0Zm4.8 9.6c0 1.2-1.2 1.2-1.2 1.2H6s-1.2 0-1.2-1.2S6 13.2 12 13.2s7.2 3.6 7.2 4.8Zm-1.2-.005c-.001-.295-.185-1.183-.999-1.997C16.22 15.216 14.747 14.4 12 14.4c-2.748 0-4.22.816-5.002 1.598-.813.814-.996 1.702-.998 1.997h12Z"></path>
              </svg>
            </span>
            <span>About</span>
          </a>
        </li>
        <li className={activeLink === "Services" ? 'active' : ''}>
          <a
            href="#Services"
            className="flex justify-center flex-col align-center"
          >
            <span className="flex align-center justify-center">
              <svg
                width="36"
                height="36"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.2 3.96a1.8 1.8 0 0 0-1.8 1.8v.6H4.2a1.8 1.8 0 0 0-1.8 1.8v9.6a1.8 1.8 0 0 0 1.8 1.8h15.6a1.8 1.8 0 0 0 1.8-1.8v-9.6a1.8 1.8 0 0 0-1.8-1.8h-4.2v-.6a1.8 1.8 0 0 0-1.8-1.8h-3.6Zm0 1.2h3.6a.6.6 0 0 1 .6.6v.6H9.6v-.6a.6.6 0 0 1 .6-.6Zm2.264 8.297L20.4 11.34v6.419a.6.6 0 0 1-.6.6H4.2a.6.6 0 0 1-.6-.6v-6.42l7.937 2.117c.304.08.623.08.927 0ZM4.2 7.56h15.6a.6.6 0 0 1 .6.6v1.94l-8.245 2.198a.602.602 0 0 1-.31 0L3.6 10.099V8.16a.6.6 0 0 1 .6-.6Z"></path>
              </svg>
            </span>
            <span>Services</span>
          </a>
        </li>
        <li className={activeLink === "Portfolio" ? 'active' : ''}>
          <a
            href="#Portfolio"
            className="flex justify-center flex-col align-center"
          >
            <span className="flex align-center justify-center">
              <svg
                width="36"
                height="36"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.4 4.56a1.2 1.2 0 0 1 1.2-1.2h16.8a1.2 1.2 0 0 1 1.2 1.2v14.4a1.2 1.2 0 0 1-1.2 1.2H3.6a1.2 1.2 0 0 1-1.2-1.2V4.56Zm10.2 0v9.6h7.8v-9.6h-7.8Zm0 10.8v3.6h7.8v-3.6h-7.8Zm-1.2-10.8H3.6v3.6h7.8v-3.6Zm-7.8 14.4h7.8v-9.6H3.6v9.6Z"></path>
              </svg>
            </span>
            <span>Portfolio</span>
          </a>
        </li>
        <li className={activeLink === "Contact" ? 'active' : ''}>
          <a
            href="#Contact"
            className="flex justify-center flex-col align-center"
          >
            <span className="flex align-center justify-center">
              <svg
                width="36"
                height="36"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.567 3.66a.848.848 0 0 0-1.269-.078L4.006 4.875c-.604.605-.826 1.462-.563 2.213a21.96 21.96 0 0 0 5.21 8.26 21.961 21.961 0 0 0 8.26 5.21c.752.264 1.608.041 2.213-.563l1.292-1.292a.85.85 0 0 0-.078-1.269l-2.884-2.242a.849.849 0 0 0-.725-.153l-2.738.684a2.181 2.181 0 0 1-2.07-.574l-3.07-3.071a2.181 2.181 0 0 1-.576-2.071l.685-2.738a.848.848 0 0 0-.152-.725L6.567 3.66ZM4.355 2.64a2.181 2.181 0 0 1 3.265.203l2.242 2.882a2.18 2.18 0 0 1 .394 1.868l-.684 2.737a.847.847 0 0 0 .223.804l3.07 3.071a.848.848 0 0 0 .806.223l2.736-.684a2.181 2.181 0 0 1 1.868.394l2.882 2.242a2.18 2.18 0 0 1 .204 3.264l-1.293 1.293c-.925.925-2.307 1.33-3.596.877A23.292 23.292 0 0 1 7.71 16.29a23.292 23.292 0 0 1-5.525-8.761c-.453-1.288-.047-2.671.878-3.596L4.356 2.64h-.001Z"></path>
              </svg>
            </span>
            <span>Contact</span>
          </a>
        </li>
      </ul>
      <div className="theme-btn dropdown ">
        <button className="btn dropdown-toggle" onClick={showDropdownMenu}>
          <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 20.75a8.75 8.75 0 0 0 0-17.5v17.5ZM12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20Z"></path>
          </svg>
        </button>
        <ul className="dropdown-menu dropdown-menu-end ">
          <li className="flex align-center" onClick={lightMode}>
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-15a.625.625 0 0 1 .625.625v2.5a.625.625 0 1 1-1.25 0v-2.5A.625.625 0 0 1 12 2Zm0 16.25a.624.624 0 0 1 .625.625v2.5a.624.624 0 1 1-1.25 0v-2.5A.624.624 0 0 1 12 18.25ZM22 12a.624.624 0 0 1-.625.625h-2.5a.624.624 0 1 1 0-1.25h2.5A.624.624 0 0 1 22 12ZM5.75 12a.625.625 0 0 1-.625.625h-2.5a.625.625 0 1 1 0-1.25h2.5A.625.625 0 0 1 5.75 12Zm13.321-7.071a.625.625 0 0 1 0 .883l-1.767 1.77a.626.626 0 0 1-.884-.886l1.767-1.767a.625.625 0 0 1 .884 0ZM7.58 16.42a.625.625 0 0 1 0 .884L5.812 19.07a.625.625 0 0 1-.883-.884l1.767-1.767a.625.625 0 0 1 .884 0Zm11.491 2.651a.625.625 0 0 1-.884 0l-1.767-1.767a.625.625 0 0 1 .884-.884l1.767 1.767a.625.625 0 0 1 0 .884ZM7.58 7.581a.625.625 0 0 1-.884 0L4.93 5.812a.625.625 0 1 1 .883-.883L7.58 6.696a.625.625 0 0 1 0 .885Z"></path>
            </svg>
            <span>Light</span>
          </li>
          <li className="flex align-center" onClick={darkMode}>
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.5 2.348a.96.96 0 0 1 .1 1.072 9.01 9.01 0 0 0-1.098 4.325c0 5.026 4.098 9.096 9.148 9.096.659 0 1.3-.068 1.916-.2a.984.984 0 0 1 1.013.395.916.916 0 0 1-.039 1.117A10.436 10.436 0 0 1 12.43 22C6.668 22 2 17.358 2 11.638 2 7.333 4.643 3.64 8.405 2.075a.94.94 0 0 1 1.095.273Z"></path>
              <path d="M15.492 5.935a.271.271 0 0 1 .515 0l.484 1.453a2.17 2.17 0 0 0 1.372 1.37l1.452.485a.271.271 0 0 1 0 .515l-1.453.483a2.167 2.167 0 0 0-1.37 1.372l-.485 1.452a.271.271 0 0 1-.515 0l-.483-1.452a2.166 2.166 0 0 0-1.372-1.372l-1.452-.483a.271.271 0 0 1 0-.515l1.452-.484a2.168 2.168 0 0 0 1.372-1.371l.483-1.453Zm3.837-3.811a.182.182 0 0 1 .342 0l.323.967c.143.433.482.772.915.915l.967.323a.181.181 0 0 1 0 .342l-.967.323a1.445 1.445 0 0 0-.915.915l-.323.967a.18.18 0 0 1-.342 0l-.323-.967a1.445 1.445 0 0 0-.915-.915l-.967-.323a.181.181 0 0 1 0-.342l.967-.323a1.44 1.44 0 0 0 .915-.915l.323-.966v-.001Z"></path>
            </svg>
            <span>Dark</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
