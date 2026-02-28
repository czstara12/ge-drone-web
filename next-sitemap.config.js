/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://gd-drone.com',
  generateRobotsTxt: true,
};
