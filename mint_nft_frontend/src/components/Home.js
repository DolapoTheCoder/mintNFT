import Navbar from './Navbar';
import {useSelector} from 'react-redux';
import '../components/compCSS/Home.css';

function Home() {

  const state = useSelector((state) => state);
  console.log('Home', state);

  return (
    <div>
        <Navbar/>
        <h1 className='wande'>
            Home
        </h1>
       

    </div>
  );
}

export default Home;