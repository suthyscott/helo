import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import './Nav.css'

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
        console.log(this.props)
        return (
            <div>
                {this.state.show ? (
                    <div>
                        <img id='profile-pic' src={this.props.profilePic}/>
                        <div>{this.props.username}</div>
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

const mapStateToProps = reduxState => {
    const {username, profilePic} = reduxState
    return {
        username, 
        profilePic
    }
}

// const mapDispatchToProps = {
//     updateReduxState
// }

export default connect(mapStateToProps)(withRouter(Nav))