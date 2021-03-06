/**
 *  Class: news
 *  Author: Niu Xiaoyu
 *  Date: 16/7/9.
 *  Description: 新闻reducer
 */
import { NEWS_LOADING, NEWS_SUCCESS, NEWS_FAILURE, NEWS_SETSCROLL } from '../actions/actionTypes';
let initialState = {
  list: [],
  isLoading: true,
  scrollTop: 0
};
// 新闻相关的 reducer

export default (state = initialState, action) => {
  let nextstate;
  switch (action.type) {
    // 正在获取新闻列表
    case NEWS_LOADING:
      nextstate = Object.assign({}, state, {isLoading: true});
      return nextstate;
    // 获取新闻列表成功
    case NEWS_SUCCESS:
      nextstate = Object.assign({}, state, {list: action.payload, isLoading: false});
      return nextstate;
    case NEWS_FAILURE:
      nextstate = Object.assign({}, state, {isLoading: false});
      return nextstate;
    //新闻列表滚动位置
    case NEWS_SETSCROLL:
      nextstate = Object.assign({}, state, {scrollTop: action.payload});
      return nextstate;
    default:
      return state;
  }
};
