import React from 'react';

const styles = {
  job: {
    width: '100%',
    float: 'left'
  },
  select: {
    width: '10%',
    float: 'left'
  },
  title: {
    width: '80%',
    float: 'left'
  },
  count: {
    width: '10%',
    float: 'left'
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
          <input type="checkbox" checked={this.state.isSelected} onChange={this.handleSelectChange}/>
        </div>
        <div style={styles.title}>{this.props.job.title}</div>
        <div style={styles.count}>{this.props.job.count}</div>
      </div>
    );
  }
});

export default Job;
