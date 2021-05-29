import React, { Component } from 'react'

export class ClassComp extends Component {
  render() {
    let firstTag = <h1 className='h1'>Wooowwww its quick than my expectations!</h1>;
    let secondTag = <div>
     <h2>lorem ipsum </h2>
     <h2>lorem ipsum </h2>
     <h2>lorem ipsum </h2>
    </div>
    let container = 'bg-gradient-to-r from-green-400 to-blue-500 ';
    let border = 'border-4 border-light-blue-500 border-opacity-50';
    const arr = [container , border];
    return (
      <>
      <div className={arr}>
        {firstTag}
        {secondTag}
        
      </div>
      <p>asdasd</p>
      </>
    )
  }
}

export default ClassComp
