// CAPA DE SERVICIOS
// brindar servicios segun la persistencia

import CartMongo from '../dao/db/carts.mongo.js';

export default class CartService {
  constructor() {
    this.model = new CartMongo();
  }
  createService(data) {
    let response = this.model.createModel(data);
    return response;
  }

  readService(user_id, state) {
    let response = this.model.readModels(user_id, state);
    return response;
  }

  readAllService() {
    let response = this.model.readAllModels();
    return response;
  }

  readOneService(user_id) {
    let response = this.model.readOneModel(user_id);
    return response;
  }

  updateService(user_id, data) {
    let response = this.model.updateModel(user_id, data);
    return response;
  }

  deleteService(user_id) {
    let response = this.model.deleteModel(user_id);
    return response;
  }
}
