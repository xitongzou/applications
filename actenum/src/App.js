import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import TableComponent from './Table';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      views: [],
      loadedView: {},
      dataMap: new Map()
    }
  }

  componentDidMount() {
    fetch('https://mq7qz3xreh.execute-api.us-west-2.amazonaws.com/events/interview/views')
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          views: json
        });
      }).then(() => {
        return fetch('https://mq7qz3xreh.execute-api.us-west-2.amazonaws.com/events/interview/data');
      }).then((res) => res.json())
        .then((json) => {
        const data = json;
        const map = new Map();

        //parse + map the data
        for (let i = 0; i < data.columns.length; i++) {
            if (data.columns[i].id) {
              map.set(data.columns[i].id, []);
            } else {
              map.set('id', []);
            }
        }
        for (let j = 0; j < data.data.length; j++) {
          let k = 0;
          for (let key of map) {
            if (data.data[j][k] !== undefined) {
              map.get(key[0]).push(data.data[j][k]);
              k++;
            }
          }
        }
        this.setState({
          dataMap: map
        });
      });
  }

  loadView(id) {
    const loadedView = this.state.views.find((view) => {
      return view.id === id;
    });
    this.setState({
      loadedView: loadedView
    });

  }

  render() {

    const views = this.state.views;
    const dataMap = this.state.dataMap;
    const loadedView = this.state.loadedView;

    return (
      <Container fluid={true}>
        <Row>
          <Col xs="3">
            <h6>Rows: {dataMap.size > 0 && dataMap.get('id').length}</h6>
            <h6>Cols: {loadedView.columns && loadedView.columns.length}</h6>
          </Col>
        </Row>
        <Row>
          <Col xs="3">
            <ul>
              {views.map((view, i) =>
                <li onClick={() => this.loadView(view.id)} key={i} data-id={view.id}>{view.title}</li>
              )}
            </ul>
          </Col>
          <Col xs="9">
            <TableComponent view={loadedView} dataMap={dataMap} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
