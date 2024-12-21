import { css } from 'lit';

export default css`
  :host {
    display: block;
  }

  sl-button::part(base) {
    border-right: 0;
  }

  sl-button {
    margin-inline-end: 0;
  }
`;
