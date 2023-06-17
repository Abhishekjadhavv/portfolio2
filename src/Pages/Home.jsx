import React from "react";
import homeImage from "../assets/abhishekImage2.png";
import abhiabout from "../assets/abhishekabout2.jpg";

// ------ resume in pdf ---
import pdfFile from "../assets/abhishekjadhav.pdf";

// ----- for downloadPdf file  ----
import { saveAs } from "file-saver";

// ----- axios here---
import axios from "axios";

// ----- formik and yup here ----
import { useFormik } from "formik";
import { object, string } from "yup";

// ------ emailjs here ----
import emailjs from "@emailjs/browser";

//  ------- ToastContainer here ----
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// ------- project images here ----
import project1 from "../assets/11.png";
import project2 from "../assets/10.png";
import project3 from "../assets/17.png";
import project4 from "../assets/rode-ing.png";
import project5 from "../assets/shopify.png";
import project6 from "../assets/13.png";
import project7 from "../assets/9.png";
import project8 from "../assets/project10.png";
import project9 from "../assets/project11.png";
import footerImg from "../assets/footerimg.png"

// ------ all dada ----
import data from "../data/portfolioData";

const images = [
   project8,
   project9,
   project1,
   project2,
   project3,
   project4,
   project5,
   project6,
   project7,
];

