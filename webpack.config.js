const path = require('path');

module.exports = {
    entry: './src/index.js',
    watch: true,
    output: {
        path: path.join(__dirname, '/dist'),
        filename: './src/index.js',
    },
};
