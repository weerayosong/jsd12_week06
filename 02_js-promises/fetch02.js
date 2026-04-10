const url = 'https://api.api-ninjas.com/v1/animals?name=red+fox';
const options = {
    method: 'GET',
    headers: {
        'X-Api-Key': 'Ic5RiIec4AckqLhNbIGZEmrK4NYSM1VMX8ipdt9S',
        'Content-Type': 'application/json',
    },
};

fetch(url, options)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        // return data;
    })
    // Handle error gracefully
    .catch((error) => {
        console.error('Something went wrong!', error);
    });
