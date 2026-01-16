/// <reference types="@openui5/ts-types" />

sap.ui.define(
  ['sap/ui/core/UIComponent'],
  function (UIComponent: typeof sap.ui.core.UIComponent) {
    'use strict';

    return UIComponent.extend('mock.travels.Component', {
      // match the name in index.js
      metadata: {
        manifest: 'json',
      },
    });
  }
);
