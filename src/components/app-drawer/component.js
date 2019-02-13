"use strict";
const mdc_drawer_js_1 = require("@material/drawer/dist/mdc.drawer.js");
var comp = {
    onCreate: function () {
        this.state = {};
    },
    onMount: function () {
        const topAppBarElement = this.getEl('temporary-drawer');
        this.comp = mdc_drawer_js_1.MDCTemporaryDrawer.attachTo(topAppBarElement);
    },
    open: function () {
        this.comp.open = true;
    },
    onDestroy() {
        this.comp && this.comp.destroy();
    }
};
module.exports = comp;
