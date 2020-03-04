import pkg from './package.json';

export default [
  {
    input: 'src/TheMovieDB.js',
    output: {
      name: 'TheMovieDB',
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
