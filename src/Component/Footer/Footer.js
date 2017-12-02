import React,{ Component} from 'react'
import './footer.css'

class Footer extends Component {
  state = {
    office : true
  }
  handleClick = () => {
    let { office } = this.state
    this.setState({
      office : !office
    })
  }
  render () {
   return (
     <div className="footer">
       <button>{ this.state.office ? '登录' : '注册' }</button>
       <a href="#" onClick={ this.handleClick }>{ this.state.office ? '没有账号?请先注册' : '已有账号?直接登录'}</a>
     </div>
   )
  }
}

export default Footer
