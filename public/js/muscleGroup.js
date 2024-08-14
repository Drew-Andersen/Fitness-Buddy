const newFormHandler = async (e) => {
    e.preventDefault();

    const name = document.querySelector('#form-name').value.trim();
    const description = document.querySelector('#form-desc').value.trim();
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    if (name && description) {
        const response = await fetch(`/api/exercises/${id}`, {
            method: 'POST',
            body: JSON.stringify({ name, description }),
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (response.ok) {
            document.location.replace(`/muscle_group/${id}`)
        } else {
            alert('Failed to create exercise.')
        }
    }
}

document
    .querySelector('#exercise-add-form')
    .addEventListener('submit', newFormHandler);