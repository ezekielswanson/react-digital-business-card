import myImage from '../assets/0a4be9a6eaf565103fc6e2c325f3838a.png'; // Path to your image file relative to this script

export default function AboutHtml() {
    return (

        <div className="about">
               <div className="about__image-container">
                <img src={myImage} alt="myImage" />
               </div>
              
        </div>
    )
  }