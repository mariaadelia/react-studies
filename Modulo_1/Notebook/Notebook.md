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
    
    - **app.tsx** - é onde temos o código que é mostrado
    
    - **index.css** - onde tem os arquivos de reset
    
    - **index.tsx** - onde é renderizado o noso código (bem como no Angular mesmo)
    
    - **react-app-env.d.ts** - arquivos de descrição que são usados pelo Typescript
    
    - **reportWebVitals.ts** - um pacote trazido pelo create react
    
    - **setupTests.ts** - configuração de teste



Ex: retirar o que não for usado (.css .test.tsx .svg .reportVitals e o setup) e escrever o nosso amado hello world






