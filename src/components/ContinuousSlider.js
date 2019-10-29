import React from 'react'
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';

export default class ContinuousSlider extends React.Component {

  constructor(props) {
    super(props);
    this.label = props.label;
  }

  updateState(props) {
      console.log(props);
  }

  render() {
    return (
      <Grid>
        <Typography id="continuous-slider" gutterBottom>
          {this.label}
        </Typography>
        <Grid item xs>
          <Slider onChange = {this.updateState} min = {0} max = {1} aria-labelledby="continuous-slider" step = {0.0001} />
        </Grid>
      </Grid>
    );
  }
}