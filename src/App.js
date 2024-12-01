import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <section id="projects" className="section">
          <h2>Projects</h2>
          {/* Project components will go here */}
        </section>
        
        <section id="skills" className="section">
          <h2>Skills</h2>
          <Skills />
        </section>
        
        <section id="contact" className="section">
          <h2>Contact</h2>
          {/* Contact form will go here */}
        </section>
      </main>
    </div>
  );
}

export default App;
