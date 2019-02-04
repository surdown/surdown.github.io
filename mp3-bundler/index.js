"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { promisify } = require('util');
const fs = require("fs");
const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);
const path = require("path");
module.exports = function myPlugin(lasso, config) {
    lasso.dependencies.registerJavaScriptType('bundle-mp3', {
        // Declare which properties can be passed to the dependency type
        properties: {
            'path': 'string',
            'out_dir': 'string'
        },
        // Validation checks and initialization based on properties:
        async init(context) {
            if (!this.path) {
                throw new Error('"path" is required');
            }
            if (!this.out_dir) {
                throw new Error('"out_dir" is required');
            }
            // NOTE: resolvePath can be used to resolve a provided relative path to a full path
            this.path = this.resolvePath(this.path);
        },
        // Read the resource:
        async read(context) {
            const src = await readFileAsync(this.path);
            let outDir = lasso.config.fileWriterConfig.outputDir;
            let outDirForSound = path.resolve(outDir, 'sounds', this.out_dir);
            !fs.existsSync(outDirForSound) && fs.mkdirSync(outDirForSound, { recursive: true });
            await writeFileAsync(path.resolve(outDirForSound, path.basename(this.path)), src);
            // return myCompiler.compile(src);
            // console.log(context);
            // fs.writeFileSync('lasso.json', JSON.stringify(lasso.config));
            return "";
            // NOTE: A stream can also be returned
        },
        // getSourceFile is optional and is only used to determine the last modified time
        // stamp and to give the output file a reasonable name when bundling is disabled
        getSourceFile: function () {
            return this.path;
        }
    });
};
