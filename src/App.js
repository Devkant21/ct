import Navbar from './components/Navbar';
import Body from './components/Body';
import Footer from './components/Footer';
import Grid from './components/Grid';
import useDarkMode from './hooks/useDarkMode';

function App() {
  useDarkMode();
  return (
    <div className=' min-h-screen dar:bg-black transition duration-500'>
    <Navbar />
    <Body />
    <Grid />
    <Footer />
    </div>
  )
}

export default App;
