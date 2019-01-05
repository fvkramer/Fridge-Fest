import createFridge from '../../fridge';
import GameCanvas from '../../game_canvas';
import createInstantRamen from '../../food/instantRamen';
import createSlow from '../../abilities/slow';
import createTeleport from '../../abilities/teleport';

const handleStartGame = (socket, store, {
  fridgeIds, instantRamen, slow, teleport,
}) => {
  for (let i = 0; i < instantRamen.length; i += 1) {
    store.dispatch({ type: 'RECEIVE_FOOD', food: createInstantRamen(instantRamen[i]) });
  }
  for (let i = 0; i < fridgeIds.length; i += 1) {
    store.dispatch({ type: 'RECEIVE_FRIDGE', fridge: createFridge(fridgeIds[i]) });
  }
  for (let i = 0; i < slow.length; i += 1) {
    store.dispatch({ type: 'RECEIVE_SKILL', skill: createSlow(slow[i]) });
  }

  for (let i = 0; i < teleport.length; i += 1) {
    store.dispatch({ type: 'RECEIVE_SKILL', skill: createTeleport(teleport[i]) });
  }


  window.setTimeout(() => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const game = new GameCanvas(socket, store, canvas, ctx);
    window.socketId = socket.id;
    game.draw(10);
  }, 1000);
};

export default handleStartGame;
