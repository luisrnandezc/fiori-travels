namespace my.travels;

using { cuid } from '@sap/cds/common';

entity Customers {
  key CustomerNumber : String;
  Form               : String;
  CustomerName       : String;
  Street             : String;
  PostCode           : String;
  City               : String;
  Country            : String;
  Email              : String;
  Telephone          : String;
  Discount           : String;
  Bookings           : Composition of many Bookings on Bookings.customer = $self;
}

entity Bookings : cuid {
  AirlineID               : String;
  ConnectionNumber        : String;
  FlightDate              : Date;
  BookingNumber           : String;
  BookingDate             : Date;
  Class                   : String;
  ForeignCurrencyPayment  : Decimal(15, 2);
  ForeignCurrency         : String;
  AgencyNumber            : String;
  IsCancelled             : String;
  customer                : Association to Customers;
}