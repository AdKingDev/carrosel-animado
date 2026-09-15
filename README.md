# 🎞️ Carrossel Animado

Um carrossel de imagens desenvolvido com **HTML, CSS e JavaScript puro**, com navegação manual e transições suaves entre os slides.

O projeto foi criado com foco no estudo de **manipulação do DOM, eventos e movimentação de elementos utilizando JavaScript**.

## 🔗 Demonstração

[Acessar projeto](https://carrosel-animado.vercel.app/)

## 💡 Sobre o projeto

O Carrossel Animado exibe uma sequência de três imagens e permite navegar entre elas utilizando os controles laterais.

A movimentação acontece através da alteração da propriedade `transform` do container das imagens. O JavaScript controla qual slide está ativo por meio de um índice e atualiza sua posição sempre que um dos controles é acionado.

Ao chegar à última imagem, o carrossel retorna para a primeira — e o mesmo acontece no sentido contrário — criando uma navegação contínua.

## ⚙️ Como funciona

A lógica do projeto é baseada em três pontos principais:

* Um **índice** armazena a posição da imagem atual;
* Eventos de `click` alteram esse índice através dos botões anterior e próximo;
* A função responsável pelo carrossel utiliza `translateX()` para movimentar horizontalmente o conjunto de imagens.

O operador `%` é utilizado para manter o índice dentro da quantidade de imagens disponíveis, permitindo que a navegação continue de forma circular.

## 🛠️ Tecnologias

* **HTML5** — estrutura do carrossel;
* **CSS3** — layout, estilização e transições;
* **JavaScript** — controle da navegação e manipulação do DOM.

## 🧠 Conceitos praticados

Durante o desenvolvimento deste projeto, foram trabalhados conceitos como:

* Seleção de elementos do DOM;
* `addEventListener()`;
* Manipulação de estilos através do JavaScript;
* Arrays/NodeLists e `.length`;
* Operador módulo `%`;
* Funções;
* Índices;
* CSS Flexbox;
* `transform: translateX()`;
* Transições com CSS.

## 📄 Licença

Este projeto está sob a licença MIT.

---

Desenvolvido por **Adriano Júnio**.
