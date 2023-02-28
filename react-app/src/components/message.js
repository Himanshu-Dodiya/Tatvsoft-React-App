// class component required 2 files imprt
import React , {Component} from 'react'

class Message extends Component {
    constructor(){
        super()
        this.state = {
            message : "Welcome visitor"
        }
    }
    changeMessage(){
        this.setState({
            message : 'Thanks for subscribing'
        })
    }
render(){
    return  (
    <div>
        <h1> {this.state.message}</h1>
        <button onClick={()=>this.changeMessage()}> Click it!! </button>
    </div>
    )
        

}
}
export default Message;