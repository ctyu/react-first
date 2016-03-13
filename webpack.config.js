var webpack = require('webpack');
var path = require('path');
var config = {
    'entry': {
        index: './entry/index.js'
    },

    'output': {
        'path': './bin',
        'filename': '[name].js'
    },

    'module': {
        'loaders': [
            {
                'test': /\.jsx?$/,
                'include': [
                    path.resolve(__dirname, './src'),
                    path.resolve(__dirname, './entry')
                ],
                'loader': 'babel',
                'query': {
                    presets: ['react', 'es2015']
                }
            }
        ],

        'resolve': {
            'extensions': ['', '.js', '.jsx'],
            'alias': {
                // 类似fekit的alias
                'Logic': './src/scripts'
            }
        }
    }
}

module.exports = config;
