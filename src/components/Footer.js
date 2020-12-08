import React , {Component} from 'react';
import './../App.css';


// const Footer = () =>
//     <footer className="footer">
//         <div className="copy">
//             &copy;  2020 - All Right Reserved
//         </div>
//     </footer>

class Footer extends Component{
    constructor(){
        var date = new Date();
        var year = date.getFullYear();
        super()
        this.State = {
            year : year,
            name : 'Pingifinit'
        }
    }



    render(){
        return (
             <footer className="footer">
                <div className="copy">
        &copy; {this.State.year}  - All Right Reserved - {this.State.name} 
               </div>
            </footer>
        )
    }
}

export default Footer;