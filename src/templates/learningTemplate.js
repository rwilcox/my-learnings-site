import React from "react";

export default function LearningTemplate({ data })
{

    const { markdownRemark } = data
    const { frontmatter, html } = markdownRemark
    
    return(
        <div className="learning-container">
            <div className="learning-post">
                <h1>Learning: { frontmatter.title }</h1>
                <div className="learning-post-content" dangerouslySetInnerHTML={{ __html: html }} />
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
        }
    }
`;
