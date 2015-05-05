'use strict'

module.exports = function(grunt) {

    grunt.config.init({
        jshint: {
            src: ['src/**/*.js', '!src/js/lib/**/*.js'],
            options: {
                asi: true
            }
        },

        csslint: {
            src: ['src/**/*.css']
        },

        jasmine_node: {
            options: {
                forceExit: true,
                match: '.',
                matchall: false,
                specNameMatcher: 'spec',
                extensions: 'js'
            },
            all: ['test']
        },

        watch: {
            js: {
                files: ['src/**/*.js'],
                tasks: ['jshint', 'jasmine_node']
            },
            css: {
                files: ['src/**/*.css'],
                tasks: ['csslint']
            }
        },

        connect: {
            server: {
                options: {
                    hostname: 'localhost',
                    useAvailablePort: true,
                    base: 'src',
                    open: true,
                    keepalive: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-jasmine-node');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('check', ['jshint', 'csslint', 'jasmine_node']);
    grunt.registerTask('default', ['check']);

    grunt.registerTask('hello', function() {
        grunt.log.writeln('Hello!!!')
    });

    grunt.registerTask('verify-files-location', function() {
        ['js','css'].forEach(function(extention) {
            var dir = 'src/' + extention + '/'
            grunt.file.expand('src/**/*.' + extention).forEach(function(file){
                if (file.indexOf(dir) !== 0) {
                    grunt.fail.fatal('file ' + file + ' should be in directory ' + dir)
                }
            })
        })
    });

    grunt.registerTask('readfiles', function(){
        ['errors', 'events'].forEach(function(type){
            var filePaths = grunt.file.expand('src/**/' + type + '.js');
            grunt.log.write(filePaths + '\n');
        })
    });
};
