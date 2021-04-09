const {
    override,
    fixBabelImports,
    addLessLoader,
    addWebpackAlias,
    overrideDevServer,
    addDecoratorsLegacy,
    disableEsLint,
    addBundleVisualizer,
    adjustWorkbox
} = require("customize-cra");
const path = require("path");

function resolve(dir) {
    return path.join(__dirname, dir);
}

process.env.CI = "false";

const addCustomize = () => (config) => {
    if (config.output.publicPath) {
        config.output.publicPath =
            process.env.NODE_ENV === "production" ?
            "/react-appmanage-admin/" :
            "/";
    }
    if (config.resolve) {
        config.resolve.extensions.push(".jsx");
    }
    return config;
};

/**
 * 代理配置
 * @returns {config}
 */
const devServerConfig = () => config => {
    return {
        ...config,
        proxy: {
            '/api': {
                target: process.env.API_URL,
                changeOrigin: true,
                secure: false
            },
            '/bpi': {
                target: process.env.BPI_URL,
                changeOrigin: true,
                secure: false
            }
        }
    };
};

module.exports = {
    webpack: override(
        addDecoratorsLegacy(),
        disableEsLint(),
        addBundleVisualizer({}, true),
        adjustWorkbox(wb =>
            Object.assign(wb, {
                skipWaiting: true,
                exclude: (wb.exclude || []).concat('index.html')
            })
        ),
        // 针对antd实现按需打包: 根据import来打包(使用babel-plugin-import)
        fixBabelImports("import", {
            libraryName: "antd",
            libraryDirectory: "es",
            style: true, // 自动打包相关的样式
        }),

        // 使用less-loader对源码中的less的变量进行重新指定
        addLessLoader({
            javascriptEnabled: true,
            modifyVars: { "@primary-color": "#1DA57A" },
            localIdentName: '[local]--[hash:base64:8]'
        }),

        // 配置路径别名
        addWebpackAlias({
            "@": resolve("src"),
            "assets": resolve('src/assets'),
            "components": resolve('src/components'),
            "config": resolve('src/config'),
            "lib": resolve('src/lib'),
            "mock": resolve('src/mock'),
            "services": resolve('src/services'),
            "store": resolve('src/store'),
            "styles": resolve('src/styles'),
            "utils": resolve('src/utils'),
            "views": resolve('src/views')
        }),
        addCustomize()
    ),
    devServer: overrideDevServer(
        devServerConfig()
    )
};