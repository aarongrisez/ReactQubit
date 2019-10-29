import React from 'react';
import Plot from 'react-plotly.js';

export default class QubitViewer extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        data: [{
          x: props.x,
          y: props.y,
          z: props.z,
          type: 'scatter3d',
          mode: 'markers',
          marker: {
            color: 'rgb(127, 127, 127)',
            size: .5,
            symbol: 'point',
            opacity: 0.1,
          },
          hoverinfo: 'none',
        },
        {
          x: [0, props.r * Math.sin(props.theta) * Math.cos(props.phi)],
          y: [0, props.r * Math.sin(props.theta) * Math.sin(props.phi)],
          z: [0, props.r * Math.cos(props.theta)],
          type: 'scatter3d',
          mode: 'lines',
          line: {
            color: 'rgb(44, 160, 44)',
            width: 2
          },
          hoverinfo: 'none',
        },
        {
          x: [0, 1],
          y: [0, 0],
          z: [0, 0],
          type: 'scatter3d',
          mode: 'lines',
          line: {
            color: 'rgb(224, 0, 0)',
            width: 2
          },
          hoverinfo: 'none',
          text: 'X'
        },
        {
          x: [0, 0],
          y: [0, 1],
          z: [0, 0],
          type: 'scatter3d',
          mode: 'lines',
          line: {
            color: 'rgb(0, 224, 0)',
            width: 2
          },
          hoverinfo: 'none',
          text: 'Y'
        },
        {
          x: [0, 0],
          y: [0, 0],
          z: [0, 1],
          type: 'scatter3d',
          mode: 'lines',
          line: {
            color: 'rgb(0, 0, 224)',
            width: 2
          },
          hoverinfo: 'none',
          text: 'Z'
        },
        {
          x: [props.r * Math.sin(props.theta) * Math.cos(props.phi)],
          y: [props.r * Math.sin(props.theta) * Math.sin(props.phi)],
          z: [props.r * Math.cos(props.theta)],
          type: 'scatter3d',
          mode: 'markers',
          marker: {
            color: '#9467bd',
            size: 3,
            symbol: 'circle',
            line: {
              color: 'rgb(44,160,44)',
              width: 1
            }},
          hoverinfo: 'text',
          hovertext: [`r: ${props.r}, theta: ${props.theta}, phi: ${props.phi}`]
        },
        ], 
        layout: {
          showlegend: false,
          width: 900,
          height: 600, 
          scene: {
            xaxis: {
              visible: false,
            },
            yaxis: {
              visible: false,
            },
            zaxis: {
              visible: false,
            }
          },
        }, 
      }
    }

    render() {
      return (
          <Plot
            data={this.state.data}
            layout={this.state.layout}
            onInitialized={(figure) => this.setState(figure)}
            onUpdate={(figure) => this.setState(figure)}
          />
      );
    }
  }

