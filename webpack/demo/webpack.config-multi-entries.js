module.exports = {
    mode: 'development',
    entry: {
        bundle1: './main2.js',
        bundle2: './main3.js',
    },
    output: {
        filename: '[name].js',
    },
}
