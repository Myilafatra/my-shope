import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';

class AllPost extends Component {

  
  render() {
    return (
      // <form onSubmit={event => {
			// 	    event.preventDefault()
                
      //           }}>
      
          <div className={'row'} id='bg'>
            
                {this.props.posts.map((post) => <Post key={post.id} post={post} />)}
          </div>   
      

     
    )}


   
}



const mapStateToProps = (state) => {
    return  {
        posts: state
    }
}
export default connect(mapStateToProps)(AllPost)