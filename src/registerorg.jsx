import React, { useReducer } from 'react';

const initialState = {
    name: "kaathu",
    email: "kaathu@gmail.com",
    password: "kaathu123",
    address: "kaathus house",
    contact: "7025641204",
};

const Reducer = (state, action) => {
    switch (action.type) {
        case 'change_name':
            return { ...state, name: action.nextName };
        case 'change_email':
            return { ...state, email: action.nextEmail };
        case 'change_password':
            return { ...state, password: action.nextPassword };
        case 'change_address':
            return { ...state, address: action.nextAddress };
        case 'change_contact':
            return { ...state, contact: action.nextContact };
        default:
            return state;
    }
}

const Registerorg = () => {
    const [state, dispatch] = useReducer(Reducer, initialState);

    const handleNameChange = (e) => {
        dispatch({ type: 'change_name', nextName: e.target.value });
    }

    const handleEmailChange = (e) => {
        dispatch({ type: 'change_email', nextEmail: e.target.value });
    }

    const handlePasswordChange = (e) => {
        dispatch({ type: 'change_password', nextPassword: e.target.value });
    }

    const handleAddressChange = (e) => {
        dispatch({ type: 'change_address', nextAddress: e.target.value });
    }

    const handleContactChange = (e) => {
        dispatch({ type: 'change_contact', nextContact: e.target.value });
    }

    return (
        <div>
            <div>
                <input value={state.name} onChange={handleNameChange} placeholder="Name" />
            </div>
            <div>
                <input value={state.email} onChange={handleEmailChange} placeholder="Email" />
            </div>
            <div>
                <input value={state.password} onChange={handlePasswordChange} placeholder="Password" />
            </div>
            <div>
                <input value={state.address} onChange={handleAddressChange} placeholder="Address" />
            </div>
            <div>
                <input value={state.contact} onChange={handleContactChange} placeholder="Contact" />
            </div>
            <button>Click</button>
            <p>
                name: {state.name};<br />
                email: {state.email};<br />
                password: {state.password};<br />
                address: {state.address};<br />
                contact: {state.contact};
            </p>
        </div>
    );
}

export default Registerorg;
 