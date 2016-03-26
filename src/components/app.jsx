import React from 'react';
import LeftNav from './left-nav';

const data = [
  {
    title: "工程研发部门",
    jobs: [
      {
        title: "Mac开发工程师",
        count: 9
      }, {
        title: "iOS App测试工程师",
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

  render() {
    return (
        <LeftNav data={data}/>
    );
  }
});

export default App;
