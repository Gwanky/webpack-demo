import Layer from './components/layer/layer.js'
import Head from './components/head/head.js'

import './css/vendor/common.css'

const App = function () {
    var domApp = document.getElementById('app')
    var layer = new Layer()
    var head = new Head()
    domApp.innerHTML = head.tpl + layer.tpl
}

new App()
