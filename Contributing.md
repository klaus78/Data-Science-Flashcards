# Contributing

At first you have to install the [Jekyll static site generator](https://jekyllrb.com/). The questions are written in the [Markdown markup language](https://en.wikipedia.org/wiki/Markdown).

## Project structure
The files with the questions-answers are in the **_data\files** folder. There is one file for each major topic. The order of the topics is defined in the **_data\sort.yml** file.

## Add a question
Let's say you want to add a new question-answer about Statistics. You can do this by editing the **_data\files\statistics.yml** file. 

Each question-answer has the form

<br>**h3:** header to be added in case the question is the first of a subtopic.
<br>**question:** new question
<br>**answer:** answer of the new question
<br>**image:** imagefile.png

Notice that the **question:** and **answer:** tags are mandatory.

You can use the **h3:** tag when the question is the first question of a subtopic.

Each question can have one image with the **image:** tag. This is the name of the file located in the **assets\images** folder.

## Testing 
Before pushing the code, make sure that the markdown syntax of the files is correct. 

For this purpose, in the home directory of your project you can type the 

*jekyll serve* 

command. This command will try to generate the site. 

If the site generation is successful, you can check the generated website at http://127.0.0.1:4000/Data_Science_Flashcards/.