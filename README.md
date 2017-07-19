# Angular 101

Try angular 4+ feature by reimplementing trello.com

## Authentication with angularfire2

## State management with Ngrx 4+

## Layout
Layout component will be located in core module and instantiate once.
Use Observable to monitor auth state to switch layout.

### Switch layout using router

Reference:
- https://stackoverflow.com/questions/36665094/angular2-using-routes-how-to-display-the-navigation-bar-after-successfully-log
- https://github.com/angular/angular/issues/10958
- https://github.com/angular/angular/issues/12648

Routing Module: use loadChildern(). Not stable approach yet. 
Separate guest components and user components to two modules.???

## Redux state and firebase database
http://redux.js.org/docs/recipes/reducers/NormalizingStateShape.html
https://firebase.google.com/docs/database/web/structure-data
