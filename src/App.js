import React, { Component } from 'react';
import './App.css';
import customData from './customData.json';
import {ListComponent} from './components/listComponent';
import {SearchBox} from './components/searchBox';
import {PaginationComponent} from './components/paginationComponent';

const pageSize = 10;

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      pageFromCallback: 1,
      searchQuery: ''
    };
    this.getPageNo = this.getPageNo.bind(this);
    this.getSearchQuery = this.getSearchQuery.bind(this);
  }

  getPageNo(selectedPage) {
      this.setState({pageFromCallback: selectedPage});
      //console.log('page from callback is:', this.state.pageFromCallback);
  };
  getSearchQuery(query) {
      this.setState({searchQuery: query});
      //console.log('query from callback is:', this.state.searchQuery);
  };

  render() {
    function noOfPage(){
      return Math.ceil(customData.length/pageSize);
    };

    return (
      <div className="container">
        <SearchBox callbackFromApp={this.getSearchQuery}></SearchBox>

        <ListComponent searchQuery={this.state.searchQuery} data={customData} currentPage={this.state.pageFromCallback} pageSize={pageSize}></ListComponent>

        <PaginationComponent callbackFromApp={this.getPageNo} pages={noOfPage()}></PaginationComponent>
      </div>
    );
  }
};

export default App;
