import {Component} from 'react'

import './index.css'

class DigitalTimer extends Component {
  state = {isTrue: true, minute: 25, seconds: 0}

  //   componentDidMount() {
  //     this.timerID = setInterval(this.tick, 1000)
  //   }

  //   tick = () => {
  //     this.setState(prevState => ({seconds: prevState.seconds - 1}))
  //   }

  onClickimageBtn = () => {
    this.setState(prevState => ({
      isTrue: !prevState.isTrue,
    }))
    this.timerId = setInterval(this.tick, 1000)
  }

  tick = () => {
    const {seconds, minute} = this.state
    if (seconds === 0) {
      this.setState({minute: minute - 1, seconds: 59})
    } else if (minute === 0 && seconds === 0) {
      this.setState({minute: 25, seconds: 0, isTrue: true})
    } else {
      this.setState({seconds: seconds - 1})
    }
  }

  onClickimageBtn1 = () => {
    clearInterval(this.timerId)
    this.setState(prevState => ({isTrue: !prevState.isTrue}))
  }

  minusBtnOne = () => {
    this.setState(prevState => ({minute: prevState.minute - 1}))
  }

  plusBtnOne = () => {
    this.setState(prevState => ({minute: prevState.minute + 1}))
  }

  onClickimageBtn2 = () => {
    clearInterval(this.timerId)
    this.setState({minute: 25, seconds: 0, isTrue: true})
  }

  render() {
    const {minute, seconds, isTrue} = this.state
    let sai
    if (seconds < 10) {
      sai = (
        <h1 className="headingtimer">
          {minute}:0{seconds}
        </h1>
      )
    } else {
      sai = (
        <h1 className="headingtimer">
          {minute}:{seconds}
        </h1>
      )
    }
    return (
      <div className="background-details">
        <h1 className="digtitaltimerheading">Digital Timer</h1>
        <div className="overallcontainerone">
          <div className="containerimageone">
            <div className="whitecontainer">
              {sai}
              {isTrue ? <p>Paused</p> : <p>Running</p>}
            </div>
          </div>
          <div>
            <div className="playiconoverallcontainerone">
              <div className="playiconcontainer">
                {isTrue ? (
                  <button
                    type="button"
                    className="buttonimageclicking"
                    onClick={this.onClickimageBtn}
                  >
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
                      alt="play icon"
                      className="playiconone"
                    />
                  </button>
                ) : (
                  <button
                    type="button"
                    className="buttonimageclicking"
                    onClick={this.onClickimageBtn1}
                  >
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/pause-icon-img.png"
                      alt="pause icon"
                      className="playiconone"
                    />
                  </button>
                )}
                {isTrue ? (
                  <button type="button" className="startbtnone">
                    Start
                  </button>
                ) : (
                  <button type="button" className="startbtnone">
                    Pause
                  </button>
                )}
              </div>
              <div className="playiconcontainer">
                <button
                  type="button"
                  className="buttonimageclicking"
                  onClick={this.onClickimageBtn2}
                >
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png "
                    alt="reset icon"
                    className="playiconone"
                  />
                </button>
                <button type="button" className="startbtnone">
                  Reset
                </button>
              </div>
            </div>
            <p className="settimerparagraph">Set Timer limit</p>
            <div className="buttoncontainers">
              {!isTrue ? (
                <button
                  type="button"
                  className="buttonOne"
                  disabled
                  onClick={this.minusBtnOne}
                >
                  <p>-</p>
                </button>
              ) : (
                <button
                  type="button"
                  className="buttonOne"
                  onClick={this.minusBtnOne}
                >
                  <p>-</p>
                </button>
              )}
              <button type="button">{minute}</button>
              {!isTrue ? (
                <button
                  type="button"
                  className="buttonOne1"
                  disabled
                  onClick={this.plusBtnOne}
                >
                  <p>+</p>
                </button>
              ) : (
                <button
                  type="button"
                  className="buttonOne1"
                  onClick={this.plusBtnOne}
                >
                  <p>+</p>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
