import React , {Component} from 'react';
import { Card } from 'react-bootstrap';
import States from './states';

class Covid_data extends Component {
    constructor(){
        super()
        this.state = {
            'covid_data' : '',
        }
    }

    render() {
        return(
            <div className="container pt-5 pb-5">
                <div className="row">
                    <div className="col-md-4">
                    <Card variant="info" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>India</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                            Active Cases : 200000
                        </Card.Text>
                    </Card.Body>
                    </Card>
                    </div>
                    <div className="col-md-4"></div>
                    <div className="col-md-4"></div>
                    <div className="col-md-12">
                        <States />
                    </div>
                </div>
            </div>
        )
    }
}

export default Covid_data;