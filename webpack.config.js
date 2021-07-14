const path = require('path');

module.exports = {
    entry: './index.js',
    watch: true,
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index.js',
    },
};
