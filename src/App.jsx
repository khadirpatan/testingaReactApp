import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
class App extends Component {
    state = { 
        name:""
     }
  
    componentDidMount(){
       let  name=()=>{
            let tempName="Khadir Patan";
            for (let i of tempName){
                this.setState({name:i})
            }
        }
        this.interval=setInterval(name(),1000)
    }
    render() { 
        return (
        <React-Fragment>       
          <h1>Khadir Patan</h1>
            <h2>{this.state.name}</h2>

            </React-Fragment>
 
            );
    }
}
 
export default App;


