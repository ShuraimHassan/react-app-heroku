import React, { Component, useState, setState } from 'react';

class StatePractice extends Component {

  constructor(x) {
    super();
    this.state = {
      num: 0,
      tasbeehCounter: 'Tasbeeh Counter',
    }

  }
  Increase = () => {
    this.setState({ num: this.state.num + 1 });
  }
  Decrease = () => {
    this.setState({ num: (this.state.num > 0 ? this.state.num - 1 : 0) });
  }
  Reset = () => {
    this.setState({ num: this.state.num = 0 });
  }

  render() {
    return (
      <div className='animation-fill-forwards animation-normal'>
        <h1 className='card border bg-gray-400 hover:bg-red-400 container font-extrabold text-center p-10'>{this.state.tasbeehCounter}</h1>
        <h2>{this.state.num}</h2>

        <div className="w-full ">
          <div className="grid gap-16 grid-cols-2 w-full bg-white shadow-lg rounded-lg p-16 overflow-hidden mx-auto">


            <div className="flex container gap-2 ml-52 ">
              <button className="uppercase px-8 py-2 rounded-full border border-green-600 text-green-600 max-w-max shadow-sm hover:shadow-lg" onClick={this.Increase}>Increse</button>
              <button className="uppercase px-8 py-2 rounded-full border border-blue-600 text-blue-600 max-w-max shadow-sm hover:shadow-lg" onClick={this.Decrease}>Decrease</button>

              <button className="uppercase px-8 py-2 rounded-full border border-red-600 text-red-600 max-w-max shadow-sm hover:shadow-lg" onClick={this.Reset}>Reset</button>

            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default StatePractice;