# Database-Permissions
Import database to website and permissions by employee
**/
userName: chezkiBerg,
PIN: 1234
**/

JavaScript Advanced, Rest AJAX, jQuery, MVC, HTML5

When opening the web page, the screen displays an input and a button. After entering the
username, pressing the button will display a keypad containing numbers from 0-9
The display is made using a jQuery animation of your choice.
The username/code-matching verification is called once four numbers have been clicked. These
numbers can also be pressed with the physical keyboard buttons.
The verification calls an AJAX API to see if the username matches the PIN entered. If it does,
return his first name and role to see which permissions to display in the dashboard. Upon
displaying the dashboard (jQuery animation), a success sound is heard.
 If the Admin logged in, he can add, edit, or delete a manager or salesman, and of course, modify
his own info. Only one Admin allowed in the system.
If a Manager logged in, he can add or delete a salesman, and can only edit his own info.
A salesman can only modify his own info.
 You have three tries to enter the correct code. If entered incorrectly, an error message is alerted,
and an error sound is heard. After the three tries, alert "The police is coming!" and a siren is
heard.
 Whenever the number keys are pressed, they change colors and a beep sound is heard. ALL four
numbers must be colored BEFORE the alert is displayed.
 Once the alert dialog box is closed, the colors go back to the original state.
 If there is a three-second delay between keys pressed, the keys go back to original color, a buzz is
heard and the sequence is canceled. But, this sequence is not counted as one of the 3 tries. 
