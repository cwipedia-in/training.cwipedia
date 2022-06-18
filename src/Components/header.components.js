import learn from "../Images/study.gif";

import { Animator, ScrollContainer ,ScrollPage, batch, Fade, FadeIn, Move, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";

import locAnim from "../Images/29879-development-poky-heads.json"
import Lottie from "lottie-react";

const Header=()=>{
    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
    const FadeUp = batch(Fade(), Move(), Sticky());

    const style = {
        height: 500,
      };

    return(
        <>
        <div className="head-bg">
        <div className="container ">
            <div className="row vertical-center d-flex justify-content-center">
                <div className="col-sm d-flex justify-content-center">
                    {/* <img src={learn} className="img-fluid" alt="Training By cwipedia"></img> */}
                     <Lottie style={style} loop={true}  animationData={locAnim} />

                </div>
                <div className="col-sm ">
                    <p className="h1">Industrial Training by CWIPEDIA</p>
                    <p className="h6">Empowering Diploma student community by delivering valueble resources and training</p>
                    <a className="btn btn-train" href="https://cwipedia.com" role="button">#explore</a>
                    <a className="btn btn-train" href="#" data-bs-toggle="modal" data-bs-target="#train" role="button">Register Here</a>
                    {/* <a className="btn btn-train" href="#" role="button">#explore</a> */}
                </div>
               
            </div>

          

        </div>

        <div className="header-bg"> 

               
        </div>
                
  </div>
        </>
    )

}

export default Header;