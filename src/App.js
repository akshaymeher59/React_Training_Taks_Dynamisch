import React from 'react';
import "./App.css"
// import ParentCard from './components/L3_children_callBack/Child_to_parent/ParentCard';
import LearnUseState from './components/L3_children_callBack/useState/LearnUseState';
// import Test from './components/1_LifeCycle/Test';
// import Counter from './components/Counter';
// import Task2 from './components/1_LifeCycle/Task2';
// import Parent from './components/L2_jsx_Props-valid/Parent';
// import ParentComponent from './components/L3_children_callBack/Props_children/ParentComponent';
function App() {
  return (
    <div className='App-header'>

      {/* <Test /> */}
      {/* <Counter /> */}
      {/* <Task2 /> */}

      {/* Ass-D2.1: Props validation  */}
      {/* <Parent /> */}

      {/* Ass-D2.2 : Props.children*/}
      {/* <ParentComponent /> */}

      {/* Ass-D3.1: Passing Data child to parent useState*/}
      {/* <ParentCard /> */}

      {/* Ass-D3.2: Store html-tags, Images, Logoes, Nested Objects, Arrays*/}
      <LearnUseState />

    </div>
  )
}

export default App