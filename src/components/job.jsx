import React from 'react';

const Job = React.createClass({

  propTypes: {
    job: React.PropTypes.object.isRequired
  },

  render() {
    return (
      <div>
        <div>{this.props.job.title}</div>
        <div>{this.props.job.count}</div>
      </div>
    );
  }
});

export default Job;
