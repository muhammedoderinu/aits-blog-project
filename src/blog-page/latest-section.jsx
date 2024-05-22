
import secondLogo from '../assets/second.jpg'


function LatestSection() {
  return (
    <section className="latest">
      <h4>LATEST</h4>
      <hr />
    <div className='div-last'>
      <img src={secondLogo} alt="Second logo" className='last' />
      <p><b>Welcome to <br />AIT's fashion design blog</b></p>
    </div>
    </section>
  );
}

export default LatestSection