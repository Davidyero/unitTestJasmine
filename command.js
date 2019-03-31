//Inicializar Jasmine -> aparece el archivo spec
./node_modules/jasmine/bin/jasmine.js init

//Instalar Jasmine Console Reporter (Configuración en specs.js)
https://www.npmjs.com/package/jasmine-console-reporter
jasmine.addReporter(reporter);
jasmine.execute();

//Agregar covertura
https://istanbul.js.org/

//Despues de instalar en package.json se agrega
"test:coverage": "nyc node spec.js"

//en nyc se configura todo, direccion de HTML y excluir
"nyc": {
    "report-dir": "./spec/istanbul/report",
    "temp-dir": "./spec/istanbul",
    "reporter": [
      "text",
      "text-summary",
      "html"
    ],
    "exclude": [
      "spec/**/*",
      "server/*.spec.js"
    ]
  }
 
 