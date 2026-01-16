/// <reference types="@openui5/ts-types" />

sap.ui.define(
  ['sap/ui/core/mvc/Controller'],

  function (Controller: typeof sap.ui.core.mvc.Controller) {
    'use strict';

    return Controller.extend('mock.travels.controller.Dashboard', {
      onInit() {
        console.log('Dashboard initiated');
      },
    });
  }
);
