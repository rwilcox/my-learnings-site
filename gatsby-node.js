/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")
exports.createPages = ( { boundActionCreators, graphql } ) => {
    const { createPage } = boundActionCreators

        const learningPageTemplate = path.resolve( 'src/templates/learningTemplate.js' )

        return graphql( `
            {
                allMarkdownRemark(
                    limit: 1000,
                ) {
                    edges {
                        node {
                            frontmatter {
                                path
                            }
                        }
                    }
                }
            }` ).then( result => {
                    if ( result.errors ) return Promise.reject(result.errors)

                    result.data.allMarkdownRemark.edges.forEach( ({ node } ) => {
                        console.log(node)

                        if ( node.frontmatter.path ) {
                            createPage( {
                                path: node.frontmatter.path,
                                component: learningPageTemplate,
                                content: {}
                            })
                        } else {
                            console.log("skipping file without a path frontmatter element (good luck!)")
                        }
                    })
                })
}
