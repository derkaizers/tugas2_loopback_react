import React, { Component } from 'react';
import axios from 'axios';

import Getdata from './getdata';

class App extends Component {
  constructor(){
    super();
    this.state={
      nm:'',
      usia:'',
      hcap:'',
      asal:''
    }
  }
  klik2(){
    this.setState({
      nm:this.refs.nama.value,
      usia:this.refs.usia.value, 
      hcap:this.refs.hcap.value,
      asal:this.refs.asal.value
    })
  }
  componentWillUpdate(x,y){
    var data={
      nama:y.nm,
      usia:y.usia,
      hcap:y.hcap,
      asl:y.asal
    }
    console.log(data);
    var str=JSON.stringify(data);
    
    let axiosConfig = {
      headers: {
       'Content-Type': 'application/json;charset=UTF-8',
      }
      };
      axios.post('http://localhost:3001/api/pemains',str,axiosConfig).then((res)=>{
        console.log("Response server :",res)
      })
  }
  render() {
    return (
      <div className="container">
      <form>
            <div className="form-group">
            <label htmlFor="exampleInputName">Nama</label>
            <input type="text" className="form-control" ref="nama" id="exampleInputName" placeholder="Nama"/>
            </div>
            <div className="form-group">
            <label htmlFor="exampleInputUsia">Usia</label>
            <input type="usia" className="form-control" ref="usia" id="exampleInputUsia" placeholder="Usia"/>
            </div>
            <div className="form-group">
            <label htmlFor="exampleInputHandicap">Handicaps</label>
            <input type="handicap" className="form-control" ref="pass" id="exampleInputHandicap" placeholder="handicap"/>
            </div>
            <div className="form-group">
            <label htmlFor="exampleInputAsal">Asal</label>
            <input type="asal" className="form-control" ref="pass" id="exampleInputAsal" placeholder="asal"/>
            </div>
          <button type="submit" className="btn btn-primary"onClick={()=>{this.klik2();}}>Post data</button>
        </form>
        <Getdata />
      </div>
    );
  }
}

export default App;