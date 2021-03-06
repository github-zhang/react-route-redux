/**
 *  Class: MsgList
 *  Author: Niu Xiaoyu
 *  Date: 16/7/9.
 *  Description: 我的消息
 */
import React, {Component} from 'react';
import {Link} from 'react-router';

/*
 redux 相关
 */
import { connect } from 'react-redux';

import Tool from '../apis/Tool';
import {Header, Footer, Loading} from './../component/common/index';

/**
 * (上拉加载box)
 */
class DrawLoad extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    return (
      <div>
        {this.props.children[0]}
        {this.props.children[1]}
        {this.props.children[3]}
      </div>
    );
  }
}

/**
 * (上拉加载没有数据时，显示组件)
 */
class DrawLoadDataNo extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    return this.props.children;
  }
}
/**
 * (上拉加载有数据时显示组件)
 */
class DrawLoadDataYes extends Component {
  constructor(props) {
    super(props);
    console.log(`DrawLoadDataYes: ${this.props.children}`);
  }

  render() {
    return this.props.children;
  }
}

/**
 * (触发加载机制的box)
 */
class DrawLoadState extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    return this.props.children;
  }
}

export default class MsgList extends Component {
  constructor(props) {
    super(props);
    this.start = () => {
      console.log('开始加载');
    };
    this.success = () => {
      console.log('加载成功');
    };
    this.error = () => {
      console.log('开始加载');
    };
  }

  render() {
    return (
      <div>
        <Header leftTo="/User" leftIcon="fanhui" title="我的消息" />
        <DrawLoad
          url="a.html"
          send={{ page: 1, classid: 1 }}
          pageName="page"
          start={this.start}
          success={this.success}
          error={this.error}
        >
          <DrawLoadDataYes>
            <div>{this.props.params.productTitle}</div>
          </DrawLoadDataYes>
          <DrawLoadDataNo>
            <div>没有数据</div>
          </DrawLoadDataNo>
          <DrawLoadState>
            <div>上拉加载更多</div>
          </DrawLoadState>
        </DrawLoad>
      </div>
    );
  }
}