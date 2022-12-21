import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: row;
`;

export const Actions = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const Tags = styled.div`
  flex: 2;
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
`;

export const Tag = styled.span<TagStyleProps>`
  border-radius: 25px;
  height: fit-content;
  width: fit-content;
  padding: 5px 10px;
  background-color: ${(props) => props.color || props.theme.palette.primary.main};
`;

interface TagStyleProps {
  color?: string;
}
