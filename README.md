# ProjectFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

---

# Solution Description

    Startup Rise is a tool to help anyone that is new in the IT buisness or thinking about starting a buisness in the field. That includes CEOs of new-born startups, entrepreneurs , students and anyone that has an idea that he deems to be profitable to make a startup around it.
    Our solution has a machine learning model that takes data about startups as an input (location, field, income, market_size, founded_month, founded_year, seed, venture, post_ipo_equity, founded_at, first_funding_at, last_funding_at..) . Using this dataset, it generates a data visualization dashboard that help the user get a clearer idea about the details of the journey of a startup which could prevents a potential failure. Along the data visualization, our website also offers testimonials and advices from various tunisian CEOs that have visited the application and are willing to help with their experiences. Those testimonials are verified by an admin after posting them  to ensure their authenticity and that they are not a fraud.

---

# Run the project

-> To run the project locally, open the angular project and run it on port 4200 using : ng serve -o
-> To use the backend server successfuly, create a mysql database named startup ( you can change the credentials in )
-> Run the backend server with the command : npm run start:dev

---

#Usecase diagram
As an initial verison, the applications has two main users: the internet user and the admin.
Any internet user can:
_ see a list of all startups of tunisia, as well as a brief description about them
_ see all the testimonials and their owner
_ If he is a ceo or someone doing buisness, he can leave a testimonalial or an adivce that would be displayed in our website under his name.
_ see the data visualization dashboard
the admin can :
_ modify the startups list based on the current data available
_ confirm the testimonials by contacting their owner \* modify the charts that are displayed

---

#Class diagram
A startup has one or many owners, that can leave one to many testimonials.
Each testimonial is owned by one write
