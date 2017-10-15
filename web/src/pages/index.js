import React from 'react'
import Link from 'gatsby-link'

import Header from '../components/header'
import Section from '../components/section'
import ContactForm from '../components/contact-form'

const IndexPage = ({ data }) => (
    <div>
        <Header
            fullName="Ben Naylor"
            brief="Salesforce Dev, Consultant, Electronics enthusiast"
            heading="Curriculum Vitae / Portfolio"
        />
        {data.allMarkdownRemark.edges.map(({ node }) => {
            return <Section title={node.frontmatter.title} key={node.frontmatter.title}>
                <div dangerouslySetInnerHTML={{ __html: node.html }} />
                {node.frontmatter.type === 'contact-form' && (<ContactForm />)}
                {node.frontmatter.type === 'markdown-experience' && (
                    <div>Experience stuff goes here</div>
                )}
            </Section>
        })}
    </div>
)


export const query = graphql`
    query Posts {
        allMarkdownRemark(sort: { fields: [frontmatter___order], order: ASC}) {
            edges {
                node {
                    frontmatter {
                      title
                      type
                    }
                    html
                }
            }
        }
    }
`


export default IndexPage

