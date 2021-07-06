import React from 'react';
// eslint-disable-next-line no-unused-vars

import './index.css'
// import Box from './Box'



class Timer extends React.Component {

constructor(props) {
  super(props);
  this.state = { 
    
    second : 0 ,
    show : true
  
  };
  
}

 Increment = ()=> {
//console.log("Inside Increment..")
this.setState({
  second : this.state.second +1 ,
  show : !this.state.show
});
}

Decrement = ()=> {

  this.setState({
    second : this.state.second - 1 
  })
  }

  componentDidMount(){
       console.log("cPMPONENT DID MOUNT CALLED...")
  }

    componentDidUpdate(){
      console.log("component did update called......")
    }

    componentWillUnmount(){

      console.log("component is goint to unmount...")
    }


    getSnapshotBeforeUpdate(){
          console.log("Getting snapshot before update...")
    }

    // shouldComponentUpdate(){
    //   console.log("should component update called...")
    // }



render() {
  console.log("rendering...")
  return (
    <div>
      Seconds: {this.state.second}
      <button onClick={this.Increment} style={{color : this.props.colour}}   >+</button>
      <button onClick={this.Decrement} style={{color : this.props.colour}}  >-</button>
      {/* {
         this.state.show ?  <Box /> : null
          
        }
      } */}
      

    </div>
    
  );
}
}

export default Timer

