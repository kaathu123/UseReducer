import React, { useReducer } from 'react'
const initialState = {
    check: true,
    msg: "hi",
nextmsg:"hello",
};
const Reducer = (state, action) => {
    switch (action.type) {
        case 'truestate':
            return { ...state, check: !state.check };
            default:
                return state;
       
    }
}

const UserReducerconditional = () => {
    const [state,setState]=useReducer(Reducer,initialState);
    return (
        <div>
            <p>
                msg:{ state.check ? state.msg: state.nextmsg}
                </p>
<button onClick={()=>setState({type:'truestate'})}>show</button>
        </div>
        
    );
};

export default UserReducerconditional