import fast from "../Images/flying-rocket.gif";
import { useEffect } from "react";
import 'aos/dist/aos.css';
import Aos from "aos";
import Typical from 'react-typical'

const Middle = ()=>{
    useEffect(()=>{
        Aos.init({duration:1000});
      },[]);

    return(
        <div>
             <div className="container ">
            <div className="row vertical-center d-flex justify-content-center">
                <div className="col-sm d-flex justify-content-center">
                    <img src={fast} className="img-fluid" alt="Training By cwipedia"></img>
                </div>
                <div data-aos="fade-left" className="col-sm ">
                    <p className="display-6">#super-fast</p>
                    <p className="display-6">Learn by doing in very quick way as you think,</p>
                    <Typical c
                        steps={['Never', 1000, '"Never let the odds keep you from doing what you know in your heart you must do." -- H. Jackson Brown', 500]}
                        loop={Infinity}
                        wrapper="p"
                    />
                </div>
               
            </div>
        </div>
        </div>
    )

}
export default Middle;