import React from 'react';
import PostForm from './components/PostForm'
import AllPost from './components/AllPost'

class App extends React.Component {
 
    
    render() {
        return (
            <div className={""}>
                  <PostForm/>
                  <AllPost/>
              
            </div>
        );
    }
}

export default App;