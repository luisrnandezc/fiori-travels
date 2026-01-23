/// <reference types="@openui5/ts-types" />

sap.ui.define(
  [
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/Filter',
    'sap/ui/model/FilterOperator',
  ],

  function (Controller: typeof sap.ui.core.mvc.Controller) {
    'use strict';

    return Controller.extend('mock.travels.controller.Dashboard', {
      onInit() {
        console.log('Dashboard initiated');
      },

      onSearch(oEvent: sap.ui.base.Event): void {
        console.log('onSearch fired');
        const sQuery = (oEvent.getSource() as sap.m.SearchField).getValue();
        const oTable = this.byId('customersTable') as sap.m.Table;
        console.log('Table:', oTable);
        const oBinding = oTable.getBinding('items') as sap.ui.model.ListBinding;
        console.log('oBinding:', oBinding);
        console.log('Binding path:', oBinding.getPath());

        if (!oBinding) {
          return;
        }

        if (sQuery && sQuery.length > 0) {
          const oFilter = new sap.ui.model.Filter(
            'CustomerName',
            sap.ui.model.FilterOperator.Contains,
            sQuery,
          );
          oBinding.filter([oFilter]);
        } else {
          oBinding.filter([]);
        }
      },
    });
  },
);
