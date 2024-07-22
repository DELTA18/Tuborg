import Spline from '@splinetool/react-spline';
import Navbar from './components/Navbar';
import Second from './components/Second';
import Third from './components/Third';
import Logistics from './components/Logistics';
import Footer from './components/Footer';
import Ask from './components/Ask';
export default function App() {
  return (
    <>
    <div className='containerr'>
    <Spline className='spline_scene' scene="https://prod.spline.design/dmeNI1I3f2W8Syy6/scene.splinecode" >
    </Spline>
    <Navbar/>
    </div>
    <Second/>
    <Third />
    <Logistics />
    <Ask />
    <Footer />
    </>
  );
}
