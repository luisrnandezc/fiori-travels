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
        const sQuery = (oEvent.getSource() as sap.m.SearchField).getValue();
        const oTable = this.byId('customersTable') as sap.m.Table;
        const oBinding = oTable.getBinding(
          'items',
        ) as sap.ui.model.odata.v4.ODataListBinding;

        if (!oBinding) {
          return;
        }

        if (sQuery && sQuery.length > 0) {
          // Case-insensitive search using tolower()
          const oFilter = new sap.ui.model.Filter({
            path: 'CustomerName',
            operator: sap.ui.model.FilterOperator.Contains,
            value1: sQuery,
            caseSensitive: false,
          });
          oBinding.filter(oFilter);
        } else {
          oBinding.filter();
        }
      },
    });
  },
);
