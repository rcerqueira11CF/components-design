import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchBtnIcon from '../icons/SearchBtnIcon';


const useStyles = makeStyles(theme => ({
  searchField: {
    width: 250,
    height: 35,
    border: 'solid 2px #00c85f'
  }
  // buttonStyle:{
  //   display: 'flex',
  //   padding: 0,
  //   justifyContent: 'space-evenly',
  //   alignItems: 'center',
  //   width: 250,
  //   height: 35,
  //   borderRadius: 20,
  //   border: ' solid 0.5px #6d6d6d',
  //   color: '#6d6d6d',
  //   fontFamily: 'Montserrat',
  //   fontSize: 16,
  //   fontWeight: 600,
  //   fontStyle: 'normal',
  //   fontStretch: 'normal',
  //   lineHeight: 0.61,
  //   letterSpacing: 'normal',
  //   backgroundColor: '#ffffff'
  // },
  // hoverButtonStyle:{
  //   display: 'flex',
  //   padding: 0,
  //   justifyContent: 'space-evenly',
  //   alignItems: 'center',
  //   color: '#6d6d6d',
  //   width: 250,
  //   height: 35,
  //   borderRadius: 20,
  //   border: ' solid 0.5px #6d6d6d',
  //   fontFamily: 'Montserrat',
  //   fontSize: 16,
  //   fontWeight: 600,
  //   fontStyle: 'normal',
  //   fontStretch: 'normal',
  //   lineHeight: 0.61,
  //   letterSpacing: 'normal',
  //   backgroundColor: '#eaeaea'
  // },
}));

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovering: false,
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
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

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  btnPlaceholder(){
    const insideBtnStyle = {

    };
    return(
      <span>
        <SearchBtnIcon /> {this.props.label}</span>
    );
  }



  render() {
    const styles = useStyles;
    return (
      <TextField
        id="outlined-bare"
        className={styles.searchField}
        defaultValue="Bare"
        margin="normal"
        variant="outlined"
        inputProps={{ 'aria-label': 'bare' }}
      />
      // <input
      //   onMouseOver={this.onHoverAction}
      //   onMouseOut={this.onHoverOutAction}
      //   disabled={this.props.disabled}
      //   classNameL="input"
      //   value={this.state.value}
      //   onChange={this.handleChange}
      //   style={this.state.isHovering ? styles.hoverButtonStyle : styles.buttonStyle}
      //   placeholder="Buscar"
      // />
    );
  }
}

export default SearchInput;
