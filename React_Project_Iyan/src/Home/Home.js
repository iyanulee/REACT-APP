import React, { Component } from 'react';
// import Studentlist from '../student-list/student-list';

import './Home.css';
import { Link } from 'react-router-dom';

class Home extends Component {

    state = {

    }

    deptClickedHandler = (deptParameter) => {
        this.props.history.push({
            pathname : '/student-list',
            state : {
                dept: deptParameter
            }
        });
        console.log("department clicked");
    }

    
    render() {
        console.log(this.props);
        return (
            <div>
                <ul id="overall">
                    <li onClick={() => this.deptClickedHandler( 'ece')} id="example1">ECE Dept</li>
                    <li onClick={() => this.deptClickedHandler( 'eee')} id="example1">EEE Dept</li>
                    <li onClick={() => this.deptClickedHandler( 'civil' )} id="example1">CIVIL Dept</li>
                    <li onClick={() => this.deptClickedHandler( 'csc' )} id="example1">CSC Dept</li>
                    <li onClick={() => this.deptClickedHandler( 'it' )} id="example1"><Link to="/student-list?dept=it">IT Dept</Link></li>
                </ul>
            </div>
        );
    }
}

export default Home;