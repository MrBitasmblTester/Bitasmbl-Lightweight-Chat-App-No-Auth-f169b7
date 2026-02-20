import EmberRouter from '@ember/routing/router';
import config from './config/environment';
const Router=class extends EmberRouter{};
Router.map(function(){this.route('rooms');this.route('room',{path:'/rooms/:room_id'});});
export default Router;
