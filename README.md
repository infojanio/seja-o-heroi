# seja-o-heroi
Semana Omnistack 11


Criação de Projeto ReactJS

Configuração do ambiente
1- Instalação do NodeJS, interpretador V8, ou seja motor do Google Chrome retirado para interpretar fora do navegador.
2- Configuração do VSCODE, instalar extensões:  Material icon theme, 

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
Criação do backend
1- Criar a pasta backend, depois entrar na pasta pelo prompt (NODE.JS), executar: npm init -y
2- Instalar o framework express, digite no terminal do VSCODE: npm install express 
* Usamos por padrão a porta 3333
3-Executa com node index.js  (sendo que index.js é o arquivo principal)
4- Instalar o nodemon, digite no terminal: npm install nodemon -D  (apenas para ambiente de desenvolvimento -D) 
5- Entre no arquivo package.json, altere ("scripts": {  "start": "nodemon src/index.js"  },  
6- Usaremos o banco de dados SQLite que é um modelo relacional, diferente dos NoSql, exemplo: MongoDB
7- Instale o KNEX, que é um Query Builder do SQLite, permite usarmos sintaxe javascript. digite no terminal: npm install knex
8- Instale o driver do SQLite, digite no terminal: npm install sqlite3
9- Estabelecer uma conexão com o banco de dados, digite no terminal: npx knex init (cria um arquivo de configuração para cada ambiente)
10- Configurar o banco de dados, no aquivo knexfile.js, altere:  filename: './src/database/db.sqlite' (o caminho para o banco) 
11- Definir as entidades e as funcionalidades da aplicação para criar as tabelas no banco de dados.
12- Criar uma migration, ou seja, será registrado um histórico de todas alterações que acontecerem no banco de dados, crie uma pasta migrations dentro da pasta database, altere o arquivo knexfile.js, adicione as linhas abaixo:   
-----------------------------------------
migrations: {
directory: './src/database/migrations'
}
  },
-----------------------------------------
obs. link para api knex: www.knex.org
13- Criar a primeira migrate, responsável por criar a tabela 'ongs' dentro do banco de dados, 
digite no terminal: npx knex migrate:make create_ongs 
(create_ongs -> esse é o nome da migrate)
14- Criação da tabela, dentro do arquivo criado, create_ongs, insira os dados da tabela,

exports.up = function(knex) {
return knex.schema.createTable('ongs', function(table) {
table.string('id').primary();
table.string('name').notNullable();
table.string('email').notNullable();
table.string('whatsapp').notNullable();
table.string('city').notNullable();
table.string('uf', 2).notNullable();
}); 
};
exports.down = function(knex) {
return  knex.schema.dropTable('ongs');
};

15- digite para criar a tabela o comando no terminal: npx knex migrate:latest
*obs. Vale lembrar que para desfazer a última ação, npx knex migrate:rollback
16- Após configurar as rotas e finalizar o backend, instale o cors, módulo quem define quem poderá acessar a aplicação
digite: npm install cors , depois é só incluir no index.js - app.use(cors());	
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
