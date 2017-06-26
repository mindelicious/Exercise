module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    sass: {
      options: {
        sourcemap: true,
      },
      dist: {
        files: {
          'style.css' : 'style.sass'
        }
      }
    },
    imagemin: {
    dynamic: {
        files: [{
            expand: true,
            cwd: 'images/',
            src: ['**/*.{png,jpg,gif}'],
            dest: 'correctimg/'
        }]
    }
},
watch: {
    scripts: {
        files: ['sass/*.sass'],
        tasks: ['sass'],
        options: {
            spawn: false,
        },
    } 
},
browserSync: {
    bsFiles: {
        src : [
            '*.css',
            '*.html'
        ]
    },
    options: {
        server: {
            baseDir: "./"
        }
    }
},


  });
  // Load the plugins tasks 
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // Default task(s).
  grunt.registerTask('default', ['sass', 'imagemin', 'browserSync', 'watch' ]);
};