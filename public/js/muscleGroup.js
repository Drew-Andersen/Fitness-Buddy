const newFormHandler = async (e) => {
    e.preventDefault();

    const name = document.querySelector('#name').value.trim();
    const desc = document.querySelector('#desc').value.trim();
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    if (name && desc) {
        const response = await fetch(`/api/exercises/${id}`, {
            method: 'POST',
            body: JSON.stringify({ name, desc }),
            headers: {
                'Content Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.replace(`/muscle_group/${id}`)
        } else {
            alert('Failed to create exercise.')
        }
    }
}