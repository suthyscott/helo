import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateReduxState} from '../../ducks/reducer';
import './Nav.css'
import axios from 'axios';

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

    handleLogout = () => {
        console.log('hit handleLogout')
        console.log(this.props)
        axios.post('/api/auth/logout').then(res => {
            this.props.updateReduxState(0, '', '')
            this.props.history.push('/')
            console.log(res)
        })
        console.log(this.props)
    }
    
    render(){
        return (
            <div>
                {this.state.show ? (
                    <div>
                        <img id='profile-pic' src={this.props.profilePic} alt='Profile' />
                        <div>{this.props.username}</div>
                        <Link to='/dashboard'><button>Home</button></Link>
                        <Link to='new'><button>New Post</button></Link>
                        <button onClick={() => this.handleLogout()}>Logout</button>
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

export default connect(mapStateToProps, {updateReduxState})(withRouter(Nav))