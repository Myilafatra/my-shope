import React, { Component } from 'react';

class Comment extends Component {

    constructor(props) {
        super(props);
        this.state = {
          clicks: 0,
        };
    }
    IncrementItem(){
        this.setState({ clicks: this.state.clicks + 1 });
    }
    render(){
        return  (
            <span title="J'adore" onClick={()=> this.IncrementItem()}>
                {this.state.clicks}
            </span>
        )
    }

}
export default Comment;