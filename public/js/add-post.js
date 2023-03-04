const addPostHandler = async function (event) {
    event.preventDefault();

    const title = document.querySelector('#data').value;
    const body = document.querySelector('#comment').value;

    if (body) {
        fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                body: body
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(function () {
                document.location.replace('/dashboard');
            })
            .catch(err => console.log(err))
    }

};

document
    .querySelector('#comments')
    .addEventListener('click', addPostHandler);