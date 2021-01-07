module.exports = {
    images: {
      imageSizes: [18, 36, 54, 24, 48, 72, 96, 144],
      domains: [
        'dl.airtable.com',
        'emoji.slack-edge.com',
        'cloud-lp0r5yk68.vercel.app'
      ]
    },
    async rewrites() {
      return [
        {
          source: '/',
          destination: `https://scrapbook.hackclub.com/${process.env.username}/`,
        }
      ]
    },
    async redirects() {
        return [
            { "source": "/attachments/:id/:id2", "destination": "https://scrapbook.hackclub.com/attachments/:id/:id2", permanent: true},
            { "source": "/:id/", "destination": "https://scrapbook.hackclub.com/:id", permanent: true},
            { "source": "/:id", "destination": "https://scrapbook.hackclub.com/:id", permanent: true},
            { "source": "/api/vercel-finished", "destination": "/api/vercel-finished", permanent: true},
            { "source": "/:id/:id2/", "destination": "https://scrapbook.hackclub.com/:id/:id2", permanent: true},
            { "source": "/:id/:id2", "destination": "https://scrapbook.hackclub.com/:id/:id2", permanent: true},
            { "source": "/:id/:id2/:id3/", "destination": "https://scrapbook.hackclub.com/:id/:id2/:id3", permanent: true},
            { "source": "/:id/:id2/:id3", "destination": "https://scrapbook.hackclub.com/:id/:id2/:id3", permanent: true},
            { "source": "/:id/:id2/:id3/:id4/", "destination": "https://scrapbook.hackclub.com/:id/:id2/:id3/:id4", permanent: true},
            { "source": "/:id/:id2/:id3/:id4", "destination": "https://scrapbook.hackclub.com/:id/:id2/:id3/:id4", permanent: true},
            { "source": "/_next/static/:id/:id2.css", "destination": "https://scrapbook.hackclub.com/_next/static/:id/:id2.css", permanent: true},
            { "source": "/_next/static/:id/:id2.js", "destination": "https://scrapbook.hackclub.com/_next/static/:id/:id2.js", permanent: true},
            { "source": "/_next/static/chunks/pages/:id2.js", "destination": "https://scrapbook.hackclub.com/_next/static/chunks/pages/:id2.js", permanent: true }
        ]
      },
  }
