# TRT-3

Web data miner bot

### Endpoints

* {ALL} `/api/ping`
* {POST} `/api/trt3/request`
* {POST} `/api/trt3/response`

```
src
│   app.js          # Ponto de entrada do app
└───api             # Express rotas controles para todos endpoints do app
└───environments    # Configurações dos ambientes do app
└───interfaces      # Interfaces comuns 
└───lib             # Biblioteca
└───services        # Logica de negocio do app
└───worker          # Trabalhador 
```