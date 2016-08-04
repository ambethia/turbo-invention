import React, {Component} from 'react'

class Swatch extends Component {

  clickHandler = (color) => {
    this.props.handleClick(color)
  }

  render() {
    return <div
      className="swatch"
      onClick={this.clickHandler}
      style={{backgroundColor: this.props.color}}>
      {this.props.color}
    </div>
  }
}

export default Swatch;
