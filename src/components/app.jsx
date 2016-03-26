import React from 'react';
import LeftNav from './left-nav';

const title = "招聘职位";

const data = [
  {
    title: "工程研发部门",
    jobs: [
      {
        title: "Mac 开发工程师",
        count: 9
      }, {
        title: "iOS App 测试工程师",
        count: 17
      }, {
        title: "Android 远程控制工程师",
        count: 61
      }, {
        title: "Web 前端工程师",
        count: 31
      }, {
        title: "Android 多媒体软件开发工程师",
        count: 2
      }
    ]
  }, {
    title: "产品设计部门",
    jobs: [
      {
        title: "网页设计师",
        count: 47
      }, {
        title: "ID / 工业设计师",
        count: 39
      }, {
        title: "视觉设计师 / GUI 界面设计师",
        count: 42
      }, {
        title: "平面设计师",
        count: 8
      }
    ]
  }
];

const App = React.createClass({

  getInitialState() {
    return {
      data: data,
      title: title
    };
  },

  render() {
    return (
        <LeftNav data={this.state.data} title={this.state.title}/>
    );
  }
});

export default App;
