"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ToneFactory_1 = require("../../lib/ToneFactory");
module.exports = class {
    onCreate(input, out) {
        this.state = {
            supported: false
        };
    }
    onMount() {
        this.state.supported = ToneFactory_1.default.Instance().UserMedia.supported;
    }
};
