import React from 'react'
import LearningLink from '../components/learning-link.js'

const IndexPage = ( { data: { allMarkdownRemark: { edges }} } )  => {
  const Learnings = edges
      .map( edge => <LearningLink key={edge.node.id} post={edge.node} />)

  return <div id="learning_site_index_content">
  <h1>About this site</h1>
  <p>In the last 4-5 years or so, everytime I read a book or research a topic I write notes about it in a markdown file.</p>

  <p>I used to keep these notes in a Wiki, but found Markdown files easier to manage (plus futureproof).</p>

  <p>These are my notes, published on the web.</p>

  <p>Because they're my notes it means they are incomplete, non-comprehensive, probably have typos, may not make sense, and in some cases probably assume you're me. Which you may not be.</p>

  <p>They also include my own WikiWord style references and declarations. Someday I may write a parser for those...</p>

  <p>Even with all that, maybe these notes are valuable to you somehow.</p>

  <p>They are availiable in text form at: <a href="https://github.com/rwilcox/my-learnings-docs">their home on Github</a>.</p>

  <p>_Ryan Wilcox</p>

  <h1>My Learning Notes (Index)</h1>
  {Learnings}
  
  </div>
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
