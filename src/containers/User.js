/**
 *  Class: User
 *  Author: Niu Xiaoyu
 *  Date: 16/7/9.
 *  Description: 我的
 */
import React, {Component} from 'react';
import {Link} from 'react-router';

/*
 redux 相关
 */
import { connect } from 'react-redux';

import Tool from '../apis/Tool';
import {Header, Footer, Loading} from './../component/common/index';


class User extends Component {
  render() {
    return (
      <div>
        <Header title="我的" />
        <div className="user">
          <div className="head">
            <div className="headimg" data-flex="dir:top main:center cross:center">
              <div className="pictrue">
              </div>
              <div className="name">中旅总社</div>
            </div>
          </div>
          <div className="logins" data-flex="box:mean">
            <div className="item">
              <Link to="/login">登录</Link>
            </div>
            <div className="item">
              <Link to="/register">注册</Link>
            </div>
          </div>
          <ul className="nav">
            <li>
              <Link to="#" data-flex="box:justify">
                <div className="font" data-flex="cross:center">
                  <i className="iconfont icon-wenzhang"></i>
                </div>
                <div className="tit">我的文章</div>
                <div className="arrow" data-flex="cross:center">
                  <i className="iconfont icon-arrow-right"></i>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/MsgList" data-flex="box:justify">
                <div className="font" data-flex="cross:center">
                  <i className="iconfont icon-xiaoxi"></i>
                </div>
                <div className="tit">我的消息</div>
                <div className="arrow" data-flex="cross:center">
                  <i className="iconfont icon-arrow-right"></i>
                </div>
              </Link>
            </li>
          </ul>
          <ul className="nav">
            <li>
              <Link to="#" data-flex="box:justify">
                <div className="font" data-flex="cross:center">
                  <i className="iconfont icon-shezhi"></i>
                </div>
                <div className="tit">设置</div>
                <div className="arrow" data-flex="cross:center">
                  <i className="iconfont icon-arrow-right"></i>
                </div>
              </Link>
            </li>
          </ul>
          <ul className="nav">
            <li>
              <Link to="#" data-flex="box:justify">
                <div className="font" data-flex="cross:center">
                  <i className="iconfont icon-lianxi"></i>
                </div>
                <div className="tit">联系我们</div>
                <div className="arrow" data-flex="cross:center">
                  <i className="iconfont icon-arrow-right"></i>
                </div>
              </Link>
            </li>
            <li>
              <Link to={"/About"} data-flex="box:justify">
                <div className="font" data-flex="cross:center">
                  <i className="iconfont icon-guanyu"></i>
                </div>
                <div className="tit">关于</div>
                <div className="arrow" data-flex="cross:center">
                  <i className="iconfont icon-arrow-right"></i>
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <Footer index="3" />
      </div>
    );
  }
}
export default User;