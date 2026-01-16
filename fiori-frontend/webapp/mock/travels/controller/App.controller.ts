/// <reference types="@openui5/ts-types" />

sap.ui.define(
  ['sap/ui/core/mvc/Controller'],
  function (Controller: typeof sap.ui.core.mvc.Controller) {
    'use strict';

    return Controller.extend('mocks.travel.controller.App', {
      onInit() {
        console.log('App controller initialized');
      },
    });
  }
);
