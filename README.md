# dolar-exchange
 app de conversão de montante em USD para BRL.


# Frontend Developer Jr 

Seu desafio será construir uma aplicação de conversão de montante em DÓLAR para REAL. 

A aplicação terá duas etapas, inserir os valores e mostrar os valores retornados.

Primeira Etapa

- A aplicação deve mostrar a cotação do dia

    Para cotação você pode usar a API: [https://docs.awesomeapi.com.br/api-de-moedas](https://docs.awesomeapi.com.br/api-de-moedas)

    **Exemplo:**

    - Cotação do dia: `R$ 4,15`
- Deve-se ter um campo para digitar o valor desejado em dólar e a taxa do estado

    **Exemplo:** 

    - Digite o valor em Dólar: `US$ 1200.00`
    - Taxa do estado: `9,5%`
- Deve-se ter um radio button para selecionar se a compra é em dinheiro ou cartão

2. Segunda Etapa

- A aplicação deve mostrar os seguintes dados
    1. Cotação Dolar
    2. IOF
    3. Total em dólar sem imposto
    4. Total em dólar com imposto
    5. Total em real sem imposto
    6. Total em real com imposto

### Possíveis dúvidas:

- IOF é um imposto federal e tem com intuito ser um regulador da economia nacional.
    - **Exemplo: Em dinheiro é 1,1%, em cartão 6.4%**
- Taxa do estado é: Em EUA cada estado tem sua politica de cobrança de impostos
    - **Exemplo: Orlando: 6,5%, Las Vegas: 8,19%, Nova Iorque: 8,87%**
- Sobre as operações financeiras, é correto afirmar que:
    1. Comprando com dinheiro: [(Valor do produto em dólar) + (imposto do estado aonde esta comprando)] x (valor do dólar + IOF da compra de dólar)
        - **Exemplo: (USD$ 149,00 + 8,87%) * (R$ 4,15 + 1,10%)**
    2. Comprando com cartão: [(Valor do produto em dólar) + (imposto do estado aonde esta comprando) + (IOF de transações internacionais)] x (valor do dólar)
        - **Exemplo: [(USD$ 149 + 8,87%) * R$ 4,15] + 6,38%**

### **Entrega**

- O código possui algum controle de dependências?
- O resultado final está completo para ser executado?
- O resultado final atende ao que se propõe fazer?
- O resultado final atende totalmente aos requisitos propostos?
- O resultado final é visualmente elegante?

### **Boas Práticas**

- O código está de acordo com o guia de estilo da linguagem?
- O código está bem estruturado?
- O código faz o bom uso de *Design Patterns*?

### **Documentação**

- O código foi entregue com um arquivo de README claro de como se guiar?
- O código possui comentários pertinentes?
- O código está em algum controle de versão?
- Os commits são pequenos e consistentes?
- As mensagens de commit são claras?

### Deploy

- Publique sua aplicação ([now](https://zeit.co/)/[heroku](https://www.heroku.com)/[netlify](https://www.netlify.com)/outros)
- Publique seu código no seu perfil no GitHub

### **Outras informações**

- O layout é livre
- Você pode usar **React**, Angular ou ELM
- Testes são legais, mas não são obrigatórios

### **Material de Estudo**

- [Boas Práticas na Stone](https://github.com/stone-payments/stoneco-best-practices/blob/master/README_pt.md)
- [Airbnb Javascript](https://github.com/airbnb/javascript)

# Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
