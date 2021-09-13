import './App.scss'
import About from 'components/about/about' 
import Proficiency from 'components/proficiency/proficiency'
import Contact from 'components/contact/contact'
import Work from 'components/work/work'

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
              <Work/>
          </section>
          <section>
              <Contact/>
          </section>
         
      </div>
    </div>
  );
}

export default App;
