import React from 'react';
import Checkbox from 'material-ui/lib/checkbox';

const styles = {
  job: {
    width: '100%',
    float: 'left'
  },
  selectArea: {
    width: '80%',
    float: 'left',
    marginLeft: '10%'
  },
  title: {
    width: '80%',
    float: 'left',
    color: '#E6E6E6',
    fontSize: '14px',
    fontFamily: 'Sans-serif'
  },
  count: {
    width: '10%',
    float: 'left',
    color: '#E6E6E6',
    textAlign: 'right',
    fontSize: '15px',
    fontFamily: 'Sans-serif'
  },
  checkbox: {
    fill: '#E6E6E6'
  }
};

const Job = React.createClass({

  propTypes: {
    job: React.PropTypes.object.isRequired,
    isSelected: React.PropTypes.bool.isRequired
  },

  getInitialState() {
    return {
      isSelected: this.props.isSelected || false
    };
  },

  handleSelectChange(event) {
    this.setState({isSelected: event.target.checked});
  },

  componentWillReceiveProps(nextProps) {
    this.setState({isSelected: nextProps.isSelected})
  },

  render() {
    return (
      <div style={styles.job}>
        <div style={styles.selectArea}>
          <Checkbox label={this.props.job.title} labelStyle={styles.title} iconStyle={styles.checkbox} checked={this.state.isSelected}  onCheck={this.handleSelectChange}/>
        </div>
        <div style={styles.count}>{this.props.job.count}</div>
      </div>
    );
  }
});

export default Job;
