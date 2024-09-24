const path = require('path');

module.exports = {
    entry: './mysite/helloapp/static/helloapp/js/main.js', // Correct entry path
    output: {
        path: path.resolve(__dirname, 'mysite/helloapp/static/helloapp/js'),
        filename: 'bundle.js',
    },
    mode: 'development',
};
