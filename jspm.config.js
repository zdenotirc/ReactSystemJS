SystemJS.config({
    "packageConfigPaths": [
        "npm:@*/*.json",
        "npm:*.json",
        "github:*/*.json"
    ],
    "globalEvaluationScope": false,
    "transpiler": false,
    "typescriptOptions": {
        typeCheck: true,
        tsconfig: true
    },
    "packages": {
        app: {
            "main": "main.tsx",
            "defaultExtension": "tsx",
            "modules": {
                "*.tsx": {
                    "loader": "ts"
                }
            }
        },
        "github:frankwallis/plugin-typescript@2.5.3": {
            "map": {
                "typescript": "npm:typescript@1.7.5"
            }
        },
        "github:jspm/nodelibs-buffer@0.2.0-alpha": {
            "map": {
                "buffer-browserify": "npm:buffer@4.3.0"
            }
        },
        "github:jspm/nodelibs-domain@0.2.0-alpha": {
            "map": {
                "domain-browserify": "npm:domain-browser@1.1.7"
            }
        },
        "github:jspm/nodelibs-os@0.2.0-alpha": {
            "map": {
                "os-browserify": "npm:os-browserify@0.2.0"
            }
        },
        "github:jspm/nodelibs-stream@0.2.0-alpha": {
            "map": {
                "stream-browserify": "npm:stream-browserify@2.0.1"
            }
        },
        "npm:@reactivex/rxjs@5.0.0-alpha.4": {
            "map": {}
        },
        "npm:angular2@2.0.0-alpha.44": {
            "map": {
                "@reactivex/rxjs": "npm:@reactivex/rxjs@5.0.0-alpha.4",
                "reflect-metadata": "npm:reflect-metadata@0.1.1",
                "zone.js": "npm:zone.js@0.5.8"
            }
        },
        "npm:buffer@4.3.0": {
            "map": {
                "base64-js": "npm:base64-js@1.0.2",
                "ieee754": "npm:ieee754@1.1.6",
                "isarray": "npm:isarray@1.0.0"
            }
        },
        "npm:core-util-is@1.0.1": {
            "map": {}
        },
        "npm:es6-promise@3.0.2": {
            "map": {}
        },
        "npm:inherits@2.0.1": {
            "map": {}
        },
        "npm:react@0.14.6": {
            "map": {
                "fbjs": "npm:fbjs@0.6.1"
            }
        },
        "npm:readable-stream@2.0.5": {
            "map": {
                "core-util-is": "npm:core-util-is@1.0.1",
                "inherits": "npm:inherits@2.0.1",
                "isarray": "npm:isarray@0.0.1",
                "process-nextick-args": "npm:process-nextick-args@1.0.6",
                "string_decoder": "npm:string_decoder@0.10.31",
                "util-deprecate": "npm:util-deprecate@1.0.2"
            }
        },
        "npm:reflect-metadata@0.1.1": {
            "map": {}
        },
        "npm:reflect-metadata@0.1.2": {
            "map": {}
        },
        "npm:stream-browserify@2.0.1": {
            "map": {
                "inherits": "npm:inherits@2.0.1",
                "readable-stream": "npm:readable-stream@2.0.5"
            }
        },
        "npm:string_decoder@0.10.31": {
            "map": {}
        },
        "npm:zone.js@0.5.8": {
            "map": {
                "es6-promise": "npm:es6-promise@3.0.2"
            }
        }
    },
    "map": {
        angular2: "npm:angular2@2.0.0-alpha.44",
        buffer: "github:jspm/nodelibs-buffer@0.2.0-alpha",
        domain: "github:jspm/nodelibs-domain@0.2.0-alpha",
        events: "github:jspm/nodelibs-events@0.2.0-alpha",
        fs: "github:jspm/nodelibs-fs@0.2.0-alpha",
        module: "github:jspm/nodelibs-module@0.2.0-alpha",
        os: "github:jspm/nodelibs-os@0.2.0-alpha",
        path: "github:jspm/nodelibs-path@0.2.0-alpha",
        process: "github:jspm/nodelibs-process@0.2.0-alpha",
        react: "npm:react@0.14.6",
        "react-dom": "npm:react-dom@0.14.6",
        readline: "github:jspm/nodelibs-readline@0.2.0-alpha",
        "reflect-metadata": "npm:reflect-metadata@0.1.2",
        stream: "github:jspm/nodelibs-stream@0.2.0-alpha",
        ts: "github:frankwallis/plugin-typescript@2.5.3",
        typescript: "npm:typescript@1.7.5",
        util: "github:jspm/nodelibs-util@0.2.0-alpha",
        "zone.js": "npm:zone.js@0.5.8"
    }
});
