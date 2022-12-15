import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { NaviBar } from './components/main/Navibar';
import {Home} from './components/main/Home';
import {ListPoet} from './components/searchPoet/ListPoet';
import {Authors} from './components/authors/Authors';
import {Yakub} from './components/yakub/Yakub'
import {Yanka} from './components/yanka/Yanka'
import {Nil} from './components/nil/Nil'
import {Korotky} from './components/korotky/Korotky'
import {Maks} from './components/maks/Maks'
import {Anton} from './components/authors/Anton'
import {Oleg} from './components/authors/Oleg'

// import './Styles/main.css'


function App() {
  return (
    <>
      <Router>
        <NaviBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/listpoet" component={ListPoet} />
          <Route path="/about" component={Authors} />
          <Route path="/anton" component={Anton} />
          <Route path="/oleg" component={Oleg} />
          <Route path="/yakub" component={Yakub}/>
          <Route path="/yanka" component={Yanka}/>
          <Route path="/nil" component={Nil}/>
          <Route path="/korotky" component={Korotky}/>
          <Route path="/maks" component={Maks}/>
        </Switch>
      </Router>
      
      
    </>
  );
}

export default App;
