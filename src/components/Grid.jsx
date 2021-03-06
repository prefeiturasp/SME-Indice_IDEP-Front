import PropTypes from 'prop-types';
import React, { Component } from 'react';

const toCssClasses = numbers => {
  const cols = numbers ? numbers.split(' ') : [];
  let classes = '';

  if (cols[0]) classes += `col-sm-${cols[0]}`;
  if (cols[1]) classes += ` col-lg-${cols[1]}`;
  if (cols[2]) classes += ` col-md-${cols[2]}`;
  if (cols[3]) classes += ` col-xs-${cols[3]}`;

  return classes;
};

export default class Grid extends Component {
  static propTypes = {
    cols: PropTypes.string,
    className: PropTypes.string
  };

  static defaultProps = {
    cols: ''
  };

  render() {
    const gridClasses = toCssClasses(this.props.cols);
    return (
      <div
        className={`${gridClasses} ${this.props.className}`}
        style={this.props.style}
      >
        {this.props.children}
      </div>
    );
  }
}
