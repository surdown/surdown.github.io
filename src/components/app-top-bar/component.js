"use strict";
const mdc_topAppBar_js_1 = require("@material/top-app-bar/dist/mdc.topAppBar.js");
var comp = {
    onCreate: function () {
        this.state = {};
    },
    onMount: function () {
        const topAppBarElement = this.getEl('top-bar');
        this.comp = mdc_topAppBar_js_1.MDCTopAppBar.attachTo(topAppBarElement);
    },
    menu: function (...args) {
        this.emit('menu', ...args);
    },
    onDestroy() {
        this.comp && this.comp.destroy();
    }
};
module.exports = comp;
