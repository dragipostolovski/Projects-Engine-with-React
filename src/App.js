// App.js

import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';

import { Counter } from './Counter';
import { Accordion } from './Accordion';
import { Input } from './Input';
import { Courses } from './Courses';
import { Words } from './dictionary/Words';
import { Lessons } from './lessons/Lessons';
import { Movies } from './movies/Movies';
import { Posts } from './posts/Posts';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from "./Elements";
import { Single } from './posts/Single';
import "./App.css";
import Menu from "./Menu";
import { Cards } from "./Cards";
import Hooks from './Hooks';
import {Inner} from './state';
import Nav from './components/Nav';

function App() {

  return (
    <Router>
        <div className="Worklet">
          <Inner>
            <Header>
              <Menu />
            </Header>
            <Nav />
            <Routes>
              <Route path='/' element={<Posts />} />
              <Route path='/:slug' element={<Single />} />
              <Route path='/movies' element={<Movies />} />
              <Route path='/cards' element={<Cards />} />
              <Route path='/hooks' element={<Hooks />} />
            </Routes>
          </Inner>
        </div>
    </Router>
  );
}


function ComponentOne( { name = 'Projects Engine' } ) {
  // Assigned default value to name.
  return <div>This is {name}!</div>;
}

// OR

function ComponentTwo( props ) {
  // Destructuring.
  const { name = 'Projects Engine' } = props;

  return (
    <div>This is {name}!</div>
  );
}

ComponentTwo.propTypes = {
  // in the console you will see an error becuase this 
  // prop in the second component is rwuired and we are not sending the name prop
  name: PropTypes.string.isRequired
};


// OR


function ComponentThree( { name } ) {
  // Assigned default value to name.
  return <div>This is {name}!</div>;
}

ComponentThree.defaultProps = {
  name: 'Projects Engine'
};

export default App;
