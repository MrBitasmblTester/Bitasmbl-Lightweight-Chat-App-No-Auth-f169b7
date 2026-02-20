import Route from '@ember/routing/route';
export default class RoomRoute extends Route{model(params){return {roomId:params.room_id};}}
