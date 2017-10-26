/**
 * Created by yangsong on 2016/5/3.
 */
var webpack = require("webpack");

var webpackconfig = require("./webpack.config.js");
module.exports = function (grunt) {
    // 项目配置
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            build: {
                src: ["dist/**/*",'dist.zip']
            },
            succes:{
                src:["dist/**/*"]
            }
        },
        copy:{
            common:{
                files: [
                    {expand: true, src: ['app.js'], dest: 'dist/'},
                    {expand: true, src: ['startup.sh'], dest: 'dist/'},
                    {expand: true, src: ['public/**/*'], dest: 'dist/'},
                    {expand: true, src: ['bin/**/*'], dest: 'dist/'},
                    {expand: true, src: ['data/**/*'], dest: 'dist/'},
                    {expand: true, src: ['routes/**/*'], dest: 'dist/'},
                    {expand: true, src: ['service/**/*'], dest: 'dist/'},
                    {expand: true, src: ['view/**/*'], dest: 'dist/'}
                ]
            },
            depens:{
                files:[
                    {expand: true, src: ['node_modules/**/*'], dest: 'dist/'}
                ]
            }
        },
        zip: {
            apd:{
                dest:'dist.zip',src:['dist/**/*']
            }
        },
        shell: {
            options: {
                stderr: true
            },
            build: {
                command: 'npm run build'
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-zip');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('zip-nc', ['clean:build','shell:build','copy:common','zip','clean:succes']);

    grunt.registerTask('zip-nc-all', ['clean:build','shell:build','copy:common','copy:depens','zip','clean:succes']);

}