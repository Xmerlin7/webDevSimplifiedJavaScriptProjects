fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => data.map(user => {
        console.log(user.username)
    }));