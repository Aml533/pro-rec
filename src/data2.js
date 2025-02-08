import {React , Component} from "react"

class D2 extends Component{
    state ={
        x :1
    }
    dbl =()=>{
        this.setState(
            {
                x : this.state.x*2
            }
        )
    }
    add =()=>{
        this.setState(
            {
                x : this.state.x+1
            }
        )
    }
    reset =()=>{
        this.setState(
            {
                x : this.state.x =0
            }
        )
    }

    render(){
        return(
            <div>
                {this.state.x}
                <button onClick={this.dbl}>double</button>
                <button onClick={this.add}>add</button>
                <button onClick={this.reset}>reset</button>
            </div>
        )
    }
}

export default D2;