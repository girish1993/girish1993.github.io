document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.tab-button');
    const contents = document.querySelectorAll('.tab-content');

    // Function to activate a tab
    const activateTab = (tabId) => {
        // Remove active classes from all buttons and contents
        buttons.forEach(btn => {
            btn.classList.remove('active', 'text-blue-600', 'border-b-2', 'border-blue-600');
            btn.classList.add('text-gray-600', 'hover:text-blue-600');
        });
        contents.forEach(content => content.classList.add('hidden'));

        // Add active classes to the selected tab and content
        const button = document.querySelector(`[data-tab="${tabId}"]`);
        const content = document.getElementById(tabId);
        if (button && content) {
            button.classList.add('active', 'text-blue-600', 'border-b-2', 'border-blue-600');
            button.classList.remove('text-gray-600', 'hover:text-blue-600');
            content.classList.remove('hidden');
            content.classList.add('active');
        }
    };

    // Add click event listeners to all tab buttons
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            activateTab(tabId);
        });
    });

    // Activate the Profile tab by default
    activateTab('profile');
});