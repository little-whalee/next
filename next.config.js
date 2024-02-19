// next.config.js

module.exports = {
  // 自定义webpack配置
  webpack: (config, { isServer }) => {
    // 修改webpack配置...
    return config;
  },
  // 自定义路由配置
  async redirects() {
    return [
      {
        source: '/old-path',
        destination: '/new-path',
        permanent: true,
      },
    ];
  },
  // 自定义编译配置
  async rewrites() {
    return [
      {
        source: '/old-path',
        destination: '/new-path',
      },
    ];
  },
};
