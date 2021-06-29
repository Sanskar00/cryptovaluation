import React from 'react';

import './sign-in.css'

class SignIN extends React.Component{
    constructor(){
        super();
        this.state={
            email:'',
            password:''
        }
    }
    render(){
        return(
        <div className='sign-in'>
            <div className='title'>
                <h1>Sign In</h1>
                <span> I have already account</span>
            </div>
         </div>

        )
    }
}
    
