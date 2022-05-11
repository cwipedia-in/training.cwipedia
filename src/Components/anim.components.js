import { Animator, ScrollContainer ,ScrollPage, batch, Fade, FadeIn, Move, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
const Anim=()=>{

    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
    const FadeUp = batch(Fade(), Move(), Sticky());
    return(
        <ScrollContainer>
            
        <ScrollPage page={1}>
            <Animator animation={ZoomInScrollOut}>
            <span style={{ fontSize: "3em" }}>Empowering Diploma student community ✨</span>
            </Animator>
        </ScrollPage>
        <ScrollPage page={2} >
            <Animator animation={FadeUp} >
            <span style={{ fontSize: "3em" }}>100,000+ connected students over Maharashtra</span>
            </Animator>
        </ScrollPage>
        
        </ScrollContainer>

    )

}
export default Anim;