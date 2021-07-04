import { Parallax } from 'react-parallax';
import loc from "../Images/path.png"
const Location=()=>{
    return(
        <>
       

         <div className="container ">
         <Parallax className="shadow-lg p-3 mb-5 bg-body rounded" blur={5} bgImage={loc} bgImageAlt="the location" strength={200}>
            <div className="row vertical-center d-flex justify-content-center">
                <div data-aos="fade-left" className="col-sm ">
                    <p className="display-6 colr" ><b>No need to Go anywhere</b></p>
                    <p className="display-6 colr">Learn from your Home with flexible hours</p>
                    
                </div>
               
            </div>
         </Parallax>
        </div>
        </>
    )

}

export default Location;