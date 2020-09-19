import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Container } from 'react-bootstrap';
import history from '../utils/history';
import Filters from '../components/Filters';
import './App.css';
import List from '../components/List';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            launchList: [],
            activeYear: '',
            activeLaunch: '',
            activeLand: ''
        };
    }
    componentDidMount() {
        fetch('https://api.spaceXdata.com/v3/launches?limit=100')
            .then(response => response.json())
            .then(data => {
                this.setState({ launchList: [...data] });
                console.log(data);
            });
        window.history.pushState('', '', '/SpaceX');
    }
    yearHandler = async (id) => {
        let x = parseInt(id);
        console.log(`https://api.spaceXdata.com/v3/launches?limit=100&launch_year=${x}`);
        await this.setState({
            activeYear: x,
            activeLaunch: '',
            activeLand: ''
        })
        this.callApi();
    }
    launchHandler = async (id) => {
        let x = id === 'true1' ? 'true' : 'false';
        console.log("launch" + x);
        await this.setState({
            activeLaunch: x
        });
        this.callApi();
    }

    landHandler = async (id) => {
        let x = id === 'true2' ? 'true' : 'false';
        await this.setState({
            activeLand: x
        });
        this.callApi();
    }
    callApi = async () => {
        let url = 'SpaceX?year=' + `${this.state.activeYear}` + '&launchsuccess=' + `${this.state.activeLaunch}` + '&landsuccess=' + `${this.state.activeLand}` + '&result';
        console.log(`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${this.state.activeLaunch}&land_success=${this.state.activeLand}&launch_year=${this.state.activeYear}`);
        await fetch(`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${this.state.activeLaunch}&launch_year=${this.state.activeYear}&land_success=${this.state.activeLand}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (this.state.activeYear === 2020) {

                }
                this.setState({ launchList: [...data] });
                history.push(`${url}`);
            }).catch(err => {
                console.error('Error-', err);
            });



    }

    render() {
        return (
            <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
                <header>
                    <Container>
                        <h1>SpaceX Launch Programs</h1>
                        <br />
                        <div className="row">
                            <div className='col-sm-3 '>
                                <Filters
                                    yearHandler={this.yearHandler}
                                    launchHandler={this.launchHandler}
                                    landHandler={this.landHandler}
                                    activeYear={this.state.activeYear}
                                    activeLand={this.state.activeLand}
                                    activeLaunch={this.state.activeLaunch}
                                />


                            </div>
                            <div className="col-sm-9">

                                <Row>
                                    <List launchList={this.state.launchList} />

                                </Row>
                            </div>

                        </div>
                    </Container>
                </header>
                <footer style={{ textAlign: 'center', fontWeight: 'bold' }}>
                    <p>Developed By:Deepali Gupta</p>
                </footer>
            </div >
        );
    }
}
export default App;
