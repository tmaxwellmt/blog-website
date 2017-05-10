###Phase One Notes

Basic Setup

Bootstrap the backend using Express Generator

`sudo npm install express-generator -g`
only need to install globally once
To use -> express nameOfApp
express blog
WE ARE GOING TO COMMIT OFTEN

Let's make sure we ignore node_modules

  `echo 'node_modules/' >> .gitignore`

Delete any unnecessary things the generator created

ie: Views folder and any view engine middleware
  public directory
  Add a test endpoint to app.js,

  `app.get('/test', function(req,res){
    res.json({message: "App functioning properly"})
  });`

update server in `bin/www to use port 3001:` and `var port = normalizePort(process.env.PORT || '3001')`;

Take the app for a spin, and test your endpoint using PostMan

If the app is functional - commit your code

---------------------
##Configure MongoDB
- install any dependencies(mongo, mongoose)
- add configuration to DB line via:
  - make a new folder named 'config', new file called 'database-connect.js'
    ```var mongoose = require('mongoose');

    module.exports = () => {
      mongoose.connect('mongodb://localhost/my_blog');
      console.log('Database running')
    }
    ```
- then require that file into 'app.js' with `require('./config/database-connection')();`
- commit code

---------------------
### begin API Phase
  -checkout to a safe branch `git checkout -b articles`
  -create article model
  -create routes folder, and 'routes/articles.js' file
  -create endpoints in 'routes/articles' ONE AT A TIME and continually test using postman
  -Once they ALL work!
    -`git add -A`
    -`git commit -m "message"`
    -`git push origin articles` -> pushes it to new branch
    -`git checkout master`
    -`git merge articles` -> brings new code into articles
    -`git push origin master` -> syncs master branch with new code
