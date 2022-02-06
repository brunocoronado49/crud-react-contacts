import './App.css';
import { Route } from 'wouter';
import Nav from './components/menu/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';
import CreateContact from './pages/CreateContact';
import UpdateContact from './pages/UpdateContact';

function App() {
  return (
    <div className="App">
      <Nav/>
      <section className="App-content">
        <Route path="/" component={Home} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/create-contact" component={CreateContact} />
        <Route path="/edit-contact/:id" component={UpdateContact} />
        <Route path="/about" component={About}/>
      </section>
    </div>
  );
}

export default App;
