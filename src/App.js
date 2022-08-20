
import 'bootstrap/dist/css/bootstrap.min.css';
import { About } from './components/about/about';
import { Choose } from './components/choose/choose';
import { Contact } from './components/contact/contact';
import { Faq } from './components/faq/faq';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import Work from './components/works/Work';
import Testimonials from './components/testimonials/testimonials';
function App() {
  return (
    <div style={{backgroundColor: "hsl(240, 100%, 99%)"}}>
      <Header/>  
     <About/>
      <Choose/>
      <Work/>
      <Testimonials/>
      <Faq/>
      <Contact/>
      <Footer/>

    </div>
  );
}

export default App;
