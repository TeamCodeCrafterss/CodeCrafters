# Minimum Viable Product (MVP) Document

## Project Overview

**Project Title:** Project Tracker

**Project Description:** Project Tracker is a user-friendly role-based web application designed for project management in organizations. This application facilitating project, contract, and employee management. Admins and managers can add, edit, and delete projects, contracts, and employees, while approving user roles. The application tracks project details (ID, name, members, etc.), contract details (ID, name, category, etc.), and employee details (ID, name, type, project, etc.). All data will be visualized using charts. Our aim is to replace traditional methods like using Excel sheets, as this offers ease of access at fingertips, statistics, and secure authentication.

The intellectual merit of this is to provide ourselves with a thorough understanding of the software development process, as everyone engages in both development and testing roles. This approach ensures continuous improvement and adaptability, essential for timely project deployment. The broader impact of this method builds us ready for real-world IT challenges, fostering skills in agile methodologies and collaborative problem-solving.

**Project Team:**

1. Taraka Sai Reddy Seelam
2. Yekkaladevi Lakshmi Prasanna
3. S S Eswara Satyanarayana Aneesh Dangeti
4. Pavan Teja Jukanti
5. Akshay Reddy Yalla

**Timeline:**

* Start Date:  JAN 29
* End Date: Expected end date of the MVP development - MAR 22

### Snapshots

* Admin user creation
  * Below snapshot represents an admin user creation through a REST API using postman
    * ![alt text](<admin user.png>)

* Login page
  * Below snapshot represents a user login. All the registered and approved users can login
    * ![alt text](<login page.png>)

* Register page
  * Below snapshot represents a user registration. All the users who want to access the platform features can register here
    * ![alt text](register.png)

* User register and activation by admin user
  * ![alt text](Admin.gif)

* Dashboard page
  * Below snapshot represents graphical representation of key metrics related to employees,contractors, and projects within the organization
    * ![alt text](dashboard-1.png)
    * ![alt text](Dashboard.gif)

* Contracts page
  * Below snapshot represents contracts information of an organization
    * ![alt text](<contracts page.png>)
  * Adding a contract
    * ![alt text](Contarct.gif)

* Projects page
  * Below is the projects tab page that will look like when viewed. It contains existing project information.
  * R5/R5.1:
    * ![alt text](<projects listing.png>)
    * Below image shows the projects information saved in the database in the backend.
      * ![alt text](projects_in_DB.png)
  * R5.2 - Form Fields(Edit/Add actions):
    * ![alt text](editproject.png)
    * ![alt text](addproject.png)
  * Below GIF shows how the existing project can be edited.
    * ![alt text](edit_project.gif)
  * Below GIF shows how to add a new project.
    * ![alt text](add_project.gif)
  * R5.3 - Below GIF shows the search of records.
    * ![alt text](search.gif)
  * R5.4 - Below GIF shows how to delete a project.
    * ![alt text](delete.gif)

* Employees page
  * Below snapshot represents employees information of an organization
    * ![alt text](<employees page.png>)
    * ![alt text](Employees.gif)

* Users page
  * Below snapshot represents all users information of an organization
    * ![alt text](<users page.png>)

* Settings page
  * Below snapshot represents logged in user information and logout feature
    * ![alt text](settings.png)
