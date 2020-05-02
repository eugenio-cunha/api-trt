# API TRT

Web data miner bot

### REST Endpoints

* {GET}  `/api/ping`
* {POST} `/api/trt3/search`
* {GET}  `/api/trt3/search?id=123456789`

### Estrutura do projeto
```
    src
       │
       └───api             # Rotas e controles de todos endpoints
       └───config          # Configurações dos ambientes
       └───interfaces      # Interfaces comuns
       └───lib             # Bibliotecas
       └───services        # Logica de negocios
       └───app.js          # App express
       └───server.js       # Ponto de entrada do app
```

```sh
curl -X POST -H "content-type: application/json" --data '{ "code": "12345", "instance": 1 }' http://127.0.0.1:3000/api/trt3/search
```