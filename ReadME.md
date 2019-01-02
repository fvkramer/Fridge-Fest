# Fridge Fest

## Background & Overview

Fridge Fest is a multiplayer online browser game. Each player is rendered on screen as a Fridge with the goal of collecting the required food items. Players can pick up food items, find them in crates, or steal them from other players. There are five rounds to the game. Each round ends after a player collects the specified food items. Each food item is worth 1 point and the point totals carry over through each round. After 5 rounds, the game ends and a scoreboard displaying each player's points is shown.

## Functionality & MVPs
+ html5 canvas rendering at 30 fps
+ user authentication
+ saving player information to database
+ multi-player canvas rendering
+ real-time player interactions and movement
+ state management of multiple game components that effects each other
+ production readme

+ User Auth
  + User information saved and persisted in database
+ Render basic canvas with sprites present
  + Contorllable player sprite
  + Movable viewport (camera)
+ Multiplayer functionality
  + Realtime sprite movement sync across all player canvasses
  + Food items with full funcitonality (collectable, spawning, sprites)
  + Score tally
  + Time limit set - game ends when time is up
  + Power-ups with full functionality (collectable, spawning from crates, sprites)
  + Player interaction with food items, power-ups and other players
+ Production README

## Technology & Challenges
+ Express/mongoose
+ Redux/canvas
+ Socket IO

The main challenge of the app is connecting socket compoent with redux state and dynamic rendering on canvas

## Accomplished over the weekend
+ User signin & authentication
+ Backend set up
+ frontend folder structure with canvas and sprite display

## Group members & Work breakdown

### Day 1
+ Connect frontend socket to backend - Bao & Filipp
+ Object movement thru socket event - Bao & Filipp
+ Create sprites(fridge, crate) - Chase
+ Determine overal state shape - Bao & Filipp

### Day 2
+ Create constrained viewport for each player - Filipp
+ Finish all the sprites and start working on game music - Chase
+ Make game logic for all food items (donut, instant ramen, milkshake, pizza, snickers) - Bao

### Day 3
+ Create constrained viewport for each player(cont.) - Filipp
+ Finish game music and implementation - Chase
+ Continue working on game logic for fridge, abilities, and items - Bao
+ Fridge interaction with food items - Bao

### Day 4
+ Special abilities(lighiting, slow, speed, teleport) - Bao & Filipp
+ Make crate interactable - Chase

### Day 5
+ Add internal logic to determine when the game is over - Chase
+ Landing page(login , demo, instructions, new game, etc.) - Chase
+ Instruction modal comopent (Chase)
+ Send game results(highscore) back to the database, continue current round(5 rounds max) - Bao & Filipp

### Day 6
+ Send game results(highscore) back to the database, continue current round(5 rounds max) - Filipp
+ Instruction modal comopent -Chase
+ Work on front lobby(react/redux) - Bao

### Day 7
+ Connect each component together - Bao
+ production Readme - Filipp
+ refactor/finishing touches -Chase
