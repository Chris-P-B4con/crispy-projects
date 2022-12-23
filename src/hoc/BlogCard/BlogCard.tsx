import React from 'react'

import { CardContent, Typography, Wrapper } from './BlogCard.style'
import BlogCardHeader from 'components/BlogCardHeader'
import BlogCardMedia from 'components/BlogCardMedia'
import BlogCardFooter from 'components/BlogCardFooter/BlogCardFooter'

const BlogCard = (props: BlogCardProps) => {
  const { author, description, image, tags, title, subTitle } =
    props
  return (
    <Wrapper data-testid='BlogCard'>
      <BlogCardHeader avatar={author} title={title} subTitle={subTitle} />
      <BlogCardMedia url={image.url} alt={image.alt} />
      <CardContent>
        <Typography variant='body2' color='text.secondary'>
          {description}
        </Typography>
      </CardContent>
      <BlogCardFooter tags={tags} />
    </Wrapper>
  )
}

export default BlogCard

export interface BlogCardProps {
  author?: { alt: string; src: string }
  description: string
  image: { alt: string; url: string }
  onClickHandler?: () => void
  subTitle?: string
  tags?: string[]
  title?: string
}
