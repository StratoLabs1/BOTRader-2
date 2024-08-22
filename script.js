// Handle Login Form Submission
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    // Authentication logic goes here
    window.location.href = 'signals.html';
});

// Handle Sign Up Form Submission
document.getElementById('signupForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    // Registration logic goes here
    window.location.href = 'subscription.html';
});

// Handle Subscription Button Click
document.getElementById('subscribeButton')?.addEventListener('click', function() {
    // Subscription logic goes here
    window.location.href = 'signals.html';
});

// Fetch and Display Signals
if (window.location.pathname.endsWith('signals.html')) {
    fetch('https://your-backendless-api-endpoint/signals')
        .then(response => response.json())
        .then(data => {
            const signalsTable = document.getElementById('signalsTable').getElementsByTagName('tbody')[0];
            data.forEach(signal => {
                let row = signalsTable.insertRow();
                row.insertCell(0).innerText = signal.exchange;
                row.insertCell(1).innerText = signal.coin;
                row.insertCell(2).innerText = signal.buyPrice;
                row.insertCell(3).innerText = signal.sellPrice;
                row.insertCell(4).innerText = signal.stopLoss;
            });
        })
        .catch(error => console.error('Error fetching signals:', error));
}
