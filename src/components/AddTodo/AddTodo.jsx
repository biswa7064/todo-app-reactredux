/* eslint-disable no-unused-vars */
import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../../actions'

function AddTodo({dispatch}) {
    return (
       <form onSubmit={(event)=>{
           event.preventDefault();
           let input = event.target.inputName.value;
           dispatch(addTodo(input))
           event.target.inputName.value=''
       }}>
           <input type="text" name="inputName"/>
           <button onClick={()=>{}}>ADD</button>
       </form>
    )
}

export default connect()(AddTodo)
