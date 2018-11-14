import React from 'react';
import Axis from './axis';
import GraphBody from './graph_body';
import './App.css'

export default class Graph extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      width: 650,
      height: 600,
      }
    this.svgRef = React.createRef()
  }
  componentDidMount() {
    let currentElement = this.svgRef.current.clientHeight
    this.props.setParams('svgHeight', currentElement)
    }

  render() {
  const { width, height } = this.state
  const { data, setParams, getBoundingClientRect, pathClass, scrollTo
   } = this.props
  console.log(pathClass, "IN GRAPH")
    return (
      <svg className="sticky" ref={ this.svgRef } width={width} height={ height }>
        {/* <Axis
          x={20}
          y={height - 25}
          length={width}
          horizontal={true}
        />
        <Axis
          x={20}
          y={75}
          length={height - 100}
          horizontal={false}
        /> */}
        <GraphBody
          setParams={ setParams }
          getBoundingClientRect={ getBoundingClientRect }
          pathClass={ pathClass }
          x={ 20 }
          y={ height - 100 }
          data={ data }
          scrollTo={ scrollTo }
        />
      </svg>
    )
  }
}