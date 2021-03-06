/**
 *  Class: WebAPI
 *  Author: Niu Xiaoyu
 *  Date: 16/7/9.
 *  Description: 处理请求
 */

//'use strict';
require('regenerator/runtime');
import 'whatwg-fetch';
import config from './WebApiConfig';


class WebAPI {
  // 构造
  constructor() {
    this.actions = null;
  }

  /** 网络异常处理*/
  catchHandle(opts) {
    console.log(`请求异常: ${opts.url}`);
  }

  // fetch 的核心方法
  async innerFetch(opts1) {
    let opts = Object.assign({
      method: 'GET',
      url: null,
      body: null,
      callback: null
    }, opts1);
    let reqOpts = {
      method: opts.method,
      headers: {
        'Content-Type': 'application/json',
        'system_id': 1,
        'clientInfo': 'app'
      }
    };

    if (opts.method === 'POST' || opts.method === 'PUT') {
      reqOpts.headers.Accept = 'application/json';
      reqOpts.headers['Content-Type'] = 'application/json';
      reqOpts.body = opts.body ? JSON.stringify(opts.body) : '{}';
    }
    return await fetch(opts.url, reqOpts);
  }
}

/** 响应统一处理*/
let responseResolve = async (response) => {
  let json = {};
  let backJson = {
    json: {},
    success: false,
    errorMessage: ''
  };
  if (response.ok) {
    try {
      backJson = await response.json().then((responseJson) => {
        let res = Object.assign({}, backJson);
        if (responseJson.success) {
          res.success = true;
          if (typeof responseJson.data === 'string') {
            json = JSON.parse(responseJson.data);
          } else {
            json = responseJson.data;
          }
        } else {
          res.errorMessage = responseJson.message;
        }
        res.json = json;
        return res;
      });
    } catch (ex) {
      console.error(`尝试解析json时失败: ${response.url}`);
    }
  }
  if (response.status === 403 || response.status === 401) {
    try {
      console.log(response.status);
    }
    catch (ex) {
      console.error(`清除本地token失败: ${response.url}`);
    }
  }
  return backJson;
};


let postRequest = (opts) => {
  return async function (data) {
    try {
      return await this.innerFetch({
        method: 'POST',
        url: opts.url,
        body: data,
      }).then(responseResolve);
    } catch (e) { this.catchHandle(e); }
    return null;
  };
};
let getRequest = (opts) => {
  return async function (data) {
    let formBody = [];
    for (let property in data) {
      let encodeKey = encodeURIComponent(property);
      let encdeeValue = encodeURIComponent(data[property]);
      formBody.push(`${encodeKey}=${encdeeValue}`);
    }
    formBody = formBody.join('&');
    try {
      return await this.innerFetch({
        method: 'GET',
        url: `${opts.url}?${formBody}`
      }).then(responseResolve);
    } catch (e) {
      this.catchHandle(opts);
      throw e;
    }
  };
};
let putRequest = (opts) => {
  return async function (id, data) {
    try {
      return await this.innerFetch({
        method: 'PUT',
        url: `${opts.url}/${id}`,
        body: data
      }).then(responseResolve);
    } catch (e) {
      this.catchHandle();
      throw e;
    }
  };
};
let deleteRequest = (opts) => {
  return async function (id) {
    try {
      return await this.innerFetch({
        method: 'DELETE',
        url: `${opts.url}/${id}`
      }).then(responseResolve);
    } catch (e) {
      this.catchHandle();
      throw e;
    }
  };
};

let putStatusRequest = (opts) => {
  return async function (id, data) {
    try {
      return await this.innerFetch({
        method: 'PUT',
        url: `${opts.url}/${id}/status`,
        body: data
      }).then(responseResolve);
    } catch (e) {
      this.catchHandle();
      throw e;
    }
  };
};
let putUserRequest = (opts) => {
  return async function (data) {
    try {
      return await this.innerFetch({
        method: 'PUT',
        url: opts.url,
        body: data
      }).then(responseResolve);
    } catch (e) {
      this.catchHandle();
      throw e;
    }
  };
};
let getIdRequest = (opts) => {
  return async function (id, data) {
    let formBody = [];
    for (let property in data) {
      let encodeKey = encodeURIComponent(property);
      let encodeValue = encodeURIComponent(data[property]);
      formBody.push(`${encodeKey}=${encodeValue}`);
    }
    formBody = formBody.join('&');
    try {
      return await this.innerFetch({
        method: 'GET',
        url: `${opts.url}/${id}?${formBody}`
      }).then(responseResolve);
    } catch (e) {
      this.catchHandle();
      throw e;
    }
  };
};
let putTwoRequest = (opts) => {
  return async function (url1, url2, data) {
    try {
      return await this.innerFetch({
        method: 'PUT',
        url: `${opts.url}/${url1}/${url2}`,
        body: data
      }).then(responseResolve);
    } catch (e) {
      this.catchHandle();
      throw e;
    }
  };
};
for (let i = 0; i < config.api.length; i++) {
  if (config.api[i].method === 'post') {
    WebAPI.prototype[config.api[i].name] = postRequest(config.api[i]);
  } else if (config.api[i].method === 'get') {
    WebAPI.prototype[config.api[i].name] = getRequest(config.api[i]);
  } else if (config.api[i].method === 'put') {
    WebAPI.prototype[config.api[i].name] = putRequest(config.api[i]);
  } else if (config.api[i].method === 'delete') {
    WebAPI.prototype[config.api[i].name] = deleteRequest(config.api[i]);
  } else if (config.api[i].method === 'putstatus') {
    WebAPI.prototype[config.api[i].name] = putStatusRequest(config.api[i]);
  } else if (config.api[i].method === 'putuser') {
    WebAPI.prototype[config.api[i].name] = putUserRequest(config.api[i]);
  } else if (config.api[i].method === 'getid') {
    WebAPI.prototype[config.api[i].name] = getIdRequest(config.api[i]);
  } else if (config.api[i].method === 'puttwo') {
    WebAPI.prototype[config.api[i].name] = putTwoRequest(config.api[i]);
  }
}
const webApi = new WebAPI();
export default webApi;