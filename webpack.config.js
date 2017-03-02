const HtmlWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: `${__dirname}/app/index.html`,
    filename: 'index.html',
    inject: 'body',
});

module.exports = {
    entry: [
        './app/index.js',
    ],
    output: {
        filename: 'index_bundle.js',
        path: __dirname + "/dist",
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,         // Match both .js and .jsx files
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets:['react', 'es2015','stage-0']
                }
            }
        ]
    },
    devServer: {
        inline: true,
        port: 8008,
    },
    plugins: [HTMLWebpackPluginConfig],
}