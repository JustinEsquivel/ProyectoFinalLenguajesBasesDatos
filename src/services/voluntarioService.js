const Voluntario = require('../models/voluntario');

class VoluntarioService {
  // Obtener todas las voluntarios
  async getAllVoluntarios() {
    return await Voluntario.findAll();
  }

  // Obtener voluntario por ID
  async getVoluntarioById(id) {
    return await Voluntario.findById(id);
  }

  // Buscar voluntarios por nombre (si aplica)
  async searchVoluntarioByNombre(nombre) {
    return await Voluntario.searchByNombre(nombre);
  }

  // Crear una nueva voluntario
  async createVoluntario(data) {
    return await Voluntario.create(data);
  }

  // Actualizar una voluntario
  async updateVoluntario(id, data) {
    return await Voluntario.update(id, data);
  }

  // Eliminar una voluntario
  async deleteVoluntario(id) {
    return await Voluntario.delete(id);
  }
}

module.exports = new VoluntarioService();
