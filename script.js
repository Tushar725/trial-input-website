document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        class: document.getElementById('class').value,
        school: document.getElementById('school').value,
        number: document.getElementById('number').value,
        year: document.getElementById('year').value
    };

    console.log('Form Data:', formData);
    alert('Data submitted. Check console for details.');

    // Here you would typically send the data to a server
    // For example:
    // fetch('/api/data', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(formData),
    // })
    // .then(response => response.json())
    // .then(data => console.log('Success:', data))
    // .catch((error) => console.error('Error:', error));
});
