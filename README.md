## My new blogging site

This is a full-stack project, utilizing all of the tools and technologies learned while
attending a full-stack web development bootcamp through Big Sky Code Academy.
This project will contain:
 a home page: a resume, portfolio and 'About Me'; blogging engine: with a section for users to view blog posts, filter by category, and leave
 feedback via comments;
 user authentication: will be implemented as a means of
 securing who can create posts and leave comments.
___________________________
###To Run:

1)`git clone <url>`
2) instructions...


___________________________
### Project Overview




__________________________
###Backend Overview
Technologies
  -NodeJS
  -ExpressJS
  -MongoDB
  -Mongo


API

Todo-Document all of your endpoints, how to utilize them, and the expected response for each endpoint.

Resources
-Article
  -title
  -content

example Article

  {
   title: "My first blog post",
   content: "Lorem ipsum...."

  }
```
___________________________

### Front-end Overview
  technologies
    -ReactJS
    -React Router
    -Bootstrap

  Pages
    -Home
    -Articles
      -view
      -edit
    -Contact

  ***toDo: React Component Hierarchy Tree***


___________________________

#### Stage One
  1)C reate functional Node/Express Application
  2) Implement CRUD restful API for article resource
  3) TDD: Implement at least 3 tests

___________________________

#### Stage Two
  1) Create functional React Application
  2) Implement router, to get to each one of your containers
  3) Implement client side CRUD for Articles

___________________________
#### Product RoadMap
  1) Seed Dev DB with fake data using [faker](https://github.com/Marak/faker.js)
  1) User authentication with [auth0](https://auth0.com/)
  2) Protecting routes/functionality from non-authorized users
  3) Forming comments/articles relationships
  4) Design Home page using Sketch
  5) Update article to have category & category relationships
  6) Migrate to production using [Heroku](https://heroku.com)
