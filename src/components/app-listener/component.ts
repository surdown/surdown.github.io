var comp = {
    onCreate: function () {
        this.state = {
        };
    },
    onMount: function () {

    },
    menu: function () {
        this.getComponent('drawer').open();
    },
    play: function () {
        this.getComponent('listener').listen()
    }
}
export = comp;