document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('faleConoscoForm');
    const whatsAppLink = document.getElementById('whatsAppLink');
    const clickableImages = document.querySelectorAll('.clickable-image');

    form.addEventListener('submit', function(event) {
        console.log('Formulário enviado!');
    });

    whatsAppLink.addEventListener('click', function(event) {
        event.preventDefault(); // Previne comportamento padrão do link
        window.location.href = 'https://wa.me/5511949010377?text=Quero+fazer+um+pedido+de+A%C3%A7a%C3%AD'; // Substitua pelo seu número de WhatsApp
    });

    clickableImages.forEach(image => {
        image.addEventListener('click', function() {
            if (!this.classList.contains('grow')) {
                this.classList.add('grow');
                setTimeout(() => {
                    this.classList.remove('grow');
                }, 500); // Duração da animação
            }
        });
    });
});