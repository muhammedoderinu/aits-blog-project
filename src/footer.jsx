import img from'./phone-icon-946.png'
import icon from './email-icon-126.png'
const Footer = () => {
    return ( 
        <div>
            <footer className="foot">
                <ul className="list">
                    
                    <li><img src={icon} alt="" className='logo' /> <a href="mailto:aitshub@gmail.com">aitshub@gmail.com</a></li>
                    <li><img src={img} alt="" className='logo' /><a href="tel:09063557897" >09063557897</a></li>
                </ul>
            </footer>
        </div>
    );
}
 
export default Footer;
 