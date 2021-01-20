/* eslint-disable array-callback-return */
import React from 'react'

import {connect} from 'react-redux'
import {removeTodo} from '../../actions'


const mapStateToProps= (state)=>{
    return{
        todos:state.todos.data
    }
}

const List = ({todos,dispatch}) => {
    return (
       <ul>
           {todos.map((todo,index)=>(
               <ol key={index}>{todo.message }<button onClick={()=>dispatch(removeTodo(todo.id))}>Delete</button></ol>
           ))}
       </ul>
    )
}

export default connect(mapStateToProps)(List)
