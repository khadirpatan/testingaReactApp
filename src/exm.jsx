
import React, { Component } from 'react';

class Clock extends Component {
  constructor(props){
    super(props);
    this.state = {currentCount: ''}
  }
  timer() {
      let tempName="Khadir Patan";
        for (let i of tempName){
            this.setState({currentCount:i})
        }
 
  }
  componentDidMount() {
    this.intervalId = setInterval(this.timer.bind(this), 1000);
  }
  componentWillUnmount(){
    clearInterval(this.intervalId);
  }
  render() {
    return(
      <div>{this.state.currentCount}</div>
    );
  }
}
 
export default Clock;