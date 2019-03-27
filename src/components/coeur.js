import React, { Component } from 'react';
import icons from 'glyphicons'

class Coeur extends Component {

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
                <span id="icon">{icons.heart}</span>
            </span>
        )
    }

}
export default Coeur;





