import React, { useReducer } from 'react'
const initialState = {
    name:"kaathu",
    email:"kaathu@gmail.com",
    password:"kaathu123",
    address:"kaathus house",
    contact:"7025641204",
    check:true,
};
const Reducer = (state,action) =>{
    switch (action.type){
        case 'click':
            return{...state,check:!state.check};
            default:
                return state;

    }
}
const Registration = () => {
    const [state,setState]=useReducer(Reducer,initialState);
  return (
    <div>
        <p>
            name:{state.check && state.name};
            email:{state.check && state.email};
            password:{state.check && state.password};
            address:{state.check && state.address};
            contact:{state.check && state.contact};
        </p>
        <button onClick={()=>setState({type:'click'})}>click</button>
    </div>
  )
}

export default Registration