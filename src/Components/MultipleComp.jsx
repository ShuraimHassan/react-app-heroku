import React from 'react'

export default class ComponentA extends React.Component {
  render(){
     return(
      <div>
      <ComponentB />
      <ComponentC/>
      <MultipleComp/>
      <Loop/>
      </div> 
      );
  }
}

class ComponentB extends React.Component {
   render() {
     return (
      <React.Fragment>
    
      <h1>Hello world! This is Component B</h1>
      </React.Fragment> 
      )
   }
}
class ComponentC extends React.Component {
   render() {
     return (<h1>This is Component C</h1>)
   }
}

let greetingMsg = 'This is Greeting message from function base component';
const Loop = (params) => {
  for (let i = 0; i < greetingMsg.length; i++) {
    var element = [i];
  }
  return (<h4>{element}</h4>) 
}
function MultipleComp() {
  return (
    <div>
      <h2>{greetingMsg.toUpperCase()}</h2>
    </div>
  )
}


