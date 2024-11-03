function fetchUserData() {
    fetch('https://randomuser.me/api/?results=5')
        .then(response => response.json())
        .then(data => {
            const usersContainer = document.getElementById('users-container');
            usersContainer.innerHTML = ''; 
            data.results.forEach(user => {
                const userCard = document.createElement('div');
                userCard.className = 'user-card';
                userCard.innerHTML = `
                    <img src="${user.picture.large}" alt="User photo">
                    <p><strong>Cell:</strong> ${user.cell}</p>
                    <p><strong>City:</strong> ${user.location.city}</p>
                    <p><strong>Country:</strong> ${user.location.country}</p>
                    <p><strong>Postcode:</strong> ${user.location.postcode}</p>
                `;
                usersContainer.appendChild(userCard);
            });
            document.getElementById('status').innerText = 'success!';
        })
        .catch(error => {
            document.getElementById('status').innerText = 'Error loading data';
            console.error('Error:', error);
        });
}
