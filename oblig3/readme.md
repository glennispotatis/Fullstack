### IDG2100 - Full-stack web development - Assignment 3 ###
- 'node index' to run the application -

Most of the code in this submission has been taken from the second to last back-end lecture(17-mar-21).
However, I have been working with another student in the class, but because of the anonymous grading,
I can't who it is. The reason we worked together is that once we got stuck on something,
both the other student and I could help eachother, but we have written our own code and tried not to
copy eachother. So you might find some similarities between our code.

I decided to use a .env file to keep the secret token more secure.

## Role authentication
https://stackoverflow.com/questions/53364187/how-to-implement-role-based-authorization-in-node-js-using-token-based-authentic
The code for filtering the students from teachers were taken from the link above.

## Update userfields in DB
https://dev.to/rubiin/mongoose-dynamic-update-hack-21ad
I tried using the code from the link above, instead of writing if sentences for each input field.
Unfortunately, using the code from the link above did not work. That's why I wrote if sentences 
for each input field. It is layed up so that it is validating the fields first before it 
starts updating the DB.
When doing the /teacher/update service, it is important to have the "newEmail" last in the query, 
otherwise the fields beneath will not be updated!

Apparently doing !== for role, place and status does not work.
That's why the if sentences have empty bodies, but it works sooo... ;)

## TESTING
Different users { TESTING PURPOSES ONLY } can be found in './users.json'.
Teacher: email = teacher@gmail.com, password: teacher
Student: email = student@gmail.com, password: student

The 'users.json' file was exported directly from Compass and could therefore be directly imported to
compass for testing.

The 'postman_collection.json' file was exported directly from Postman and therefore you should be 
able to import it to your Postman directly.

The postman collection has a teachers token already in the header, if you want to test the student,
you would have to log in as the student, copy the token that is given in the response, and then change
the token in the header.

I decided to use 'fromAuthHeaderAsBearerToken()' instead of the 'fromUrlQueryParameter()' because
I didn't want to have the token visible in the URL.