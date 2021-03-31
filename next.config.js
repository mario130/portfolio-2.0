module.exports = {
  images: {
    domains: ['i.imgur.com']
  },
  webpack: (config) => {
    config.node = {
      fs: 'empty'
    }
    return config
  }
};
