const postReducer = (State = [], action ) =>{
    switch(action.type){
        case 'ADD_POST':
            return State.concat([action.data]);
            //console.log(State);
          
        default:
            return State;

           
    }
}

export default postReducer