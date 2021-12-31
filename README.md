# Interview Scheduler


## Technology
- `Front-end:` HTML, SCSS, React
- `Back-end:` Node, Express, PostgreSQL

## Screenshots

!["Create new appointment"](https://github.com/iourivolkov/scheduler/blob/master/docs/new-appointment.png?raw=true)

!["Save in progress"](https://github.com/iourivolkov/scheduler/blob/master/docs/saving.png?raw=true)

!["Confirm appointment deletion"](https://github.com/iourivolkov/scheduler/blob/master/docs/confirm-delete.png?raw=true)



## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

## Navigation

- Select the desired appointment day in the left-hand column. If the day is greyed out then that day is full and no additional appointments can be booked unless an existing appointment is deleted. 
- If a spot is available, click on the `"+"` button to create a new appointment.
- Add a `"Student name"`, select the `"Interviewer"` and click `Save`. 
- If you wish to `"Edit"` an existing interivew, simply click on the `"Edit" `button.
- To delete an existing interview, click on the `"Delete"` icon and `"Confirm"`. 

