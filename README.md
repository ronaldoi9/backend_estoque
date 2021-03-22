# Arquitetura do Backend

O backend deste projeto foi implementado explorando aplicar ao máximos os conceitos da Clean Architecture. Um
dos principais conceitos é um princípio de design chamado **SOLID**:

- **S** — Princípio da Responsabilidade Única (SRP): Uma classe deve ter um, e somente um, motivo para mudar.
- **O** — Princípio do Aberto/Fechado (OCP): Você deve ser capaz de estender um comportamento de uma classe, sem modificá-lo.
- **L** — Princípio da Substituição de Liskov (LSP): As classes base devem ser substituíveis por suas classes derivadas.
- **I** — Princípio da Segregação de Interfaces (ISP): Muitas interfaces específicas são melhores do que uma interface única.
- **D** — Princípio da Inversão de Dependências (DIP): Dependa de uma abstração e não de uma implementação.

Estes conceitos são extremamente importantes para construção de sistema sólido, testável, escalável, flexível a mudanças, dentre outros benefícios.

![clean](https://user-images.githubusercontent.com/40616142/111924794-f2473080-8a84-11eb-9b71-a7148c09b9bc.png)

### Entidades
A camada de entidade contém as regras de negócios, e são independentes da aplicação. Ou seja, esta regra existiria mesmo que não houvesse
a implementação do sistema.

### Casos de Uso
Os casos de uso são as operações de alto nível da aplicação, na qual, explica como será realizada as operações do sistema. Esta camada contém
todas as regras de negócio que são dependentes da aplicação.

### Adaptadores de Interface
Nesta camada, temos classes e interfaces chamadas de Adaptadores. Ela é responsável por converter dados de um formato para outro, para tornar o nosso modelo
de dados independente do banco que iremos consumir.

### Frameworks e Drivers
Esta é a camada mais externa da aplicação, que contém todos os frameworks que foram escolhidos para construção do projeto.

# Decisões de Projeto
- Para linguagem de programação foi utilizado o Typescript, que foi fundamental para obter o controle da comunicação entre as camadas da arquitetura.
- Para auxiliar na construção da aplicação web foi utilizado o Express que é um framework para aplicativo da web do Node.js mínimo e flexível que fornece um conjunto robusto de recursos para aplicativos web e móvel.
- Para o banco de dados foi utilizado o SQLite, por ser leve, rápido e fácil de implementar.
- Para o mapeamento objeto relacional (ORM) utilizou-se o sequelize por ser robusto e aplicável aos diversos bancos relacionais existentes atualmente.
- Para realizar a composição dos módulos da aplicação utilizou-se um pattern chamado Composition Root, que é responsável por "sujar" a arquitetura para deixar todo o resto desacoplado.

# Getting Started
Após clonar o repositório, siga os comandos abaixo para executar a API:

Instala todas as dependências do projeto.
### `yarn install`

Cria a tabela no banco.
### `yarn migrates`

Compila a aplicação para produção e executa no modo de desenvolvimento.
### `yarn dev`
