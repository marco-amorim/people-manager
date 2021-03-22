# PeopleManager

- Web application to easily manage people

## Executing the project

### Requirements

```
Docker
Node 15.10.0
Java 8
Maven 3.6.3
MySQL 5.7
```

### Docker version

- This option generates an automated environment with a single command, which starts all you need to use the application (Frontend, Backend and Database)

**Instructions**:

- Inside the root project folder execute the command `docker-compose up --build`
- Frontend will run on `localhost:3000`
- Backend will run on `localhost:8080`
- MySQL will run on port `3306`
- Please make sure you don't have any other applications running on those ports before executing docker
- To shut down the whole project, also inside the root project folder execute `docker-compose down`

### Manual Version

- This option takes more work to execute, but it's also available, remember to check the software versions requirements before starting

**Instructions**:

_Frontend_:

- Inside the `frontend` folder execute the command `npm install` to install all the dependencies
- Once all the dependencies are installed simply execute `npm start`
- The application will run on `localhost:3000` by default

_Database_:

- Inside `/backend/src/main/resources` there is a file called `application.properties` which specifies the database to be used in the application, the property is as follows:

```
spring.datasource.url=jdbc:mysql://localhost:3306/peoplemanager?useSSL=false
```

- Manually create this database on MySQL using the same specified port `3306`
- Make sure you created the database before proceeding to the Backend setup

_Backend_:

- Make sure you have Java 8 installed
- Inside the `backend` folder execute the command `mvn clean install` to install all the dependencies
- Open the `backend` folder in your favorite IDE and execute the project
- The application will run on `localhost:8080` by default

### Swagger API Docs

- To check out the API docs navigate to `http://localhost:8080/swagger-ui.html`

### Tests

- To run all tests follow the instructions below

**Instructions**:

- Open the `backend` folder in your IDE
- Navigate to `/src/test/java/com.softplan.people.manager/`
- In there you will find the `PeopleManagerApplicationTests`class, execute it to run all tests
