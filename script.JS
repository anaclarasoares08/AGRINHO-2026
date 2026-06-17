/* Configurações Globais e Paleta de Cores */
:root {
    --bg-rosa-claro: #FFF0F2;
    --detalhe-sakura: #FFB7C5;
    --texto-branco: #FFFFFF;
    --card-shadow: rgba(255, 183, 197, 0.3);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: var(--bg-rosa-claro);
    font-family: 'Quicksand', sans-serif;
    color: var(--texto-branco);
    min-height: 100vh;
    position: relative;
    overflow-x: hidden;
    line-height: 1.6;
}

/* Títulos com fonte ainda mais elegante */
h1, h2, h3 {
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    margin-bottom: 15px;
}

/* Overlay de Brilho (Controlado por JS) */
#brightness-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0; /* Começa em 0 (brilho normal) */
    pointer-events: none;
    z-index: 9999;
    mix-blend-mode: multiply;
    transition: opacity 0.2s ease;
}

/* Elementos Sakura no Fundo */
.sakura-bg {
    position: fixed;
    font-size: 2rem;
    opacity: 0.3;
    z-index: -1;
    user-select: none;
}
.s1 { top: 10%; left: 5%; }
.s2 { top: 20%; right: 8%; }
.s3 { bottom: 15%; left: 8%; }
.s4 { bottom: 25%; right: 5%; }

/* Barra de Acessibilidade */
.accessibility-bar {
    background: rgba(255, 183, 197, 0.6);
    padding: 10px;
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
    backdrop-filter: blur(5px);
}

.accessibility-bar button, .accessibility-bar select {
    background-color: var(--texto-branco);
    color: #d65a7f;
    border: 1px solid var(--detalhe-sakura);
    padding: 6px 12px;
    border-radius: 20px;
    font-family: 'Quicksand', sans-serif;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
}

.accessibility-bar button:hover, .accessibility-bar select:hover {
    background-color: var(--detalhe-sakura);
    color: var(--texto-branco);
}

/* Layout Estrutural */
header {
    text-align: center;
    padding: 40px 20px;
    background: linear-gradient(180deg, rgba(255,183,197,0.5) 0%, rgba(255,240,242,0) 100%);
}

header h1 {
    font-size: 2.5rem;
    color: #e2728f;
    text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.8);
}

.subtitle {
    color: #c9506f;
    font-size: 1.1rem;
}

.container {
    max-width: 900px;
    margin: 0 auto;
    padding: 20px;
}

.card {
    background: rgba(255, 183, 197, 0.4);
    border: 1px solid rgba(255, 255, 255, 0.5);
    padding: 30px;
    border-radius: 15px;
    margin-bottom: 30px;
    box-shadow: 0 8px 32px 0 var(--card-shadow);
    backdrop-filter: blur(4px);
}

.card p {
    margin-bottom: 20px;
}

.agro-img {
    width: 100%;
    max-height: 400px;
    object-fit: cover;
    border-radius: 10px;
    border: 3px solid var(--texto-branco);
}

.chart-container {
    background: rgba(255, 255, 255, 0.85); /* Fundo claro para o gráfico ficar legível */
    padding: 20px;
    border-radius: 10px;
    margin-top: 20px;
}

footer {
    text-align: center;
    padding: 30px;
    color: #c9506f;
    font-size: 0.9rem;
}

/* --- Modos de Daltonismo (Filtros CSS) --- */
.protanopia { filter: url('#protanopia') saturate(1.2); filter: grayscale(0) sepia(0.1) hue-rotate(-30deg); }
.deuteranopia { filter: hue-rotate(-45deg) saturate(1.1); }
.tritanopia { filter: hue-rotate(140deg) saturate(1.2); }
.acromatopsia { filter: grayscale(100%); }
