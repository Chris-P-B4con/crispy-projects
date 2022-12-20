import React from 'react';

import {Wrapper} from './BlogCardMedia.style';
import { useBlogCardMedia } from './BlogCardMedia.logic';

const BlogCardMedia = (props: BlogCardMediaProps) => {
  const { url, alt } = useBlogCardMedia(props);

  return <Wrapper data-testid='BlogCardBlogCardMedia' src={url} alt={alt} />;
};
export default BlogCardMedia;

export interface BlogCardMediaProps {
  url: string;
  alt: string;
}
