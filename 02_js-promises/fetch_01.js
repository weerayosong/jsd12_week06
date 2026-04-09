fetch('https://jsonplaceholder.typicode.com/posts/1') // << End point มี API กี่เส้น กี่เส้นทาง
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error('Something went wrong!');
    });
