import Navbar  from './navbar';
import Footer from './footer';
import Image from './image';
import Intro from  './intro';
function App() {
 
  return (
    <>
   <div className='App'>
   <Navbar/> 
   </div>
   <div>
    <Footer/>
   </div>
   <div>
    <Image/>
   </div>
   <div>
    <Intro/>
   </div>
    </>
  )
}

export default App;
