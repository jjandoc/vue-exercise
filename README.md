# vue-exercise

## Project setup

Install and run the application.

```
npm install
npm run serve
```

## Directions

This is a simple app that pulls data on characters from the Star Wars API and displays the results in a table.

The exercise here is we want to make this table sortable. When you click on the "Name" table header, the table should be organized alphabetically from A to Z (ascending). To do this, you will primarily need to update the [getter](https://vuex.vuejs.org/guide/getters.html#getters) method, getHumans, in our Vuex store so that it can take sorting logic. Additionally, you'll need to add an [event handler](https://vuejs.org/v2/guide/events.html) to the appropriate element that will trigger that sorting logic.

As a bonus, it would be great if you could make every table header sortable on click, ordered initially ascending, and if you click again on the same header the sort order reverses from ascending to descending. Your choice on how you want to deal with unknown values.
