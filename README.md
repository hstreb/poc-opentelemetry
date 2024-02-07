# prova de conceito sobre uso do OpenTelemetry Collector

## rodar

```sh
docker compose up -d
```

### node

```
cd nodejs

npm install --save @opentelemetry/api
npm install --save @opentelemetry/auto-instrumentations-node

env OTEL_EXPORTER_OTLP_PROTOCOL=grpc OTEL_SERVICE_NAME="poc-nodejs" node --require @opentelemetry/auto-instrumentations-node/register app.js
```

Em outro terminal:

```sh
curl localhost:3000
```

Verificar se enviou dados para o Collector:

```sh
docker compose logs | grep poc-nodejs
```

Saída esperada:

```
otel-collector-1  |      -> service.name: Str(poc-nodejs)
```
