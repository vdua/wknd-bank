/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}


exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type FormJSON implements Node @dotInfer {
      definition: JSON
    }
  `
  createTypes(typeDefs)
}

const url = "http://localhost:4502/adobe/forms/af/L2NvbnRlbnQvZm9ybXMvYWYvd2tuZC9sb2FuLWNhbGN1bGF0b3ItMQ=="


const fetch = (...args) =>
  import(`node-fetch`).then(({ default: fetch }) => fetch(...args))

exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
}) => {
  // get data from GitHub API at build time
  const result = await fetch(url, {
    headers: {
      Authorization: 'Basic YWRtaW46YWRtaW4='
    }
  })
  const resultData = await result.json()
  console.log(resultData)
  // create node for build time data example in the docs
  createNode({
    // nameWithOwner and url are arbitrary fields from the data
    definition: resultData.afModelDefinition,
    // required fields
    id: `loan-application-calculator`,
    parent: null,
    children: [],
    internal: {
      type: `FormJSON`,
      contentDigest: createContentDigest(resultData),
    },
  })
}
