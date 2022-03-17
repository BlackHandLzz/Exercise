// 绑定执行函数
function addEvent(el, type, fn) {
    if (el.addEventListener) {
        el.addEventListener(type, fn, false);
    } else if (el.attachEvent) {
        el.attachEvent('on' + type, function () {
            fn.call(el);
        })
    } else {
        el['on' + type] = fn;
    }
}

// 获取子元素节点
function elemChildren(node) {
    var arr = [],
        children = node.childNodes;
    for (var i = 0; i < children.length; i++) {
        var childItem = children[i];
        if (childItem.nodeType === 1) {
            arr.push(childItem);
        }
    }
    return arr;
}

// 获取父元素节点
function elemParent(node, n) {
    var type = typeof (n);
    if (type === 'unfefined') {
        return node.parentNode;
    } else if (n <= 0 || type !== 'number') {
        return undefined;
    }
    while (n) {
        node = node.parentNode;
        n--;
    }
    return node;
}