/// <reference types="@openui5/ts-types" />

sap.ui.define(
  ['sap/ui/core/ComponentContainer'],
  function (ComponentContainer: typeof sap.ui.core.ComponentContainer) {
    'use strict';

    new ComponentContainer({
      name: 'mock.travels',
      async: true,
      manifest: true,
    }).placeAt('content');
  }
);
