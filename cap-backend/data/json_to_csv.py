import json
import csv
import uuid

# Load the JSON data
with open('travels.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

customers = data.get("Customers", [])

# 1. Prepare Customers CSV
customer_fields = [
    "CustomerNumber", "Form", "CustomerName", "Street", 
    "PostCode", "City", "Country", "Email", "Telephone", "Discount"
]

# 2. Prepare Bookings CSV (including the foreign key and a new ID)
booking_fields = [
    "ID", "AirlineID", "ConnectionNumber", "FlightDate", 
    "BookingNumber", "BookingDate", "Class", "ForeignCurrencyPayment", 
    "ForeignCurrency", "AgencyNumber", "IsCancelled", "customer_CustomerNumber"
]

with open('my.travels-Customers.csv', 'w', newline='', encoding='utf-8') as f_cust, \
     open('my.travels-Bookings.csv', 'w', newline='', encoding='utf-8') as f_book:
    
    cust_writer = csv.DictWriter(f_cust, fieldnames=customer_fields, delimiter=';')
    book_writer = csv.DictWriter(f_book, fieldnames=booking_fields, delimiter=';')
    
    cust_writer.writeheader()
    book_writer.writeheader()
    
    for cust in customers:
        # Extract customer data (excluding the nested _Bookings)
        cust_row = {field: cust.get(field, "") for field in customer_fields}
        cust_writer.writerow(cust_row)
        
        # Extract and flatten bookings
        for booking in cust.get("_Bookings", []):
            book_row = {field: booking.get(field, "") for field in booking_fields if field in booking}
            
            # Add the technical ID (UUID) and the Foreign Key
            book_row["ID"] = str(uuid.uuid4())
            book_row["customer_CustomerNumber"] = cust.get("CustomerNumber")
            
            book_writer.writerow(book_row)

print("Conversion complete! Files 'my.travels-Customers.csv' and 'my.travels-Bookings.csv' created.")