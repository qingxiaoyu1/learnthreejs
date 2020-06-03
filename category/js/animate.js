/**
 * 组件下拉框
 * @author huangd
 * @date 2018年1月17日
 *
 * [SelectButtonBox description]
 * @param {[type]} wnd           window对象
 * @param {[type]} parentElement 父容器
 * @param {[type]} id 			 组件id
 * dom模型：
 * <div class="fd-dropdown-wrapper fd-fadeinR">
 *		<!-- <span class="fd-deadline">统计截止日期 2017.12.19</span>  -->
 *		<span class="fd-top-corner"></span>
 * 		<span class="fd-bottom-corner"></span> 
 *		<input type="text" data-toggle="dropdown" readonly="readonly"> 
 *		<label class="fd-select-arrow"></label>
 *		<div class="hidden">
 *      	<ul class="fd-dropdown-list">
 *          	<li class="">2016年</li>
 *           	<li class="active">2017年</li>
 *          </ul>
 *      </div>
 * </div>
 *
 * new SelectButtonBox(window, parent, parent.id).setDatas(datas);
 */
function SelectButtonBox(wnd, parentElement, id) {
	this.wnd = wnd || window;
	this.doc = this.wnd.document;
	this.parentElement = parentElement;
	this.id = id;

	// 下面各个dom详见上注释
	this.divDom = null;
	this.inputDom = null;
	this.labelDom = null;
	this.ulDom = null;

	// 展开状态，true/展开 false/收缩
	this.ifExpand = false;
	// 模式（单选/多选）radio/checkbox
	this.mode = null;
	// 储存input的change事件
	this.funcForOnchange = null;
	// 用于储存下拉框的值
	this.val = null;
	// 选中的选项
	this.activeDom = [];
    //存储默认值
    this.defaultvalue = null;
	this._initDom();
}

/**
 * dom元素初始化
 */
SelectButtonBox.prototype._initDom = function() {
	this.divDom = this.doc.createElement("div");
	this.divDom.className = "fd-dropdown-wrapper fd-fadeinR";
	this.parentElement.appendChild(this.divDom);

	var spanTopCorner = this.doc.createElement("span");
	spanTopCorner.className = "fd-top-corner";
	this.divDom.appendChild(spanTopCorner);

	var spanBottomCorner = this.doc.createElement("span");
	spanBottomCorner.className = "fd-bottom-corner";
	this.divDom.appendChild(spanBottomCorner);

	this.inputDom = this.doc.createElement("input");
	this.inputDom.type = "text";
	// 添加属性
	$(this.inputDom).attr("data-toggle", "dropdown").attr("readonly", "readonly");
	this.inputDom.className = "radio";
	this.divDom.appendChild(this.inputDom);

	this.labelDom = this.doc.createElement("label");
	this.labelDom.className = "fd-select-arrow";
	this.divDom.appendChild(this.labelDom);

	// divDom用来隐藏滚动条
	var divDom = this.doc.createElement("div");
	divDom.className = "hidden";
	this.ulDom = this.doc.createElement("ul");
	this.ulDom.className = "fd-dropdown-list";
	divDom.appendChild(this.ulDom);
	this.divDom.appendChild(divDom);
	
	// 绑定事件
    this._bindEvent();
}

/**
 * 根据选择生成下拉列表
 * @param {[type]} option option："radio"/单选  "checkbox"/多选
 * @param {[type]} datas  数据
 */
SelectButtonBox.prototype._addDataByOption = function(option, datas) {
	if(option === "radio") {
		$(this.divDom).addClass("radio");
	}
	for(var i = 0, len = datas.length; i < len; i++) {
		var liDom = this.doc.createElement("li");

        var json = this._dataProcessed(datas[i]);
        $(liDom).attr('data-save', json.value);
    	if(option === "checkbox") {
    		var labelDom = this.doc.createElement("label");
			$(labelDom).addClass("checkbox").attr("checked", false);
			liDom.appendChild(labelDom);
    	}
    	var text = this.doc.createTextNode(json.str);
		liDom.appendChild(text);
    	this.ulDom.appendChild(liDom);
    }
}

/**
 * 
 * 单选转多选  option: "radio2checkbox"	 radio-->checkbox (生成laber框)|| radio-->checkbox-->radio-->checkbox(显示label框)
 * 多选转单选  option: "checkbox2radio"  checkbox-->radio(隐藏label框)
 * @param  {[type]} option [description]
 */
SelectButtonBox.prototype._refleshByOption = function(option) {
	if(option === "radio2checkbox") {
		$(this.activeDom[0]).removeClass("active");
		this.activeDom = [];
		var hasLabel = $(this.ulDom).has("label");
		if(hasLabel.length === 0) { // 是否不存在label框
			var labelDom = this.doc.createElement("label");
			$(labelDom).addClass("checkbox").attr("checked", false);
			$(this.ulDom).children().prepend(labelDom);
		}
		$(this.divDom).removeClass("radio");
	} else if(option === "checkbox2radio"){
		if(this.activeDom.length > 0) { // 为已经激活的列去除激活状态，并将label框状态复原
			$(this.ulDom).children(".active").removeClass("active").children(".cur").attr("checked", false).removeClass("cur");
			this.activeDom = [];
		}
		$(this.divDom).addClass("radio");
	}
}

