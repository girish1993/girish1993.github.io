document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.tab-button');
    const contents = document.querySelectorAll('.tab-content');

    buttons.forEach(button => {
        button.addEventListener('click', () => { // Changed 'disturbi' to 'click'
            // Remove active classes
            buttons.forEach(btn => {
                btn.classList.remove('active');
                btn.classList.add('text-gray-600', 'hover:text-blue-600');
                btn.classList.remove('text-blue-600', 'border-b-2', 'border-blue-600');
            });
            contents.forEach(content => content.classList.add('hidden'));

            // Add active classes
            button.classList.add('active', 'text-blue-600', 'border-b-2', 'border-blue-600');
            button.classList.remove('text-gray-600', 'hover:text-blue-600');
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.remove('hidden');
        });
    });

    // Activate the Profile tab by default
    buttons[0].click();
});