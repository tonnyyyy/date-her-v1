import styled from 'styled-components';

export const ButtonStyle = styled('button')`
  font-family: roboto, sans-serif;
  font-size: 1.25rem;

  padding: .5rem 1rem .5rem 1rem;
  border-radius: 20px;
  border: none;
  background: var(--red-main);
  color: whitesmoke;

  transition: filter .2s;
  transition: opacity .5s;

  &:hover {
    cursor: pointer;
    filter: brightness(0.95);
  }

  &:focus {
    filter: brightness(0.8);
  }
`;