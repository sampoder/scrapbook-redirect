module.exports = {
    trailingSlash: true,
    async rewrites() {
      return [
        {
          source: '/',
          destination: 'https://scrapbook.hackclub.com/sampoder/',
        },
      ]
    },
  }