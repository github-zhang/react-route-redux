/**
 *  Class: news
 *  Author: Niu Xiaoyu
 *  Date: 16/7/9.
 *  Description: 新闻action
 */
import WebAPI from '../apis/WebAPI';

import { NEWS_LOADING, NEWS_SUCCESS, NEWS_FAILURE, NEWS_SETSCROLL } from './actionTypes';

import pic1 from '../images/1.png';
import pic2 from '../images/2.png';
import pic3 from '../images/3.png';
import pic4 from '../images/4.png';

const getNewsSuccess = (data) => {
  return {
    type: NEWS_SUCCESS,
    payload: data
  };
};

const getNewsFailure = () => {
  return {
    type: NEWS_FAILURE
  };
};

const loadingNews = () => {
  return {
    type: NEWS_LOADING
  };
};

const scrollNews = (data) => {
  return {
    type: NEWS_SETSCROLL,
    payload: data
  };
};

// 异步请求新闻列表数据
export function getNews(opts) {
  return (dispatch, getState) => {
    /**
     * http请求远程图片
     */
    const oriData = getState().news.list;
    //WebAPI.getNews(opts)
    //  .then((data) => {
    //    const bannerList = data.json.columnIssueList;
    //    let news = bannerList.map((banner, ind) => {
    //      return {
    //        id: ind,
    //        bookImg: banner.picUrl,
    //        bookTitle: banner.title,
    //        bookContent: banner.columnIssueId,
    //        bookClick: 343
    //      };
    //    });
    //    dispatch(getNewsSuccess(oriData.concat(news)));
    //  })
    //  .catch(() => {
    //    console.log('获取新闻列表失败!');
    //    dispatch(getNewsFailure());
    //  });

    const newData = oriData.concat([
      {id: '1', bookImg: pic1, bookTitle: '桑拿, 蒸腾芬兰', bookContent: '你好,欢迎加入港中旅1', bookClick: 343},
      {id: '2', bookImg: pic2, bookTitle: '伦敦, 新西区时代', bookContent: '你好,欢迎加入港中旅', bookClick: 343},
      {id: '3', bookImg: pic3, bookTitle: '马里, 西非DNA', bookContent: '你好,欢迎加入港中旅', bookClick: 343},
      {id: '4', bookImg: pic4, bookTitle: '曼哈顿, 文艺彻骨', bookContent: '你好,欢迎加入港中旅', bookClick: 343}
    ]);
    dispatch(getNewsSuccess(newData));
  };
}

export function startLoading() {
  return (dispatch, getState) => {
    dispatch(loadingNews());
  };
}

export function setNewsScrollTop(top) {
  return (dispatch, getState) => {
    dispatch(scrollNews(top));
  };
}