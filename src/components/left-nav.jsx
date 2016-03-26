import React from 'react';
import Department from './department';

const title = "招聘职位";

const LeftNav = React.createClass({
  propTypes: {
    data: React.PropTypes.array.isRequired
  },

  render() {
    let departments = this.props.data.map((item, index) => {
      return <Department key={index} department={item}/>;
    });

    return (
      <div>
        <div>{title}</div>
        {departments}
      </div>
    );
  }
});

export default LeftNav;
