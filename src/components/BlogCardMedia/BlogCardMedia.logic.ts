import { BlogCardMediaProps } from './BlogCardMedia';

export const useBlogCardMedia = (props: BlogCardMediaProps) => {
  const { url, alt } = props;

  return { url, alt };
};
