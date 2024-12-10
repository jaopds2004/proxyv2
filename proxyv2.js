(function() {
    // Criação do menu simples
    const menu = document.createElement('div');
    Object.assign(menu.style, {
        'position': 'fixed',
        'top': '30%',
        'left': '30%',
        'width': '200px',
        'background': '#000',
        'backgroundSize': 'cover',
        'color': '#fff',
        'padding': '10px',
        'borderRadius': '10px',
        'border': '2px solid #ff8a00',
        'boxShadow': '0 0 10px rgba(0,0,0,0.5)',
        'display': 'block',
        'zIndex': '9999'
    });
    menu.innerHTML = `
        <img src="https://i.ibb.co/cwtLJZ5/Bot-00-Blaze-20241208-223647-0000.jpg" style="display: block; margin: 0 auto; width: 100px; height: 100px; border-radius: 50%; border: 2px solid #ff8a00;">
        <h3 style="text-align:center;">Sistema Proxy <i class="fas fa-check-circle" style="color: #ff8a00;"></i></h3>
        <span id="closeMenu" style="float:right; cursor:pointer; font-size:24px; color:white;">X</span>
        <button id="actionButton" style="display: block; margin: 10px auto; padding: 5px; border: none; border-radius: 5px; background-color: #ff8a00; color: white; cursor: pointer; width: 80%;">Aplicar Proxy</button>
        <div style="text-align:center; margin-top: 10px;">
            <i class="fas fa-cogs"></i> Sistema Proxy | <i class="fas fa-info-circle"></i> Limites: 5
        </div>
    `;

    // Adiciona o menu ao corpo da página
    document.body.appendChild(menu);

    // Função para fechar o menu
    document.getElementById('closeMenu').addEventListener('click', function() {
        menu.style.display = 'none';
    });

    // Função para aplicar o proxy
    document.getElementById('actionButton').addEventListener('click', function() {
        alert('Proxy aplicado com sucesso!');
    });

})();
(function() {
    // Criação do menu simples
    const menu = document.createElement('div');
    Object.assign(menu.style, {
        'position': 'fixed',
        'top': '30%',
        'left': '30%',
        'width': '200px',
        'background': '#000',
        'backgroundSize': 'cover',
        'color': '#fff',
        'padding': '10px',
        'borderRadius': '10px',
        'border': '2px solid #ff8a00',
        'boxShadow': '0 0 10px rgba(0,0,0,0.5)',
        'display': 'block',
        'zIndex': '9999'
    });
    menu.innerHTML = `
        <img src="https://i.ibb.co/cwtLJZ5/Bot-00-Blaze-20241208-223647-0000.jpg" style="display: block; margin: 0 auto; width: 100px; height: 100px; border-radius: 50%; border: 2px solid #ff8a00;">
        <h3 style="text-align:center;">Sistema Proxy <i class="fas fa-check-circle" style="color: #ff8a00;"></i></h3>
        <span id="closeMenu" style="float:right; cursor:pointer; font-size:24px; color:white;">X</span>
        <button id="actionButton" style="display: block; margin: 10px auto; padding: 5px; border: none; border-radius: 5px; background-color: #ff8a00; color: white; cursor: pointer; width: 80%;">Aplicar Proxy</button>
        <div style="text-align:center; margin-top: 10px;">
            <i class="fas fa-cogs"></i> Sistema Proxy | <i class="fas fa-info-circle"></i> Limites: 5
        </div>
    `;

    // Adiciona o menu ao corpo da página
    document.body.appendChild(menu);

    // Função para fechar o menu
    document.getElementById('closeMenu').addEventListener('click', function() {
        menu.style.display = 'none';
    });

    // Função para aplicar o proxy
    document.getElementById('actionButton').addEventListener('click', function() {
        alert('Proxy aplicado com sucesso!');
    });

})();
