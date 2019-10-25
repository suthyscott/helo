import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';

class Nav extends Component {
    constructor(){
        super()

        this.state = {
            show: true
        }
    }

    componentDidMount = () => {
        // console.log(this.state.show)
        if (this.props.location.pathname === '/' && this.state.show === true ) {
            this.setState({
                show: false
        }) 
    }
}

    componentDidUpdate = (prevProps, prevState) => {
        // console.log(this.props.location.pathname)
        // console.log(prevProps.location.pathname)
        // console.log(prevState.show)
        if (this.props.location.pathname === '/' && prevState.show === true ) {
                this.setState({
                    show: false
            }) 
        } else if (this.props.location.pathname !== '/' && prevState.show === false){
            this.setState({
                show: true
            })
        }
    }
    
    render(){
        return (
            <div>
                {this.state.show ? (
                    <div>
                        <Link to='/dashboard'><button>Home</button></Link>
                        <Link to='new'><button>New Post</button></Link>
                        <Link to='/'><button>Logout</button></Link>
                    </div>
                ) : (
                    <div></div>
                )}
                
            </div>
        )
    }
}

export default withRouter(Nav)