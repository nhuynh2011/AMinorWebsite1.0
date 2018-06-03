module.exports = {
  webpack: (config) => {
    config.node = {
      fs: 'empty'
    }
    return config
  },
  exportPathMap: ()  => {
    return {
      '/': { page: '/' },
      '/history': { page: '/history' },
      '/members': { page: '/members' },
      '/news': { page: '/news' },
      '/repertoire': { page: '/repertoire' },
      '/services': { page: '/services' },
      '/services/gigs': { page: '/services/gigs' },
      '/services/master_classes': { page: '/services/master_classes' }
    }
  }
}
