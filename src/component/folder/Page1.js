import React, { Component } from 'react';

class Page1 extends Component {
  renderCountryOptions(){
    return this.state.countries.map((country, i) =>{
      return <option key={i}>{country}</option>
 
    });
  }
  render() {
    return (
      <div>
        <select>
          {this.renderCountryOptions()}
        </select>
      </div>
    );
  }
}

export default Page1;