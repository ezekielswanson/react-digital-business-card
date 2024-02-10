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
                    <p><a href="https://40686700.hs-sites.com/portfolio-ezekiel-swanson">portfolio</a></p>
                    <a className="about__intro-contact" href="mailto:swansonezekiel@gmai.com">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                            <path d="M2.10241 4.70721L8.50001 7.90561L14.8976 4.70721C14.8739 4.29957 14.6953 3.9164 14.3983 3.63619C14.1012 3.35598 13.7083 3.19994 13.3 3.20001H3.70001C3.29167 3.19994 2.89876 3.35598 2.60175 3.63619C2.30473 3.9164 2.12609 4.29957 2.10241 4.70721Z" fill="#1E1F26"/>
                            <path d="M14.9 6.49441L8.50001 9.69441L2.10001 6.49441V11.2C2.10001 11.6244 2.26858 12.0313 2.56864 12.3314C2.86869 12.6314 3.27566 12.8 3.70001 12.8H13.3C13.7244 12.8 14.1313 12.6314 14.4314 12.3314C14.7314 12.0313 14.9 11.6244 14.9 11.2V6.49441Z" fill="#1E1F26"/>
                        </svg>
                        <span>Email</span>
                    </a>
               </div>
               
        </div>
    )
  }