import React,{ Component} from 'react'
import './seadbar.css'

class Seadbar extends Component {
  render () {
    let { state,myClick } = this.props
   return (
     <div className="seadbar" onClick={ myClick }>
       <div className="seadbar-up" style={ { 'display': state.office1 ? 'block' :'none' }}></div>
       <div className="menu" style={ { 'left': state.office1 ? 0 : '-300px' } }>
         <div className="user-info">
           <div className="link-img"></div>
           <span>退出</span>
         </div>
         <div className="link-list">
           <a href="#">首页</a>
           <a href="#">登录</a>
           <a href="#">猜你喜欢</a>
         </div>
         <div className="button">
           <button onClick={ myClick }>关闭</button>
         </div>
       </div>
     </div>
   )
  }
}

export default Seadbar
