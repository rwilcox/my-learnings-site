import React from 'react'
import Link from 'gatsby-link'

const LearningLink = ( { post } ) => (
    <div>
        <Link to={post.frontmatter.path}>
            {post.frontmatter.title}
        </Link>
    </div>
);

export default LearningLink;
