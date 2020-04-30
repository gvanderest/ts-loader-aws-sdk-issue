const path = require('path');

module.exports = (_env, argv) => {
    const mode = argv.mode || 'development';

    return {
        entry: './index.ts',
        module: {
            rules: [
                {
                    test: /\.[jt]sx?$/,
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true,
                    },
                },
            ],
        },
        output: {
            path: path.resolve(__dirname, 'output/index.js')
        },
        resolve: {
            extensions: ['.js', '.ts'],
        },
        mode,
        devtool: 'source-map',
        target: 'node',
    };
};
