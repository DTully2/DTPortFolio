<p align="center">
  <h1>Vite + React + TailwindCss + JIT</h1>
</p>
*******************************************************************************
<p>Install:</p>
<p>yarn</p>
<p>Run App:</p>
<p>yarn run dev</p>
*******************************************************************************



Personalize by:
Changing the github link on the SVG logo

Match up your projects object with the css for the gallery

Add projects to the projects array in the gallery section
To change the pictures you must modify this part of the css:

.el:nth-child(1) .el\_\_bg:before {
transition-delay: 0s;
background-image: url("https://i.imgur.com/Hts1S2a.png");
}

specifically the background-image url.
You can use imgur to host pictures for free
Child(1) is picture 1, child(2) is picture 2, etc.

then instead of project[0] you can index 0-4 to get your project info

Sign up for a free account at emailjs
make a quick template for your email
My template looks like this:

Subject\* has this line:
{{name}} sent a message from your personal website

Content\* has this line:
Name: {{name}}

Email: {{email}}

Phone: {{phone}}

Message:

{{message}}

Keep the variables the same name since it's plugged in for those variables in the contact component

plug those into an .env file with the names
VITE_SERVICE_ID=""
VITE_TEMPLATE_ID=""
VITE_USER_ID=""

</p>
