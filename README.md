# Angular 101

Try angular 4+ feature by reimplementing trello.com

## Adding features:
Switch user from firebase.User to User
Show username somewhere in toolbar
Boards with popup using router-outlet

## Add test

## Router (done)
Enable route guard for authenticate route

## State management with Ngrx 4+ (done)
Reference:
- https://github.com/ngrx/platform/tree/master/example-app
- https://github.com/ngrx/platform

Note:
- Because of this `NOTE: store-devtools currently causes severe performance problems when used with router-store. We are working to fix this, but for now, avoid using them together.` (https://github.com/ngrx/platform/blob/master/MIGRATION.md), so comment the router-store for now
- As root reducer always need at least single child reducer so have to create a mock one.

What is the different with previous version 

haven't implemented the data reducers yet so we put those data in auth

Apply Add Board, List Board


## Theme, Add a layout with material design (done)
- https://material.angular.io/
- https://teradata.github.io/covalent/#/docs
- https://github.com/Teradata/covalent-quickstart/blob/develop/.angular-cli.json
With toolbar

## Authentication with angularfire2 (Done)

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
