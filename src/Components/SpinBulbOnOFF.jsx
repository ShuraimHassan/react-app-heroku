import React, { Component, Fragment } from 'react'
export default class SpinBulbOnOFF extends Component {
  state = {
    isClicked: true,
    button: 'Switch On'
  }
  onChangeHandler = (e) => {
    this.setState({ isClicked: !this.state.isClicked })
  }


  render() {
    const { isClicked } = this.state;
    return (
      <Fragment>

        <h1>Spin Bulb ON/OFF </h1>
        <div className='container grid justify-items-center '>
        <img alt='bulb pic' className='animate-spin' src={isClicked ? 'https://www.w3schools.com/js/pic_bulboff.gif' : 'https://www.w3schools.com/js/pic_bulbon.gif'} />
        <button className={this.state.isClicked ? 'btn-green' : 'btn-red'} onClick={this.onChangeHandler}>
          {this.state.isClicked ? 'Switch On' : 'Switch Off'}
        </button>
        </div>

      </Fragment>
    )
  }
}