/**
 * 对数据进行处理
 * @param  {[type]} num 数据
 * @return {[type]}     json，分解的数据
 */
SelectButtonBox.prototype._dataProcessed = function(num) {
	var json = {};
	// 若this.datas[i]数据是一个数组，则将第一个值作为列的value值
    if(Array.isArray(num)) {
        json.value = num[0];
        json.str = num[1];
    } else {
        json.value = num;
        json.str = num;
    }
    return json;
}

/**
 * 绑定事件
 */
SelectButtonBox.prototype._bindEvent = function() {
	var self = this;

	// 点击input和laber展开或收缩下拉框
	$(this.divDom).bind("click", function(e) {
		var target = e.target;
		if(target === self.ulDom || self.ulDom.contains(target)) {
			return false;
		}
		self.doExpand();
	});

	// 为下拉列绑定事件
	$(this.ulDom).bind('click', this._selectedByClick.bind(this));
}

/**
 * 解绑事件
 * @param  {[type]} state "body"则只是解除body上的事件
 * @return {[type]}       [description]
 */
SelectButtonBox.prototype._unbindEvent = function(state) {
	if(state === "body") {
		$(this.doc.body).unbind("click." + this.id);
		return;
	}
	$(this.divDom).unbind();
	$(this.ulDom).unbind();
	$(this.doc.body).unbind("click." + this.id);
}

// 设置liDom为激活状态，this.activeDom记录当前激活列
SelectButtonBox.prototype._setActive = function(liDom) {
	if(this.mode === "radio") {
		if(this.activeDom[0] != null) {
			$(this.activeDom[0]).removeClass("active");
		}
		$(liDom).addClass("active");
		this.activeDom[0] = liDom;
		this.doExpand(false);
	} else if(this.mode === "checkbox") {
		var box = liDom.children[0];
		if($(box).attr("checked")) {
            $(box).attr("checked", false).removeClass("cur");
            $(liDom).removeClass("active");
            var a = this.activeDom.indexOf(liDom);
            this.activeDom.splice(a, 1);
        } else {
            $(box).attr("checked", true).addClass("cur");
            $(liDom).addClass("active");
            this.activeDom.push(liDom);
        }
	}
}

// ul的点击事件
SelectButtonBox.prototype._selectedByClick = function(e) { 
	var li = this.ulDom.children;
	for(var i = 0, len = li.length; i < len; i++) {
		if(e.target === li[i] || li[i].contains(e.target)) {
			this._setActive(li[i]);
		}
	}
	this._showResult();
}

// 显示点击结果
SelectButtonBox.prototype._showResult = function(isnotdochange) { 
	var arrayText = [];
	var arrayValue = [];
	for(var i = 0, len = this.activeDom.length; i < len; i++) {
		var liDom = this.activeDom[i];
		arrayText.push(liDom.lastChild.data);
		arrayValue.push($(liDom).attr('data-save'));
	}
	this.inputDom.value = arrayText.join(",");
	this.val = arrayValue.join(",");
if(!isnotdochange)
	this._doOnChange();
}

/**
 * ifExpand   option
 * 当前状态   操作动作   结果   
 * 展开       展开       不执行操作
 * 展开       收缩       收缩
 * 收缩       展开       展开
 * 收缩       收缩       不执行操作
 * @param  {[type]} option true/展开 false/收缩
 * @return {[type]}        [description]
 */
SelectButtonBox.prototype.doExpand = function(option) {
	var self = this;
	if(option === undefined) {
		if(this.ifExpand) { 
			option = false;
		} else {
			option = true;
		}
	}
	if(this.ifExpand && !option) { // 展开   收缩   收缩 （对应上方第二种情况）
		// 收缩
		$(this.divDom).removeClass("fd-dropdown-wrapperopen");
		this.ifExpand = false;

		// 解绑body事件
		this._unbindEvent("body");

	} else if(!this.ifExpand && option) {  // 收缩   展开   展开 （对应上方第三种情况）
		// 展开
		$(this.divDom).addClass("fd-dropdown-wrapperopen");
		this.ifExpand = true;

		// 绑定body事件
		$(this.doc.body).bind("click." + this.id, function(e) {
	    	if(!self.divDom.contains(e.target)) {
				self.doExpand(false);
			}
	    });
	}
	// 不执行
}

// 如果事件存在，触发
SelectButtonBox.prototype._doOnChange = function() {if(typeof(calc_Special_Widget) == "function")
	calc_Special_Widget(new EUI.Map("calc_widget_id="+this.id));
	// 判断this.funcForOnchange类型
	if(typeof this.funcForOnchange == "function") {
		this.funcForOnchange(this.val);
	}
}



// 设置onchange事件接口
SelectButtonBox.prototype.setOnchange = function(func) {
	this.funcForOnchange = func;
}

// 获取选中选项
SelectButtonBox.prototype.getValue = function() {
	return this.val;
}

