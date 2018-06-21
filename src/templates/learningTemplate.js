import React from "react";
import _ from "lodash"
import TableOfContents from "../components/table-of-contents"


export default function LearningTemplate({ data })
{
    const { markdownRemark } = data
    const { frontmatter, html, headings } = markdownRemark
    
    return(
        <div className="learning-container">
            <div className="learning-post">
                <h1>Learning: { frontmatter.title }</h1>
                <div className="learning-post-content" dangerouslySetInnerHTML={{ __html: html }} />
            </div>
            <div className="toc">
                <TableOfContents headings={headings} />
            </div>
        </div>
    )
}


export const pageQuery = graphql`
    query LearningByPath($path: String!) {
        markdownRemark( frontmatter: { path: { eq: $path }} ) {
            html
            frontmatter {
                path
                title
            }
            headings {
                depth
                value
            }
        }
    }
`;
