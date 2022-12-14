import React from 'react';
import * as styles from './BlogCard.style';

const BlogCard = props => {
  const { image } = useBlogCard(props);
  return (
    <styles.Card data-testid='BlogCard'>
      <styles.CardMedia component='img' image={image.url} alt={image.alt} />
    </styles.Card>
  );
};

export default BlogCard;

export interface BlogCardProps {
  image: { url: string; alt: string };
}
