module.exports = function(grunt) {
    /**
     * * Dependencies dist list
     */
    const sass = require('node-sass');
    const depDir = 'node_modules/';
    const cssList = [
        depDir + 'bootstrap/dist/bootstrap.min.css'
    ];
    const jsList = [
        depDir + 'jquery/dist/jquery.slim.min.js',
        depDir + 'popper/dist/umd/popper.min.js',
        depDir + 'bootstrap/dist/bootstrap.min.js',
        depDir + 'angular/angular.min.js',
        depDir + 'angular-route/angular-route.min.js',
        depDir + 'angular-resource/angular-resource.min.js',
        depDir + 'angular-aria/angular-aria.min.js',
        depDir + 'angular-sanitize/angular-sanitize.min.js'
    ];
    

    /**
     * * Grunt configuration
     */
    let gruntConfig = {};

    /**
     * * Path configuration
     */
    const paths = {
        dist: {
            dir: 'dist',
            image: 'dist/img',
            script: 'dist/js',
            stylesheet: 'dist/css'
        },
        src: {
            dir: 'src',
            image: 'src/images',
            markup: 'src/markups',
            script: 'src/scripts',
            stylesheet: 'src/stylesheets',
            vector: 'src/vectors'
        },
        www: {
            dir: 'www',
            image: 'www/img',
            script: 'www/js',
            stylesheet: 'www/css'
        }
    };

    /**
     * * Linting task configuration
     */
    // JSHINT :: https://jshint.com/docs/options/
    gruntConfig.jshint = {
        option: {
            esversion: 6,
            jshintrc: 'configs/jshint.json',
            reporter: require('jshint-stylish')
        },
        develop: [paths.src.script + '/common/*.js', paths.src.script + '/*.js'],
    };
    // SASS-LINT
    gruntConfig.sasslint = {
        options: {
            configFile: 'configs/sass-lint.json'
        },
        target: [
            paths.src.stylesheet + '/common/*.sass',
            paths.src.stylesheet + '/pages/*.sass',
            paths.src.stylesheet + '/style.sass'
        ]
    };

    /**
     * * Cleaning task configuration
     */
    gruntConfig.clean = {
        export: [
            paths.dist.dir + '/**/*',
            paths.dist.dir + '/*'
        ],
        www: [
            paths.www.dir + '/**/*',
            paths.www.dir + '/*'
        ],
        markup: [paths.www.dir + '/*.html'],
        script: [paths.www.script + '/*'],
        stylesheet: [paths.www.stylesheet + '*'],
        plainCss: [paths.dist.stylesheet + '/style-plain.css']
    };

    /**
     * * Copying task configuration
     */
    // COPY
    gruntConfig.copy = {
        blob: {
            expand: true, flatten: true, filter: 'isFile',
            src: [paths.src.image + '*.{jpg,png}', paths.src.vector + '*.svg'], dest: paths.www.image
        },
        script: {
            expand: true, flatten: true, filter: 'isFile',
            src: [paths.src.script + '/*.js'], dest: paths.www.script
        }
    };

    /**
     * * Building task configuration
     */
    // HAML
    gruntConfig.haml = {
        options: {
            language: 'coffee',
        },
        develop: {
            files: grunt.file.expandMapping(
                [paths.src.markup + '/*.haml'],
                paths.www.dir + '/',
                {
                    rename: function (base, path) {
                        return base + path.replace(paths.src.markup +'/', '').replace(/\.haml$/, '.html');
                    }
                }
            )
        },
        release: {
            files: grunt.file.expandMapping(
                [paths.src.markup + '/*.haml'],
                paths.dist.dir + '/',
                {
                    rename: function (base, path) {
                        return base + path.replace(paths.src.markup + '/', '').replace(/\.haml$/, '.html');
                    }
                }
            )
        },
    };
    // JS
    gruntConfig.concat = {
        script: {
            flatten: true,
            src: [paths.src.script + '/common/*.js'],
            dest: paths.www.script + '/common.js'
        },
        scriptDep: {
            flatten: true,
            src: jsList,
            dest: paths.www.script + '/dependencies.js'
        },
        scriptDepDist: {
            flatten: true,
            src: jsList,
            dest: paths.dist.script + '/dependencies.js'
        },
        stylesheetDep: {
            flatten: true,
            src: cssList,
            dest: paths.www.stylesheet + '/dependencies.css'
        },
        stylesheetDepDist: {
            flatten: true,
            src: cssList,
            dest: paths.dist.stylesheet + '/dependencies.css'
        },
        scriptDist: {
            flatten: true,
            src: [paths.src.script + '/common/*.js'],
            dest: paths.dist.script + '/common.js'
        }
    };
    // SASS
    gruntConfig.sass = {
        develop: {
            files: {},
            options: {implementation: sass, sourceMap: true, style: 'expanded'}
        },
        release: {
            files: {},
            options: {implementation: sass, sourceMap: false, style: 'compressed'}
        }
    };
    gruntConfig.sass.develop.files[paths.www.stylesheet + '/style.css'] = paths.src.stylesheet + '/style.sass';
    gruntConfig.sass.release.files[paths.dist.stylesheet + '/style-plain.css'] = paths.src.stylesheet + '/style.sass';


    /**
     * * Minifying task configuration
     */
    // BLOB
    gruntConfig.imagemin = {
        release: {
            options: {
                optimizationLevel: 7
            },
            files: [{
                expand: true, flatten: true,
                src: [paths.src.image + '/*.{jpg,png}', paths.src.vector + '/*.svg'],
                dest: paths.dist.image
            }]
        }
    };
    // CSS
    gruntConfig.cssmin = {
        target: {
            files: [{src: [paths.dist.stylesheet + '/style-plain.css'], dest: paths.dist.stylesheet + '/style.css'}]
        }
    };
    // JS
    gruntConfig.uglify = {
        release: {files: {}}
    };
    gruntConfig.uglify.release.files[paths.dist.script + '/common.js'] = [paths.src.script + '/common/*.js'];
    gruntConfig.uglify.release.files[paths.dist.script + '/app.js'] = paths.src.script + '/app.js';

    /**
     * * Testing task configuration
     */

    /**
     * * Watching task configuration
     */
    gruntConfig.watch = {
        markup: {
            files: [paths.src.markup + '/**/*'],
            tasks: ['haml:develop']
        },
        script: {
            files: [paths.src.script + '/**/*'],
            tasks: ['jshint:develop', 'copy-own-script']
        },
        stylesheet: {
            files: [paths.src.stylesheet + '/**/*'],
            tasks: ['sasslint', 'sass:develop']
        }
    };

    /**
     * * Concurrent task configuration
     */
    gruntConfig.concurrent = {
        options: {
            logConcurrentOutput: true,
            limit: 8
        },
        devBuild: {tasks: [
            'copy-dependecies', 'copy:blob',
            'haml:develop', 'sass:develop', 'copy-own-script'
        ]},
        relBuild: {tasks: [
            'concat:scriptDepDist', 'imagemin:release',
            'haml:release', 'uglify:release', 'minify-stylesheet'
        ]},
        relLint: {tasks: ['jshint:develop', 'sasslint']},
        watch: {tasks: ['watch:markup', 'watch:script', 'watch:stylesheet']}
    };

    /**
     * * Connect task configuration
     */
    gruntConfig.connect = {
        server: {
            options: {
                port: 8888,
                base: paths.www.dir,
                options: {
                    index: 'index.html'
                }
            }
        }
    };

    grunt.initConfig(gruntConfig);

    /**
     * grunt load task
     * @param pluginName string
     */
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-haml');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-sass-lint');

    /**
     * grunt register task
     * @param taskName string
     * @param taskList array of string 
     */

    // PREDEFINED
    grunt.registerTask('copy-dependecies', ['concat:stylesheetDep', 'concat:scriptDep']);
    grunt.registerTask('copy-own-script', ['copy:script', 'concat:script']);
    grunt.registerTask('minify-stylesheet', ['sass:release', 'cssmin', 'clean:plainCss']);
    
    // DEVELOP
    grunt.registerTask('develop', ['clean:www', 'concurrent:devBuild', 'connect:server', 'concurrent:watch']);

    // RELEASE
    grunt.registerTask('release', ['clean:export', 'concurrent:relLint', 'concurrent:relBuild']);
};