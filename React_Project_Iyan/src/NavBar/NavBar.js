import  React, { Component }  from 'react';

import { Route, Link } from "react-router-dom";


import './NavBar.css';
import Home from '../Home/Home';
import Studentlist from '../student-list/student-list';
import Viewstudent from '../view-student/view-student';
import Addstudent from '../add-student/add-student';

class Navbar extends Component {

    render(){
        return (
                <div>
                    <ul className="ul">
                        <li className="li"><Link to="/">Home</Link></li>
                        <li className="li"><Link to="/student-list">Student list</Link></li>
                        <li className="li"><Link to="/add-student">Add student</Link></li>
                        <li className="li"><Link to="/view-student">View student</Link></li>
                    </ul>

                    <hr />

                    <Route exact path="/" component={Home} />
                    <Route path="/student-list" component={Studentlist} />
                    <Route path="/add-student" component={Addstudent} />
                    <Route path="/view-student" component={Viewstudent} />
                </div>
        );
    }



}

export default Navbar;