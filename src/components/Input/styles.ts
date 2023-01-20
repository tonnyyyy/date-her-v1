import styled from 'styled-components';

export const Container = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const InputStyle = styled('input')`
  font-family: roboto, sans-serif;
  font-size: 1.25rem;

  padding: .5rem 1rem .5rem 1rem;
  border-radius: 20px;
  // border: none;

  transition: filter .2s;

  &:hover {
    cursor: text;
    filter: brightness(0.95);
  }

  &:focus {
    filter: brightness(0.8);
  }
`;

export const LabelStyle = styled('label')`
  font-size: 1.25rem
`;