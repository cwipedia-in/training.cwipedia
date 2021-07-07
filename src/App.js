
import './App.css';
import Header from './Components/header.components';
import Middle from './Components/middle.components';
import Location from "./Components/loaction.components";
import Footer from './Components/footer.components';
import Upper from './Components/upper.components';
import Anim from './Components/anim.components';
import Register from './Components/register.components';
function App() {
  
  return (
    <>
    <Upper/>
    <Header/>
    <Middle/>
    <Register/>
    {/* <Anim/> */}
    <Location/>
    <Footer/>
    </>
  );
}

export default App;
