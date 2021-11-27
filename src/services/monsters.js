const BASE_URL = '/api/monsters'

function create(monster) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(monster)
    })
        .then(res => res.json())
}

function getAll() {
    return fetch(BASE_URL)
        .then(res => res.json())
}

function deleteOne(id) {
    return fetch(`${BASE_URL}/${id}`, { method: 'DELETE' })
        .then(res => res.json())
}

function update(monster) {
    return fetch(`${BASE_URL}/${monster._id}`, {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(monster)
    })
        .then(res => res.json())
}

export {
    create,
    getAll,
    deleteOne,
    update
}