import {useState } from 'react';
// mport desktop from "./images/bg-intro-desktop.png";
import './App.css';
import Display from './component/Display';
import Avatar from "./component/Avatar";
import Socials from "./component/Socials";

function App() {

  const [count, setCount] = useState(0)
  const handleCount = () => {
    setCount(count + 1)
  }

  // const {state, setState} = useState(initialState)
  const [skills, setSkills] = useState('My name is Manuel');

  const handleName = () => {
    setSkills('My name is Manuel')
  }

  const handleSkill = () => {
    setSkills('I am a Front-End Developer')
  }

  return (
    <>
    <div className="main">
      <div className="avi">
        <Avatar />
      </div>
      <div className='appstyling'>
        <Display tech={skills}/>

        {/* DRY */}
        {/* DIE */}

        {/* lowercase = one */}
        {/* PascalCase = TwoWords */}
        {/* camelCase = twoWords */}

        <div className='btns'>
          <button onClick={handleName}>Name</button>
          <button onClick={handleSkill}>Skill</button>
        </div>
        <div className="likes">
          <p className="fas">{count}</p>
          <i onClick={handleCount} class="fas fa-heart"></i>
        </div>
         <Socials/>
        </div>
    </div>
    </>
  );
}

export default App;
