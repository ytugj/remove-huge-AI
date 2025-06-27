// ==UserScript==
// @name         隐藏秀杰悬浮球
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  隐藏页面上的AI悬浮球
// @author       You
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 方法1：直接隐藏元素
    const hideElement = () => {
        const aiBtn = document.querySelector('.ai-icon-btn[data-v-0223a9fa]');
        if (aiBtn) {
            aiBtn.style.display = 'none';
            console.log('AI悬浮球已隐藏');
        }
    };

    // 方法2：或者通过添加CSS样式来隐藏
    const addGlobalStyle = () => {
        const css = `
            .ai-icon-btn[data-v-0223a9fa] {
                display: none !important;
                visibility: hidden !important;
                opacity: 0 !important;
                pointer-events: none !important;
            }
        `;
        const style = document.createElement('style');
        style.type = 'text/css';
        style.appendChild(document.createTextNode(css));
        document.head.appendChild(style);
    };

    // 两种方法任选其一即可
    // 立即执行
    hideElement();
    // 或者使用CSS方法
    // addGlobalStyle();

    // 为了确保元素加载后也能生效，添加一个监听
    setTimeout(hideElement, 1000);
    setTimeout(hideElement, 3000);
})();