import { property, query } from 'lit/decorators.js';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import componentStyles from '../../styles/component.styles.js';
import ShoelaceElement from '../../internal/shoelace-element.js';
import SlButtonGroup from '../button-group/button-group.component.js';
import SlButton from '../button/button.component.js';
import SlInput from '../input/input.component.js';
import SlIcon from '../icon/icon.js';
import styles from './file.styles.js';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Short summary of the component's intended use.
 * @documentation https://shoelace.style/components/file
 * @status experimental
 * @since 2.0
 *
 * @dependency sl-button
 * @dependency sl-input
 * @dependency sl-icon
 * @dependency sl-button-group
 *
 * @event sl-change - Emitted when a file has been selected.
 *
 * @csspart base - The component's base wrapper.
 * @csspart input - The input's wrapper.
 * @csspart button - The button's wrapper.
 * 
 */
export default class SlFile extends ShoelaceElement {
    static styles: CSSResultGroup = [componentStyles, styles];
    static dependencies = {
      'sl-button-group' : SlButtonGroup,
      'sl-input' : SlInput,
      'sl-button' : SlButton,
      'sl-icon' : SlIcon
    };

  @query('sl-input') inputField : SlInput;

  /** File object of the selected file. */
  @property({type : File}) file: File | undefined = undefined;

  /** The input's label. If you need to display HTML, use the `label` slot instead. */
  @property() label = '';

  /** The input's help text. If you need to display HTML, use the `help-text` slot instead. */
  @property({ attribute : 'help-text' }) helpText = '';

  private async handleClick(){
    const tmpInput = document.createElement('input');
    tmpInput.type = 'file';
    tmpInput.click();

    tmpInput.addEventListener('change', async () => {
      if(tmpInput.files){
        if(tmpInput.files.length > 0){
          this.file = tmpInput.files[0];
          this.inputField.setRangeText(this.file.name);
          this.emit('sl-change');
        }
      }
    });

    tmpInput.click();
  }

  render() {
    return html`
        <sl-input
          part="input"
          label=${ifDefined(this.label ? this.label : undefined)}
          help-text=${ifDefined(this.helpText ? this.helpText : undefined)}
          readonly
        >
          <sl-button
            part="button"
            slot="suffix"
            @click=${this.handleClick}
          >
            <sl-icon name="folder2"></sl-icon>
          </sl-button>
        </sl-input>
    `;
  }
}
