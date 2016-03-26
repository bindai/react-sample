import React from 'react';
import Department from './department';

const title = "招聘职位";

const styles = {

  leftNav: {
    width: '30%',
    minHeight: '600px'
  },
  head: {
    width: '100%'
  },
  title: {
    width: '80%',
    float: 'left'
  },
  clearButton: {
    width: '20%',
    float: 'left'
  }
}

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
      <div style={styles.leftNav}>
        <div style={styles.head}>
          <div style={styles.title}>{title}</div>
          <div style={styles.clearButton}><button onClick={this.clearAllSelect}>清空</button></div>
        </div>
        {departments}
      </div>
    );
  }
});

export default LeftNav;
