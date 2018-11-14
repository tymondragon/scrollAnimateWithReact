import React from 'react';
import './App.css'

export default class GraphBody extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      multiplier: 20,
    }
    this.pathRef = React.createRef()
  }
    componentDidMount() {
      this.props.setParams('pathDistance', this.pathRef.current.getTotalLength())
      this.props.setParams('pathScrollTop', this.pathRef.current.scrollTop)
      this.props.getBoundingClientRect(this.pathRef.current.getBoundingClientRect())
      }

    prepareData() {
      let d = [`M ${this.props.x} ${this.props.y}`];

      let collector = this.props.data.map(chunk => {
        let xNext = this.props.x + chunk[0] * this.state.multiplier;
        let yNext = this.props.y - chunk[1] * this.state.multiplier;
        return `L ${xNext} ${yNext}`;
      });

      return d.concat(collector).join(' ');
    }

  render() {
    const { pathClass } = this.props
    let d = this.prepareData();
    return(
      <path
        ref={ this.pathRef }
        style={ pathClass }
        d={ d }
        stroke="white"
        strokeWidth={ 5 }
        fill="none"
      />
      // {/* <polyline
      //   ref={ this.pathRef }
      //   // points="475,100 75,100 75,800"
      //   points="700,175 100,175 100,100 700,100"
      //   style={ pathClass }
      //   stroke="white"
      //   strokeWidth={ 5 }
      //   fill="none"
      // /> */}

    )
  }
}