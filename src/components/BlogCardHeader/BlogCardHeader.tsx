import React from 'react';

import { Avatar, Typography } from '@mui/material';

import { CardHeaderAvatar, CardHeaderContent, Wrapper } from './BlogCardHeader.style';

const BlogCardHeader = (props: BlogCardHeaderProps) => {
  const { avatar } = props;

  let title;
  if (props.title != null) {
    title = (
      <Typography variant={avatar ? 'subtitle1' : 'h5'} component='span' display='block'>
        {props.title}
      </Typography>
    );
  }

  let subheader;
  if (props.subTitle != null) {
    subheader = (
      <Typography variant={avatar ? 'subtitle2' : 'body2'} color='text.secondary' component='span' display='block'>
        {props.subTitle}
      </Typography>
    );
  }

  return (
    <Wrapper data-testid='BlogCardHeader'>
      {avatar && (
        <CardHeaderAvatar>
          <Avatar {...avatar} sx={{ backgroundColor: (theme) => theme.palette.primary.main }} />
        </CardHeaderAvatar>
      )}
      <CardHeaderContent>
        {title}
        {subheader}
      </CardHeaderContent>
    </Wrapper>
  );
};

export default BlogCardHeader;

export interface BlogCardHeaderProps {
  avatar?: { alt: string | undefined; src: string | undefined };
  title?: string;
  subTitle?: string;
}
