import './App.scss'
import About from 'components/about/about' 
import Proficiency from 'components/proficiency/proficiency'
import Contact from 'components/contact/contact'

function App() {
  return (
    <div className="App">
      <div className="container">
          <section>
               <About/>
          </section>
           <section>
              <Proficiency/>
          </section>
          <section>
              <Contact/>
          </section>
      </div>
    </div>
  );
}

export default App;
