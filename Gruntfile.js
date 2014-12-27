/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    // Task configuration.
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true
      },
      dist: {
        src: ['lib/<%= pkg.name %>.js'],
        dest: 'dist/<%= pkg.name %>.js'
      },
      multiplyFileConcat: {
      files: {
        'dist/basic.js': ['src/main.js'],
        'dist/with_extras.js': ['src/main.js', 'src/extras.js'],
      },
    },
    },
    uglify: {
      build: {
        files: [{
          expand: true,
          cwd: 'src/js',
          src: '**/*.js',
          dest: 'dist/src/js'
        }]
      }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        browser: true,
        globals: {}
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib_test: {
        src: ['lib/**/*.js', 'test/**/*.js']
      }
    },
    cssmin: {
      justListAllFiles: {
        files: {
          'output.css': ['foo.css', 'bar.css']
        }
      },
      build: {
        files: [{
          expand: true,
          cwd: 'src/css',
          src: ['*.css', '!*.min.css'],
          dest: 'dist/src/css'
        }]
      }
    },
    htmlmin: {                                     
      build: {                                      
        options: {                                 
          removeComments: true,
          collapseWhitespace: true
        },
        files: {                                   
          'dist/index.html': 'src/index.html',
          'dist/index.html': 'src/index.html'
        }
      },
      release: {
        options: {                                 
          removeComments: true,
          collapseWhitespace: true
        },
        files: [{ 
          expand: true,
          src: 'src/**/*.html',
          dest: 'dist/'
        }]
      }
    },
    clean: {
      buildJS: ["dist/**/*.js","!dist/**/*.min.js"],
      buildCSS: ["dist/**/*.css","!dist/**/*.min.css"],
      buildHtml: ["dist/**/*.html"],
      build: ["dist/"]
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      lib_test: {
        files: '<%= jshint.lib_test.src %>',
        tasks: ['jshint:lib_test', 'qunit']
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task.
  //grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify']);
  // build mini html
  grunt.registerTask('minhtml', ['clean:buildHtml','htmlmin:release']);

  grunt.registerTask('minjs',['clean:buildJS','uglify:build']);

  grunt.registerTask('mincss',['clean:buildCSS','cssmin:build']);

  grunt.registerTask('clean-css',['clean:buildCSS']);

  grunt.registerTask('clean-html',['clean:buildHtml']);

  grunt.registerTask('clean-js',['clean:build']);

  grunt.registerTask('default',['clean:build','htmlmin:release','uglify:build','cssmin:build']);
};
