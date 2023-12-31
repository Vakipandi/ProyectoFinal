// CAPA INTERMEDIARIA ENTRE DAO Y SERVICIO
// SE COMUNICA CON EL DAO CORRESPONDIENTE
// TRANFORMA LOS OBJETOS QUE CORRESPONDAN IMPLEMENTANDO DTO

// import ProductDto from '../dto/products.dto.js';
import dao from '../dao/factory.js';

const { Product } = dao;

export default class ProductRepository {
  constructor() {
    this.model = new Product();
  }

  createRepository(data) {
    let response = this.model.createModel(data);
    return response;
  }

  readFewRepository(page) {
    let response = this.model.readFewModel(page);
    return response;
  }

  readAllRepository() {
    let response = this.model.readAllModel();
    return response;
  }

  readCategoryRepository(category) {
    let response = this.model.readCategoryModel(category);
    return response;
  }

  readOneRepository(id) {
    let response = this.model.readModelById(id);
    return response;
  }

  updateRepository(id, data) {
    let response = this.model.updateModel(id, data);
    return response;
  }

  deleteRepository(id) {
    let response = this.model.deleteModel(id);
    return response;
  }
}
