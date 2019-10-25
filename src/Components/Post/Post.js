import React, {Component} from 'react';
import './Post.css'

class Post extends Component {
    
    render(){
        return (
            <div className='post'>
                <h2>{this.props.post.title}</h2>
                <div> by {this.props.post.username}</div>
                
                <img id='profile-pic' src={this.props.post.profile_pic} alt='Profile'/>
            </div>
        )
    }
}

export default Post