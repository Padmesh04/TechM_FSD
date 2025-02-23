document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value;
    const college = document.getElementById('college').value;
    const place = document.getElementById('place').value;

    console.log('Registration Details:');
    console.log('Name:', name);
    console.log('College:', college);
    console.log('Place:', place);

    // You can add further processing here, like sending the data to a server.
    alert('Registration successful! Check console for details.');
});