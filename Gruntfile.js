module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            admin: {
                options: {
                    paths: ['src/AdminBundle/Resources/public/less'],
                    compress: true
                },
                files: {
                    'web/compiled/admin/styles.min.css': 'src/AdminBundle/Resources/public/less/*.less'
                }
            }
        }
    });

    // Load the plugin that provides the "less" task.
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Default task(s).
    grunt.registerTask('default', ['less']);
};
