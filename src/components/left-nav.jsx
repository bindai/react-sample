import React from 'react';
import Department from './department';

const title = "招聘职位";

const LeftNav = React.createClass({
  propTypes: {
    data: React.PropTypes.array.isRequired
  },

  getInitialState() {
    return {clearAll: false};
  },

  clearAllSelect() {
    this.setState({clearAll: true});
  },

  render() {
    let departments = this.props.data.map((item, index) => {
      return <Department key={index} department={item} clearAll={this.state.clearAll}/>;
    });

    return (
      <div>
        <div>
          <button onClick={this.clearAllSelect}>清空</button>
        </div>
        <div>{title}</div>
        {departments}
      </div>
    );
  }
});

export default LeftNav;
