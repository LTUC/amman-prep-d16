import aboutImg from './assets/about.jpg';
import { Image } from 'react-bootstrap';
import './about.css';



function About() {
    return (
        <>
            <h1 className='h1-about'>About us ...</h1>
            <div className='about-container'>
                <div>
                    <Image className="about-img" src={aboutImg}></Image>
                </div>

                <div className="prag-div">
                    <p className="prag">Welcome to our flower collection website! We're passionate about flowers and we've created this platform to showcase some of the most beautiful and unique collections out there. Whether you're a flower enthusiast or just looking for some inspiration, our website offers a diverse range of floral arrangements to browse and enjoy. Our team is committed to providing an exceptional user experience and we hope that you'll find our website both informative and visually stunning. Thank you for visiting and we look forward to sharing our love of flowers with you!</p>
                </div>
            </div>
        </>
    )
}

export default About;