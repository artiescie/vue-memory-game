vue-memory-game
==================
![][david-url]
![][license-url]

Alphabet learning game for preschoolers.  Common objects with letters, pronounce them on match!

### Original repo: ### 

A tiny game written in `vue2`. It's inspired by IgorMinar's [Memory-Game](https://github.com/IgorMinar/Memory-Game). You can view the online demo [here](http://leftstick.github.io/vue-memory-game).

>If you are looking for `angular2` version, check it [here](https://github.com/leftstick/angular2-memory-game)

The online demo is implemented with extra rank system involved, you can check the source code at `stage-1` branch.

We choose `single-file-component` pattern as the fundamental of this game. In order to use this pattern, we involved [webpack](https://webpack.js.org/) with [vue-loader](https://github.com/vuejs/vue-loader) to make it possible.

### AlphaFlip fork ###

Some mods made by Artie Scie for this fork:
- conv to an English alphabet pre-schooler game
- game logo field changed to "AlphaFlip"
- add logic to take a random subset of images on each play, since the set of alphabet letters exceeds the actual used subset (8 card pairs at one time, selected from 26 letters)
- along with each image, an MP3 file to play on match
- images from [Classroom Clipart](classroomclipart.com/)
- image magick used to resize images, etc, using scripts by [Fred](http://www.fmwconcepts.com/imagemagick/)
- package.json script "npm start" now opens the browser (remove "--open" if you don't like it)
- draggable set to false for images
### AlphaFlip fork DEMO ###

- [web demo here](http://come2think.com/vue-memory-game)
#### Browser Note: ####
- Small testing effort on the fork: works on various browsers, on Linux, Windows, Android, Mac browsers tested.  
OK EXCEPT FAILS ON: Windows IE 11 and earlier.  I think it's support for transition/transform features of HTML5... 
But I think MS is not going to work very hard on non-security fixes to IE.
Safari browsers worked after adding a mfr prefix: -webkit-backface-visibility that isn't handled by css-loader.

## Components Tree ##

![](https://raw.githubusercontent.com/leftstick/vue-memory-game/master/docs/img/components.png)


## Components break down ##

1. `Game`, the whole game board
2. `Dashboard`, the panel on the top, including "logo", "progress", "best result"
3. `Logo`, on the left of `Dashboard`, showing the game Logo
4. `MatchInfo`, on the center of `Dashboard`, showing the current matching information
5. `Score`, on the right of `Dashboard`, showing the best result
6. `Chessboard`, on the center of `Game`, the playing area
7. `Card`, each card in the `Chessboard`
8. `PlayStatus`, the footer part, displaying current status of game

## File Structure ##

```
vue-memory-game
├── css
│   └── main.css
├── img
│   ├── ...
│   └── zeppelin.png
├── js
│   ├── components
│   │   ├── card
│   │   │   ├── Card.vue
│   │   │   └── Chessboard.vue
│   │   ├── dashboard
│   │   │   ├── Dashboard.vue
│   │   │   ├── Logo.vue
│   │   │   ├── MatchInfo.vue
│   │   │   └── Score.vue
│   │   ├── footer
│   │   │   └── PlayStatus.vue
│   │   │
│   │   └── Game.vue
│   │
│   ├── vuex
│   │   ├── actions
│   │   │   └── index.js
│   │   ├── getters
│   │   │   └── index.js
│   │   ├── mutations
│   │   │   └── index.js
│   │   └── store
│   │       ├── index.js
│   │       └── statusEnum.js
│   │
│   └── index.js
│
├── index.html_vm
├── package.json
├── webpack.config.js
└── webpack.config.prod.js
```

## Detail Explanation? ##

* [Chinese Edition](https://segmentfault.com/a/1190000005168085)


## Want Having a try locally? ##

```bash
#cloning code
git clone https://github.com/leftstick/vue-memory-game.git
cd vue-memory-game

#install dependencies
npm install
#start debug server
npm start
```

Now, view the demo at [http://localhost:8080](http://localhost:8080)


## LICENSE ##

[MIT License](https://raw.githubusercontent.com/leftstick/vue-memory-game/master/LICENSE)


[david-url]: https://david-dm.org/leftstick/vue-memory-game.png
[license-url]: https://img.shields.io/github/license/leftstick/vue-memory-game.svg
