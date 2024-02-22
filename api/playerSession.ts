import query from './query';

const route = 'PlayerSession';

const getPlayerSession = async (id: Number) => {
  const response = await query(route, 'get', id, []);
  return response.data;
}

const getAllPlayerSessions = async () => {
  return await query(route, 'get', null, []);
}

const addPlayerSession = async (playerId: Number, codename: String) => {
  const data = {
    playerID: playerId,
    codename: codename,
  };
  return await query(route, 'post', null, data);
}

const modifyPlayerSession = async (playerId: Number, codename: String) => {
    const data = {
        playerID: playerId,
        codename: codename,
    };
    return await query(route, 'put', null, data);
}

const deletePlayerSession = async (playerId: Number) => {
    return await query(route, 'delete', playerId, []);
}


export {
  getPlayerSession,
  getAllPlayerSessions,
  addPlayerSession,
  modifyPlayerSession,
  deletePlayerSession,
};
