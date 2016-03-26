import React from 'react';
import _ from 'lodash';
import Job from './job';
import {FaAngleDown, FaAngleUp} from 'react-icons/lib/fa';
import Checkbox from 'material-ui/lib/checkbox';

const styles = {
  department: {
    width: '100%',
    float: 'left',
    margin: '2% 0'
  },
  head: {
    width: '100%'
  },
  titleArea: {
    float: 'left',
    width: '90%'
  },
  selectArea: {
    float: 'left',
    width: '50%'
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
    cursor: 'pointer'
  },
  icon: {
    float: 'left',
    color: '#FFFFFF',
    paddingTop: '5%'
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
    fill: '#FFFFFF'
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
          <div style={styles.titleArea}>
            <div style={styles.selectArea}>
              <Checkbox label={this.props.department.title} labelStyle={styles.title} iconStyle={styles.checkbox} checked={this.state.hasSelectedAll}  onCheck={this.handleSelectChange}/>
            </div>
            <div style={styles.iconArea} onClick={this.handleExpand}>
              <div style={styles.icon}>{icon}</div>
            </div>
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
