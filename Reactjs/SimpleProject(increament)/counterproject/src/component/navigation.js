import React,{Component} from 'react';

class Nav extends Component {
    

    render() { 
        return ( 
            <nav className="navbar ">
                <div className="navItem">
                    Total<span className="badge" > {this.props.total} </span>
                </div>
            </nav>
        );
    }
}
 
export default Nav;


