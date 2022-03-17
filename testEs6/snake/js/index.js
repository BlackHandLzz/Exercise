// 模块化开发
window.onload = function () {
    init();
}

function init() {
    initTodoList;
}

var initTodoList = (function () {
    var showInput = document.getElementsByClassName('j-show-input')[0],
        inputWrap = document.getElementsByClassName('input-wrap')[0],
        addItem = document.getElementsByClassName('j-add-item')[0],
        textInput = document.getElementById('textInput'),
        oList = document.getElementsByClassName('j-list')[0],
        inputShow = false,
        isEdit = false,
        curIdx = null;
    addEvent(showInput, 'click', function () {
        if (inputShow) {
            showInputs('close');
            restoreStatus();
        } else {
            showInputs('open');

        }
    });
    addEvent(addItem, 'click', function () {
        var oItems = document.getElementsByClassName('item'),
            itemLen = oItems.length,
            item,
            val = textInput.value,
            len = val.length;

        if (len === 0) { return }

        for (var i = 0; i < itemLen; i++) {
            item = elemChildren(oItems[i])[0].innerText;
            if (item === val) {
                alert('已存在此目录');
                return;
            }
        }

        if (isEdit) {
            var itemContent = elemChildren(oItems[curIdx])[0];

            itemContent.innerText = val;
            //addItem.innerText = '增加项目';
            // isEdit = false;
            // curIdx = null;

        } else {
            var oLi = document.createElement('li');
            oLi.className = 'item';
            oLi.innerHTML = itemTpl(val);
            oList.appendChild(oLi);
        }

        showInputs('close');
        // textInput.value = '';
        restoreStatus();
    })

    addEvent(oList, 'click', function (e) {
        var e = e || window.event,
            tar = e.target || e.srcElement,
            oItems = document.getElementsByClassName('item'),
            liParent = elemParent(tar, 2);
        if (tar.className === 'edit-btn fa fa-edit') {
            // 编辑
            var itemLen = oItems.length,
                tarIdx = Array.prototype.indexOf.call(oItems, liParent),
                item;

            showInputs('open');

            for (var i = 0; i < itemLen; i++) {
                item = oItems[i];
                item.className = 'item';
            }

            curIdx = tarIdx;
            liParent.className += ' active';
            addItem.innerText = '编辑第' + (curIdx + 1) + '项';
            isEdit = true;

        } else if (tar.className === 'remove-btn fa fa-times') {
            // 删除
            liParent.remove();
            restoreStatus();
        }
    })

    function restoreStatus() {
        isEdit = false;
        curIdx = null;
        textInput.value = '';
        addItem.innerText = '增加项目';
    }

    function showInputs(action) {
        if (action === 'close') {
            inputWrap.style.display = 'none';
            inputShow = false;
        } else if (action === 'open') {
            inputWrap.style.display = 'block';
            inputShow = true;
        }

    }

    function itemTpl(text) {
        return (
            ' <p class="item-content">' + text + '</p> ' +
            '<div class="btn-group">' +
            '<a href="javascript:;" class="edit-btn fa fa-edit"> ! </a>' +
            '<a href="javascript:;" class="remove-btn fa fa-times"> x </a>' +
            '</div>'
        )
    }
})();

