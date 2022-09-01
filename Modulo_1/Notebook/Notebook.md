# React: Escrevendo com TypeScript

## React

- Foi criado em 2013 pelo Facebook

- Premissas principais do React:
  
  - Componentização
    
    - Reaproveita as características que aquelas partes compartilham, só muda o necessário (por exemplo o nome do botão)
  
  - Gerenciamento de estado
    
    - Reativo, você aponta o que aquele componente depende e ele já reage a isso (atualiza)

- O *react* tem o **Hot Reload**, ou seja, quando fazemos qualquer mudança lá no nosso arquivo ele já reflete no browser (se estiver rodando o código `npm start`)

- ### Criando um projeto
  
  - O nome não pode ter letra maiúscula 
  
  - ``npx create-react-app nome-que-quiser``
    
    - npx -> executa um pacote sem a necessidade de instala-lo (npm instala)
  
  - #### Para criar o react com *Typescript*
    
    - ``npx create-react-app nomeQueQuiser --template typescript``
  
  - #### Criar o projeto usando o gerenciador de pacote npm
    
    - ``npx create-react-app nomeQueQuiser --use-npm``
    
    - é importante colocar o `--use-npm` pois o react observa se você tem ou não o *yarn* na máquina, caso tenha ele seria instalado como o gerenciador de pacotes padrão
  
  - É possível criar uma combinação de todos esses tipos de inicialização de projeto, só colocar o resto das infos no final

- ### Arquivos do projeto
  
  - **package.json** - do npm, tem as dependências, os scripts que podem ser rodados, os browsers que suportam esse app, etc
  
  - **package-lock.json** - do npm, arquivo fechado que tem as informações da versão
  
  - **node_modules** - tem todos os pacotes que foram instalados no projeto (tem várias pastas)
  
  - **tsconfig.json** - configurações de typescript
  
  - **pasta src** - onde está a nossa estrutura de código (pasta principal)
    
    - **app.tsx** - é onde temos o código que é mostrado (aqui colocamos nossos componentes e tudo mais)
    
    - **index.css** - onde tem os arquivos de reset
    
    - **index.tsx** - onde é renderizado o nosso código (bem como no Angular mesmo)
    
    - **react-app-env.d.ts** - arquivos de descrição que são usados pelo Typescript
    
    - **reportWebVitals.ts** - um pacote trazido pelo create react
    
    - **setupTests.ts** - configuração de teste
  
  - **pasta public**
    
    - **index html** - onde tem o html da página (onde coloca o título da página e tudo mais)

## Componentização

- É boa prática criar uma página chamada *Components* para que saibamos onde estão os nossos componentes (essa pasta fica dentro da pasta **src**), dentro dessa pasta fazemos uma pasta para cada *component* e nomeamos o arquivo de **index.tsx**

- A classe criada para um componente deve estender do **React.Component** e deve importar o React
  
  - O nome do componente sempre deve **começar com letra maiúscula** isso porque o *web-component* é com letra minúscula (dessa forma ele consegue diferenciar as tags criadas e do web-component)
  
  - **Maneira antiga**
    
    - ```typescript
      import React from 'react';
      
      class NomeDaClasse extends React.Component{}
      ```
    
    - Antigamente era preciso usar como classe para que tivéssemos state components (componentes que tivessem estados dentro), porém após a nova versão, não é necessário essa diferenciação (está ficando em desuso)
  
  - **Maneira nova**
    
    - ```typescript
      import react from 'react';
      
      
      function NomeDaFuncao(){
          //Precisa do 'return'
          return(
              //<html aqui>
          )
      }
      export default NomeDaFuncao;
      ```
    
    - Nesse caso ele aceita tanto stateless quanto com estado, e sempre é necessário colocar o export
  
  - A classe **Component** (ou seja, o método antigo)tem uma função obrigatória, a função **render**. Por isso, dentro da classe precisa adicionar essa função
    
    - ```typescript
      import React from 'react';
      
      class NomeDaClasse extends React.Component{
          render(){
      
          }
      }
      ```
    
    - Dentro da função **render** tem um *return* que tem um html em que podemos escrever *javascript* (chamado de *jsx*) dentro dele (ou seja, retornamos o *JSX* que precisamos para criar o componente)
      
      - ```typescript
        return(
            //html aqui
        )
        ```
    
    - É importante exportar a classe ao final
      
      - ```typescript
        export default NomeDaClasse;
        ```
    
    - Classe completa
      
      - ```typescript
        import React from 'react';
        
        class NomeDaClasse extends React.Component{
            render(){
                return(
                    <htmlTag>
                        xxxxxx
                    </htmlTag>
                )
            }
        }
        export default NomeDaClasse;
        ```

- Para que o componente apareça, temos que coloca-los na classe **app.tsx**, para fazer isso, precisamos colocar o nome da classe que tem o componente como uma tag
  
  - ```html
    <NomeDaClasse />
    ```

- Para utilizar o componente criado dentro de outra classe, é só colocar a tag dentro da classe que quero (como fiz com no *app.tsx*)

- **htmlFor**
  
  - Defini ou retoma o valor do atributo for de um elemento <label>, quando coloco htmlFor = "nome", esse nome tem que ser o nome que coloquei no id do atributo que quero que tenha o foco (dessa forma, se clico nesse label ele vai direcionar para o input)

## Array

- ```typescript
  const nomeDoArray = [{
      array1Atributo1: 'Valor atributo 1',
      array1Atributo2: 'Valor atributo 2'
      },{
      array2Atributo1: 'Valor atributo 1',
      array2Atributo2: 'Valor atributo 2'
  }]
  
  
  //Exemplo
  const tarefas = [{
      tarefa: 'Estudar',
      tempo: '02:00:00'
      },{
      tarefa: 'Trabalhar',
      tempo: '08:00:00'
  }]
  ```

- ### Renderização dinâmica de Arrays
  
  - f





Exercício: criar componente lista (com o function), aside, um h2 como o titulo, ul, 2 li's com 1 h3 (nome da tarefa) e 1 span(tempo da tarefa), renderiza a lista (ou seja, coloca lá no app.tsx)


