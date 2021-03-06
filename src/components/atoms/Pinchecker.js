import React from 'react';
import { connect } from 'react-redux';
import * as actionCreaters from '../../actions/productaction';

class Pinchecker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pin: ''
    };
  }
  submitpin = (e) => {
    e.preventDefault();
    this.props.checkpin(this.state.pin);
  }

  handleChange = (e) => {
    this.setState({ pin: e.target.value });
  }

  render() {

    const pin = this.state && this.state.pin ? this.state.pin : this.props.pincode
    return (
      <form onSubmit={this.submitpin}>
        <div class="zipvalidator">
          <span class="caveat">Currently we support delivery only in Delhi Region</span>
          <input class="zipbox" type="text" value={pin} placeholder="Check your pincode" onChange={this.handleChange} />
          <button type="submit" class="zipbutton">
            Check
            </button>
          <p className="small-msg">
            {this.props.deliverymsg}
          </p>
        </div>
      </form>
    )
  }
}
function mapStateToProps(state) {
  if (state) {
    return {
      deliverymsg: state.userReducer.deliverymsg,
      pincode: state.userReducer.pincode
    }
  };
}

const mapDispatchToProps = (dispatch) => ({
  checkpin: (code) => dispatch(actionCreaters.checkpin(code))
})

export default connect(mapStateToProps, mapDispatchToProps)(Pinchecker)