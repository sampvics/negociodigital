# API de Carros - WebAPI

Está é uma API RESTful desenvolvida para o gerenciamento de informações de carros, utilizando **Node.js** e **Express**. A API permite criar, ler, atualizar e excluir carros, com validação dos dados utilizando a biblioteca **Joi**.

Este é um projeto inicial de CRUD (Create, Read, Update, Delete),que será expandido no futuro. Este é apenas o escopo inical.

## Funcionalidades

- **GET /**: Retorna a lista completa de carros.
- **GET /:sigla**: Retorna as informações de um carro específico, identificado pela sigla
- **POST /**: Adiciona um novo carro à lista.
- **PUT /:sigla**: Atualiza as informações de um carro específico, identificado pela sigla.
- **DELETE /:sigla**: Remove um carro específico pela sigla.

## Estrutura do Projeto

- **app.js**: Arquivo principal que configura o servidor Express e as rotas da API.
- **tabelacarros.js**: Contém a lista de carros (dados fictícios).
- **validacao.js**: Contém as validações Joi para os dados dos carros.

## Endpoints

### 1. **GET /**

Retorna a lista completa de carros disponíveis.

#### Exemplo de Resposta:

```json
[
  {
    "nome": "Ferrari",
    "sigla": "FER",
    "velocidadeMaxima": 340,
    "potencia": 800,
    "consumo": 5.5,
    "aceleracao": 2.9,
    "preco": 300000
  },
  {
    "nome": "Lamborghini",
    "sigla": "LAM",
    "velocidadeMaxima": 355,
    "potencia": 770,
    "consumo": 6.2,
    "aceleracao": 2.8,
    "preco": 330000
  }
]
```
### 2. **GET /:sigla**

Retorna as informações de um carro específico, identifado pela sigla.

### Exemplo de Requisição:

`GET /FER`

### Exemplo de Resposta:

```json
{
    "nome": "Ferrari",
    "sigla": "FER",
    "velocidadeMaxima": 340,
    "potencia": 800,
    "consumo": 5.5,
    "aceleracao": 2.9,
    "preco": 300000
}
```
### 3. **POST /**

Adiciona um novo carro à lista.

#### Exemplo de Requisição:

`POST \`

**Content-Type:** application/json

```json
{
    "nome": "BMW",
    "sigla": "BMW",
    "velocidadeMaxima": 200,
    "potencia": 500,
    "consumo": 7.5,
    "aceleracao": 4.0,
    "preco": 1200000  
}
```

#### Exemplo de Resposta:

```json
{
    "nome": "BMW",
    "sigla": "BMW",
    "velocidadeMaxima": 200,
    "potencia": 500,
    "consumo": 7.5,
    "aceleracao": 4.0,
    "preco": 1200000  
}
```

### 4. **PUT /:sigla**

Atualiza as informações de um carro específico.

#### Exemplo de Requisição:

`PUT /BMW`

**Content-Type:** application/json

```json
{
  "preco": 130000
}
```

#### Exemplo de resposta:

```json
{
    "nome": "BMW",
    "sigla": "BMW",
    "velocidadeMaxima": 200,
    "potencia": 500,
    "consumo": 7.5,
    "aceleracao": 4.0,
    "preco": 130000
}
```

### 5. **DELETE /:sigla**

Remove um carro específico pela sigla.

#### Exemplo de Requisição:

`DELETE /BMW`

#### Exemplo de Resposta:

```json
{
    "nome": "BMW",
    "sigla": "BMW",
    "velocidadeMaxima": 200,
    "potencia": 500,
    "consumo": 7.5,
    "aceleracao": 4.0,
    "preco": 130000
}
```

## Como rodar os projetos

1. **Clone este repositórios:**

```bash

git clone https://github.com/seu-usuario/nome-do-repositorio.git
``` 
2. **Install as dependências:**

Navegue até o diretorio do projeto e execute o comando:

```bash
npm install
```
3. **Inicie o servidor:**
Após a instalaçoes das dependencias, inicie o servidor:

```bash
node ./app.js
```
4. **Acesse o API**

A API está disponivel em [https://localhost:3000]

## Validações

Os dados enviados para APi são validados com **Joi** para garantir que todos os campos sejam fornecidos corretamente. As validações incluem:
- O nome do carro deve ter pelo menos 3 caracteres
- A sigla deve ter exatamente 3 caracteres
- A potencia, velocidade maxima, consumo, aceleração e preço devem ser numeros válidos.
- Durante a atualização , pelo menos um campo precisa ser fornecido.