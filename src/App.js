import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Header from './components/Header';
import WeatherSearch from './components/WeatherSearch';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div class="text-center">

        <div class="cover-container d-flex h-100 p-3 mx-auto flex-column">
 
         <Header />

         <WeatherSearch />
  
         <Footer />
  
      </div>


      </div>    
    
    
    </>
  );
}

export default App;