module.exports = {
    async rewrites() {
      return [
        {
          source: '/',
          destination: 'https://scrapbook.hackclub.com/sampoder/',
        },
        {
            source: '/index',
            destination: 'https://scrapbook.hackclub.com/sampoder/',
        }
      ]
    },
  }