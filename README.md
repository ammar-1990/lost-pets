# lost-pets is a project throw wich we can register and share lost pets in order to find them or their owners

this project was designed with HTML,CSS,and vanilla JavaScript with no server side techs.


Project description:
we have the ability to sign up and make new accounts ,then logging in .
having a lost pet or a pet to find his owners you can register that pet by writing his type color and other information .


IMPORTANT NOTE : I,ve attached 4 images here (cat1 , cat2 , dog1 ,dog2 ) to be used in the pet,s image input ,please use them only in order to creat valid beautiful cards.


I,ve used  CSS properly  to give the impression of transforming from one page to the other ,I,ve also used local storage in order to save the information of (users , animals , messages ) without depending on a server side techs.

Table of contents :
-after logging in you will see three icons on the top right of the screen (exit , search , and settings )
-opening the settings menu shows a side bar wich contains (success stories , register an animal , my messages )
      -success stories shows the animals that was deliverd to their owners using this site 
      -register an animal opens a form of animal,s various information ,at the image input be sure to write one of these(cat1 , cat2 , dog1 ,dog2 ),when you end the form         ,the animal would be registerd and shown in the main page .
      -my messages shows different requests form other accounts who want to get in touch with you , because the are either suspecting that your registerd animal is their          or because they might have information about the animal in case you registerd it as a lost one.
-search icon opens a mini side bar on the left throw wich you can filter the shown results 
-exit icons takes you to the log in page
 
----------------------------------------------

Using the project properly to see the whole functionality :

1- make at least 3 accounts (user1 ,user2 ,user3 )

2-register a found animal by user1 for example.

3-tracking the animal by user2 and user3 will send 2 request messages to user1 to be approved (the request message is request to meet and check the animal)

4-approving the messages by user1 will send also 2 approved messages one for each of user2 and user3 (  the approved message is an acceptance to meeting ) 

5-after checking the animal in real life you can react to the approvment message with either (it was the animal , or was not the animal )

6-saying that user2 had a meeting with user1  and found his animal ,he should click on "was the animal botton" wich will automatically send a message to user3 and every other accounts who were interrested to check the animal ,sayng that an animal in which you are interrested to check was found , and this will cancel the message from user 1 to user 3 and  to other accounts who have recieved an approvement message from user1 since the animal is found .

7- this new message comes with an optional botton to take the user to the success stories in order to see the animal , with an auto scroll ability which brings the appropriate animal to the screen in case of the  existing  of many other found animals .
     
