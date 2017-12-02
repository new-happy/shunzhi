import React,{ Component} from 'react'
import './main.css'

class Main extends Component {
  render () {
    let { name,type } = this.props
   return (
     <div className="main">
       <input type={ type || 'type'} placeholder={ name || '' }/>
     </div>
   )
  }
}

export default Main
