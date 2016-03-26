import React from 'react';

const Job = React.createClass({

  propTypes: {
    job: React.PropTypes.object.isRequired,
    isSelected: React.PropTypes.bool.isRequired
  },

  getInitialState() {
    return {
      isSelected: this.props.isSelected||false
    };
  },

  handleSelectChange(event) {
    this.setState({
      isSelected: event.target.checked
    });
  },

  componentWillReceiveProps(nextProps) {
    this.setState({
      isSelected: nextProps.isSelected
    })
  },

  render() {
    return (
      <div>
        <input type="checkbox" checked={this.state.isSelected} onChange={this.handleSelectChange}/>
        <div>{this.props.job.title}</div>
        <div>{this.props.job.count}</div>
      </div>
    );
  }
});

export default Job;
