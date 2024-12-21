import '../../../dist/shoelace.js';
import { expect, fixture, html } from '@open-wc/testing';
import SlFile from './file.component.js';

describe('<sl-file>', () => {
  it('should render a component', async () => {
    const el = await fixture<SlFile>(html` <sl-file></sl-file> `);

    expect(el).to.exist;
    expect(el.helpText).to.equal('');
    expect(el.label).to.equal('');
    expect(el.file).to.equal(undefined);
  });
});
