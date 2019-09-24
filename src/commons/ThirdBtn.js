import React, { Component } from 'react';
import ThirdBtnIcon from '../icons/ThirdBtnIcon';

class ThirdBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovering: false
    };
    this.onHoverAction = this.onHoverAction.bind(this);
    this.onHoverOutAction = this.onHoverOutAction.bind(this);
    this.btnInfo = this.btnInfo.bind(this);
  }

  onHoverAction(){
    this.setState({isHovering: true});
  }

  onHoverOutAction(){
    this.setState({isHovering: false});
  }

  btnInfo(){
    return(
      <span><ThirdBtnIcon /> {this.props.label}</span>
    )
  }

  render() {
    const styles = {
      buttonStyle:{
        display: 'flex',
        padding: 0,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: 250,
        height: 35,
        borderRadius: 20,
        border: ' solid 0.5px #6d6d6d',
        color: '#6d6d6d',
        fontFamily: 'Montserrat',
        fontSize: 16,
        fontWeight: 600,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 0.61,
        letterSpacing: 'normal',
        backgroundColor: '#ffffff'
      },
      hoverButtonStyle:{
        display: 'flex',
        padding: 0,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        color: '#6d6d6d',
        width: 250,
        height: 35,
        borderRadius: 20,
        border: ' solid 0.5px #6d6d6d',
        fontFamily: 'Montserrat',
        fontSize: 16,
        fontWeight: 600,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 0.61,
        letterSpacing: 'normal',
        backgroundColor: '#eaeaea'
      }
    };
    return (
      <button
        onMouseOver={this.onHoverAction}
        onMouseOut={this.onHoverOutAction}
        className="btn btn-default"
        disabled={this.props.disabled}
        style={this.state.isHovering ? styles.hoverButtonStyle : styles.buttonStyle}
        onClick={this.props.handleClick}>
        <ThirdBtnIcon /> {this.props.label}
      </button>
    );
  }
}

export default ThirdBtn;
