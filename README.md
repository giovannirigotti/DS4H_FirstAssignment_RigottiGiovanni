﻿# DS4H_FirstAssignment_RigottiGiovanni

To develop this project, I started by reviewing the lectures and seeing what recommendations were given for manipulating the DOM.

The project is based on 3 main files:
- index.html
- style.css
- script.js

In addition to these 3 files, since I developed 3 different questionnaires (3 pools of questions of different difficulty), in the folder "assets/imgs/" I created 3 subfolders. One for each question pool. These folders contain the 10 images for the 10 questions in each pool.
To use them, I then dynamically created the path to each image based on the question ID and intelligent naming of the images.

For displaying additional messages to the normal operation of the quiz (such as errors, messages about the outcome, or to display the rules) I used several modes including "alerts," modals, or "tempAlerts."

tempAlert (see the related function), similar to how it was done in the Review section of the quiz, dynamically creates HTML code that is "appended" or is "removed" from the DOM when needed.

Finally, in terms of styling, I used online guides for CSS. I tried to make it the most responsive as possible. By the time I noticed I was taking the wrong approach and opted for another option (like bootstrap or flexible CSS (Flexbox) with media queries) it was too late.
