
# Description and Goals

Fridge Fest is an online multiplayer HTML5 game. Each player is rendered as a fridge and the goal of the game is to collect the appropriate amount of food items. A round ends after a player collects all the necessary items. Points are tallied based on how much food each person collected during the round and after five rounds, a winner is declared based on the cumulative sum of food collected. 

Players can also pick up items to interact with their environment and other players. The teleport ability places the player in a random position on screen. The speed ability increases the player's movement. The slow and lightning ability affect all other players' movements speeds. 

# How To Use

The simplest way to use the app is through the live link.

LIVE LINK

To test the game in development,

git pull 


npm install


npm run dev

Click on 'Demo' in the login screen.

Technology Used

This game was built with the following technology:

 Sockets.io
 Node.js
 ReactJS
 ReduxJS
 HTML5 Canvas

#Technical Implementation 
  
  Clients usually interact with servers by sending HTTP requests and receiving responses. This is a unidirectional flow that depends on clients initiating the interaction. Multiplayer games require consistent communication between all connected client components and the server. In this regard, web sockets were used.

  Web Sockets provide bidirectional communication over a TCP connection. When a server is passed into a socket connection, the regalar HTTP protocol changes to a WebSocket protocol. 

  https://www.pubnub.com/static/images/get-started/websockets_guides.png


  As shown in the above diagram, when a client opens the application, a "handshake" is initiated between the client and the server. Each client connection can be emitted to all other connected clients, hence providing a schema for multiplayer games/interactions. 

  We broadcast each socket connection to the frontend where we store all socket connections in a global redux state. This state updates each connected player's state, telling them what to render, what items have been removed, and what players are connected as well as their position on the screen. 

  Each item interaction as well as special ability interactions are socket events. These events get emitted from the frontend to the backend. The backend sockets emit to each connection on the frontend, and then actions are dispatched to update each player's redux state. This updates canvas rendering. 





