import  app from "../src/index";
import Request from "supertest"

describe('GET registro', () => {
  test('should return all registered', async () => {
  const response = await Request(app).get('/api/registro');
  expect(response.status).toBe(200);  
});

test('Nos permite consultar el registro por el id', async () => {
  const response = await Request(app).get('/api/registro/:id')
  expect(response.statusCode).toBe(200)
});
});

describe('POST registro', ()=>{
  test("Sube un nuevo registro", async () => {
      const response = await Request(app).post('/api/registro');
      expect(response.statusCode).toBe(200)
  });
});


describe('PUT registro', ()=>{
  test("Actualiza un registro", async () => {
      const response = await Request(app).put('/api/registro/:id');
      expect(response.statusCode).toBe(200)
  });
});

describe('DELETE registro', ()=>{
  test("Elimina un registro", async () => {
      const response = await Request(app).delete('/api/registro/:id');
      expect(response.statusCode).toBe(200)
  });
});


describe('GET prestamo', () => {
  test('should return all loans', async () => {
  const response = await Request(app).get('/api/prestamo');
  expect(response.status).toBe(200);
});

test('Nos permite consultar el prestamo por el id', async () => {
  const response = await Request(app).get('/api/prestamo/:id')
  expect(response.statusCode).toBe(200)
});
});

describe('POST prestamo', ()=>{
  test("Sube un nuevo prestamo", async () => {
      const response = await Request(app).post('/api/prestamo');
      expect(response.statusCode).toBe(200)
  });
});


describe('PUT prestamo', ()=>{
  test("Actualiza un prestamo", async () => {
      const response = await Request(app).put('/api/prestamo/:id');
      expect(response.statusCode).toBe(200)
  });
});

describe('DELETE prestamo', ()=>{
  test("Elimina un prestamo", async () => {
      const response = await Request(app).delete('/api/prestamo/:id');
      expect(response.statusCode).toBe(200)
  });
});

describe('GET pago', () => {
  test('should return all payments', async () => {
  const response = await Request(app).get('/api/pago');
  expect(response.status).toBe(200);
});

test('Nos permite consultar el pago por el id', async () => {
  const response = await Request(app).get('/api/pago/:id')
  expect(response.statusCode).toBe(200)
});

});

describe('POST pago', ()=>{
  test("Sube un nuevo pago", async () => {
      const response = await Request(app).post('/api/pago');
      expect(response.statusCode).toBe(200)
  });
});

describe('PUT pago', ()=>{
  test("Actualiza un pago", async () => {
      const response = await Request(app).put('/api/pago/:id');
      expect(response.statusCode).toBe(200)
  });
});

describe('DELETE pago', ()=>{
  test("Elimina un pago", async () => {
      const response = await Request(app).delete('/api/pago/:id');
      expect(response.statusCode).toBe(200)
  });
});

describe('GET historial', () => {
  test('should return all historial', async () => {
  const response = await Request(app).get('/api/historial');
  expect(response.status).toBe(200);
});

test('Nos permite consultar el historial por el id', async () => {
  const response = await Request(app).get('/api/historial/:id')
  expect(response.statusCode).toBe(200)
});
});

describe('DELETE historial', ()=>{
  test("Elimina un historial", async () => {
      const response = await Request(app).delete('/api/historial/:id');
      expect(response.statusCode).toBe(200)
  });
});

describe('servicios usuario no registrado', () => {
  test('should return all user not registered', async () => {
  const response = await Request(app).get('/mongo');
  expect(response.status).toBe(200);  
});

test("Sube un nuevo usuario no registrado", async () => {
  const response = await Request(app).post('/mongo');
  expect(response.statusCode).toBe(200)
});

test("Actualiza un usuario no registrado", async () => {
  const response = await Request(app).put('/mongo/:id');
  expect(response.statusCode).toBe(200)
});

test("Elimina un usuario no registrado", async () => {
  const response = await Request(app).delete('/mongo/:id');
  expect(response.statusCode).toBe(200)
});

});
