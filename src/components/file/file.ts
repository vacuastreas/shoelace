import SlFile from './file.component.js';

export * from './file.component.js';
export default SlFile;

SlFile.define('sl-file');

declare global {
  interface HTMLElementTagNameMap {
    'sl-file': SlFile;
  }
}
