import React from 'react';
import _ from 'lodash';
import Job from './job';

const Department = React.createClass({
  propTypes: {
    department: React.PropTypes.object.isRequired
  },

  getInitialState() {
    return {
      hasSelectedAll: false
    };
  },

  handleSelectChange(event) {
    this.setState({
      hasSelectedAll: event.target.checked
    });
  },

  componentWillReceiveProps(nextProps) {
    this.setState({
      hasSelectedAll: !nextProps.clearAll
    })
  },

  render() {
    let jobs = this.props.department.jobs.map((item, index) => <Job key={index} job={item} isSelected={this.state.hasSelectedAll} />);
    let sum = this.props.department.jobs.map((item) => item.count).reduce((prev, curr) => prev + curr);

    return (
      <div>
        <input type="checkbox" checked={this.state.hasSelectedAll} onChange={this.handleSelectChange}/>
        <div>{this.props.department.title}</div>
        <div>{sum}</div>
        {jobs}
      </div>
    );
  }
});

export default Department;
