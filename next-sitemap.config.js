/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://zfly-drone.com',
  generateRobotsTxt: true,
};
