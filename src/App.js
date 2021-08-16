import './index.css';
/* Header & Footer */
import Header from './core-components/header'
import Footer from './core-components/footer'

/* Pages */
import Home from './pages/home'
import About from './pages/about'
import Videos from './pages/videos'
import Contact from './pages/contact'
import PageNotFound from './pages/page-not-found'

/* Routers */
import {BrowserRouter, Route, Switch} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/videos" component={Videos} />
            <Route path="/contact" component={Contact} />
            <Route component={PageNotFound} />
          </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;
