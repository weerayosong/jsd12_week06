function getAllAnimalByLetter(letter) {
    let allResults = [];

    const url = `https://api.api-ninjas.com/v1/animals?name=${letter}`;
    return (
        fetch(url, {
            headers: {
                'X-Api-Key': 'Ic5RiIec4AckqLhNbIGZEmrK4NYSM1VMX8ipdt9S',
            },
        })
            .then((response) => response.json())
            // .then((response) => console.log(response))
            .then((data) => {
                if (data.length > 0) {
                    allResults.push(...data);
                }

                console.log(
                    `Found ${allResults.length} animals containing the letter ${letter}`,
                );
                console.log(allResults);
            })
    );
}

getAllAnimalByLetter('a')
    .then(() => {
        console.log('Fetch data was successfully!');
    })
    .catch((error) => {
        console.error('Something went wrong!', error);
    });

// Display 20 Objects
// .then((data) => {
//   if (data.length > 0) {
//      const limitedData = data.slice(0, 20);
//      allResults.push(...limitedData);

//   }})
