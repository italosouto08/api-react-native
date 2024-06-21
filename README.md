
# FitBuddy - Seu Companheiro Fitness

## Descrição

FitBuddy é um aplicativo desenvolvido para auxiliar os usuários a manterem-se ativos e saudáveis. Com uma interface amigável e recursos avançados, FitBuddy ajuda você a planejar, monitorar e executar suas atividades físicas, além de mostrar academias e praças da cidade para a prática de exercícios.


## Objetivo

Nosso objetivo é promover a prática regular de exercícios físicos entre nossos usuários. Queremos ser seu parceiro na jornada para uma vida mais saudável e ativa.




## Funcionalidades

- Localização de Atividades: Encontre os melhores locais para realizar suas atividades físicas, como academias da cidade e praças da sua cidade.
- Cadastro de Atividades: Cadastre suas atividades físicas diárias, e escolha uma cor para cada tipo de atividade.
- Acompanhamento de Atividades: Acompanhe suas atividades físicas durante o mês.



## Stack utilizada

**Front-end:** React Native

**Back-end:** Node, Express

**Banco de Dados:** MongoDB


## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/italosouto08/api-react-native.git
```

Entre no diretório do projeto

```bash
  cd my-project
```

Instale as dependências

```bash
  npm install
```

Configure as variáveis de ambiente:

- Crie um arquivo .env na pasta do backend com as seguintes variáveis:
```bash
  PORT = escolha_uma_porta
  MONGODB_URI=sua_url_do_mongodb
```

Inicie o servidor backend:
```bash
  cd backend
  node server.js
```

Configure o Axios no frontend para usar o endereço IPv4 do seu roteador:

- No arquivo de configuração do Axios (app.js), dentro da pasta app, defina a URL base como o endereço IPv4 do seu roteador.
```bash
  import axios from "axios";

const api = axios.create({
  baseURL: "http://seu-endereco-ipv4:porta/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;

```

Inicie o aplicativo

```bash
  npx expo start
```


## Contribuindo

1- Fork o repositório

2-Crie uma branch para sua feature (git checkout -b feature/nova-feature)

3- Commit suas mudanças (git commit -am 'Adiciona nova feature')

4- Envie para o branch (git push origin feature/nova-feature)

5- Abra um Pull Request


## Contato

Se você tiver alguma dúvida ou sugestão, sinta-se à vontade para entrar em contato:

Email: italoivo14@hotmail.com

## Licença

[MIT](https://choosealicense.com/licenses/mit/)

