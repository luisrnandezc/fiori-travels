using { my.travels as my } from '../db/schema';

service TravelService {
    entity Customers as projection on my.Customers;
    entity Bookings as projection on my.Bookings;
}