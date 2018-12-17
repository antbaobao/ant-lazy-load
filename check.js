function isElementInViewport (el) {
    const bound = el.getBoundingClientRect();
    const clientHeight = window.innerHeight;
    return bound.top <= clientHeight + 100;
}

let check = 0;

function checkImgs (imgs) {
    for (let i = check; i < imgs.length; i++) {
        if (isElementInViewport(imgs[ i ])) {
            imgs[ i ].src = imgs[ i ].getAttribute('data-src');
            check = i;
        }
    }
}

function debounce (fn, delay) {
    // 定时器
    let timer = null
    // 将debounce处理结果当作函数返回
    return function () {
        // 保留调用时的this上下文
        let context = this
        // 保留调用时传入的参数
        let args = arguments
        
        // 每次事件被触发时，都去清除之前的旧定时器
        if (timer) {
            clearTimeout(timer)
        }
        // 设立新定时器
        timer = setTimeout(function () {
            fn.apply(context, args)
        }, delay)
    }
}

function imgLoad (nodesList) {//获取所有需要实现懒加载图片对象引用并设置window监听事件scroll
    window.addEventListener('scroll', () => debounce(checkImgs(nodesList), 300), false)
};
