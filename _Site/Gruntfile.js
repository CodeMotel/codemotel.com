module.exports = function(grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            dist: {
                src: [
                    '_js/plugins/*.js', // JS Libraries
                    '_js/scripts.js', // Main JS Document
                ],
                dest: '_js/scripts.concat.js', // needs a better name, doncha think?
            }
        },
        uglify: {
            build: {
                src: '_js/scripts.concat.js',
                dest: '_js/scripts.min.js'
            }
        },
        sass: {
            dist: {
                options: {
                    // Can be nested, compact, compressed, expanded
                    style: 'expanded'
                },
                files: {
                    '_css/style.css': '_scss/style.scss'
                }
            }
        },
        autoprefixer: {
            options: {
                // Task-specific options go here.
            },
            global: {
                options: {
                    // Target-specific options go here.
                    // browser-specific info: https://github.com/ai/autoprefixer#browsers
                    // DEFAULT: browsers: ['> 1%', 'last 2 versions', 'ff 17', 'opera 12.1']
                    browsers: ['> 1%', 'last 2 versions', 'ff 17', 'opera 12.1', 'ie 8', 'ie 9']
                },
                src: '_css/style.css'
            },
        },

        // This is optional!
        notify_hooks: {
          options: {
            enabled: true,
            max_jshint_notifications: 5, // maximum number of notifications from jshint output
            title: "The Code Motel" // defaults to the name in package.json, or will use project directory's name
          }
        },
        watch: {
            scripts: {
                files: ['_js/scripts.js', '_js/plugins/*.js'],
                tasks: ['concat', 'uglify'],
                options: {
                				livereload: true,
                    spawn: false,
                },
            },
            css: {
                files: ['_scss/*.scss', '_scss/**/*.scss'],
                tasks: ['sass', 'autoprefixer'],
                options: {
                    livereload: true,
                    spawn: false,
                }
            },
            html: {
                files: ['*.html', '**/*.html', '*.php', '**/*.php'],
                options: {
                    livereload: true,
                    spawn: false,
                }
            }
        }
    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');     // concatenate
    grunt.loadNpmTasks('grunt-contrib-uglify');     // minify
    // grunt.loadNpmTasks('grunt-contrib-imagemin');   // optimize images
    grunt.loadNpmTasks('grunt-contrib-watch');      // watch files for changes
    grunt.loadNpmTasks('grunt-contrib-sass');       // Gettin Sassy!
    grunt.loadNpmTasks('grunt-autoprefixer');       // Auto-freaking-prefixer!!!
    grunt.loadNpmTasks('grunt-notify');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['watch']);

};
