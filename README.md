//SandBox  para el aprendizaje de documentacion

1. inicializar el proyecto NODE
npm init
npm install express typescript 

2. Todas las bibliotecas tienen que declarar las variables
npm install --save-dev @types/node @types/express ts-node

3.Ejecutar
npx ts-node src/index.ts

4.
npm install swagger-ui-express swagger-jsdoc --save
npm install --save-dev @types/swagger-ui-express @types/swagger-jsdoc

5.
http://localhost:3000/api-docs/

6. npm run start

7. biblioteca tsdoc 
npm install typedoc --save-dev
npx typedoc --entryPointStrategy expand ./src
npm install --save-dev eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser
npx eslint --init

8.
npm install --save-dev jest ts-jest supertest @types/jest @types/supertest
