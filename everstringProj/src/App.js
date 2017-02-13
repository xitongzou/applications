import React, { Component } from 'react';
import $ from 'jquery';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor() {
        super();
        this.state = {
            username: null,
            repos: []
        };
        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.fetch = this.fetch.bind(this);
        this.setRepos = this.setRepos.bind(this);
    }

    handleUserNameChange(e) {
        const target = e.target;
        const value = target.value;
        this.setState({
            username: value
        });
    }

    setRepos(repos) {
        this.setState({
            repos
        })
    }

    fetch() {
        const setRepos = this.setRepos;
        if (this.state.username !== null) {
            const url = `https://api.github.com/users/${this.state.username}/repos`;
            // I have to use jquery here instead of fetch because npm-fetch has dependency issues
            $.get(url, (repos) => {
                repos.sort((repo1, repo2) => {
                   if (repo1.stargazers_count < repo2.stargazers_count) {
                       return 1;
                   }
                   if (repo1.stargazers_count > repo2.stargazers_count) {
                       return -1;
                   }
                   return 0;
                });
                setRepos(repos);
            });
        }
    }

  render() {

    const repos = this.state.repos;

    return (
        <MuiThemeProvider>
          <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Github Repo Fetching App</h2>
            </div>
          <form className="inputForm">
              <label>Input Github username: </label>
              <TextField name="username" hintText="octocat" onChange={this.handleUserNameChange}/>
              <FlatButton label="Fetch" onClick={this.fetch} />
          </form>
          <Table selectable={false}>
              <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                  <TableRow>
                      <TableHeaderColumn>Username</TableHeaderColumn>
                      <TableHeaderColumn>Repo name</TableHeaderColumn>
                      <TableHeaderColumn>Stars</TableHeaderColumn>
                      <TableHeaderColumn>Watchers</TableHeaderColumn>
                      <TableHeaderColumn>Open Issues</TableHeaderColumn>
                  </TableRow>
              </TableHeader>
              {repos.length > 0 &&
                  <TableBody displayRowCheckbox={false}>
                      {repos.map(function(repo, i){
                          return <TableRow key={i}>
                              <TableRowColumn>{repo.owner.login}</TableRowColumn>
                              <TableRowColumn>{repo.name}</TableRowColumn>
                              <TableRowColumn>{repo.stargazers_count}</TableRowColumn>
                              <TableRowColumn>{repo.watchers_count}</TableRowColumn>
                              <TableRowColumn>{repo.open_issues_count}</TableRowColumn>
                          </TableRow>;
                      })}
                  </TableBody>
              }
          </Table>
          <footer>&copy; 2017 Tong Zou</footer>
          </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
