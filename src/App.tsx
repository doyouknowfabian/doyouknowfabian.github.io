import { Navbar } from './components';
import { Home, About, Projects, Blog } from './pages';
import { Router, Route } from 'wouter';

export const App = () => {
  return (
    <div className="App">
    <Navbar />
    <Router base="">
        <Route path="/blog"><Blog /></Route>
        <Route path="/projects"><Projects /></Route>
        <Route path="/about"><About /></Route>
        <Route path="/"><Home /></Route>
    </Router>
    </div>
  );
}
