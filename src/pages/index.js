import React from 'react'
import LearningLink from '../components/learning-link.js'

const IndexPage = ( { data: { allMarkdownRemark: { edges }} } )  => {
  const Learnings = edges
      .map( edge => <LearningLink key={edge.node.id} post={edge.node} />)

  return <div>{Learnings}</div>
}

export default IndexPage;

export const pageQuery = graphql`
    query IndexQuery {
        allMarkdownRemark {
            edges {
                node {
                    id
                    frontmatter {
                        path
                        title
                    }
                }
            }
        }
    }

`;
