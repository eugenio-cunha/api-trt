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