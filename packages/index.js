// 导入组件
import TimeLine from './tiemline'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
// 存储组件列表
const components = [
  TimeLine
]

// 定义install方法，接受Vue参数，如果使用use方法注册组件，则所有组件都将被注册
const install = function (Vue) {
  if (!install.installed) {
    Vue.use(ViewUI)
    components.map(component => Vue.component(component.name, component))
  }
}

// 判断是否直接引入文件
if (typeof (window) !== 'undefined' && window.Vue) {
  install(window.Vue)
}

// 支持组件按需加载
export {
  TimeLine
}

export default {
  // 导出的对象必须有install,才能被Vue.use()方法安装
  install,
  ...components
}
