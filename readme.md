Task

1. Role CRUD
   a. Take a role name and a description about it.
   b. Two type of role should be there. (Admin, Customer)
2. User CRUD
   a. Take all the basic user info required for login with name and assign a role to it.
   b. Admin Role User can only be created from Admin login.
   c. Customer Role User can be create by Admin login and a public sign up form as well.
3. Service CRUD (Show to admin only)
   a. Admin can manage all service irrespective of who it is created by.
   b. Take a name and description with an optional pdf attachment.
   c. Note: when any new service is created by default for Mon – Sat, 1 Hour difference timing slot should be created starting from 10:00 AM till 6:00 PM.
   d. Manage timing slots. Admin user can add/edit/delete any timing slots for any day.
4. Book Appointment (Show to Customer only)
   a. Customer can see all services available and book an appointment for any given date.
   b. For booking an appointment only list of available slots should be shown.
   i. Consider a scenario where, If Customer 1 has booked appointment for Service 1 on Friday, 06-04-2024 (12:00 PM – 01:00 PM).
   ii. And if Customer 2 tries to book appointment for Service 1 on 06-04-2024, then it should only list timing slots other than (12:00 PM – 01:00 PM) as it is already booked by Customer 1.
   iii. If Customer 2 tries to book appointment for Service 1 on 07-04-2024, then it should show all, as no booking is done for that date.
   iv. If Customer 1 has booked appointment for Service 2 on Friday, 06-04-2024 (12:00 PM – 01:00 PM). It shouldn’t allow as the timing clashes with previously booked appointment of Service 1.
   c. Note: You need to find timing slots for any service by comparing Day of any date.
   i. Ex, 06-04-2024 is Friday then show all available slots for Friday only.
   d. Sending mail when appointment is booked would be considered as an additional advantage. (Optional)
5. Dashboard
   a. For Admin
   i. Show how many total admin user are available in system excluding self.
   ii. Show how many total customer user are available in system.
   iii. Show total booking, service wise. Give option/filter to show data between any given dates. Show in line chart or pie chart.
   iv. Top 3 services booked by customer.
   v. Total Revenue received.
   vi. Total Revenue Pending.
   b. For Customer
   i. Show all booked appointment for any service.

Instructions

1. Using TS in backend would be an additional advantage.
2. For backend, use Postgres, sequelize and express
3. Share project files in zip file using WeTransfer on hr@feeltechsolutions.com
   a. Make sure all necessary environment files are added as well.
