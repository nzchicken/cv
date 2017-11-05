import React from 'react'
import Link from 'gatsby-link'

import Section from '../components/section'
import ExperienceList from '../components/experience-list'
import ExperienceItem from '../components/experience-item'

const IndexPage = ({ data }) => {
    const posts = data.posts.edges;
    const experiences = data.experience.edges;

    const experienceList = (
        <ExperienceList>
        {experiences.map(({ node }) => (
            <ExperienceItem 
                title={node.frontmatter.title}
                company={node.frontmatter.company}
                from={node.frontmatter.timeFrom}
                to={node.frontmatter.timeTo}
                html={node.html}
                key={node.frontmatter.company}
            />
        ))}
        </ExperienceList>
    )

    return (
        <div>
            {posts.map(({ node }) => (
                <Section title={node.frontmatter.title} key={node.frontmatter.title}>
                    <div dangerouslySetInnerHTML={{ __html: node.html }} />
                    {node.frontmatter.content === 'experience' && experienceList}
                </Section>
            ))}
        </div>
    )
}


export const query = graphql`
 query IndexPage {
	posts: allMarkdownRemark(filter: { frontmatter: {type: { eq: "post" } } }, sort: { fields: [frontmatter___order], order: ASC}) {
	  edges {
	    node {
          frontmatter {
            title
			type
            content
          }
          html
	    }
	  }
	}
    experience: allMarkdownRemark(filter: { frontmatter: {type: { eq: "experience" } } }, sort: { fields: [frontmatter___timeFrom], order: DESC}) {
	  edges {
	    node {
          frontmatter {
            title
            company
            timeFrom
            timeTo
          }
          html
	    }
	  }
	}
  }
`


export default IndexPage

