import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

class fetch_register extends Component {

    constructor(){
        super()
        this.state = {
            posts : []
        }
    }

    componentDidMount(){
        axios.get("http://localhost/pingifinit_blog/Api/fetch_data/user").then(response=>{
        this.setState({posts:response.data});
    })
    }
    
    render() {
        return (
            <div className="container pt-5 pb-5">
            <table className="table table-bordered table-striped">
               <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Email</td>
                    </tr>   
                </thead> 
                <tbody>
                    {this.state.posts.map((itm,k)=>{ 
                    return (
                    <tr>
                        <td id={k}>{itm.id}</td>
                        <td>{itm.fname}</td>
                        <td>{itm.email}</td>
                    </tr> 
                    ) 
                    }) }
                </tbody>
            </table>
            </div>
        )
    }
}

export default fetch_register
