; (function (doc) {
    // 外层盒子 oWrapper
    // 列数  column
    // 间隙  gap
    var WaterFall = function (wrapper, opt) {
        this.oWrapper = doc.getElementsByClassName('wrapper')[0];
        this.column = opt.column;
        this.gap = opt.gap;
        this.itemWidth = (this.oWrapper.offsetWidth - (this.column - 1) * this.gap) / this.column;
        // 总宽度                   // 列数 - 1             间隔        列数
        this.pageNum = 0;
        this.pageSize = 0;
        this.heightArr = [];
    }

    WaterFall.prototype = {
        init: function () {
            this.getImgDatas(this.pageNum);
            this.bindEvent();
        },

        bindEvent: function () {
            window.addEventListener('scroll', this.scrollToBottom.bind(null), false);
        },

        scrollToBottom: function () {
            if (getScrollTop() + getWindowHeight() == getScrollHeight()) {
                this.pageNum++;
                if (this.pageNum <= this.pageSize - 1) {
                    this.getImgDatas(this.pageNum);
                }
            }
        },

        getImgDatas: function (pageNum) {
            var _self = this;
            xhr.ajax({
                url: 'server/index.php',
                type: 'POST',
                dataType: 'JSON',
                data: {
                    pageNum: pageNum
                },
                success: function (data) {
                    console.log(data);
                    if (data != 'NO DATA') {
                        var pageData = JSON.parse(data.pageData);
                        _self.pageData = parseInt(data.pageSize);
                        _self.renderList(pageData, _self.pageNum);
                    }
                }
            });
        },

        renderList: function (data, pageNum) {
            var _self = this,
                oItems = null,
                minIdx = -1;
            data.forEach(function (elem, idx) {
                var oItem = doc.createElement('div'),
                    oIext = doc.createElement('div'),
                    oImg = new Image(),
                    itemLeft = (idx + 1) % _self.column === 1 ? '0' : idx * (_self.itemWidth + _self.gap);
                oItem.className = 'wf-item';
                oItem.style.width = _self.itemWidth + 'px';
                oItem.style.height = elem.height * _self.itemWidth / elem.width + 45 + 'px';    // 加45px底部文本
                oImg.src = elem.img;
                oIext.innerHTML = "测试文本";
                oIext.className = "text-box";

                oItem.appendChild(oImg);
                oItem.appendChild(oIext);
                _self.oWrapper.appendChild(oItem);

                oItems = doc.getElementsByClassName('wf-item');
                if (idx < _self.column && pageNum == 0) {
                    _self.heightArr.push(oItem.offsetHeight);
                    oItem.style.top = '0';
                    oItem.style.left = itemLeft + 'px';
                } else {
                    minIdx = getMinIdx(_self.heightArr);
                    oItem.style.top = oItems[minIdx].offsetLeft + 'px';
                    oItem.style.top = (_self.offsetHeight + _self.gap) + 'px';
                    _self.heightArr[minIdx] += (oItems[idx].offsetHeight + _self.gap);
                }
                oImg.style.opacity = '1';
            })
        }
    }

    function getMinIdx(arr) {
        return [].indexOf.call(arr, Math.min.apply(null, arr))
    }

    window.WaterFall = WaterFall;
})(document)