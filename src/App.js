import './App.css';
import About from './components/about/about' 
import Proficieny from './components/proficiency/proficieny'

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>About Me</li>
          <li>My Profiency</li>
          <li>Contact</li>
        </ul>
      </nav>
      <About/>
      <Proficieny/>
    </div>
  );
}

export default App;
