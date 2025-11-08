[README.md](https://github.com/user-attachments/files/23429918/README.md)
# Proyecto Backend – Talleres 01, 02 y 03

Este proyecto implementa las soluciones a los talleres del curso, estructuradas como un backend en Node.js con Express y TypeScript, siguiendo buenas prácticas de organización y controladores separados por taller.

## Instalación y ejecución

1. Clonar el repositorio

   ```bash
   git clone <url-del-repo>
   cd <carpeta-del-proyecto>
   ```

2. Instalar dependencias

   ```bash
   npm install
   ```

3. Ejecutar el servidor en modo desarrollo

   ```bash
   npm run dev
   ```

4. El backend estará disponible en:
   ```
   http://localhost:8080
   ```

## Endpoints disponibles

A continuación se listan las rutas agrupadas por taller, con ejemplos de cuerpos (body) en formato JSON que puedes probar con Postman o Thunder Client.

### TALLER 01

#### Convertidor de temperatura

POST /api/v1/taller-01/convertidortemp

```json
{ "tempc": 100 }
```

#### Resolución cuadrática

POST /api/v1/taller-01/resolvedor

```json
{ "a": 1, "b": 5, "c": 4, "signo": true }
```

#### Mejor paridad

POST /api/v1/taller-01/mejorparidad

```json
{ "x": 4 }
```

#### Peor paridad

POST /api/v1/taller-01/peorparidad

```json
{ "x": 4 }
```

### TALLER 02

#### Encontrar máximo

POST /api/v1/taller-02/findmax

```json
{ "list": [3, 17, -1, 4, -19] }
```

#### Encontrar mínimo

POST /api/v1/taller-02/findmin

```json
{ "list": [3, 17, -1, 4, -19] }
```

#### Verificar número en lista

POST /api/v1/taller-02/includes

```json
{ "list": [3, 17, -1, 4, -19], "num": 2 }
```

#### Sumar lista

POST /api/v1/taller-02/sum

```json
{ "list": [3, 17, -1, 4, -19] }
```

#### Números faltantes

POST /api/v1/taller-02/missingnumbers

```json
{ "list": [7, 2, 4, 6, 3, 9] }
```

### TALLER 03

#### Desglosar string

POST /api/v1/taller-03/desglosarstring

```json
{ "str": "Programar", "strcond": "vocales" }
```

#### Two Sum

POST /api/v1/taller-03/twosum

```json
{ "listnum": [3, 17, -1, 4, -19], "num": 16 }
```

#### Conversión romana

POST /api/v1/taller-03/conversionromana

```json
{ "numRomano": "XIV" }
```

#### Descomposición de cadena

POST /api/v1/taller-03/descomposicion

```json
{ "str": "hola,ho,la,h,ol,a" }
```

## Tecnologías utilizadas

- Node.js
- Express.js
- TypeScript
- CORS
- Nodemon (modo desarrollo)

## Notas

- Cada endpoint valida los parámetros recibidos y devuelve mensajes de error claros.
- Las respuestas se estructuran con claves personalizadas ({ vocales: 3 }, { combinacion: [1,2] }, etc.).
- El código está formateado con Prettier y sigue un estilo consistente.

## Autor

Luis López  
Proyecto académico de backend con TypeScript y Express.
