
import firstLogo from '../assets/first.jpg'

function PopularSection() {
  return (
    <section className="popular">
      <h4>POPULAR</h4>
      <hr />
    <div className='div-first'>
      <img src={firstLogo} alt="First logo" className='first'/>
      <p><b>Welcome to <br />AIT's fashion design blog</b></p>
    </div>
    </section>
  );
}

export default PopularSection