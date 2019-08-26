import React from "react";
import PropTypes from "prop-types";

class Assignment extends React.Component {
  componentDidMount() {
    this.props.onGetMenu("test");
  }

  render() {
    const { title } = this.props;
    return (
      <React.Fragment>
        <div>{title}</div>
      </React.Fragment>
    );
  }
}

Assignment.propTypes = {
  title: PropTypes.string
};

export default Assignment;
