import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class List extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log('listtts' + this.props.launchList);
        return (
            <>
                {
                    this.props.launchList.map(x => {

                        return (
                            <div className="col-sm-6 col-lg-3 col-xs-12" key={Math.random()}>
                                <Card className="cardabc" key={Math.random()}>
                                    <Card.Img variant="top" src={x.links.mission_patch} style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }} />
                                    <Card.Body>
                                        <Card.Title style={{ color: '#898CB6' }}>{x.mission_name}#{x.flight_number}</Card.Title>
                                        <Card.Text>
                                            <b>Mission Ids: </b>
                                            <ul>{x.mission_id.map(ids => <li key={ids}>{ids.toString()}</li>)}</ul>

                                            <b>Launch Year: </b>{x.launch_year}
                                            <br />
                                            <b>Successful Launch: </b>{x.launch_success === null ? "Not launched" : x.launch_success.toString()}
                                            <br />
                                            <b>Successful Landing: </b>{!x.rocket.first_stage.cores[0].land_success === null ? 'NULL' : x.rocket.first_stage.cores[0].land_success}
                                        </Card.Text>
                                    </Card.Body>

                                </Card>
                            </div>
                        )
                    })
                }
            </>
        )

    }


}


export default List;