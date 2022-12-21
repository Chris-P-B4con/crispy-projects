import React, { FC, useEffect } from 'react'

import BlogCard from 'hoc/BlogCard'

import { ProjectGrid, ProjectItem, Wrapper } from './Projects.style'
import { dummyProjectList } from './Projects.static'

const Projects: FC<ProjectsProps> = () => {
  const [projectList, setProjectList] = React.useState<ProjectInterface[]>([])
  useEffect(() => {
    try {
      setProjectList(dummyProjectList)
    } catch (err) {
      console.log(err)
    }
  }, [])

  return (
    <Wrapper>
      <ProjectGrid>
        {projectList?.map((project) => (
          <ProjectItem key={project.title}>
            <BlogCard {...project} />
          </ProjectItem>
        ))}
      </ProjectGrid>
    </Wrapper>
  )
}

export default Projects

interface ProjectsProps {}

export interface ProjectInterface {
  // Image which is displayed on preview
  image: {
    alt: string // Alt text of image
    url: string // Link to the image
  }
  title: string // Title displayed on top
  subTitle: string // Sub title (date of publish)

  // Author of article
  author: {
    alt: string // Name of the author
    src: string // Link to image of author
  }
  description: string // Short description of article
  tags: string[] // List of tags describing the article
}
