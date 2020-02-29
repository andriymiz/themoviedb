import pkg from './package.json';

export default [
  {
    input: 'src/TheMovieDB.js',
    output: {
      name: 'theMovieDb',
      file: pkg.browser,
      format: 'umd',
      sourcemap: true
    }
  },
  {
    input: 'src/TheMovieDB.js',
    output: [
      { file: pkg.main, format: 'cjs' }
    ]
  }
];
