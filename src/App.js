import React, { Component } from 'react';
import apiKey from './config';
import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './index.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Photo from './components/Photo';
import SearchBar from './components/SearchBar';
import PageNotFound from './components/PageNotFound';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      daisy: [],
      cactus: [],
      roses: [],
      input: [],
      loading: true
    };
  }
//The first 24 pictures will be of flowers
  componentDidMount() {
    this.mainSearch('flowers', 'flowers');
  }

  mainSearch = (query, input) => {
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
      )
      .then(response => {
        this.setState({
          [input]: response.data.photos.photo,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching the data', error);
      });
  };

  loading = () => this.state.loading;
// routes to the 3 nav buttons and a general page when the first page loads
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <SearchBar onSearch={this.mainSearch} />
          <Nav />
          {this.state.loading ? (
            <p>Loading...</p>
          ) : (
            <Switch>
              <Route
                exact
                path="/"
                render={() => <Photo data={this.state.flowers} />}
                title={"flowers"}
               
              />
              <Route
                exact
                path="/daisy"
                render={() => (
                  <Photo
                    mainSearch={this.mainSearch('daisy', 'daisy')}
                    data={this.state.daisy}
                  />
                )}
              />
              <Route
                exact
                path="/cactus"
                render={() => (
                  <Photo
                    mainSearch={this.mainSearch('cactus', 'cactus')}
                    data={this.state.cactus}

                  />
                )}
              />
              <Route
                exact
                path="/roses"
                render={() => (
                  <Photo
                    mainSearch={this.mainSearch('roses', 'roses')}
                    data={this.state.roses}
                    title={"roses"}
                  />
                )}
              />
              <Route
                exact
                path="/results"
                render={() => <Photo data={this.state.results} />}
              />
              <Route component={PageNotFound} />
            </Switch>
          )}
        </div>
      </BrowserRouter>
    );
  }
}
