import React from 'react';
import _ from 'lodash';
import Job from './job';
import {FaAngleDown, FaAngleUp} from 'react-icons/lib/fa';

const styles = {
  department: {
    width: '100%',
    float: 'left',
    margin: '2% 0'
  },
  head: {
    width: '100%'
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
    float: 'left',
    color: '#FFFFFF',
    fontSize: '13px',
    fontFamily: 'Sans-serif',
    fontWeight: 'bold'
  },
  iconArea: {
    float: 'left',
    paddingLeft: '3%'
  },
  icon: {
    color: '#FFFFFF'
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
    return {hasSelectedAll: false, expand: true};
  },

  handleExpand() {
    this.setState({
      expand: !this.state.expand
    })
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
    let lists = this.state.expand
      ? jobs
      : '';
    let icon = this.state.expand
      ? <FaAngleUp key={0} style={styles.icon}/>
      : <FaAngleDown key={1} style={styles.icon}/>

    return (
      <div style={styles.department}>
        <div style={styles.head}>
          <div style={styles.select}>
            <input type="checkbox" style={styles.checkbox} checked={this.state.hasSelectedAll} onChange={this.handleSelectChange}/>
          </div>
          <div style={styles.titleArea} onClick={this.handleExpand}>
            <div style={styles.title}>{this.props.department.title}</div>
            <div style={styles.iconArea}>{icon}</div>
          </div>
          <div style={styles.countArea}>
            <div style={styles.count}>{sum}</div>
          </div>
        </div>
        {lists}
      </div>
    );
  }
});

export default Department;