// 默认选中选项
SelectButtonBox.prototype.setValue = function(array, isnotdochange) {
	var string = "";
	if(Array.isArray(array)) {
		string = array.toString();
	} else {
		string = array + "";
	}
	if(string.length > 0) {
		var liDom = this.ulDom.children;
		for(var i =0, len = liDom.length; i< len; i++) {
			var data = $(liDom[i]).attr('data-save') + "";
			if(string.indexOf(data) != -1) {
				this._setActive(liDom[i]);
			}
		}
	}
	this._showResult(isnotdochange);
}

// 设置下拉框数据
SelectButtonBox.prototype.setDatas = function(datas) {
	// 是否是数组
	if(Array.isArray(datas)) {
		this.ulDom.innerHTML = "";
	    this.inputDom.value = "";

	    if(this.mode === null || this.mode === "radio") {
	    	this.mode = "radio";
	    	this._addDataByOption(this.mode, datas);
	    } else if (this.mode === "checkbox") {
			this._addDataByOption(this.mode, datas);
	    }
	}
}

// 设置单选/多选
SelectButtonBox.prototype.getMode =function() {
	if(this.mode === null) {
		this.mode = "radio";
	}
	return this.mode;
}

// 设置单选/多选
SelectButtonBox.prototype.setMode =function(mode) {
	if(this.ulDom.hasChildNodes()) {
		this.inputDom.value = "";
		if(this.mode === "radio" && mode === "checkbox") {
			this._refleshByOption("radio2checkbox");
		} else if (this.mode === "checkbox" && mode === "radio") {
			this._refleshByOption("checkbox2radio");
		}
	}
	this.mode = mode;
    this.inputDom.value = this.getDefaultValue();
}

SelectButtonBox.prototype.setDefaultValue = function(defaultvalue) {
    this.defaultvalue = defaultvalue;
}
SelectButtonBox.prototype.getDefaultValue = function() {
    return this.defaultvalue;
}
/**
 * 销毁，事件和全局变量
 * @return {[type]} [description]
 */
SelectButtonBox.prototype.dispose = function() {
	this._unbindEvent();
	this.wnd = null;
	this.doc = null;
	this.parentElement = null;
	this.id = null;

	this.divDom = null;
	this.inputDom = null;
	this.labelDom = null;
	this.ulDom = null;
	this.ifExpand = null;
	this.mode = null;
	this.funcForOnchange = null;
	this.val = null;
	this.activeDom = null;
}




var select = null;
/**
 * 组件下拉框
 *
 * @params cwidget 组件对象
 * @params vardata 取数定义中定义的变量，json格式：{'var1':'xxx'}
 * @params events 事件，用户在右边属性上设置的事件, json格式：{'evt1': function(){...}, 'evt2':function(){....}}
 * @params storagedata 组件自己需要存储的值，字符串格式
 */
function init(cwidget, vardata, events, storagedata){
    var basedom = cwidget.basedom;
    select = new SelectButtonBox(cwidget.wnd, basedom, basedom.id);
    
    if(cwidget.getProperty("mode")) {
       select.setMode(cwidget.getProperty("mode"));
   	}
   	if(vardata.array) {
        try {
            var datas = eval(vardata.array);
            select.setDatas(datas);
        } catch(e) {
            EUI.showError(e);
        }
    }
    var defaultvalue = cwidget.getProperty("defaultvalue");
     if(defaultvalue) {
        setProperty('defaultvalue', defaultvalue, cwidget);
         select.setDefaultValue(defaultvalue);
    }
    if(cwidget.isresultview){
        // 只在结果界面的时候执行，例如只想在结果界面绑定click事件
        if(events.dochange) {
            select.setOnchange(events.dochange);
        }
    }
}

/**
 * 定义了自定义属性时，必须实现该方法，方法名为setProperty
 * 当在属性面板上修改属性后，会调用该方法
 * @param key  属性名
 * @param value  属性值
 * @param cwidget  组件对象
 * @returns
 */
function setProperty(key, value, cwidget) {
    if (key === 'mode') {
    	select.setMode(value);
    } else if(key === 'defaultvalue') {
        if(!(value)){
            return;
        }
        select.setValue(value, true);
    }
}

/**
 * 刷新操作，数据改变时，调用该方法，重新渲染数据
 * @param cwidget 组件对象
 * @param vardata vardata 取数定义中定义的变量，json格式：{'var1':'xxx'}
 * @param storagedata  组件自己需要存储的值，字符串格式
 * @returns
 **/
function refreshDatas(cwidget, vardata, storagedata){
    try {
        var datas = eval(vardata.array);
        select.setDatas(datas);
        select.setValue(cwidget.option.defaultvalue, true);
    } catch(e) {
        EUI.showError(e);
    }
}

function getValue(cwidget) {
   if(cwidget.isresultview){
       return select.getValue();
   }else{
       return cwidget.option.defaultvalue;
   }
}

function getParamName(cwidget){
    return cwidget.getProperty("paramname");
}

function dispose(cwidget) {
	select.dispose();
	select = null;
}