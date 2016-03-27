import React from 'react';
import Department from './department';

const styles = {
  leftNav: {
    width: '30%',
    minHeight: '600px',
    backgroundColor: '#4D6A79',
    padding: '4% 3%'
  },
  head: {
    width: '100%'
  },
  title: {
    width: '80%',
    float: 'left',
    color: '#CBD4D9',
    fontSize: '20px',
    fontFamily: 'Sans-serif'
  },
  clearButton: {
    width: '20%',
    float: 'left'
  },
  button: {
    color: '#FFFFFF',
    border: 'none',
    background: 'none',
    outline: 'none',
    cursor: 'pointer',
    width: '100%',
    textAlign: 'right'
  },
  clearText: {
    fontWeight: 'bold',
    fontSize: '13px',
    fontFamily: 'Sans-serif'
  }
}

const LeftNav = React.createClass({
  propTypes: {
    data: React.PropTypes.array.isRequired,
    title: React.PropTypes.string.isRequired
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
          <div style={styles.title}>{this.props.title}</div>
          <div style={styles.clearButton}><button style={styles.button} onClick={this.clearAllSelect}><span style={styles.clearText}>清空</span></button></div>
        </div>
        {departments}
      </div>
    );
  }
});

export default LeftNav;
