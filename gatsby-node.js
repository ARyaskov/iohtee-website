/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const HEADER_ONLY = [];

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;

  let headerOnly = HEADER_ONLY.some(r => page.path.match(r));
  if (headerOnly) {
    page.layout = 'heading';
    createPage(page);
  }
};
