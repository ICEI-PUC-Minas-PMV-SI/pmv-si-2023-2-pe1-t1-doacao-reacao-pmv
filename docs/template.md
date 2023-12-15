# Template padrão do site

Layout padrão do site é composto por um index contendo o css da navbar, search box, custom footer e theme que são importados no início de todo arquivo html.


## Cores

### Paleta de cores base:
| #D9597B                  | #D98BA0                  | #D9A79C                  | #F2D5CE                  | #D9857E                  |
|-------------------------|-------------------------|-------------------------|-------------------------|-------------------------|
| ![#D9597B](https://via.placeholder.com/100/D9597B?text=+) | ![#D98BA0](https://via.placeholder.com/100/D98BA0?text=+) | ![#D9A79C](https://via.placeholder.com/100/D9A79C?text=+) | ![#F2D5CE](https://via.placeholder.com/100/F2D5CE?text=+) | ![#D9857E](https://via.placeholder.com/100/D9857E?text=+) |


### Tema

```
:root-theme:{
  --primary: #D9597B;
  --accent: #D9A79C;
  --background:  #fff1e6;
  --nav-background: #D98BA0;
  --light-text: #ffffff;
  --dark-text:  #333333;
  --paragraph: #999;
  --title: #2e384d;
  --border: #eaeaea;
  --circle: #eaeaea;
  --dark: #222;
  --icon: #414141;
  --box-shadow: rgba(0, 0, 0, 0.1);
  --backdrop: rgba(0, 0, 0, 0.5);
}
```

## Tipografia
Família: sans-serif

### Título de Página:
- Fonte: Raleway

### Título de Seção:
- Fonte: Montserrat

### Rótulos de Componentes:
- Fonte: Lato

### Corpo de Texto:
- Fonte: Open Sans

## Iconografia

🔎 - Age como botão para busca
```
:p: {
    --margin: 0;
    --display: flex;
    --align-items: center;
    --justify-content: center;
    --width: 40px;
    --height: 100%;
    --border: 1px solid var(--light-text);
    --border-radius: 1px;
    --border-left: none;
    --border-top-left-radius: 0;
    --border-bottom-left-radius: 0;
    --position: absolute;
    --top: 0;
    --right: 0;
    --color: var(--light-text);
    --font-size: 1rem;
    --cursor: pointer;
    --background-color: var(--primary);
  }
```




