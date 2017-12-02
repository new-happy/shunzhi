import React,{ Component} from 'react'
import './heade.css'

class Header extends Component {
  render () {
   return (
     <div className="header">
       <div className="title-header">login</div>
       <h1>登录</h1>
       <p>连接小而确定的幸福</p>
     </div>
   )
  }
}

export default Header
