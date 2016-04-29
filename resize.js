/*
 * @Author: ly.yao
 * @Date:   2016-04-26 08:30:23
 * @Last Modified by:   ly.yao
 * @Last Modified time: 2016-04-26 09:30:38
 */

'use strict';;
(function() {
    var dpr, rem, scale,
    	docEl = document.documentElement,
    	fontEl = document.createElement('style'),
    	metaEl = document.querySelector('meta[name="viewport"]');

    dpr = window.devicePixelRatio || 1;
    rem = docEl.clientWidth * dpr / 10;
    scale = 1 / dpr;

    // 设置viewport，进行缩放，达到高清效果
    metaEl.setAttribute('content', 'width=' + dpr * docEl.clientWidth + ',initial-scale=' + scale + ',maximum-scale=' + scale + ', minimum-scale=' + scale + ',user-scalable=no');

    // 设置data-dpr属性，留作的css hack之用
    docEl.setAttribute('data-dpr', dpr);

    // 动态写入样式
    docEl.firstElementChild.appendChild(fontEl);
    fontEl.innerHTML = 'html{font-size:' + rem + 'px!important;}';

    // 给js调用的，某一dpr下rem和px之间的转换函数
    window.rem2px = function(v) {
        v = parseFloat(v);
        return v * rem;
    };
    window.px2rem = function(v) {
        v = parseFloat(v);
        return v / rem;
    };

    window.dpr = dpr;
    window.rem = rem;
})();
