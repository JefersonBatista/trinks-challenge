# Desafio Técnico da Trinks

A primeira questão de um desafio técnico da Trinks se chama "Números Felizes e Sortudos" e pede para identificar se um determinado número é feliz e se é sortudo.

A aplicação pode ser acessada em https://jefersonbatista.github.io/trinks-challenge.

## Números Felizes

Um número é feliz caso, somando-se recursivamente o quadrado dos seus dígitos, em algum momento o resultado é igual a 1.

Exemplo, o número 19 é feliz, pois: <br />
1^2 + 9^2 = 1 + 81 = 82 <br />
8^2 + 2^2 = 64 + 4 = 68 <br />
6^2 + 8^2 = 36 + 64 = 100 <br />
1^2 + 0^2 + 0^2 = 1

Um máximo de 100 iterações é considerado, ou seja, se após 100 iterações o número não pode ser considerado feliz, ele é considerado não-feliz.

## Números sortudos

Considerando a sequência dos números inteiros positivos: <br />
1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, ...

Começamos por eliminar todos os números pares: <br />
1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, ...

O segundo número da sequência resultante é 3, por isso, eliminamos todos os números cuja posição é múltipla de 3: <br />
1, 3, 7, 9, 13, 15, 19, 21, 25, ...

O terceiro número da sequência resultante é 7, por isso, eliminamos todos os números cuja posição é múltipla de 7: <br />
1, 3, 7, 9, 13, 15, 21, 25, ...

Depois, consideramos o quarto número da sequência resultante, e assim sucessivamente. Os números que permanecem na lista são considerados números sortudos.
Exemplo, o número 19 não é sortudo, como são os números 7 e 13.

## Como executar

1. Clone este repositório e, em um terminal, navegue para o seu diretório
2. Instale suas dependências

```bash
npm i
```

3. Rode o programa:

```bash
npm start
```

4. Abra um navegador e acesse o endereço http://localhost:3000.

## Como testar

1. Após clonar o repositório e ter as dependências instaladas:

```bash
npm t
```
