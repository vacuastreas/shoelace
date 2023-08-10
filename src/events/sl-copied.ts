type SlCopiedEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'sl-copied': SlCopiedEvent;
  }
}

export default SlCopiedEvent;