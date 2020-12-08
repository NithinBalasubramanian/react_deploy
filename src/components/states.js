import React , {Component} from 'react';
import axios from 'axios';
import { Accordion, Card , Button } from 'react-bootstrap';

class States extends Component {
    constructor(){
        super()
        this.state = {
            states : {}
        }
    }

    componentDidMount(){
        axios.get("https://api.covid19india.org/state_district_wise.json").then(response => {
            console.log(response.data);
            this.setState({states:response.data});
        })
    }

    render() {
        
        let key_data = Object.keys(this.state.states);
         
        return(
           
           
            <div>
               {key_data.map((itm,ky) => {
                let dist_data = Object.keys(this.state.states[itm].districtData);
             return(
                <Accordion>
                    <Card>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            {itm}
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <table className="table table-striped table-bordered">
                                    <thead>
                                        <tr>
                                            <th>S No</th>
                                            <th>District</th>
                                            <th>Total</th>
                                            <th>Active</th>
                                            <th>Recover</th>
                                            <th>Death</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        { 
                                            dist_data.map((d_itm,d_k) => {
                                                return (
                                                    <tr>
                                                        <td>{d_k}</td>
                                                        <td>{d_itm}</td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
             )
            })}
            </div>
        )
    
    }
}

export default States;