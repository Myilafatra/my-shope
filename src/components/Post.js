import React, { Component } from 'react'
import {connect} from 'react-redux'
// import PostForm from './PostForm'
import { confirmAlert } from 'react-confirm-alert'; 
import 'bootstrap/dist/css/bootstrap.min.css'
import Coeur from './coeur'
import 'react-confirm-alert/src/react-confirm-alert.css'

class Post extends Component {

  update = () => (
	confirmAlert({
			customUI: ({ onClose }) => {

				return (
					<div className="custom-ui" >
					<form className={'edit'} 	onSubmit={event => {
								event.preventDefault()
								////////////if(isNaN(this.newPrenom.value)){
										var err1 = document.getElementById('commentaire')
                    err1.innerHTML = this.Commentaire.value
                    console.log('commentaire', this.Commentaire.value);
                    
								}}>
          <div  onClick={onClose} name = 'comm' className={'close'}> X</div> <br/>
            <div className={'coms'}>
              <input type='text' ref={(input)=>this.Commentaire = input } className={''}   />	
              <button >
                comment
              </button>

              <p id='commentaire' className={'commentaire'}></p>
              </div>
						</form>
            
					</div>
				);
			}
		})
	)
	
  render() {
  return (
      <div key = {this.props.post.nb} className={'col-md-3,5 colonne'} >
          <div className={'prod'}>
            <b>{this.props.post.produit}</b>
          </div>
          <div className = {'block'}>
            {this.props.post.description }
          </div>
          <div className={'prix'}>
            {this.props.post.somme }Ar
          </div> 
                  
          <hr/>

          <div className={'row table'}>
              <div >
                  <Coeur/>
              </div>
              <div onClick={()=>this.update()
              } className={'com'}>Comment</div>    
          </div>    
      </div> 

		
  
  );
 }
}

export default connect()(Post);