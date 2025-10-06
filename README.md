# Desafio zoppy back

Desenvolvido com nest 10.0.0

### Configurando o Postgres

Instalação: https://www.postgresql.org/download/

Devemos acessar o postgre e criar o banco de dados (no meu caso chamei o banco de desafio_zoppy-back, mas isso é escolha sua):

```shell
sudo -u postgres psql
```

Criar um usuário (exemplo fictício):

```shell
CREATE USER usuario WITH PASSWORD 'usuario';
```

Criar um banco (database):

```shell
CREATE DATABASE desafio_zoppy_back;
```

Em alguns será necessária uma configuração mais profunda para dar os privilégios do seu usuário para acessar o
banco.<br>
No caso de uma configuração local (lembrar de não fazer isso em produção) podemos transformar nosso usuário em um superusuário:

```shell
ALTER ROLE usuario SUPERUSER;
```

Esse comando acima vai garantir o acesso do banco corretamente<br>

### Configurando o projeto

Para configurar o projeto primeiramente devemos ter o node instalado: <br>
https://nodejs.org/en/download <br>

Na raiz do projeto podemos rodar os comandos:

```shell
npm install
```

E para servir:

```shell
npm run start
```

Link do frontend: <br>
https://github.com/alexantos/produtor-rural-front