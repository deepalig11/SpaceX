import React, { Component } from 'react';
import { Card, ButtonGroup, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from './Button';




class Filters extends Component {
    constructor(props) {
        super(props);

    }





    render() {
        return (
            <Card style={{ padding: '10px' }} >
                <h5 style={{ fontWeight: 'bold' }}>Filters</h5>
                <h6 className="filterstyle">Launch Year</h6>

                <ButtonGroup>
                    <Button year='2006' active={this.props.activeYear === 2006} clickHandler={this.props.yearHandler}>2006</Button>
                    <Button year='2007' active={this.props.activeYear === 2007} clickHandler={this.props.yearHandler}>2007</Button>

                </ButtonGroup>
                <ButtonGroup>
                    <Button year='2008' active={this.props.activeYear === 2008} clickHandler={this.props.yearHandler}>2008</Button>
                    <Button year='2009' active={this.props.activeYear === 2009} clickHandler={this.props.yearHandler}>2009</Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button year='2010' active={this.props.activeYear === 2010} clickHandler={this.props.yearHandler}>2010</Button>
                    <Button year='2011' active={this.props.activeYear === 2011} clickHandler={this.props.yearHandler}>2011</Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button year='2012' active={this.props.activeYear === 2012} clickHandler={this.props.yearHandler}>2012</Button>
                    <Button year='2013' active={this.props.activeYear === 2013} clickHandler={this.props.yearHandler}>2013</Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button year='2014' active={this.props.activeYear === 2014} clickHandler={this.props.yearHandler}>2014</Button>
                    <Button year='2015' active={this.props.activeYear === 2015} clickHandler={this.props.yearHandler}>2015</Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button year='2016' active={this.props.activeYear === 2016} clickHandler={this.props.yearHandler}>2016</Button>
                    <Button year='2017' active={this.props.activeYear === 2017} clickHandler={this.props.yearHandler}>2017</Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button year='2018' active={this.props.activeYear === 2018} clickHandler={this.props.yearHandler}>2018</Button>
                    <Button year='2019' active={this.props.activeYear === 2019} clickHandler={this.props.yearHandler}>2019</Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button year='2020' active={this.props.activeYear === 2020} clickHandler={this.props.yearHandler}>2020</Button>
                </ButtonGroup>

                <h6 className="filterstyle">Successful Launch</h6>
                <ButtonGroup>
                    <Button year='true1' active={this.props.activeLaunch == 'true'} clickHandler={this.props.launchHandler}>True</Button>
                    <Button year='false1' active={this.props.activeLaunch == 'false'} clickHandler={this.props.launchHandler}>False</Button>
                </ButtonGroup>
                <h6 className="filterstyle">Successful Landing</h6>
                <ButtonGroup>
                    <Button year='true2' active={this.props.activeLand == 'true'} clickHandler={this.props.landHandler}>True</Button>
                    <Button year='false2' active={this.props.activeLand == 'false'} clickHandler={this.props.landHandler}>False</Button>
                </ButtonGroup>
            </Card>
        )
    }
}


export default Filters;