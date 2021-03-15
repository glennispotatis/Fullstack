#### OBLIG 2 - On Campus Tracker - 522954 ####

'npm start' to run the program.
This project is forked from carlosvicient/on-campus-tracker -b features/protectedroutesv1

All forms can simply be tested by typing in the inputs. 
They are all using HTML validation, and the sign up form 
is using a simple JS validation to check if the passwords are equal.

All of the forms except SignUp is stateless.
In Login, I lifted the state to App.js so I could control the authentication for a user, 
this also means that App.js is the single source of truth.
SignUp is stateful because I wanted to do real time validation, so I set the input fields to states in the application.
ForgotPass is stateless and will redirect to another page saying "Success".

I created a component from the navbar called Nav.jsx. 
This is a stateless component that uses props and conditional rendering to display certain nav elements 
based on if the user is logged in or not. If the user is NOT authenticated(logged in), the user will be 
redirected to /login if the user tries to hack into /user or /dashboard as these are private routes.