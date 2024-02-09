import myImage from '../assets/0a4be9a6eaf565103fc6e2c325f3838a.png'; // Path to your image file relative to this script

export default function AboutHtml() {
    return (

        <div className="about">
               <div className="about__image-container">
                 <img src={myImage} alt="myImage" />
               </div>
               <div className="about__intro-text">
                    <h1>Ezekiel Swanson</h1>
                    <h2>Frontend Developer</h2>
                    <p><a href="#"portfolio></a></p>
               </div>
               <div className="about__intro-contact"></div>
              
        </div>
    )
  }