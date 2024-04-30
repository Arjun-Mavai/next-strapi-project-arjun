import type { Schema, Attribute } from '@strapi/strapi';

export interface EditorIde extends Schema.Component {
  collectionName: 'components_editor_ides';
  info: {
    displayName: 'IDE';
    icon: 'earth';
  };
  attributes: {
    name: Attribute.String;
    number: Attribute.Integer;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'editor.ide': EditorIde;
    }
  }
}
