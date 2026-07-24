# Fotos da página

As 5 fotos já estão no lugar, otimizadas em JPG:

| Arquivo | Foto | Onde aparece |
|---|---|---|
| `queijo.jpg` | queijos na prateleira | seção "A venda" (grande) |
| `doce.jpg` | doce de leite nas formas | prateleira |
| `cachaca.jpg` | garrafas de cachaça Cambéba | prateleira |
| `temperos.jpg` | colheres com temperos (recortada da arte de divulgação) | prateleira |
| `castanhas.jpg` | castanhas nas cestinhas | prateleira |
| `logo.jpg` | logo oficial da loja (quadrada) | navegação, rodapé e preview de compartilhamento |

Para trocar alguma foto no futuro, basta substituir o arquivo mantendo o mesmo nome. Se a página não encontrar um arquivo, ela mostra automaticamente a ilustração correspondente.

## Adicionar um produto novo no carrossel

1. Salve a foto nesta pasta (ex.: `mel.jpg`), de preferência na horizontal (4:3)
2. No `index.html`, dentro de `<div class="trilho">`, copie um bloco `<figure class="foto">...</figure>` inteiro e cole ao lado dos outros
3. No bloco copiado, troque o `src` para `img/mel.jpg`, o texto do `alt` e o texto da `<figcaption class="etiqueta">`

O carrossel aceita quantos produtos quiser — as setas e o deslize se ajustam sozinhos.
