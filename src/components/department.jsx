import React from 'react';
import _ from 'lodash';
import Job from './job';

const styles = {
  department: {
    width: '100%',
    float: 'left',
    margin: '2% 0'
  },
  select: {
    width: '10%',
    float: 'left'
  },
  titleArea: {
    width: '80%',
    float: 'left'
  },
  title: {
    color: '#FFFFFF',
    fontSize: '13px',
    fontFamily: 'Sans-serif',
    fontWeight: 'bold'
  },
  countArea: {
    width: '10%',
    float: 'left'
  },
  count: {
    color: '#FFFFFF',
    borderRadius: '10px',
    backgroundColor: '#516A76',
    textAlign: 'center',
    fontSize: '15px',
    fontFamily: 'Sans-serif'
  },
  checkbox: {
    width: '2em',
    height: '2em',
    cursor: 'pointer'
  }
};

const Department = React.createClass({
  propTypes: {
    department: React.PropTypes.object.isRequired
  },

  getInitialState() {
    return {hasSelectedAll: false};
  },

  handleSelectChange(event) {
    this.setState({hasSelectedAll: event.target.checked});
  },

  componentWillReceiveProps(nextProps) {
    this.setState({
      hasSelectedAll: !nextProps.clearAll
    })
  },

  render() {
    let jobs = this.props.department.jobs.map((item, index) => <Job key={index} job={item} isSelected={this.state.hasSelectedAll}/>);
    let sum = this.props.department.jobs.map((item) => item.count).reduce((prev, curr) => prev + curr);

    return (
      <div style={styles.department}>
        <div style={styles.select}>
          <input type="checkbox" style={styles.checkbox} checked={this.state.hasSelectedAll} onChange={this.handleSelectChange}/>
        </div>
        <div style={styles.titleArea}>
          <div style={styles.title}>{this.props.department.title}</div>
        </div>
        <div style={styles.countArea}>
          <div style={styles.count}>{sum}</div>
        </div>
        {jobs}
      </div>
    );
  }
});

export default Department;
