const baseConfig = {
  sourceDir: './src/',
  publishDir: './dist/'
}


module.exports = {
  clean: {
    path: baseConfig.publishDir + 'assets'
  },
  sass: {
    src: baseConfig.sourceDir + 'sass/**/*.scss',
    dest: baseConfig.publishDir + 'assets/css'
  },
  server: {
    path: baseConfig.publishDir
  },
  webpack: {
    src: baseConfig.sourceDir + 'script/*.js',
    dest: baseConfig.publishDir + 'assets/script'
  },
  vendorJs: {
    src: [
      baseConfig.sourceDir + 'js/vendor/jquery-3.6.0.min.js',
      baseConfig.sourceDir + 'js/vendor/slick.min.js',
      baseConfig.sourceDir + 'js/vendor/velocity.min.js'
    ],
    dest: baseConfig.publishDir + 'assets/js/vendor'
  },
  script: {
    src: [
      baseConfig.sourceDir + 'js/common.js',
      baseConfig.sourceDir + 'js/top.js'
    ],
    dest: baseConfig.publishDir + 'assets/js'
  },
  copy: {
    src: [
      baseConfig.sourceDir + 'images/**/*'
    ],
    dest: baseConfig.publishDir + 'assets/'
  },
  watch: {
    src: baseConfig.sourceDir,
    dest: baseConfig.publishDir
  },
  pug: {
    src: [
      baseConfig.sourceDir + 'pug/**/*.pug',
      '!' + baseConfig.sourceDir + 'pug/**/_*.pug'
    ],
    dest: baseConfig.publishDir
  }
};
