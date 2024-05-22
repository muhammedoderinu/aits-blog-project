
import thirdLogo from '/third.jpg'

function MiddleSection(){
  return (
    <section className='middle'>
      <img src={thirdLogo} alt="third logo" className='second'/>
      <div className="centered">
        Welcome to AITs Fashion Design Blog.
       <br /> Here, we Provide you with Latest 
        <br />Information on Fashion Design.
      </div>
    </section>
  );
}

export default MiddleSection;