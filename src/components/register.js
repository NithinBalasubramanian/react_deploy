import React , {Component} from 'react';
import './../App.css';

class Register extends Component{
    constructor(){
        super()
        this.state= {
            fname : '',
            lname : '',
        }

    }

    formhandle(event){
        event.preventDefault();
        alert(`${this.state.fname} ${this.state.lname}`);
    }

    handleFname(event){
        this.setState({
            fname : event.target.value
        })
    }

    handleLname = event => {
        this.setState({
            lname : event.target.value
        })
    }

    render() {
        return ( <div className="register_form_main">
            <div className="register_form">
                <form onSubmit={this.formhandle.bind(this)}>
                    <label>First Name :</label>
                    <input name="fname" onChange={this.handleFname.bind(this)}></input>
                    <br></br>
                    <label>Last Name :</label>
                    <input name="lname" onChange={this.handleLname.bind(this)}></input>
                    <br></br>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        </div>
        )
    }

}

export default Register;