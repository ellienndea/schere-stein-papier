# Schere-Stein-Papier
Rock-Paper-Scissors in german. Code (mostly) and comments in english. About 9 months ago I coded along a tutorial on the freeCodeCamp youTube channel by whatsdev (Link:https://youtu.be/jaVNP3nIAv0). When I recently looked at it, I realized that it is not usable with neither keyboard nor screenreader. Now I changed that, because I wanted to learn and train how to make all my work accessible for everybody. I am not very experienced yet with accessibility concerns but I care and I want to learn. So if you have recommendations/ advice how I can improve my code, please don't hesitate to let me know. Twitter: @ellienndea ; Email: ellienndea@hallo.ms 
## Process
I took the code from coding along the video tutorial and changed the divs with the graphics to choose into buttons and added labels.
The score board and the action message are now aria-live regions and changes there get announced by the screen reader.
I added a "how to play" (Spielanleitung) which shows and hides with a button. The aria-pressed part comes from the Mozilla Developer Network web docs page. (Link: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role#toggle_button_example). So great! 
Also I added a function to highlight the choice the computer made, before only the user choice has been highlighted.
With flexbox and a media query I made it responsive for different screen sizes.
The graphics are drawn freeestyle in inkscape. My daughter gave me the great idea to draw a paper plane to illustrate paper.
## Questions
1.) Do you think the "how to play" is meaningful enough? "besiegt" means "beats".
2.) In the css I gave :root a font-size of 62.5%, so 1rem would equal 10px. This whole thing is styled desktop-first, so I added a media query for the mobile version. The simplicity of the page/content gave me the idea to simply change the percantage of the font-size in :root. Can I do that? Is there anything advising against it?
3.) If you are a screen reader user or knoweledgeable about needs and preferrances of 
screen reader users somehow: The scoreboard is an aria-live region and announces, when the score changes, but only the one that changes not the other. Is that alright? Or would it be better, if it always would announce the score of both players instead of just of the one that changed?
4.) The choices of the user and the computer get highlighted, when user and computer choose the same, only the highlight color for the user is shown. Is that alright? Or ist it irritating?

Thank you for reading and for looking up the code! 