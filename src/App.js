import React, {Component} from 'react'
import Swatch from './Swatch'
import color from './color'

class App extends Component {

  constructor (props) {
    super(props)

    const a = color.random()
    const b = color.random()
    const r = 0.5

    this.state = {
      aColor: a,
      bColor: b,
      mixColor: color.mix(a, b, r),
      value: r
    }
  }

  inputChangeHandler = (event) => {
    this.setState({
      value: event.target.value,
    })
  }

  swatchHandler = (swatch) => {
    const newState = {}
    newState[swatch] = color.random()
    this.setState(newState)
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('heelo!')
    nextState.mixColor = color.mix(
      this.state.aColor,
      this.state.bColor,
      this.state.value
    )
  }

  render() {
    return (
      <main>
        <h1>Color</h1>
        <div className="pallete">
          <Swatch color={this.state.aColor} handleClick={this.swatchHandler.bind(this, 'aColor')} />
          <Swatch color={this.state.mixColor} />
          <Swatch color={this.state.bColor} handleClick={this.swatchHandler.bind(this, 'bColor')} />
        </div>
        <div className="controls">
          <input type="range" min="0" max="1" step="0.01"
            value={this.state.value}
            ref="rangeSlider"
            onChange={this.inputChangeHandler} />
        </div>
      </main>
    );
  }
}

export default App;
