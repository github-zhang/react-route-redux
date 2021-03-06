/**
 *  Class: Login
 *  Author: Niu Xiaoyu
 *  Date: 16/7/9.
 *  Description: 登录页
 */
import React, {Component} from 'react';
import {Link} from 'react-router';

/*
 redux 相关
 */
import { connect } from 'react-redux';

import Tool from '../apis/Tool';
import {Header, Footer, Loading} from './../component/common/index';


export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      logname: '',
      logpass: '',
      action: 'login',
    };

    this.submit = () => {
      alert('登陆');
      console.log('登陆');
    };

  }

  render() {
    let {logname, logpass} = this.state;
    return (
      <div>
        <Header leftIcon="fanhui" title="登录" />
        <div className="login">
          <div className="line" data-flex="box:first">
            <div className="key" data-flex="box:mean">
              <div>用</div>
              <div>户</div>
              <div>名</div>
            </div>
            <div className="value">
              <input
                type="text" defaultValue={logname} placeholder="用户名/手机号码/ID"
                     onInput={(e) => { this.state.logname = e.target.value; }} />
            </div>
          </div>
          <div className="line" data-flex="box:first">
            <div className="key" data-flex="box:mean">
              <div>密</div>
              <div>码</div>
            </div>
            <div className="value">
              <input
                type="password" defaultValue={logpass} placeholder="密码"
                     onInput={(e) => { this.state.logpass = e.target.value; }} />
            </div>
          </div>
          <div className="btn" onClick={this.submit}>登录</div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }
}