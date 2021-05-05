module.exports = {
  images: {
    domains: ['i.imgur.com', 'imgur.com']
  },
  webpack: (config) => {
    config.node = {
      fs: 'empty'
    }
    return config
  }
};
