import React from 'react';

const styles = {
  job: {
    width: '100%',
    float: 'left'
  },
  select: {
    width: '10%',
    float: 'left',
    marginLeft: '10%'
  },
  title: {
    width: '70%',
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
    width: '2em',
    height: '2em',
    cursor: 'pointer'
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
        <div style={styles.select}>
          <input type="checkbox" style={styles.checkbox} checked={this.state.isSelected} onChange={this.handleSelectChange}/>
        </div>
        <div style={styles.title}>{this.props.job.title}</div>
        <div style={styles.count}>{this.props.job.count}</div>
      </div>
    );
  }
});

export default Job;
