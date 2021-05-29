/* eslint-disable react/no-direct-mutation-state */
import React, { Component } from 'react'

export default class TasbeehCounter extends Component {
  constructor() {
    super();
    this.state = {
      num: 0,
      ColorChange: 'text-pink-600 text-9xl animate-pulse mt-5 mb-5',
      //In this state i am gonna doing change color accoudingly logic
      //through ColorChange Arrow Func. ;)
    }
  }
  Increament = () => {
    this.setState({ num: this.state.num + 1 })
    if (this.state.num > 10) {
      return this.setState({ ColorChange: 'text-green-500 text-9xl animate-pulse mt-5 mb-5' });
    }
    else {
      return this.setState({ ColorChange: 'text-red-600 text-9xl animate-pulse mt-5 mb-5' })
    }
  }
  Decreament = () => {
    this.setState({ num: (this.state.num > 0) ? this.state.num - 1 : 0 });

    if (this.state.num < 10) {
      return this.setState({ ColorChange: 'text-yellow-500 text-9xl animate-pulse mt-5 mb-5' });
    }
    else {
      return this.setState({ ColorChange: 'text-purple-600 text-9xl animate-pulse mt-5 mb-5' })
    }
  }
  Reset = () => {
    let number = this.setState({ num: this.state.num = 0 });
    let color = this.setState({ ColorChange: this.state.ColorChange = 'text-purple-700 text-9xl animate-pulse mt-5 mb-5' });
    return [number, color];

    // if (this.state.num < 10) {
    //   return this.setState({ ColorChange: 'text-yellow-500 text-9xl animate-pulse' });
    // }
    // else {
    //   return this.setState({ ColorChange: 'text-purple-600 text-9xl animate-pulse' })
    // }
  }




  render() {
    return (
      <div>
        <div className="mt-5 mb-5 text-5xl font-extrabold ">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
            Tasbeeh Counter App </span>
        </div>
        <div className='mt-5 mb-5'>
          <h1 className={this.state.ColorChange}>{this.state.num}</h1>
          <button onClick={this.Increament} className="bg-white text-blue-500 hover:bg-blue-500 hover:text-white border border-r-0 border-blue-500 rounded-l-lg px-4 py-2 mx-0 outline-none focus:shadow-outline">+</button>
          <button onClick={this.Decreament} className="bg-white text-blue-500 hover:bg-blue-500 hover:text-white border border-blue-500  px-4 py-2 mx-0 outline-none focus:shadow-outline">-</button>

          <button onClick={this.Reset} className='bg-white text-blue-500 hover:bg-blue-500 hover:text-white border border-blue-500  px-4 py-2 mx-0 outline-none focus:shadow-outline'>Reset</button>
        </div>

      </div>
    )
  }
}
