import React from 'react';
import Popup from '../atoms/Popup';
import Userlogin from '../organisms/Userlogin';
import { connect } from 'react-redux';
import * as actionCreaters from '../../actions/productaction';

class Userlink extends React.Component {
  constructor(props) {
    super(props);
  }
  togglePopup() {
    this.props.togglemodal();
  }
  logOut() {
    this.props.logOut();
  }

  render() {
    return (
      <div class="top__menu">
        <ul>
          <li>
            {this.props.userData && this.props.userData.firstname ?
              <span> Welcome <strong className="userlinks__msg">{this.props.userData.firstname} </strong> <a href="#" onClick={this.logOut.bind(this)}>Logout</a> </span>
              : <a href="#" onClick={this.togglePopup.bind(this)}><i class="fas fa-user"></i> Login/Register</a>
            }
          </li>
        </ul>

        {this.props.showPopup ?
          <Popup
            title='User Account'
            text='Close Me'
            closePopup={this.togglePopup.bind(this)}>
            <Userlogin closePopup={this.togglePopup.bind(this)} />
          </Popup>
          : null
        }
      </div>
    )
  }
}
function mapStateToProps(state) {
  if (state) {
    return {
      showPopup: state.productReducer.showPopup,
      userData: state.productReducer.userData
    }
  };
}

const mapDispatchToProps = (dispatch) => ({
  togglemodal: () => dispatch(actionCreaters.togglemodal()),
  logOut: () => dispatch(actionCreaters.logOut()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Userlink)