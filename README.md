# config-examples
Alguns exemplos de módulos utilizados para utilização de arquivos de configuração de variáveis de ambiente.

## config
Utilizando [config]() é necessário ter uma pasta /config na raiz do projeto, lá devem ser colocados os arquivos json com a nomenclatura {{ambiente}}.json.

## convict
Convict utiliza schemas para validar as variáveis, utiliza arquivos .json com a nomenclatura {{ambiente}}.json. Acaba sendo bem verboso.

## dotenv
Com o dotenv os arquivos de configuração possuem a configuração {{ambiente}}.env no padrão chave=valor. Os arquivos .env não devem ser commitados.

## env-o-loader