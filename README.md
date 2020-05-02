# API TRT

### MVP
* Implementar uma API rest para executar consultas automatizadas de processos no portal do Tribunal Regional do Trabalho.
* Requisitos básicos, API escalável com a possibilidade de implementar robôs em (N) linguagens de programação.

### Variáveis de ambiente
```env
NODE_ENV=development                           (ambiente da aplicação)
SOCKET_PORT=9018                               (porta do socket que o robô vai escutar)
MONGODB_URL=mongodb://127.0.0.1:27017/${db}    (url de conexão com MongoDB) 
HTTP_PORT=9000                                 (porta http da api)
HTTP_HOST=127.0.0.1                            (host da api para executar os testes de unidades)

```

### Diagrama

![diagrama](https://github.com/eugenio-cunha/api-trt/blob/master/diagram.png)

```sh
# build da aplicação de TypeScript para JavaScript
npm run build

# executa os testes de unidade
npm test

# executa a aplicação no modo desenvolvimento
npm run dev

# executa a aplicação no modo produção
npm start

```

### Endpoints

* {GET}  `/api/ping`

* {POST} `/api/trt3/search`
    - body
        - code {string} - código do processo (sem máscara de formatação)
        - instance {number} - número da instância (1, 2 ou 3)

* {GET}  `/api/trt3/search?id=id_pedido_consulta`
    - parâmetro
        - id {string} id do pedido da consulta

### Exemplo

```sh
# Solicitar consulta
curl -X POST -H "content-type: application/json" http://127.0.0.1:3000/api/trt3/search --data '{ "code": "00102241420185030145", "instance": 2 }'
# Saída JSON
# {
#   "id":"5eadaee47f12d2393159160b",
#   "status":"waiting",
#   "code":"00102241420185030145",
#   "instance":2,
#   "start":"2020-05-02T17:33:24.146Z"
# }

# Resultado da consulta
curl -X GET http://127.0.0.1:3000/api/trt3/search?id=5eadaee47f12d2393159160b
# Saída JSON
# {
#   "status": "done",
#   "code": "00102241420185030145",
#   "instance": 2,
#   "start": "2020-05-02T17:33:24.146Z",
#   "end": "2020-05-02T17:33:30.581Z",
#   "data": {
#     "numero": "0010224-14.2018.5.03.0145",
#     "itens": [
#       {
#         "titulo": "Juntada a petição de Solicitação de Habilitação (habilitação)",
#         "data": "2020-04-29T23:58:09.562"
#       },
#       {
#         "titulo": "Publicado(a) o(a) Notificação em 04/05/2020",
#         "data": "2020-04-28T00:03:29.351"
#       },
#       ...
#     ]
#   }
# }

```

### Robôs implementados
 [BOT-TRT3](https://github.com/eugenio-cunha/bot-trt3)


### TO-DO
- [ ] Melhorar as mensagens de erros da API.
- [ ] Implementar uma rotina para enviar novamente todos os pedidos que o captcha foi resolvido incorretamente.