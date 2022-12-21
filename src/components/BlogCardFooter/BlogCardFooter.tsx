import { TAGS } from 'lib/globalVariables';
import React from 'react';
import { Actions, Tag, Tags, Wrapper } from './BlogCardFooter.style';

const BlogCardFooter = (props: BlogCardFooterProps) => {
  const { tags } = props;
  return (
    <Wrapper data-testid='BlogCardFooter'>
      <Actions>Read More</Actions>

      <Tags>
        {tags?.map((tag) => (
          <Tag color={TAGS['coffee']}>{tag}</Tag>
        ))}
      </Tags>
    </Wrapper>
  );
};

export default BlogCardFooter;

export interface BlogCardFooterProps {
  tags?: string[];
}
