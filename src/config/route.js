/**
 *  Class: route
 *  Author: Niu Xiaoyu
 *  Date: 16/7/9.
 *  Description: 导航配置
 */
import React, {Component } from 'react';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';
import Index from '../containers/Index';
import Menu from '../containers/Menu';
import About from '../containers/About';
import User from '../containers/User';
import Login from '../containers/Login';
import Register from '../containers/Register';
import MsgList from '../containers/MsgList';


class Main extends Component {
  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}
const route = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Index} />
      <Route path="Menu" component={Menu} />
      <Route path="About" component={About} />
      <Route path="User" component={User} />
      <Route path="Login" component={Login} />
      <Route path="Register" component={Register} />
      <Route path="MsgList" component={MsgList} />
    </Route>
  </Router>
);

export default route;