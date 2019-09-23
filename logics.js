//include all required node modules
let fs = require('fs');
let request = require('request');
let express = require('express');

// getuserRepo function will call the github API and return the all public repositories of particular user
let getUsersRepo = (username)=>{
    return new Promise((resove,reject)=>{
        var data = {
            url: 'https://api.github.com/users/'+username+'/repos',
            method: 'GET',
            headers: {
                'User-Agent': 'PostmanRuntime/7.17.1',
            }
        }
        request(data, function (error, response) {
    
            if (error) {
               reject(error);
            }
            if (!error) {
                var allUsersRepo = {};
                allUsersRepo[username] = JSON.parse(response.body);
                resove(allUsersRepo);
            }
        });
    });
};


module.exports = express.Router().get('/',(req,res)=>{
    //read the file and get all users then split by ',' for getting all users separately and then call promise all to call getUsersRepo function for getting response of all users
    fs.readFile('./username.txt',(err,data)=>{
        var data1 = data.toString();
        users = data1.split(',');

        users.forEach((element,index)=>{
            users[index] = getUsersRepo(users[index].trim()); // trim function is used here to remove if any spaces is there by mistake in txt file, if we need intentionally we can remove trim() 
        });
        
        Promise.all(users).then((response)=>{
            var finalResult = {};
            response.forEach((element,index)=>{
                finalResult[Object.keys(element)[0]] = element[Object.keys(element)[0]];
            });
            res.send(finalResult);
        },(error)=>{
            console.log(error);
        });
    });

});