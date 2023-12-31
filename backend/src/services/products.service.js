// CAPA DE SERVICIOS
// brindar servicios segun la persistencia

import ProductRepository from '../repositories/products.rep.js';

export default class ProductsService {
  constructor() {
    this.repository = new ProductRepository();
  }

  createService(data) {
    let response = this.repository.createRepository(data);
    return response;
  }

  readFewService(page) {
    let response = this.repository.readFewRepository(page);
    return response;
  }

  readAllService() {
    let response = this.repository.readAllRepository();
    return response;
  }

  readCategoryService(category) {
    let response = this.repository.readCategoryRepository(category);
    return response;
  }

  readOneService(id) {
    let response = this.repository.readOneRepository(id);
    return response;
  }

  updateService(id, data) {
    let response = this.repository.updateRepository(id, data);
    return response;
  }

  deleteService(id) {
    let response = this.repository.deleteRepository(id);
    return response;
  }
}
