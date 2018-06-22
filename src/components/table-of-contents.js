import React from 'react'
import _ from 'lodash'

function flatToNested(heading, data) {
    let currentLevelNum = 1
    let difference = ( heading.depth - currentLevelNum)

    switch (difference +1) { // 1 based to make it easier to read: heading level 1, etc etc
        case 1: {
            data.push( {title: heading.value, level: heading.level, children: []} )

            break;
        }
        case 2: {
            _.last(data).children.push( {title: heading.value, level: heading.level, children: []} )
            break;
        }

        case 3: {
            let currentChildren = _.last(data).children
            let lastChild = _.last(currentChildren)

            lastChild.children.push( {title: heading.value, level: heading.level, children: []} )

            break;
        }
    }

    return data
}


function linkify(title) {
    return _.toLower(title).replace(/[:\-,\/]/g, "").replace(/ /g, "-")
}


function renderChildren(children, currentLevelIdx) {
    let lists = children.map( (c, idx) => {
       return <li key={`child-${currentLevelIdx}-${idx}`}>
           <p><a href={`#${linkify(c.title)}`}a>{c.title}</a></p>
           { c.children.length > 0 ? renderChildren( c.children, `${currentLevelIdx}-${idx}`) : <span/>}
        </li> 
    })

    return <ul>{lists}</ul>
}


const TableOfContents = function({headings}) {
    let data = []

    headings.forEach( (item) => {
        flatToNested(item, data)
    } )

    return renderChildren( data, 1 )
}

export default TableOfContents;
