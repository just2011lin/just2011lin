(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{394:function(v,e,_){"use strict";_.r(e);var t=_(44),p=Object(t.a)({},(function(){var v=this,e=v.$createElement,_=v._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"可复用性-组合"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#可复用性-组合"}},[v._v("#")]),v._v(" 可复用性&组合")]),v._v(" "),_("h2",{attrs:{id:"混入"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#混入"}},[v._v("#")]),v._v(" 混入")]),v._v(" "),_("p",[v._v("1.题目：混入的作用是什么？")]),v._v(" "),_("p",[v._v("答：通过混入可以将混入对象的选项与组件本身的选项进行组合")]),v._v(" "),_("p",[v._v("2.题目：使用组件的什么选项来接收混入对象？")]),v._v(" "),_("p",[v._v("答：mixins")]),v._v(" "),_("p",[v._v("3.题目：数据对象的混入规则是什么？")]),v._v(" "),_("p",[v._v("答：递归合并，并以组件数据优先")]),v._v(" "),_("p",[v._v("4.题目：同名钩子函数的混入规则是什么？")]),v._v(" "),_("p",[v._v("答：合并为一个数组，并且混入对象的钩子先调用")]),v._v(" "),_("p",[v._v("5.题目：方法、组件和指令的混入规则是什么？")]),v._v(" "),_("p",[v._v("答：合并为一个对象并以组件的值为优先。")]),v._v(" "),_("p",[v._v("6.题目：使用什么方法可以定义全局混入对象？")]),v._v(" "),_("p",[v._v("答：Vue.mixin方法")]),v._v(" "),_("p",[v._v("7.题目：怎么设置自定义选项的合并策略？")]),v._v(" "),_("p",[v._v("答：Vue.config.optionMergeStrategies.myOption = function(toVal, fromVal){ // 返回合并后的对象 }（toVal和fromVal分别是组件还是混入对象的还不清楚）")]),v._v(" "),_("p",[v._v("8.题目：自定义选项的默认合并策略什么？")]),v._v(" "),_("p",[v._v("答：覆盖已有的值？（具体怎么覆盖不清楚）")]),v._v(" "),_("h2",{attrs:{id:"自定义指令"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#自定义指令"}},[v._v("#")]),v._v(" 自定义指令")]),v._v(" "),_("p",[v._v("1.题目：怎么注册一个全局指令？")]),v._v(" "),_("p",[v._v("答：使用Vue.directive方法并传入指令名和指令选项")]),v._v(" "),_("p",[v._v("2.题目：怎么注册一个局部指令？")]),v._v(" "),_("p",[v._v("答：在组件中使用directives选项，并用key作为指令名，value作为指令选项")]),v._v(" "),_("p",[v._v("3.题目：指令选项中可以定义哪些钩子函数？")]),v._v(" "),_("p",[v._v("答：bind inserted updated componentUpdated unbind")]),v._v(" "),_("p",[v._v("4.题目：钩子函数有哪些参数？")]),v._v(" "),_("p",[v._v("答：el binding vnode oldVnode四个参数，其中binding对象有：name value oldValue expression arg modifiers属性")]),v._v(" "),_("p",[v._v("5.题目：使用函数简写的方式定义指令时，这个函数会作为什么钩子？")]),v._v(" "),_("p",[v._v("答：bind update")]),v._v(" "),_("h2",{attrs:{id:"渲染函数-jsx"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#渲染函数-jsx"}},[v._v("#")]),v._v(" 渲染函数&JSX")]),v._v(" "),_("p",[v._v("1.题目：在组件选项中渲染函数字段名是什么？")]),v._v(" "),_("p",[v._v("答：render")]),v._v(" "),_("p",[v._v("2.题目：createElement方法的参数有哪些，请简述一下？")]),v._v(" "),_("p",[v._v("答：第一个参数为：组件名或组件选项或resolve值为上述的async函数，第二个参数（可选）：attribute数据对象，第三个参数（可选）：子元素或子组件")]),v._v(" "),_("p",[v._v("3.题目：createElement方法的第二个参数attribute数据对象有哪些属性？")]),v._v(" "),_("p",[v._v("答：class style attrs props domProps on nativeOn directives scopedSlots slot key ref refInFor")]),v._v(" "),_("p",[v._v("4.题目：VNode必须唯一是指什么唯一？")]),v._v(" "),_("p",[v._v("答：具体来讲，在一个render函数中，一个VNode只能作为一个子元素存在")]),v._v(" "),_("p",[v._v("5.题目：怎么在渲染函数中实现v-if和v-for")]),v._v(" "),_("p",[v._v("答：v-if可以用if-else判断来输出不同结果，v-for可以用数组的map方法输出多个VNode")]),v._v(" "),_("p",[v._v("6.题目：v-model在渲染函数中要怎么实现？")]),v._v(" "),_("p",[v._v("答：props中接收value，createElement函数的第二个参数中设定domProps的value为组件的prop value,然后在事件处理程序中用$emit出input事件及值")]),v._v(" "),_("p",[v._v("7.题目：在render函数内事件和按键修饰符怎么处理？")]),v._v(" "),_("p",[v._v("答：部分修饰符（passive capture once）在事件名前添加前缀来实现，其他修饰符可用事件对象来实现")]),v._v(" "),_("p",[v._v("8.题目：子组件的render函数内怎么访问插槽和作用域插槽？")]),v._v(" "),_("p",[v._v("答：使用$slots访问插槽内容，使用$scopedSlots访问作用域插槽")]),v._v(" "),_("p",[v._v("9.题目：父组件的render函数内怎么设置子组件的插槽内容？")]),v._v(" "),_("p",[v._v("答：通过createElement第二个参数的scopedSlots选项设置")]),v._v(" "),_("p",[v._v("10.题目：函数式组件有什么特点？")]),v._v(" "),_("p",[v._v("答：没有响应式数据也没有生命周期方法")]),v._v(" "),_("p",[v._v("11.题目：怎么设置一个组件为函数式组件？")]),v._v(" "),_("p",[v._v("答：在组件选项中设置functional值为true，或在vue文件的template元素上添加functional属性")]),v._v(" "),_("p",[v._v("12.题目：函数式组件怎么在render函数中接收参数？")]),v._v(" "),_("p",[v._v("答：通过render函数的第二个参数context接收")]),v._v(" "),_("p",[v._v("13.题目：")])])}),[],!1,null,null,null);e.default=p.exports}}]);