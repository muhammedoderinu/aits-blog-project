import img from './pexels-maryia-plashchynskaya-3527572.jpg'
import Log from './Untitled.png'


const image = () => {
    return (
        <div className='imangi' >
        <img src={img} alt="" className="image" />
        <img src={Log} alt=""  className='oho'/>
        </div>
        
        
      );
}
 
export default image;
