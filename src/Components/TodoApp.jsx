import React, { Component } from 'react'


const BMIplainText = (<div className='container'>
  <h1 className='text-xl text-pink-600 mt-2 '>BMI Calculator</h1>
  <h2 className='text-blue-600 text-left ml-3 text-xl'>Calculate Your Body Mass Index </h2>
  <p className='text-left ml-3 text-gray-600'>Body mass index <span className='text-red-400'>(BMI)</span> is a measure of body fat based on height and weight that applies to adult men and women.</p>
  <ul className='text-left ml-3'>
    <li >1 - Enter your weight and height using standard or <span className='text-red-400'>metric</span> measures.</li>
    <li >2 - Select "Compute BMI" and your BMI will appear below.</li>
  </ul></div>);

class TodoApp extends Component {
  
  state = {
    feets: 0,
    inches: 0,
    pounds: 0
  }
  onChangeBMIhandler = (event) => {
    console.log('on chnage handler')
    let getFeets = event.target.feets;
    let getInches = event.target.inches;
    let getPounds = event.target.pounds;
    let BMI;
    this.setState(getFeets);
  }
  setBMI = () => {
    console.log('bmi method')
    return 703 * this.state.pounds / this.state.feets + this.state.inches;

  }


  render() {
    return (
      <>
        {BMIplainText}
        <div className='container ml-72 h-96 w-96 bg-gray-400'>
          <br />
          <form className='form-input'>
            <label>Your height:
          <input onChange={this.onChangeBMIhandler} className='form-input ' type="text" placeholder='Feets' /><input onChange={this.onChangeBMIhandler} className='form-input' type="text" placeholder='Inches' /></label><br />
            <label>Your Weight:
          <input onChange={this.onChangeBMIhandler} className='form-input' type="text" placeholder='Pounds' /></label>
          </form>

          <button onClick={this.setBMI}>Calculate Your BMI</button>
          
          <h2 className='text-gray-50'>Your BMI is : 
          <span className='text-red-300'>{
             ()=> {return 703 * this.state.pounds / this.state.feets + this.state.inches}

          }</span></h2>
        </div>

      </>
    )
  }
}

export default TodoApp;