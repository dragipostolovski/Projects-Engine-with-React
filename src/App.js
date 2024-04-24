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

function App() {

  return (
    <div className="Worklet">
      
      <div className='c-title'>
        <div className='c-title__inner container'>
          <h1>Projects Engine with React</h1>
        </div>
      </div>

      <Posts />

      {/* <Movies /> */}

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Courses />
        <Input />
        <Counter />
        <Accordion />
        
        <ComponentOne name="Projects Engine"/>
        <ComponentTwo name="Zing"/>
        <ComponentThree />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
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
