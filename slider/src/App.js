import logo from './logo.svg';
import './App.css';
import ParallaxSlider from './components/ParallaxSlider';
import image1 from   './images/1.jpg'
import image2 from './images/2.jpg'





function App() {


const images=[{
  image: image1,
  title: 'Slide 1',
  description: 'This is the description for Slide 1.'
},
{
  image: image2,
  title: 'Slide 2',
  description: 'This is the description for Slide 2.'
}]

  return (
    <div className="App">
  <ParallaxSlider slides={images} />
    </div>
  );
}

export default App;
