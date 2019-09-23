# monocept-project
This is for monocept mechine test
Followings are the steps for easy running of server
Step1 - Download/clone the folder from github to your local mechine.

Step2 - Go to the local mechine, open the command prompt and go to the path where you
        downloaded the repository by giving cd command 
            e.g : cd Desktop/solution
        Note: You can open using visula-studio code or any other text editor like sublime text editor,
              make sure you are the current path of the project 

Step3 - You will find one txt find named as username.txt, by default there is some username with comma separated,
        if you want to change then change/add the username with comma separated

Step4 - give the following command
        > npm install
        this will download all the required node modules in the current path (make sure internet should be connected)

Step5 - once step3 completed , the run the server using following command
        > node server.js
        This will show one message "server is running on port 8080"
        so now your server is running on port number 8080


step6 - go to the browser or postman (recomeded for getting response with json format which will be easy to view/understand)
        and give following URL
        http://localhost:8080/getusersrepo

        This will give you all the public repository of the users which we have given in txt file


