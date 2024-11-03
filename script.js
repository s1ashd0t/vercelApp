document.getElementById('recommendButton').addEventListener('click', async () => {
    const userInput = document.getElementById('userInput').value;
    const recommendationsDiv = document.getElementById('recommendations');

    // Clear previous recommendations
    recommendationsDiv.innerHTML = '';

    try {
        // Call the Flask backend
        const response = await fetch('http://127.0.0.1:5000/recommend', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ input: userInput })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const recommendations = await response.json();

        // Display recommendations
        recommendations.forEach(item => {
            const p = document.createElement('p');
            p.textContent = item;
            recommendationsDiv.appendChild(p);
        });
    } catch (error) {
        console.error('Error fetching recommendations:', error);
        recommendationsDiv.innerHTML = '<p>Error fetching recommendations. Please try again.</p>';
    }
});
