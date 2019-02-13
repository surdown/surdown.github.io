import { MDCTopAppBar } from '@material/top-app-bar/dist/mdc.topAppBar.js';

var comp = {
    onCreate: function () {
        this.state = {
        };
    },
    onMount: function () {
        const topAppBarElement = this.getEl('top-bar');
        this.comp = MDCTopAppBar.attachTo(topAppBarElement);
    },
    menu: function (...args) {
        this.emit('menu', ...args);
    },
    onDestroy() {

        this.comp && this.comp.destroy();

    }
}
export = comp;