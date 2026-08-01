# Pokémon Collection by André

App web (PWA) para catalogar sua coleção de jogos Pokémon, acompanhar progresso e jogar, direto no navegador, os jogos de **GB, GBC, GBA e NDS** cujas ROMs você mesmo importar.

## Importante sobre ROMs e BIOS

Este app **não contém, não busca e não baixa** nenhuma ROM, BIOS ou firmware. Você precisa importar seus próprios arquivos (de jogos que tenha o direito de usar). Tudo fica salvo apenas no seu aparelho (IndexedDB/localStorage) — nada é enviado para nenhum servidor.

## Como usar

1. Abra `index.html` publicando a pasta em qualquer servidor estático (GitHub Pages, Netlify, Vercel, etc.) ou rodando localmente (`python3 -m http.server`, por exemplo).
2. Na aba **Coleção**, cada jogo de GB/GBC/GBA/NDS tem um botão **"Adicionar ROM"** — selecione o arquivo do jogo. O card passa a mostrar "✅ ROM adicionada" e libera o botão **"▶ Jogar"**. Se o nome do arquivo não parecer mencionar o jogo, o app avisa antes de aceitar.
3. Para importar várias ROMs de uma vez, use **"📁 Importar pasta de ROMs"**: escolha a pasta com seus arquivos `.gb`/`.gbc`/`.gba`/`.nds` e o app tenta casar cada um com o jogo certo pelo nome do arquivo (ignorando tags como "(USA)", "[!]", acentos etc.). Uma tela de revisão mostra os pareamentos encontrados para você confirmar ou corrigir antes de importar — nada é adicionado sem essa confirmação.
4. Use o filtro **"ROM: com ROM adicionada / sem ROM"** para ver rapidamente o que já foi importado.
5. Na aba **Emuladores**, você pode:
   - Ver quantos jogos de cada plataforma já têm ROM.
   - Enviar um **BIOS/firmware opcional** para GBA e NDS (melhora compatibilidade; sem ele o emulador tenta rodar mesmo assim).
   - Escolher o núcleo do NDS (`melonds`, `desmume`, `desmume2015`) — se o jogo não iniciar sem BIOS, troque para `desmume`.
6. 3DS, Switch e jogos de PC aparecem só como catálogo (status/nota + um campo livre "onde eu jogo isso"), sem emulador integrado — não existe emulação madura de 3DS/Switch em navegador, e os principais emuladores nativos desse tipo foram encerrados após ações judiciais da Nintendo em 2024.

## Instalar como app (PWA)

Abrindo o site pelo Chrome/Edge no Android ou desktop, aparece o botão **"Instalar app"** no topo (ou o menu "Adicionar à tela inicial"). Não é necessário gerar um APK — a PWA funciona offline e se comporta como um app instalado.

## Estrutura do projeto

- `index.html` — estrutura da página
- `style.css` — estilos
- `app.js` — catálogo, progresso, ROMs (IndexedDB), configuração de emuladores e player (EmulatorJS via iframe isolado)
- `manifest.webmanifest`, `sw.js`, `icons/` — suporte a PWA (instalação e uso offline)

## Como salvar o progresso

**Save dentro do jogo (o "CONTINUE" da tela título)** funciona normalmente: salve pelo menu do próprio jogo e, ao reabrir, o progresso estará lá.

Nos bastidores, o app não depende da persistência do EmulatorJS para isso. A biblioteca espelha `/data/saves` no IndexedDB, mas esse espelho é apagado no começo da sessão seguinte (o `.srm` era gravado e sumia ao reabrir). Então o app lê o arquivo `.srm` direto do sistema de arquivos virtual do emulador e guarda uma cópia no próprio banco do app — periodicamente enquanto você joga, ao fechar o player e ao sair da página. Na abertura seguinte, ele grava o arquivo de volta e reinicia o núcleo para que o jogo leia o save.

**Save State** (menu ☰ do emulador → "Armazenar/Carregar Save State") continua disponível como alternativa, salvando no navegador sem baixar arquivo. Em **Ajustes → Save States** dá pra configurar slot e intervalo.

Tudo isso fica apenas neste navegador/aparelho.

## Backup

O botão **"Exportar progresso"** gera um JSON com o progresso, a lista de ROMs adicionadas (apenas nomes, não os arquivos) e as configurações do emulador — útil para levar de um aparelho a outro.
