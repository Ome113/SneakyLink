// Sidebar toggle functionality
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebarToggle');
const closeSidebar = document.getElementById('closeSidebar');

sidebarToggle.addEventListener('click', () => {
    sidebar.classList.add('open');
});

closeSidebar.addEventListener('click', () => {
    sidebar.classList.remove('open');
});

// Optional: Close sidebar when clicking outside
window.addEventListener('click', (e) => {
    if (sidebar.classList.contains('open') && !sidebar.contains(e.target) && e.target !== sidebarToggle) {
        sidebar.classList.remove('open');
    }
});

// Comment form submission (no backend, just clears and thanks user)
document.getElementById('commentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const textarea = document.getElementById('comment');
    if (textarea.value.trim()) {
        alert('Thank you for your comment!');
        textarea.value = '';
    }
});


const paymentForm = document.getElementById('payment-form');
    paymentForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Payment processed successfully!');
      paymentForm.reset();
    });
