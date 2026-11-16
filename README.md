# 🍰 Doce Encanto

Site estático de confeitaria, moderno e responsivo, desenvolvido com **React** e **TypeScript** com foco em treinar **props**, componentização, `children`, layout responsivo e fidelidade a um design do Figma.

🔗 **Demo:** [isabellyfranklin.github.io/Cake-Shop](https://isabellyfranklin.github.io/Cake-Shop/)

<!-- Adicione aqui um print ou GIF da home -->
<!-- ![Preview do projeto](./docs/preview.png) -->

---

## 💡 Sobre o projeto

O Doce Encanto é uma landing page de uma confeitaria fictícia, com visual elegante e aconchegante e foco em uma navegação simples e limpa. O layout foi desenhado no Figma e implementado em React, seguindo as medidas do design (desktop e mobile).

Por ser um site estático (sem backend, carrinho ou filtros), o foco é o treino de front-end. O objetivo é praticar:

- **Props** para deixar os componentes reutilizáveis e passar dados entre eles
- Criação de componentes reutilizáveis (props e `children`)
- Tipagem de props com TypeScript
- Renderização de listas com `map`
- Estilização com CSS Modules e variáveis globais
- Layout responsivo (desktop, tablet e mobile) com Flexbox e Grid
- HTML semântico e acessibilidade básica
- Fidelidade ao design (medidas, fontes e cores do Figma)

---

## ✨ Seções

- Header com navegação
- Hero
- Categorias ("Qual é o seu momento?")
- Mais vendidos ("Amor à primeira fatia")
- Sobre
- Depoimentos
- Newsletter
- Footer

---

## ✅ Status

> ✅ **Projeto concluído.** Todas as seções foram construídas, o layout está responsivo e segue as medidas do Figma.

---

## 🛠️ Tecnologias

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- CSS Modules
- Figma (design)
- GitHub Pages (deploy)

---

## 🚀 Como rodar o projeto

```bash
# Clone o repositório
git clone https://github.com/isabellyfranklin/Cake-Shop.git

# Entre na pasta
cd Cake-Shop

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Depois, acesse `http://localhost:5173` no navegador.

### Scripts

| Comando | O que faz |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera a versão de produção na pasta `dist` |
| `npm run deploy` | Faz o build e publica no GitHub Pages |

---

## 📁 Estrutura de pastas

```
src/
├── assets/        # imagens e ícones
├── components/    # seções da página (Nav, Hero, About, Testimonials, Newsletter, Footer...)
├── interface/     # componentes reutilizáveis (Section, TypeCake, ProductCard...)
├── styles/        # variáveis globais (cores e fontes) e estilos base
├── App.tsx
└── main.tsx
```

---

## 🎨 Design

O layout foi criado no Figma, com paleta em tons de creme, marrom chocolate e rosa suave, e tipografia serifada (Playfair Display) nos títulos e sans-serif (Inter) nos textos.

🔗 [Ver design no Figma](https://www.figma.com/design/fNUICDonmueTVlqDolsiUk/Sem-t%C3%ADtulo?node-id=0-1)
