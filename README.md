# Pokémon Collection by André

App web (PWA) para catalogar sua coleção de jogos Pokémon, acompanhar progresso e jogar, direto no navegador, os jogos de **GB, GBC, GBA e NDS** cujas ROMs você mesmo importar.

## Importante sobre ROMs e BIOS

Este app **não contém, não busca e não baixa** nenhuma ROM, BIOS ou firmware. Você precisa importar seus próprios arquivos (de jogos que tenha o direito de usar). Tudo fica salvo apenas no seu aparelho (IndexedDB/localStorage) — nada é enviado para nenhum servidor.

## Como usar

1. Abra `index.html` publicando a pasta em qualquer servidor estático (GitHub Pages, Netlify, Vercel, etc.) ou rodando localmente (`python3 -m http.server`, por exemplo).
2. Na aba **Coleção**, cada jogo de GB/GBC/GBA/NDS tem um botão **"Adicionar ROM"** — selecione o arquivo do jogo. O card passa a mostrar "✅ ROM adicionada" e libera o botão **"▶ Jogar"**. Se o nome do arquivo não parecer mencionar o jogo, o app avisa antes de aceitar.
3. Para importar várias ROMs de uma vez, use **"📁 Importar pasta (com subpastas)"** — que vasculha a pasta escolhida inteira, incluindo subpastas — ou **"🗂️ Importar arquivos selecionados"**, se preferir escolher arquivo por arquivo. O app tenta casar cada arquivo `.gb`/`.gbc`/`.gba`/`.nds` com o jogo certo pelo nome (ignorando tags como "(USA)", "[!]", acentos etc.). Uma tela de revisão mostra os pareamentos encontrados para você confirmar ou corrigir antes de importar — nada é adicionado sem essa confirmação.
4. Para colocar **capas** nos jogos, toque na miniatura de qualquer card e escolha uma imagem, ou use **"🖼️ Importar capas"** para mandar várias de uma vez — o pareamento por nome é o mesmo usado nas ROMs, e vale para todos os jogos do catálogo (inclusive 3DS, Switch e PC). Sem capa, cada jogo mostra um marcador colorido próprio. Passe o mouse (ou toque) na capa para trocá-la ou removê-la pelo "×".
5. Use o filtro **"ROM: com ROM adicionada / sem ROM"** para ver rapidamente o que já foi importado.
6. Na aba **Emuladores**, você pode:
   - Ver quantos jogos de cada plataforma já têm ROM.
   - Enviar um **BIOS/firmware opcional** para GBA e NDS (melhora compatibilidade; sem ele o emulador tenta rodar mesmo assim).
   - Escolher o núcleo do NDS, ajustar o frameskip e ligar o modo rápido (veja "Desempenho no Nintendo DS" abaixo).
7. 3DS, Switch e jogos de PC aparecem só como catálogo (status/nota + um campo livre "onde eu jogo isso"), sem emulador integrado — não existe emulação madura de 3DS/Switch em navegador, e os principais emuladores nativos desse tipo foram encerrados após ações judiciais da Nintendo em 2024.

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

## Desempenho no Nintendo DS

O DS é de longe a plataforma mais pesada aqui, e vale saber o teto: tudo roda em WebAssembly dentro do sandbox do navegador, **sem recompilação JIT**. Emuladores nativos (inclusive os de consoles mais novos) recompilam o código do jogo para a CPU do aparelho e por isso podem parecer mais rápidos mesmo emulando um console mais moderno. Essa diferença é estrutural, não é questão de ajuste.

Três ajustes na aba **Emuladores** fazem diferença real, em ordem de impacto:

1. **Núcleo `desmume2015`** — o mais leve dos três. O `melonds` é o mais preciso e o mais pesado.
2. **Modo rápido (multithread)** — roda o núcleo em várias threads. Isso exige `SharedArrayBuffer`, que só existe em páginas *cross-origin isolated*, o que por sua vez exige os cabeçalhos COOP/COEP. Como o GitHub Pages não permite configurar cabeçalhos, o service worker os injeta nas respostas que serve (`COEP: credentialless`, já que a CDN do EmulatorJS não envia CORP). A opção fica na URL de registro do worker (`sw.js?coi=1`), então sobrevive a reinícios. É opcional e reversível: se algum jogo parar de carregar, é só desmarcar.
3. **Frameskip (0–3)** — vale para os núcleos DeSmuME. Menos fluidez em troca de velocidade.

**Atenção:** os saves são separados por núcleo (`/data/saves/DeSmuME 2015/...` e `/data/saves/melonDS/...`), então trocar de núcleo significa começar do save daquele núcleo.

## Touchscreen do DS

A tela de baixo responde ao toque. O núcleo vinha com `desmume_pointer_type=mouse` (tratando a tela como ponteiro de mouse, então nenhum toque registrava) e o `lockMouse` do EmulatorJS ligado. O app agora força `desmume_pointer_type=touch` (ou `melonds_touch_mode=Touch`, conforme o núcleo) e desliga o `lockMouse` — tanto nos padrões quanto via `gameManager.setVariable` após o jogo iniciar, já que a configuração salva por jogo pode sobrepor os padrões.

## Diagnóstico

Durante o jogo, o botão **"🔍 Ver armazenamento"** mostra o estado real do que está acontecendo: se o multithread está mesmo ativo (`isolado`, `SharedArrayBuffer`, `EJS_threads`), quais bancos IndexedDB existem, quais arquivos de save estão gravados, as configurações do EmulatorJS e as opções de toque/tela do núcleo em execução. Foi essa ferramenta que permitiu encontrar as causas reais dos problemas de save e de toque, em vez de tentar adivinhar nomes de configuração.

O rodapé da página mostra a versão carregada (`Versão: build-...`), útil para confirmar que o navegador não está servindo uma versão antiga em cache.

## Backup

O botão **"Exportar progresso"** gera um JSON com o progresso, a lista de ROMs adicionadas (apenas nomes, não os arquivos) e as configurações do emulador — útil para levar de um aparelho a outro. As capas e os arquivos de ROM em si não entram nesse backup: como ficam no armazenamento do navegador, precisam ser importados de novo em outro aparelho.

## Limitações conhecidas

- Emulação de DS no navegador não alcança a velocidade de um emulador nativo (ver acima).
- 3DS e Switch não têm emulador integrado — apenas catálogo.
- Saves e ROMs ficam só no navegador/aparelho onde foram importados; não há sincronização entre dispositivos.
