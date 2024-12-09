# Sistema WEB
## Equipo 10

### Setup Instructions

1. **Create a New Virtual Directory:**
   - To avoid changing the relative paths in the project, you need to create a new virtual directory in your web server and name it `/ElGatoHambriento`.
   - This will ensure that all the paths inside the project are resolved correctly, regardless of the development environment.

2. **Connecting to SQL Server:**
   - The project is designed to connect to an SQL server. However, for security reasons, credentials are required to establish this connection.
   
   **How to Obtain Credentials:**
   - **Option 1:** You can contact me via [t.me/Niamky](https://t.me/Niamky) to get your personal credentials and securely configure the connection.
   - **Option 2:** If you prefer to use a local database in your environment, you can create a database on your local SQL server and update the necessary configuration files within the project to point to your local database.

3. **Additional Configuration:**
   - Make sure you have the necessary drivers installed to connect to an SQL server from your development environment. This includes drivers `PDO` for PHP.

4. **Database:**
   - If you decide to use a local database, make sure to create the necessary tables and load the required data according to the project specifications.
