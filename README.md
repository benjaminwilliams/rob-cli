# Rob the Robot - CLI version

## Summary

An implementation of the Toy robot challenge. Based on/a port of a very similar project I created last week [https://github.com/benjaminwilliams/rob](https://github.com/benjaminwilliams/rob)

## Getting started

dependencies: Node.js

1. clone this repo
1. run `npm install`
1. run `node index.js`

## Instructions

One the app is started, it accepts the following inputs

* PLACE X Y F
* MOVE
* LEFT
* RIGHT
* REPORT
* exit 

You can see help commands at any time by typing `help`

Rob must be placed before you can move or turn him. Use `REPORT` at any time to see the current status of Rob

## Unit tests

Tests are written in Jest, despite not being a React app. 

Use `npm test` to run unit tests
Use `npm test -- --watch` to run with watch

