import React from 'react';
import _ from 'lodash';
import Job from './job';

const Department = React.createClass({
  propTypes: {
    department: React.PropTypes.object.isRequired
  },

  render() {
    let jobs = this.props.department.jobs.map((item, index) => <Job key={index} job={item}/>);
    let sum = this.props.department.jobs.map((item) => item.count).reduce((prev, curr) => prev + curr);

    return (
      <div>
        <div>{this.props.department.title}</div>
        <div>{sum}</div>
        {jobs}
      </div>
    );
  }
});

export default Department;
