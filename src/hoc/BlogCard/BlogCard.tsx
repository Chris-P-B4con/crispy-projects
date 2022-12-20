import { CardActionArea } from '@mui/material';
import React from 'react';

import { CardContent, Typography, Wrapper } from './BlogCard.style';
import BlogCardHeader from 'components/BlogCardHeader';
import BlogCardMedia from 'components/BlogCardMedia';
import { useBlogCard } from './BlogCard.logic';

const BlogCard = (props: BlogCardProps) => {
  const { avatar, image, onClickHandler, title, subTitle } = props;
  return (
    <Wrapper data-testid='BlogCard'>
      <CardActionArea sx={{ borderRadius: 'var(--border-radius)' }} onClick={onClickHandler}>
        <BlogCardHeader avatar={avatar} title={title} subTitle={subTitle} />
        <BlogCardMedia url={image.url} alt={image.alt} />
        <CardContent>
          <Typography variant='body2' color='text.secondary'>
            {image.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Wrapper>
  );
};

export default BlogCard;

export interface BlogCardProps {
  avatar?: { alt: string; src: string };
  image: { alt: string; description: string; title: string; url: string };
  onClickHandler?: () => void;
  subTitle?: string;
  title?: string;
}
