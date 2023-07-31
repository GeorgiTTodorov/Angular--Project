# Angular--Project
SPA application written in angular 

Website for publishing articles

A user can: 
   - create articles (title, image url, text)
   - view details
   - delete article 

Visitors can: 
    - browse all articles
    - Login or Register
    - view details

Project artchitecture: 
    
    - global module - with all of the components 
    - global router 

       - aside:
            - sidebar component

       - core: 
            - header component
            - footer component

       - directives:
            -  e-mail directive (used in login form)  
            -  max-count directive (used in the login form)

       - interface
            -  article interface for setting types in Create Article
            -  user interface for setting types in user Login and Registration

       - main component:
            - displays Welcome info 
            - navigation to registration and to the collection

       - privacy-policy component:
            - displays information about terms and conditions

       - services:
            - article service: fetches, posts and deletes data
            - user service: fetches, posts and deletes data, updates localStorage as necessary, authenticates
            - auth-guard service: authorizes for access 

       - user:
            - login component
            - register component
            - email-validator (using regExp)
            - constant for e-mail domains
            - match-passwords validator 

       - views:
            -  entire collection component
            -  create-article component
            -  user dashboard component
            -  article details component
            -  views module (imports routing, reactive forms module and exports the other components from the folder)