import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './component/folder/Navbar';
import Page1 from './component/folder/Page1';
import axios from 'axios'
import CountUp from 'react-countup';
import Footer from './component/folder/Footer';

class App extends Component {
  state={
    confirmed:0,
    recovered:0,
    deaths:0,
    lastUpdate:0,
    countries:[]
  }
  componentDidMount(){
    this.getData();
  }
   async getData() {
    const resApi = await axios.get("https://covid19.mathdro.id/api");
    const resCountries = await axios.get("https://covid19.mathdro.id/api/countries");
      this.setState({
        confirmed:resApi.data.confirmed.value,
        recovered:resApi.data.recovered.value,
        deaths:resApi.data.deaths.value,
        lastUpdate:resApi.data.lastUpdate,
        countries:resCountries.data.countries
    });
  }
  renderCountryOptions(){
   return this.state.countries.map((country,i)=>{
     return <option key={i}>{country}</option>
   })
  }
  
  render() {
    return (
      <div>
       <select>
         {this.renderCountryOptions}
       </select>
       <Navbar />
       <div class="card-deck">
  <div class="card" style={{backgroundColor:"#ffffcc",borderBottom:"10px solid red"}}>
    
    <div class="card-body  text-center">
      <h5 class="card-title" style={{fontSize:"25px",fontFamily:"Franklin Gothic"}}>Confirmed Cases</h5>
      <i class="fas fa-viruses fa-2x"></i>
      <p class="card-text" style={{color:"black" ,fontSize:"20px"}} >
      <CountUp
      start={0}
      end={this.state.confirmed}
      separator=","
      />
        </p>
        <p>{this.state.lastUpdate}</p>
    </div>
  </div>
  <div class="card" style={{backgroundColor:"#ffffcc",borderBottom:"10px solid green"}}>
   
    <div class="card-body text-center" >
      <h5 class="card-title" style={{fontSize:"25px",fontFamily:"Franklin Gothic"}}>Recovery Cases</h5>
      <i class="fas fa-hand-holding-heart fa-2x" style={{color:"green"}}></i>
      <p class="card-text" style={{color:"black" ,fontSize:"20px"}}>
      <CountUp
      start={0}
      end={this.state.recovered}
      separator=","
      />
        </p>
        <p>{this.state.lastUpdate}</p>
    </div>
  </div>
  <div class="card" style={{backgroundColor:"#ffffcc",borderBottom: "10px solid grey"}}>
    
    <div class="card-body text-center">
      <h5 class="card-title" style={{fontSize:"25px" , fontFamily:"Franklin Gothic"}}>Death Cases</h5>
      <i class="fas  fa-skull-crossbones fa-2x" style={{color:"grey"}}></i>
      <p class="card-text" style={{color:"black" ,fontSize:"20px"}}>
      <CountUp
      start={0}
      end={this.state.deaths}
      separator=","
      />
      </p>
      <p>{this.state.lastUpdate}</p>
    </div>
  </div>
</div>
<Footer />
       </div>

        
    );
  }
}

export default App;