module.exports = function (grunt){
    // grunt.registerTask('speak', function() {
    //     console.log('I am speaking.');
    // });
    // grunt.registerTask('sreyem',function(){
    //     console.log('I am sreyem.');
    // });
    // grunt.registerTask('both',['speak','sreyem']);
    // grunt.registerTask('default',['speak','sreyem']);

    // Project configuration.
grunt.initConfig({
    concat: {
      js: {
        src: ['js/1.js', 'js/2.js'],
        dest: 'built/js/scritps.js',
      },
        css: {
          src: ['css/min.css', 'css/sin.css'],
          dest: 'built/css/styles.css',
        },
      },
      watch: {
        js: {
          files: ['js/**/*.js'],
          tasks: ['concat:js'],
          
        },
        css: {
            files: ['css/**/*.css'],
            tasks: ['concat:css'],
            
          },
      },
  });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default',['concat','watch']);

}
