import React, { Component } from 'react'
import {connect} from 'react-redux'

class PostForm extends Component{
    
    constructor() {
        super()
        this.state = {
            nb: 0,
            file: '',
            imagePreviewUrl: '',
            value: 'Please write an essay about your favorite DOM element.'
        }
    }
    handleSubmit = (e) => {
        this.setState({
            nb : this.state.nb + 1,
        })

        
        const produit = this.getProduit.value;
        const prix = this.getPrix.value;
        const description = this.getDescription.value;

        var somme =  new Intl.NumberFormat('de-DE').format(prix)

        const data = {
            id: new Date(),            
            nb : this.state.nb,
            produit,
            somme,
            description,
        }
        this.props.dispatch({
            type:'ADD_POST',
            data
        });
        this.getProduit.value = '';
        this.getPrix.value = '';
        this.getDescription.value = '';

       console.log(data)
        
    }
    _handleImageChange(e) {
      e.preventDefault();
  
      let reader = new FileReader();
      let file = e.target.files[0];
  
      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result
        });
      }
  
      reader.readAsDataURL(file)
      
      console.log('file : ', file);
      // console.log('frad : ', reader);
      //console.log('reader : ', reader.readAsDataURL(file));
    }
    render(){
        let {imagePreviewUrl} = this.state;
    //let $imagePreview = null;
    console.log('imagePreviewUrl : ', imagePreviewUrl);
    if (imagePreviewUrl) {
      //$imagePreview = (<img src={imagePreviewUrl} />);
    }
     else {
      //$imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

        return(
            <center className={"container"} >
                 <form onSubmit={event => {
                    event.preventDefault()
                    if (!this.getProduit.value || !this.getPrix.value) return

                        if(isNaN(this.getPrix.value)){
                            var err = document.getElementById('erreur')
                            err.innerHTML = 'Entrer un nombre'
                        }else{
                            this.handleSubmit()
                            var err1 = document.getElementById('erreur')
                            err1.innerHTML = ''
                        }
                    //document.getElementById('imgPreview').innerHTML  = $imagePreview
     
                }} 
                    className={'nom'}
                > 
                <table>
                    <tr>
                        <td><label className={'label'}>Produit</label></td>
                        <td><input required type='text' ref={(input)=>this.getProduit = input} className={'input1'} /><br/></td>
                    </tr>
                    <tr>
                        <td><label className={'label'}>Prix</label></td>
                        <td>
                            <input required type='text' ref={(input)=>this.getPrix = input} className={'input1'}/><br/> 
                            </td> 
                    </tr>
                    <tr>
                        <td><label className={'label'}>Description</label></td>
                        <td>
                            <p id='erreur' className={'erreur'}></p>
                            <textarea rows="3" required type='text' ref={(input)=>this.getDescription = input} className={'input1'}></textarea>
                        </td>
                    </tr>  
                    <tr>
                        <td colSpan="2" class="file">
                            {/* <input className="fileInput" 
                            type="file" style="visibility: hidden;" 
                            onChange={(e)=>this._handleImageChange(e)} /> */}
                            
                            <label for="file-input">file</label>
                            <input type="file" id="file-input"/>
                                                </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <button className={'ajout btn btn-primary'}  >Ajouter</button>
                        </td>
                    </tr>

                </table>   
                </form>
            </center>
        )
    }
}
export default connect()(PostForm)