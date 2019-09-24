
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class PrincipalBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovering: false
    };
    this.onHoverAction = this.onHoverAction.bind(this);
    this.onHoverOutAction = this.onHoverOutAction.bind(this);
  }

  onHoverAction(){
    this.setState({isHovering: true});
  }

  onHoverOutAction(){
    this.setState({isHovering: false});
  }

  render() {
    const styles = {
      buttonStyle:{
        display: 'flex',
        justifyContent: 'center',
        width: 250,
        height: 35,
        borderRadius: 20,
        border: 0,
        color: '#ffffff',
        fontFamily: 'Montserrat',
        fontSize: 18,
        fontWeight: 600,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 0.61,
        letterSpacing: 'normal',
        backgroundColor: '#00c85f'
      },
      hoverButtonStyle:{
        display: 'flex',
        justifyContent: 'center',
        color: '#ffffff',
        width: 250,
        height: 35,
        borderRadius: 20,
        border: 0,
        fontFamily: 'Montserrat',
        fontSize: 18,
        fontWeight: 600,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 0.61,
        letterSpacing: 'normal',
        backgroundColor: '#006630'
      }
    };
    return (
      <Button
        onMouseOver={this.onHoverAction}
        onMouseOut={this.onHoverOutAction}
        disabled={this.props.disabled}
        style={this.state.isHovering ? styles.hoverButtonStyle : styles.buttonStyle}
        onClick={this.props.handleClick}>{this.props.label}
      </Button>
    );
  }
}

export default PrincipalBtn;
