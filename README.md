# Todo API

## 1. File Structure:
```  
/TODOAPI
|
|
|___ /api
|     |
|     |__ /controllers
|     |       |
|     |       |__ todoListControllers.js
|     |
|     |___ /models
|     |        |
|     |        |__ todoListModels.js
|     |
|     |
|     |___ /routes
|     |       |
|     |       |___ todoListRoutes.js
|     |
|     |
|     |___ seed.js
|
|
|___ package.json
|
|
|___ package-lock.json
|
|
|___ server.js
|
|
|___ README.md

```


## 2. Documentation:
__After downloading/cloning the repo,__
* run `npm install` for installing all the dependencies.
* run `npm start` and then the server will be running on `port 3000`.
* enter `localhost:3000/${followingRoutes}` in browser.

* server.js,
  * HTTP Server
  * Database connection
  * body-parser for parsing data
  * routes
* api folder
  * controllers - which has the logic for various operations such as
    * Read a task using mongoose `findById` method using id params
    * Create a task using mongoose `create` method.
    * List all tasks using mongoose `find` method.
    * Update a task using mongoose `findByIdAndUpdate` method.
    * Delete a task using mongoose `deleteOne` method
  * models
    * We created mongoose schema with fields `name`, `created_date`, `status`
    * After that, we created the mongoose model from schema
  * routes
    * We are using `/tasks` route for list all tasks and create a task.
    * We are using `/tasks/:taskId` for read a task, update a task and delete a task
  * seed.js - for entering dummy data into mongodb


  ## 3. Resources:
  1. [Installing MongoDB](https://www.mongodb.com/)
  2. [mongoose documentation](https://mongoosejs.com/)
  3. [Implementing Authentication using passport](http://www.passportjs.org/)
