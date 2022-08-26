Simple microservices for DevOps practise puprose

## Catalog structure:

<pre>
|___.github
|___.vscode
|___.gitignore
|___.dockerignore
|___README.md
|___docker-compose-db.yml -> orchestrates only database related containers
|___docker-compose.yml -> orchestrates all containers
|___frontend___
               |___README.md
               |___package-lock.json
               |___package.json
               |___.dockerignore
               |___Dockerfile
               |___public
               |___src
|___backend___
              |___README.md
              |___.eslintrc.js
              |___.dockerignore
              |___docker-compose -> orchestrates database and backend part
              |___Dockerfile -> Builds backend image
              |___mongo-init.js -> Database initialization script
              |___sleep.sh -> makes backend containers to wait some time
              |___package-lock.json
              |___package.json
              |___src___
                        |___server.js
                        |___middleware -> logic for: authentication, authorization, ...
                        |___models -> database models
                        |___routes -> application routes (urls)
                        |___controllers -> all business logic
                        |_____tests__ -> unit tests, integration Tests, ...
</pre>
<hr>