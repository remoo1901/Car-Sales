import React from 'react';
import {connect} from "react-redux"
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import {removeFeature, addItem} from "./components/Actions/index"

const App = (props) => {
  
  //const removeFeature = item => {
    // dispatch an action here to remove an item
  //};

  //const buyItem = item => {
    // dipsatch an action here to add an item
  //};

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps =(state) =>{
console.log(state)
}

const mapDispatchToProps= {
removeFeature,
addItem
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
