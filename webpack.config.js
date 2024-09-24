const path = require('path');

module.exports = {
    entry: './helloapp/static/helloapp/js/main.js',
    output: {
        path: path.resolve(__dirname, 'helloapp/static/helloapp/js'),
        filename: 'bundle.js',
    },
    mode: 'development',
};
