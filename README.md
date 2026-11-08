# 🍰 Doce Encanto

Site de confeitaria moderno e responsivo, desenvolvido com **React** e **TypeScript** para praticar componentização, props, `children`, estado com `useState` e layout responsivo com CSS Modules.

<!-- ![Preview do projeto](./docs/preview.png) -->

🔗 **Demo:** _em breve_

---

## 💡 Sobre o projeto

O Doce Encanto é uma landing page de uma confeitaria fictícia, com visual elegante e aconchegante e foco em uma navegação simples e limpa. O layout foi desenhado no Figma e depois implementado em React, mantendo a fidelidade ao design.

O objetivo é praticar:

- Criação de componentes reutilizáveis (props e `children`)
- Tipagem de props com TypeScript
- Renderização de listas com `map`
- Renderização condicional
- Estado com `useState` e efeitos com `useEffect`
- Estilização com CSS Modules e variáveis CSS
- Layout responsivo (desktop, tablet e mobile) com Flexbox e Grid
- HTML semântico e acessibilidade básica

---

## 📄 Seções da página

| Seção | Descrição |
| --- | --- |
| **Header** | Logo, links de navegação, carrinho e menu hambúrguer no mobile |
| **Hero** | Chamada principal com botões de ação e imagem em destaque |
| **Qual é o seu momento?** | Categorias de bolo (aniversário, casamento, cupcakes...) |
| **Amor à primeira fatia** | Os bolos mais vendidos, com preço e botão de adicionar |
| **Sobre** | A história da confeitaria |
| **Quem prova, se encanta** | Depoimentos de clientes com avaliação em estrelas |
| **Newsletter** | Formulário para receber novidades por e-mail |
| **Footer** | Links de navegação, redes sociais e direitos autorais |

---

## ✅ Status

**Já feito**
- [x] Design no Figma
- [x] Header e navegação
- [x] Menu mobile (hambúrguer) com `useState`
- [x] Hero
- [x] Categorias
- [x] Mais vendidos
- [x] Seção Sobre
- [x] Depoimentos
- [x] Newsletter e Footer
- [x] Responsividade em todas as seções
- [x] Navegação por âncoras com rolagem suave

**Próximos passos**
- [ ] Carrinho funcional (adicionar, remover e total)
- [ ] Filtro de produtos por categoria
- [ ] Envio real do formulário da newsletter
- [ ] Deploy no GitHub Pages

---

## 🛠️ Tecnologias

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- CSS Modules
- [gh-pages](https://github.com/tschaub/gh-pages) (deploy)
- Figma (design)

---

## 🚀 Como rodar o projeto

```bash
git clone https://github.com/isabellyfranklin/Cake-Shop.git
cd Cake-Shop
npm install
npm run dev
```

Depois, acesse `http://localhost:5173/Cake-Shop/` no navegador.

### Scripts

| Comando | O que faz |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Verifica os tipos e gera a versão de produção em `dist/` |
| `npm run preview` | Mostra localmente a versão de produção |
| `npm run lint` | Roda o ESLint |
| `npm run deploy` | Gera o build e publica no GitHub Pages |

---

## 📁 Estrutura de pastas

```
src/
├── assets/          # imagens e ícones
├── components/      # seções da página
│   ├── Nav/
│   ├── Hero/
│   ├── TypeOfCakes/
│   ├── Cakes/
│   ├── About/
│   ├── Testimonials/
│   ├── NewsLetter/
│   └── Footer/
├── interface/       # componentes reutilizáveis
│   ├── Section/
│   ├── TypeCake/
│   ├── ProductCard/
│   └── TestimonialCard/
├── styles/
│   ├── global.css     # reset e estilos globais
│   └── variables.css  # cores e fontes
├── App.tsx
└── main.tsx
```

Cada componente tem sua própria pasta com o `.tsx` e o `.module.css`.

---

## 🎨 Design

O layout foi criado no Figma, com paleta em tons de creme, marrom chocolate e rosa suave, e tipografia serifada (Playfair Display) nos títulos e sans-serif (Inter) nos textos.

| Cor | Hex | Uso |
| --- | --- | --- |
| Creme | `#FFFCF9` | Fundo principal |
| Rosa suave | `#F8E7E2` | Fundo de seções |
| Marrom escuro | `#5A3A2E` | Títulos, textos e botões |
| Marrom claro | `#856B60` | Textos secundários |

🔗 [Ver design no Figma](#) _(adicione o link aqui)_

---

Feito com 🤎 por [Isabelly Franklin](https://github.com/isabellyfranklin)
