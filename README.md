# IRON JOBS 
## API


## Routes
## User
| Method    | Path              | Description                                           |
| ------    | ----------------  | ---------------------------------------------------   | 
|POST       | /login            | Login profile                                         | 
|POST       | /signup           | New user                                              |
|GET        | /jobs/:id         | Show an job                                           |
|GET        | /jobs             | Show all jobs                                         |
|POST       | /jobs/new         | Add new job                                           |
|GET        | /me               | My perfil                                             |
|POST       | /applies/:idJob   | New apply                                             |
|GET        | /applies          | Show all applies of a user candidate                  |


## Start project
```javascript
$ npm install
$ npm run start:dev
```


## Port
- The backend runs on port 3001 by default


## Environment variables
- **Important**: Change `.env-sample` to `.env` with your environment variables

