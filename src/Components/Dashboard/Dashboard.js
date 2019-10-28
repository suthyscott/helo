import React, {Component} from 'react';
import Post from '../Post/Post';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import axios from 'axios';


class Dashboard extends Component {
    constructor(){
        super()

        this.state = {
            search: '',
            checkbox: true,
            posts: []
        }
    }

    // componentDidMount = () => {
    //     axios.get(`/api/posts/${this.props.id}?userposts=${this.state.checkbox}&search=${this.state.search}` )
    //     .then(res => {
    //         this.setState({
    //             posts: res.data
    //         })
    //     })
    // }

    handleUpdateSearch = e => {
        // console.log('hit handleUpdateSearch')
        this.setState({
            [e.target.name]: e.target.value
        })
        // console.log(this.state.search)
    }   

    handleUpdateCheckbox = () => {
        if (this.state.checkbox === true){
            this.setState({
                checkbox: false
            })
        } else {
            this.setState({
                checkbox: true
            })
        }
    }

    handleSearch = () => {
        // console.log(this.props.id)
        // console.log(this.state.checkbox)
        // console.log(this.state.search)
        console.log(`/api/posts/${this.props.id}?userposts=${this.state.checkbox}&search=${this.state.search}`)
        axios.get(`/api/posts/${this.props.id}?userposts=${this.state.checkbox}&search=${this.state.search}` )
        .then(res => {
            console.log(res.data)
            this.setState({
                posts: res.data
            })
        })
    }

    // handleResetSearch = () => {
    //     axios.get(`/api/posts/${this.props.id}?userposts=${this.state.checkbox}&search=${this.state.search}` )
    //     .then(res => {
            
    //         this.setState({
    //             posts: res.data,
    //             search: ''
    //         })
    //     })
    // }

    render(){
        // console.log(this.state.posts)
        return (
            <div>
                Dashboard
                <input
                name='search'
                placeholder='Search'
                onChange={e => this.handleUpdateSearch(e)} />

                <input 
                type='checkbox'
                onChange={() => this.handleUpdateCheckbox()}/>

                <button onClick={e => this.handleSearch()} >Search</button>
                <button>Reset</button>

                {this.state.posts.map((e,i) => {
                    return <Post key={`posts at ${i}`} post={e}/>
                })}
            </div>
        )
    }
}

const mapStateTopProps = reduxState => {
    const {id} = reduxState
    return {
        id
    }
}

export default connect(mapStateTopProps)(withRouter(Dashboard))