namespace my.travels;

entity Customers {
  key ID    : UUID;
  name      : String;
  email     : String;
  bookings  : Association to many Bookings on bookings.customer = $self;
}

entity Bookings {
  key ID    : UUID;
  flightNo  : String;
  date      : Date;
  customer  : Association to Customers;
}