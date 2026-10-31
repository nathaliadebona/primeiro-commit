# 💜 Primeiro Commit

Landing page de conversão para uma mentoria fictícia de front-end, feita para quem quer sair do zero e chegar ao primeiro portfólio. Desenvolvida do zero em **HTML, CSS e JavaScript puro**, sem frameworks ou bibliotecas de front-end.

> Projeto pessoal de estudo, construído como prática de fundamentos de front-end: estrutura semântica, layout responsivo com Grid e Flexbox, animações com CSS e JavaScript e validação de formulário personalizada. A mentoria, os planos e os depoimentos são fictícios.

<!-- Adicione aqui um print ou GIF da página, por exemplo:
![Página inicial com o terminal animado](assets/hero.gif)
-->

---

## 🔗 Demo

https://nathaliadebona.github.io/primeiro-commit/

---

## 📋 Sobre o projeto

O **Primeiro Commit** é uma landing page pensada com foco em conversão: o objetivo da página é levar a pessoa até o formulário de lista de espera. O nome e a identidade visual brincam com o Git, e o conceito aparece em vários detalhes, como a trilha da mentoria apresentada como um `git log` e o terminal que digita um commit no topo da página.

A página tem 7 seções: **Hero**, **Para quem**, **Trilha**, **Depoimentos**, **Planos**, **FAQ** e **Inscrição**.

---

## ✨ Funcionalidades

- 🧭 **Menu fixo** — header que acompanha a rolagem, com links para as seções e botão de CTA sempre à vista
- 🌊 **Rolagem suave** — com `scroll-behavior` e `scroll-padding-top` para o título da seção não ficar escondido atrás do header
- ⌨️ **Terminal animado no hero** — o comando `git commit` é digitado letra por letra com `setTimeout`, com cursor piscante feito em CSS
- 🗂️ **Trilha como `git log`** — cada etapa da mentoria é apresentada como um commit, com hash, mensagem e linha separadora
- 💬 **Depoimentos** — cards com aspas decorativas criadas com pseudo-elemento
- 💳 **Planos com destaque** — plano principal com gradiente, borda roxa e selo posicionado sobre a borda
- ❓ **FAQ em accordion** — usa a tag nativa `<details>`, com ícone animado e apenas uma pergunta aberta por vez
- ✅ **Validação de formulário** — validação customizada de nome, e-mail (com expressão regular) e desafio, com mensagem de erro por campo e estados visuais de foco, erro e sucesso
- 🖥️ **Mensagem de sucesso em formato de terminal** — confirmação com o nome da pessoa após o envio
- 📱 **Design responsivo** — mobile first, com pontos de quebra em `48rem` e `64rem`
- ♿ **Acessibilidade** — HTML semântico, `label` ligado a cada campo, foco visível e respeito a `prefers-reduced-motion`

---

## 🛠️ Tecnologias

- **HTML5** — marcação semântica (`header`, `main`, `section`, `article`, `figure`, `details`)
- **CSS3** — variáveis CSS, Grid, Flexbox, media queries, `position` (sticky, relative e absolute), pseudo-elementos, `@keyframes`, gradientes e transições
- **JavaScript (Vanilla)** — manipulação do DOM, eventos, `classList`, expressão regular, template literals e `setTimeout`
- **Font Awesome** — ícones via CDN
- **Google Fonts** — Plus Jakarta Sans (texto e títulos) e JetBrains Mono (detalhes de código)

---

## 📁 Estrutura do projeto

```
primeiro-commit/
├── index.html    # Estrutura das 7 seções
├── style.css     # Estilos, variáveis e responsividade
├── script.js     # FAQ, validação do formulário e terminal animado
├── LICENSE
└── README.md
```

---

## 🎨 Paleta de cores e tipografia

| Uso | Cor |
|---|---|
| Fundo da página | `#FAF8F5` |
| Fundo alternativo das seções | `#F1EDE6` |
| Texto | `#2B2833` |
| Roxo (botões de CTA) | `#6D4AFF` |
| Roxo escuro (hover e destaques) | `#5A38E0` |
| Verde-menta (detalhes) | `#7FE5C0` |
| Verde-menta escuro (ícones de check) | `#1E9E75` |
| Fundo do editor, do terminal e do footer | `#1E1B2E` |
| Barra de janela do editor | `#2A2640` |

**Tipografia:** [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) (corpo e títulos), [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) (etiquetas, trilha, terminal)

A regra de ouro do design: o roxo é a única cor forte nos botões, para o olhar ir direto ao CTA. O verde-menta fica nos detalhes.

---

## 🧠 Aprendizados

Este projeto foi construído em etapas, com foco em pontos que eu ainda não tinha praticado:

- **Pseudo-elementos** — `::before` e `::after` para criar as aspas dos depoimentos, o ícone de "+" do FAQ e a linha de comando da mensagem de sucesso
- **Posicionamento** — `position: sticky` no header e `position: absolute` com `transform` para centralizar o selo do plano sobre a borda
- **CSS Grid e Flexbox** — planos em duas colunas e cards em três, com botões alinhados na base usando flex em coluna e `flex-grow`
- **Mobile first com mais de um ponto de quebra** — e a decisão de mover o menu para `64rem` quando em `48rem` os links quebravam de linha
- **Especificidade** — entender por que uma regra com `id` vence uma regra de tag, mesmo dentro de um `@media`
- **Seletores** — `:nth-child`, `:last-child`, seletor de atributo `[open]` e filho direto `>`
- **Animações** — `@keyframes` para o cursor piscante e `prefers-reduced-motion` para respeitar quem prefere menos movimento
- **Validação customizada** — `submit` com `preventDefault`, checagem de campos vazios, e-mail com expressão regular e controle de estado com uma "bandeira" de formulário válido
- **DOM** — `classList`, `nextElementSibling`, `textContent` e a propriedade `hidden`
- **Eventos do `<details>`** — usar `toggle` para fechar as outras perguntas do FAQ
- **Ler erros do console** — descobrir um `classlist` escrito errado pela mensagem do navegador
- **Depuração com DevTools** — modo dispositivo para encontrar problemas de largura e de alinhamento

---

## 🚀 Como rodar o projeto

Não há dependências ou build: é só HTML, CSS e JS puro.

```bash
# Clone o repositório
git clone https://github.com/nathaliadebona/primeiro-commit.git

# Entre na pasta
cd primeiro-commit

# Abra o index.html no navegador
```

Ou use a extensão **Live Server** do VS Code para rodar com recarregamento automático.

---

## 👩‍💻 Autoria

Desenvolvido por **Nathalia** como projeto de estudo em front-end.

Github https://github.com/nathaliadebona
Portfólio https://nathaliadebona.github.io/portfolio/

---

## 📄 Licença

Distribuído sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

Este é um projeto fictício, feito para estudo: nenhuma mentoria está sendo vendida, e os nomes, planos e depoimentos são inventados.
