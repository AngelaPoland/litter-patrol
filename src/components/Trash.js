import React, { Component } from 'react';
import '../App.css';
import TrashIcon from '../trash.svg';
import PropTypes from 'prop-types';

class Trash extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isTrashVisible: this.props.isTrashVisible,
  //   };
  // }

  static propTypes = {
    isBinFilled: PropTypes.bool,
  }

  isVisible = () => {
    if (this.props.isBinFilled) {
      return <img src={ TrashIcon } alt="Trash" className="trash" ></img>
    }
  };

  render() {
    return (
      <div className="bin">
        {this.isVisible()}
      </div>
    );
  }
}

export default Trash;
