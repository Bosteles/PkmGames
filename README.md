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

## Save states

O progresso dentro do jogo (save/save state) é salvo automaticamente pelo próprio emulador no armazenamento do navegador, associado àquele jogo específico — ao reabrir o mesmo jogo depois, ele carrega sozinho de onde parou, sem precisar baixar/enviar arquivo nenhum. Isso fica só nesse navegador/aparelho; use o menu do emulador (dentro do player) se quiser baixar um save avulso para levar a outro dispositivo.

O emulador só grava esse save no armazenamento a cada poucos segundos (não a cada mudança), então ao fechar o jogo o app espera um pouco antes de liberar os recursos, dando tempo dessa gravação terminar — feche o player normalmente pelo botão "Fechar" em vez de simplesmente recarregar a página logo depois de salvar.

## Backup

O botão **"Exportar progresso"** gera um JSON com o progresso, a lista de ROMs adicionadas (apenas nomes, não os arquivos) e as configurações do emulador — útil para levar de um aparelho a outro.
