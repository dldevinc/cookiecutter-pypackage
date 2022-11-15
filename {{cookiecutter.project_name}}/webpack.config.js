const fs = require("fs");
const path = require("path");
const pixrem = require("pixrem");
const postcssUrl = require("postcss-url");
const autoprefixer = require("autoprefixer");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

const SOURCE_DIR = path.resolve(__dirname, "{{ cookiecutter.project_dir }}/static/{{ cookiecutter.project_dir }}/src");
const DIST_DIR = path.resolve(__dirname, "{{ cookiecutter.project_dir }}/static/{{ cookiecutter.project_dir }}/dist");

let config = {
    entry: {
        widget: path.resolve(SOURCE_DIR, "js/widget.js")
    },
    output: {
        clean: true,
        path: path.resolve(DIST_DIR),
        publicPath: "/static/{{ cookiecutter.project_dir }}/dist/",
        filename: "[name].js",
        assetModuleFilename: "assets/[name][ext][query]",
        library: {
            type: "window"
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /[\\/]node_modules[\\/]/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            cacheDirectory: path.resolve(__dirname, "cache")
                        }
                    }
                ]
            },

            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: "fast-css-loader"
                    }
                ]
            },

            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: "fast-css-loader",
                        options: {
                            importLoaders: 2
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    pixrem(),
                                    autoprefixer(),
                                    postcssUrl({
                                        url: function(asset) {
                                            // Файлы, начинающиеся со слеша, не распознаются
                                            // webpack'ом как assets, т.к. ищутся в корневой папке,
                                            // а не в папке статики.
                                            if (asset.url[0] === "/") {
                                                const filepath = path.resolve(DIST_DIR, asset.url.slice(1));
                                                if (fs.existsSync(filepath)) {
                                                    return asset.url.slice(1);
                                                }
                                            }
                                            return asset.url;
                                        }
                                    })
                                ]
                            }
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sassOptions: {
                                includePaths: [path.resolve(SOURCE_DIR, "css"), path.resolve(__dirname, "node_modules")]
                            }
                        }
                    }
                ]
            },

            {
                test: /\.(jpe?g|png|gif|woff2?|ttf|eot|svg)$/i,
                type: "asset/resource"
            }
        ]
    },
    resolve: {
        modules: [SOURCE_DIR, "node_modules"]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css"
        })
    ],
    optimization: {
        moduleIds: "deterministic",
        minimizer: [
            new ImageMinimizerPlugin({
                minimizer: {
                    implementation: ImageMinimizerPlugin.imageminMinify,
                    options: {
                        plugins: [
                            [
                                "gifsicle",
                                {
                                    interlaced: true,
                                    optimizationLevel: 3
                                }
                            ],
                            [
                                "mozjpeg",
                                {
                                    progressive: true
                                }
                            ],
                            [
                                "optipng",
                                {
                                    optimizationLevel: 7
                                }
                            ],
                            [
                                "svgo",
                                {
                                    plugins: [
                                        {
                                            name: "preset-default",
                                            params: {
                                                overrides: {
                                                    removeViewBox: false
                                                }
                                            }
                                        }
                                    ]
                                }
                            ]
                        ]
                    }
                }
            })
        ]
    },
    watchOptions: {
        aggregateTimeout: 2000,
        ignored: ["**/node_modules"]
    },
    stats: {
        assets: false,
        chunks: true
    }
};

module.exports = (env, argv) => {
    config.mode = argv.mode === "production" ? "production" : "development";

    if (config.mode === "production") {
        config.devtool = "source-map";
    } else {
        config.devtool = "eval";
    }

    if (config.mode === "development") {
        config.cache = {
            type: "filesystem",
            cacheDirectory: path.resolve(__dirname, "cache"),
            buildDependencies: {
                config: [__filename]
            }
        };
    }

    if (config.mode === "production") {
        config.optimization.minimizer = [
            new TerserPlugin({
                parallel: true
            }),
            new CssMinimizerPlugin({})
        ];
    }

    return config;
};