const Home = () => {
   // ------ useFormik here -----
   const {
      values,
      errors,
      touched,
      handleSubmit,
      handleChange,
      handleBlur,
      resetForm,
   } = useFormik({
      initialValues: {
         user_name: "",
         user_email: "",
         message: "",
      },
      validationSchema: object({
         user_name: string()
            .required("name is required")
            .min(2, "name must be at least 2 characters long"),
         user_email: string()
            .email("Invalid email")
            .required("Email is required")
            .matches(
               /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
               "Invalid email format"
            ),
         message: string()
            .required("Message is required")
            .min(25, "Message must be at least 25 characters long"),
      }),
      onSubmit: (values) => {
         emailjs
            .sendForm(
               "service_9qvb8gl",
               "template_0svi31u",
               "#myForm",
               "UkiUTXtJxRAowUuBt"
            )
            .then(
               (result) => {
                  toast.success("Email sent successfully!");
                  resetForm();
               },
               (error) => {
                  toast.error("Error sending email");
               }
            );
      },
   });

   // ------- this method is use to downloadPdf ----
   const downloadPdf = async () => {
      try {
         const response = await axios.get(pdfFile, {
            responseType: "blob", // Important: responseType should be set to 'blob'
         });

         const fileName = "abhishek.pdf"; // Set the desired file name here
         saveAs(response.data, fileName);
      } catch (error) {
         console.error("Error occurred while downloading the PDF:", error);
      }
   };

   // ------ this method is use to open modal --
   const openModal = (e) => {
      e.target.parentNode.nextElementSibling.classList.add("active");
   };

   // ----- this method is use to close the modal ----
   const closeModal = (e) => {
      e.target.parentNode.classList.remove("active");
   };

   return (
      <>
         {/* --------- Home sectio here ---- */}
         <section id="Home" className="section home-section flex align-center">
            <div className="home-image">
               <img src={homeImage} alt="homebanner" />
            </div>
            <div className="home-contain">
               <h6>👋 Hi, I’m</h6>
               <h1>Abhishek jadhav</h1>
               <h2>I'm a Developer!</h2>
               <p>
                  Passionate web Developer dedicated to delivering outstanding results and pushing the boundaries of what is possible.
                  Collaborative approach, working closely with clients to understand their unique needs and create innovative solutions.
                  Committed to continuous learning, staying updated with industry trends, and giving back to the community.
               </p>
               <button
                  className="download-btn flex align-center justify-center"
                  onClick={downloadPdf}
               >
                  <span>Download cv</span>
                  <svg
                     width="20"
                     height="20"
                     fill="currentColor"
                     viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path d="M3 14.1a.6.6 0 0 1 .6.6v3a1.2 1.2 0 0 0 1.2 1.2h14.4a1.2 1.2 0 0 0 1.2-1.2v-3a.6.6 0 1 1 1.2 0v3a2.4 2.4 0 0 1-2.4 2.4H4.8a2.4 2.4 0 0 1-2.4-2.4v-3a.6.6 0 0 1 .6-.6Z"></path>
                     <path d="M11.576 16.445a.6.6 0 0 0 .85 0l3.6-3.6a.6.6 0 1 0-.85-.85L12.6 14.572V4.02a.6.6 0 1 0-1.2 0v10.552l-2.576-2.577a.6.6 0 1 0-.85.85l3.6 3.6Z"></path>
                  </svg>
               </button>
            </div>
         </section>

         {/* ----- About Section here ---- */}
         <section id="About" className="section about-section">
            <div className="about-container grid grid-col-2">
               <div className="about-contain">
                  <div className="about-me-text">
                     <span>ABOUT ME</span>
                  </div>
                  <h3>MY NAME IS ABHISHEK JADHAV</h3>
                  <h5>I AM AVAILABLE FOR UI/UX DESIGN PROJECTS</h5>
                  <p>
                     Hello,I'M Abhishek bhagaji jadhav and I am full-stack Developer I
                     have Completed my graduation in B.Sc(Comp.Sci) at yashawantrao
                     chavan college of sillod in Dr. Babasaheb Ambedkar Marathawada
                     University,Aurangabad(2019-2022)
                  </p>
                  <div className="project-completed flex ">
                     <span className="project-number">50</span>
                     <div className="flex flex-col justify-center">
                        <span>Project</span>
                        <span>Completed.</span>
                     </div>
                  </div>
                  <hr />
                  <div className="about-me-text">
                     <span>EXPERIENCE</span>
                  </div>
                  <ul>
                     <li className="experience-cart flex">
                        <div className="experience-cart-logo">
                           <svg
                              width="34"
                              height="34"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path
                                 fillRule="evenodd"
                                 d="M14.76 6.6a3 3 0 0 0-6 0v.6h6v-.6Zm1.2 0v.6h4.2v12a2.4 2.4 0 0 1-2.4 2.4h-12a2.4 2.4 0 0 1-2.4-2.4v-12h4.2v-.6a4.2 4.2 0 0 1 8.4 0Zm-.775 6.425a.6.6 0 1 0-.85-.85l-3.175 3.177-1.375-1.376a.602.602 0 0 0-1.025.424.6.6 0 0 0 .176.425l1.8 1.8a.6.6 0 0 0 .85 0l3.6-3.6Z"
                                 clipRule="evenodd"
                              ></path>
                           </svg>
                        </div>
                        <div className="experience-cart-contain">
                           <span>2023 - Present</span>
                           <h5>Magicflare Software Services</h5>
                           <p>Designed the templates and dashboard UI.</p>
                           <p>Convert the wireframes into responsive design in react.</p>
                           <p>Integrate the Api with frontend in react.</p>
                           <p>File upload/download handling.</p>
                        </div>
                     </li>
                     <li className="experience-cart flex">
                        <div className="experience-cart-logo">
                           <svg
                              width="34"
                              height="34"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path
                                 fillRule="evenodd"
                                 d="M14.76 6.6a3 3 0 0 0-6 0v.6h6v-.6Zm1.2 0v.6h4.2v12a2.4 2.4 0 0 1-2.4 2.4h-12a2.4 2.4 0 0 1-2.4-2.4v-12h4.2v-.6a4.2 4.2 0 0 1 8.4 0Zm-.775 6.425a.6.6 0 1 0-.85-.85l-3.175 3.177-1.375-1.376a.602.602 0 0 0-1.025.424.6.6 0 0 0 .176.425l1.8 1.8a.6.6 0 0 0 .85 0l3.6-3.6Z"
                                 clipRule="evenodd"
                              ></path>
                           </svg>
                        </div>
                        <div className="experience-cart-contain">
                           <span>2022 - 2023</span>
                           <h5>Internship at iNeuron</h5>
                           <p>
                              Successfully translating design concepts into fully
                              functional websites requires attention to detail and a
                              strong understanding of front-end web development. It
                              involves working with HTML, CSS, and JavaScript to recreate
                              the visual elements and interactive components as per the
                              provided designs
                           </p>
                        </div>
                     </li>
                     <li className="experience-cart flex">
                        <div className="experience-cart-logo">
                           <svg
                              width="34"
                              height="34"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path
                                 fillRule="evenodd"
                                 d="M14.76 6.6a3 3 0 0 0-6 0v.6h6v-.6Zm1.2 0v.6h4.2v12a2.4 2.4 0 0 1-2.4 2.4h-12a2.4 2.4 0 0 1-2.4-2.4v-12h4.2v-.6a4.2 4.2 0 0 1 8.4 0Zm-.775 6.425a.6.6 0 1 0-.85-.85l-3.175 3.177-1.375-1.376a.602.602 0 0 0-1.025.424.6.6 0 0 0 .176.425l1.8 1.8a.6.6 0 0 0 .85 0l3.6-3.6Z"
                                 clipRule="evenodd"
                              ></path>
                           </svg>
                        </div>
                        <div className="experience-cart-contain">
                           <span>2021 - 2022</span>
                           <h5>Coding Experience</h5>
                           <p>
                              Understanding the client-server architecture and HTTP
                              protocol. Knowledge of asynchronous programming and AJAX
                              (Asynchronous JavaScript and XML) techniques Working with
                              APIs (Application Programming Interfaces) to fetch and
                              manipulate data Implementing browser storage mechanisms
                              (e.g., local storage, session storage, cookies).
                           </p>
                        </div>
                     </li>
                  </ul>
               </div>
               <div className="about-image">
                  <div className="about-image-container flex">
                     <div className="about-image-img">
                        <img src={abhiabout} alt="aboutImage" />
                     </div>
                     <div className="about-image-contain">
                        <ul>
                           <li className="flex align-center">
                              <a
                                 href="mailto:abhishekjadhav4553@gmail.com"
                                 target="_blank"
                                 rel="noreferrer"
                                 className="flex align-center"
                              >
                                 <div className="a-icon">
                                    <svg
                                       width="30"
                                       height="30"
                                       fill="currentColor"
                                       viewBox="0 0 24 24"
                                       xmlns="http://www.w3.org/2000/svg"
                                    >
                                       <path d="M2.46 6.666A2.4 2.4 0 0 1 4.8 4.8h14.4a2.4 2.4 0 0 1 2.34 1.866L12 12.496l-9.54-5.83Zm-.06 1.37v8.525l6.964-4.27L2.4 8.037Zm8.114 4.96L2.63 17.828A2.401 2.401 0 0 0 4.8 19.2h14.4a2.4 2.4 0 0 0 2.17-1.373l-7.884-4.832-1.486.908-1.486-.908Zm4.123-.703L21.6 16.56V8.036l-6.963 4.255v.002Z"></path>
                                    </svg>
                                 </div>
                                 <div className="a-text">
                                    <span>Mail me</span>
                                 </div>
                              </a>
                           </li>
                           <li className="flex align-center">
                              <a
                                 href="tel:7709610820"
                                 target="_blank"
                                 rel="noreferrer"
                                 className="flex align-center"
                              >
                                 <div className="a-icon">
                                    <svg
                                       width="30"
                                       height="30"
                                       fill="currentColor"
                                       viewBox="0 0 24 24"
                                       xmlns="http://www.w3.org/2000/svg"
                                    >
                                       <path d="M6.567 3.66a.848.848 0 0 0-1.269-.078L4.006 4.875c-.604.605-.826 1.462-.563 2.213a21.96 21.96 0 0 0 5.21 8.26 21.961 21.961 0 0 0 8.26 5.21c.752.264 1.608.041 2.213-.563l1.292-1.292a.85.85 0 0 0-.078-1.269l-2.884-2.242a.849.849 0 0 0-.725-.153l-2.738.684a2.181 2.181 0 0 1-2.07-.574l-3.07-3.071a2.181 2.181 0 0 1-.576-2.071l.685-2.738a.848.848 0 0 0-.152-.725L6.567 3.66ZM4.355 2.64a2.181 2.181 0 0 1 3.265.203l2.242 2.882a2.18 2.18 0 0 1 .394 1.868l-.684 2.737a.847.847 0 0 0 .223.804l3.07 3.071a.848.848 0 0 0 .806.223l2.736-.684a2.181 2.181 0 0 1 1.868.394l2.882 2.242a2.18 2.18 0 0 1 .204 3.264l-1.293 1.293c-.925.925-2.307 1.33-3.596.877A23.292 23.292 0 0 1 7.71 16.29a23.292 23.292 0 0 1-5.525-8.761c-.453-1.288-.047-2.671.878-3.596L4.356 2.64h-.001Z"></path>
                                    </svg>
                                 </div>
                                 <div className="a-text">
                                    <span>Call me</span>
                                 </div>
                              </a>
                           </li>
                           <li className="flex align-center">
                              <a
                                 href="https://wa.me/7709610820"
                                 target="_blank"
                                 rel="noreferrer"
                                 className="flex align-center"
                              >
                                 <div className="a-icon">
                                    <svg
                                       width="30"
                                       height="30"
                                       fill="currentColor"
                                       viewBox="0 0 24 24"
                                       xmlns="http://www.w3.org/2000/svg"
                                    >
                                       <path
                                          fillRule="evenodd"
                                          d="M19.44 4.552A10.413 10.413 0 0 0 12.044 1.5C6.281 1.5 1.59 6.168 1.588 11.906a10.341 10.341 0 0 0 1.396 5.203L1.5 22.5l5.543-1.447a10.483 10.483 0 0 0 4.997 1.266h.004c5.762 0 10.453-4.669 10.456-10.407a10.32 10.32 0 0 0-3.06-7.36Zm-7.396 16.01h-.004a8.706 8.706 0 0 1-4.423-1.205l-.317-.188-3.29.859.879-3.192-.207-.328a8.6 8.6 0 0 1-1.329-4.602c0-4.768 3.9-8.648 8.694-8.648a8.672 8.672 0 0 1 8.688 8.655c-.002 4.769-3.9 8.65-8.69 8.65Zm4.767-6.477c-.261-.13-1.547-.76-1.785-.847-.238-.086-.414-.13-.588.13-.174.261-.675.845-.827 1.02-.153.176-.305.195-.566.065-.261-.13-1.104-.404-2.102-1.29-.776-.69-1.3-1.541-1.453-1.801-.152-.26-.016-.402.115-.531.117-.117.26-.304.392-.456.13-.152.174-.26.26-.434.087-.173.044-.325-.02-.455-.066-.13-.589-1.41-.806-1.93-.213-.508-.428-.439-.588-.447-.152-.007-.328-.01-.501-.01a.962.962 0 0 0-.697.326c-.24.26-.914.89-.914 2.17 0 1.278.937 2.516 1.067 2.69.129.173 1.842 2.799 4.463 3.925.486.209.984.392 1.49.548.625.198 1.195.17 1.645.103.502-.075 1.546-.63 1.764-1.237.217-.607.217-1.127.152-1.236-.065-.108-.24-.174-.501-.303Z"
                                          clipRule="evenodd"
                                       ></path>
                                    </svg>
                                 </div>
                                 <div className="a-text">
                                    <span>WhatsApp Me</span>
                                 </div>
                              </a>
                           </li>
                           <li className="flex align-center" onClick={downloadPdf}>
                              <div className="a-icon">
                                 <svg
                                    width="30"
                                    height="30"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                 >
                                    <path
                                       fillRule="evenodd"
                                       d="M20.75 7.625V19.5a2.5 2.5 0 0 1-2.5 2.5H17v-1.25h1.25a1.25 1.25 0 0 0 1.25-1.25V7.625H17a1.875 1.875 0 0 1-1.875-1.875v-2.5H8.25A1.25 1.25 0 0 0 7 4.5v11.25H5.75V4.5A2.5 2.5 0 0 1 8.25 2h6.875l5.625 5.625Zm-15.5 9.188h-2v4.998h.989v-1.677h1.003c.36 0 .664-.072.915-.216.254-.147.448-.344.58-.593.135-.261.205-.552.2-.846a1.8 1.8 0 0 0-.197-.846 1.47 1.47 0 0 0-.575-.597c-.25-.15-.554-.224-.915-.224Zm.681 1.666a.994.994 0 0 1-.106.475.717.717 0 0 1-.298.301.992.992 0 0 1-.468.103h-.824V17.6h.825c.272 0 .486.075.64.226.154.153.231.37.231.653Zm1.521-1.666v4.998h1.825c.502 0 .918-.1 1.248-.296.334-.2.595-.502.744-.861.162-.375.245-.828.245-1.355 0-.525-.082-.973-.245-1.344a1.782 1.782 0 0 0-.736-.85c-.33-.195-.75-.293-1.257-.293H7.452Zm.99.806h.703c.31 0 .563.062.761.19.207.135.362.334.443.567.098.252.147.565.147.941.004.25-.024.499-.085.74-.044.191-.128.37-.245.528a1 1 0 0 1-.417.315 1.621 1.621 0 0 1-.604.103h-.704v-3.384Zm4.678 2.204v1.988h-.987v-4.998h3.185v.816H13.12v1.396h2.008v.798H13.12Z"
                                       clipRule="evenodd"
                                    ></path>
                                 </svg>
                              </div>
                              <div className="a-text">
                                 <span>Resume</span>
                              </div>
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div className="about-me-text">
                     <span>SKILLS</span>
                  </div>
                  <div className="skills">
                     <div className="skill-lt" data-value="80">
                        <h6 className="dark-color">HTML5</h6>
                        <div className="skill-bar open">
                           <div className="skill-bar-in" style={{ width: "80%" }}>
                              <span>80%</span>
                           </div>
                        </div>
                     </div>
                     <div className="skill-lt" data-value="75">
                        <h6 className="dark-color">CSS3</h6>
                        <div className="skill-bar open">
                           <div className="skill-bar-in" style={{ width: "75%" }}>
                              <span>75%</span>
                           </div>
                        </div>
                     </div>
                     <div className="skill-lt" data-value="80">
                        <h6 className="dark-color">Java Script</h6>
                        <div className="skill-bar open">
                           <div className="skill-bar-in" style={{ width: "80%" }}>
                              <span>80%</span>
                           </div>
                        </div>
                     </div>
                     <div className="skill-lt" data-value="75">
                        <h6 className="dark-color">React Js</h6>
                        <div className="skill-bar open">
                           <div className="skill-bar-in" style={{ width: "75%" }}>
                              <span>75%</span>
                           </div>
                        </div>
                     </div>
                     <div className="skill-lt" data-value="70">
                        <h6 className="dark-color">C/CPP</h6>
                        <div className="skill-bar open">
                           <div className="skill-bar-in" style={{ width: "70%" }}>
                              <span>70%</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* ----- Services section here --- */}
         <section id="Services" className="section services-section">
            <div className="section-heading">
               <h3>
                  <span>MY SERVICES</span>
               </h3>
            </div>
            <div className="services-carts grid grid-col-3">
               <div className="services-cart">
                  <div className="services-cart-logo flex align-center justify-center">
                     <svg
                        width="30"
                        height="30"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path d="m7.375 16.78 1.25-1.562L4.601 12l4.024-3.22-1.25-1.562-5 4a1 1 0 0 0 0 1.562l5 4Zm9.25-9.562-1.25 1.562L19.4 12l-4.024 3.218 1.25 1.562 5-4a1.001 1.001 0 0 0 0-1.562l-5-4Zm-1.649-4.003-4 18-1.953-.434 4-18 1.954.434Z"></path>
                     </svg>
                  </div>
                  <div className="services-cart-title">
                     <span>Front-End Development and UI/UX Design</span>
                  </div>
                  <div className="services-cart-p">
                     <p>
                        With a focus on front-end development and UI/UX design, I create
                        visually engaging user interfaces that are intuitive and
                        optimized for usability. By combining my skills in HTML, CSS,
                        and JavaScript, I develop responsive designs, implement smooth
                        animations, and ensure cross-browser compatibility. I pay close
                        attention to user experience, ensuring seamless navigation and
                        accessibility to enhance user satisfaction and engagement.
                     </p>
                  </div>
               </div>
               <div className="services-cart">
                  <div className="services-cart-logo flex align-center justify-center">
                     <svg
                        width="30"
                        height="30"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path d="M20 3H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h7v2H8v2h8v-2h-3v-2h7c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2ZM4 14V5h16l.002 9H4Z"></path>
                     </svg>
                  </div>
                  <div className="services-cart-title">
                     <span>Custom Website Development</span>
                  </div>
                  <div className="services-cart-p">
                     <p>
                        I specialize in creating unique and custom-designed websites
                        that cater to the specific needs and goals of my clients. Using
                        my expertise in HTML, CSS, JavaScript, and frameworks like
                        React, I build websites from scratch, ensuring they are visually
                        appealing, responsive, and user-friendly. I work closely with
                        clients to understand their requirements and deliver
                        high-quality websites that reflect their brand identity and
                        provide an exceptional user experience.
                     </p>
                  </div>
               </div>
               <div className="services-cart">
                  <div className="services-cart-logo flex align-center justify-center">
                     <svg
                        width="30"
                        height="30"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path d="M20 3H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h7v2H8v2h8v-2h-3v-2h7c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2ZM4 14V5h16l.002 9H4Z"></path>
                     </svg>
                  </div>
                  <div className="services-cart-title">
                     <span>Web Development</span>
                  </div>
                  <div className="services-cart-p">
                     <p>
                        I develop World Wide Web applications using a client–server
                        model. The applications typically use HTML, CSS and JavaScript
                        in the client, PHP or Java in the server, and http for
                        communications between client and server. I can develop both
                        front-end and Backend.
                     </p>
                  </div>
               </div>
            </div>
         </section>

         {/* ----- Portfolio section here ---- */}
         <section id="Portfolio" className="section portfolio-section">
            <div className="section-heading">
               <h3>
                  <span>MY Portfolio</span>
               </h3>
            </div>
            <div className="Portfolio-contain grid grid-col-3">
               {data.map((ele, index) => {
                  ele.projectImage = images[index];
                  return (
                     <div className="portfolio-box" key={index}>
                        <div className="portfolio-img">
                           <img src={ele.projectImage} alt="portfolioImage" />
                           <a
                              className="px_modal portfolio-modal-link"
                              href="#project_1"
                              onClick={openModal}
                           >
                              <svg
                                 width="30"
                                 height="30"
                                 fill="currentColor"
                                 viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path d="M12 7a.625.625 0 0 1 .625.625v3.75h3.75a.624.624 0 1 1 0 1.25h-3.75v3.75a.624.624 0 1 1-1.25 0v-3.75h-3.75a.625.625 0 1 1 0-1.25h3.75v-3.75A.625.625 0 0 1 12 7Z"></path>
                              </svg>
                           </a>
                        </div>
                        <div className="portfolio-modal">
                           <div className="portfolio-modal-link" onClick={closeModal}>
                              <svg
                                 width="30"
                                 height="30"
                                 fill="currentColor"
                                 viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path d="M7.496 7.495a.6.6 0 0 1 .85 0l3.174 3.176 3.176-3.176a.6.6 0 0 1 .85.85l-3.177 3.174 3.176 3.176a.603.603 0 0 1 0 .85.6.6 0 0 1-.85 0l-3.175-3.177-3.175 3.176a.6.6 0 1 1-.85-.85l3.177-3.175-3.176-3.175a.6.6 0 0 1 0-.85Z"></path>
                              </svg>
                           </div>
                           <div className="portfolio-modal-buttons flex align-center flex-wrap">
                              <span>Type:</span>
                              <span>{ele.projectType}</span>
                           </div>
                           <div className="portfolio-modal-buttons flex align-center flex-wrap">
                              <span>Languages:</span>
                              <span>{ele.languages}</span>
                           </div>
                           <div className="portfolio-modal-buttons flex align-center flex-wrap">
                              <span>Github:</span>
                              <a href={ele.githubUrl} target="_blank" rel="noreferrer">
                                 Github Url
                              </a>
                           </div>
                           <div className="portfolio-modal-buttons flex align-center flex-wrap">
                              <span>Live:</span>
                              <a href={ele.projectUrl} target="_blank" rel="noreferrer">
                                 Deployed link
                              </a>
                           </div>
                        </div>
                     </div>
                  );
               })}
            </div>
         </section>

         {/* ------ Contact Section here --- */}
         <section id="Contact" className="section contact-section">
            <div className="section-heading">
               <h3>
                  <span>Get in touch</span>
               </h3>
            </div>

            <div className="contact-container grid contact-grid-col-2 align-center">
               <div className="contact-map">
                  <iframe
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.321924300239!2d75.31710002489666!3d19.91083448147329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb97f35bafa043%3A0xdba5fb9e2cef6178!2z4KS44KSC4KSt4KS-4KSc4KWAIOCkqOCkl-CksCwg4KSU4KSw4KSC4KSX4KS-4KSs4KS-4KSmLCDgpK7gpLngpL7gpLDgpL7gpLfgpY3gpJ_gpY3gpLAgNDMxMDA0!5e0!3m2!1shi!2sin!4v1686651669858!5m2!1shi!2sin"
                     width="600"
                     height="450"
                     style={{ border: "0" }}
                     title="contact-map"
                     allowfullscreen=""
                     loading="lazy"
                     referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
               </div>
               <div className="contact-form">
                  <form onSubmit={handleSubmit} id="myForm">
                     <input
                        type="text"
                        name="user_name"
                        placeholder="Enter Your Name"
                        value={values.user_name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                     />
                     {errors.user_name && touched.user_name ? (
                        <p className="error">{errors.user_name}</p>
                     ) : null}
                     <input
                        type="email"
                        name="user_email"
                        placeholder="Enter Your Email"
                        value={values.user_email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                     />
                     {errors.user_email && touched.user_email ? (
                        <p className="error">{errors.user_email}</p>
                     ) : null}
                     <textarea
                        placeholder="Message..."
                        name="message"
                        value={values.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                     ></textarea>
                     {errors.message && touched.message ? (
                        <p className="error">{errors.message}</p>
                     ) : null}
                     <button type="submit" className="contact-btn">
                        Send a message
                     </button>
                  </form>
               </div>
            </div>
         </section>

         {/* -------- footer start here ---- */}
         <footer className="footer-container" id="Footer">
            <div className="circal">
                <img src={footerImg} alt="footer" />
            </div>
            <h6 className="footer-title">Abhishek jadhav</h6>
            <div className="social-icons flex align-center justify-center">
               <div className="icon flex justify-center align-center">
                  <a
                     href="https://www.instagram.com/abhishek_jadhav_15/"
                     target="_blank"
                     rel="noreferrer"
                  >
                     <svg
                        width="25"
                        height="25"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path d="M12 2c-2.714 0-3.055.013-4.121.06-1.066.05-1.793.217-2.429.465a4.896 4.896 0 0 0-1.771 1.154A4.909 4.909 0 0 0 2.525 5.45c-.248.635-.416 1.362-.465 2.425C2.013 8.944 2 9.284 2 12.001c0 2.715.013 3.055.06 4.121.05 1.066.217 1.792.465 2.428a4.91 4.91 0 0 0 1.154 1.771 4.88 4.88 0 0 0 1.77 1.154c.637.247 1.362.416 2.427.465 1.068.047 1.408.06 4.124.06 2.716 0 3.055-.012 4.122-.06 1.064-.05 1.793-.218 2.43-.465a4.893 4.893 0 0 0 1.77-1.154 4.91 4.91 0 0 0 1.153-1.771c.246-.636.415-1.363.465-2.428.047-1.066.06-1.406.06-4.122s-.012-3.056-.06-4.124c-.05-1.064-.219-1.791-.465-2.426a4.907 4.907 0 0 0-1.154-1.771 4.888 4.888 0 0 0-1.771-1.154c-.637-.248-1.365-.416-2.429-.465-1.067-.047-1.406-.06-4.123-.06H12Zm-.896 1.803H12c2.67 0 2.987.008 4.04.057.975.044 1.505.208 1.858.344.466.181.8.399 1.15.748.35.35.566.683.747 1.15.138.352.3.882.344 1.857.049 1.053.059 1.37.059 4.039 0 2.668-.01 2.986-.059 4.04-.044.974-.207 1.503-.344 1.856a3.09 3.09 0 0 1-.748 1.149 3.09 3.09 0 0 1-1.15.747c-.35.137-.88.3-1.857.345-1.053.047-1.37.059-4.04.059s-2.987-.011-4.041-.059c-.975-.045-1.504-.208-1.856-.345a3.097 3.097 0 0 1-1.15-.747 3.1 3.1 0 0 1-.75-1.15c-.136-.352-.3-.882-.344-1.857-.047-1.054-.057-1.37-.057-4.041 0-2.67.01-2.985.057-4.039.045-.975.208-1.505.345-1.857.181-.466.399-.8.749-1.15a3.09 3.09 0 0 1 1.15-.748c.352-.137.881-.3 1.856-.345.923-.042 1.28-.055 3.144-.056v.003Zm6.235 1.66a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4ZM12 6.865a5.136 5.136 0 1 0-.16 10.272A5.136 5.136 0 0 0 12 6.865Zm0 1.801a3.334 3.334 0 1 1 0 6.668 3.334 3.334 0 0 1 0-6.668Z"></path>
                     </svg>
                  </a>
               </div>
               <div className="icon flex justify-center align-center">
                  <a
                     href="https://www.linkedin.com/in/abhishek-jadhav-38a870245/"
                     target="_blank"
                     rel="noreferrer"
                  >
                     <svg
                        width="25"
                        height="25"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path d="M2 3.433C2 2.64 2.658 2 3.469 2H20.53c.813 0 1.47.641 1.47 1.433v17.134C22 21.36 21.343 22 20.531 22H3.47C2.658 22 2 21.359 2 20.567V3.433Zm6.179 15.31V9.71H5.177v9.031H8.18Zm-1.5-10.265c1.046 0 1.697-.693 1.697-1.56-.018-.887-.65-1.56-1.677-1.56C5.67 5.357 5 6.032 5 6.918c0 .867.651 1.56 1.659 1.56h.02Zm6.135 10.264V13.7c0-.27.02-.54.1-.733.216-.538.71-1.097 1.54-1.097 1.086 0 1.52.827 1.52 2.042v4.832h3.001v-5.18c0-2.776-1.48-4.066-3.455-4.066-1.592 0-2.306.876-2.706 1.492v.031h-.02l.02-.031V9.71h-3c.037.848 0 9.031 0 9.031h3Z"></path>
                     </svg>
                  </a>
               </div>
               <div className="icon flex justify-center align-center">
                  <a
                     href="https://github.com/Abhishekjadhavv"
                     target="_blank"
                     rel="noreferrer"
                  >
                     <svg
                        width="25"
                        height="25"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path d="M12 2.246c-5.525 0-10 4.475-10 10a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.475 0-.238-.013-1.025-.013-1.863C7 19.86 6.35 18.784 6.15 18.221c-.113-.287-.6-1.175-1.025-1.412-.35-.188-.85-.65-.013-.663.788-.012 1.35.725 1.538 1.025.9 1.513 2.338 1.088 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.087.387-1.987 1.025-2.687-.1-.25-.45-1.275.1-2.65 0 0 .837-.263 2.75 1.025a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.113 2.5.338 1.912-1.3 2.75-1.025 2.75-1.025.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.575.688.475A10.015 10.015 0 0 0 22 12.246c0-5.525-4.475-10-10-10Z"></path>
                     </svg>
                  </a>
               </div>
            </div>
            <p>© 2023 copyright all right reserved.</p>
         </footer>
         <ToastContainer />
      </>
   );
};

export default Home;
