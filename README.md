## 使用v-cloak指令隐藏一个一开始不希望它出现的元素
1. 在该元素身上添加v-cloak
2. 在CSS中添加一个默认隐藏的属性，例如像下面这样：
```
div[v-cloak]{
    display: none;
}
```
3. CSS加载后该元素默认隐藏，随后JS加载，会删掉元素的v-cloak指令，一开始隐藏的元素又显示出来
## 给resume添加了一个名为editable-span的组件
- 通过Vue.component全局注册一个组件，第一个参数是组件名(建议字母全小写且必须包含一个连字符)
```
Vue.component('my-component-name', { /* ... */ })
```
- 组件的data必须是一个函数
- 每个组件必须只有一个根元素，像这个项目中这样三个元素被包含在一个span的根元素下面
```
<span class="editableSpan">
    <span v-show="!editing">{{value}}</span>
    <input v-show="editing" type="text" v-bind:value="value" @input="triggerEdit">
    <button @click="editing = !editing">edit</button>
</span>
```
## box-shadow可以平铺整个页面，设置半透明
```
box-shadow: 0 0 0 10000px rgba(0,0,0,0.5);
```