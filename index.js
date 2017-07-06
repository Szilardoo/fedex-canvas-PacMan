'use strict';
let map = new Map();
map.render();
let pacman = new PacMan();
let controller = new Controller(pacman);
const ghosts = new Ghosts();