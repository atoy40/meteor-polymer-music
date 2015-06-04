# Music

This is a project to demonstrate the meteor integration with Polymer 1.0.

It's based on the [meteor-elements](https://github.com/atoy40/meteor-elements) project.

## Instructions

```
git clone https://github.com/atoy40/meteor-polymer-music.git
cd meteor-polymer-music
bower install
meteor run
```
then open your browser at http://locallhost:3000

## Informations

In this project, meteor templates are not used to create views. There is only one body
([music.html](client/music.html)) to instance the application main polymer element
(<music-app>). Polymer elements are located into [public/components](public/components).
