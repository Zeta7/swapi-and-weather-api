# SWAPI And Weather API

API RESTful que combina información de la API de Star Wars (SWAPI) con datos de clima, construida con **Node.js 20**, **TypeScript**, **Serverless Framework** y desplegada en **AWS Lambda**.

---

## Tecnologías

- Node.js 20
- TypeScript
- Serverless Framework
- AWS Lambda
- DynamoDB Local
- Jest (para tests)
- Axios (para llamadas externas a APIs)

---

## Requisitos

- Node.js >= 20
- npm >= 9
- AWS CLI configurado (opcional para deploy)
- Serverless Framework instalado globalmente:  

  ```bash
  npm install -g serverless
  ```
---

## Lista de Endpoints

| Método | Ruta          | Descripción                                                 | Protegido   |
|--------|---------------|-------------------------------------------------------------|-------------|
| POST   | /auth/login   | Genera un token JWT para autenticarse                       | ❌         |
| POST   | /auth/register| Registro de usuario                                         | ❌         |
| GET    | /fusion       | fusiona y guarda resultado                                  | ❌         |
| POST   | /save-data    | Guarda datos personalizados en la DB                        | ✅ JWT     |
| GET    | /history    | Retorna historial de respuestas de `/fusion` paginado       | ❌         |

---

## Correr el proyecto localmente

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/Zeta7/swapi-and-weather-api.git
   cd swapi-and-weather-api.git
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Ejecutar Swagger localmente:
   ```bash
   npm run dev
   ```

---

## Autenticación

Utiliza JWT con la siguiente estructura:

- Header: `Authorization: Bearer <token>`
- Token generado desde `auth/login` con:
  ```json
  {
    "email": "test@gmail.com",
    "password": "123test.."
  }
  ```

---

## Despliegue en AWS

1. Desplegar:
   ```bash
    serverless deploy
   ```

2. Ver los endpoints:
   ```bash
   serverless info
   ```

---
## Pruebas Unitarias

```bash
npm run test:unit
npm run test:integration
```
---
## Funcionalidades implementadas

- ✅ Integración con dos APIs externas (SWAPI + open-mateo )
- ✅ Fusión de datos
- ✅ Base de datos DynamoDB
- ✅ Autenticación JWT
- ✅ Pruebas unitarias con Jest
- ✅ Caché de 30 minutos
- ✅ Despliegue con Serverless Framework

---

## Autor

**Edson Meza**  
Desarrollador Backend Nodejs - AWS
