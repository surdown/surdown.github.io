import { MDCTemporaryDrawer } from '@material/drawer/dist/mdc.drawer.js';

var comp = {
    onCreate: function () {
        this.state = {
        };
    },
    onMount: function () {
        const topAppBarElement = this.getEl('temporary-drawer');
        this.comp = MDCTemporaryDrawer.attachTo(topAppBarElement);
    },
    open: function () {
        this.comp.open = true;
    },
    onDestroy() {

        this.comp && this.comp.destroy();

    }
}
export = comp;