import React from 'react'
import { Link } from 'react-router-dom'

function EditMonster(props) {
    return (
        <>
            <h1>Edit Monster</h1>
            <form autoComplete="off">
                <div className="form-group mb-3">
                    <label htmlFor="name-input" className="form-label">
                        Monster Name (required)
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name-input"
                        name="name"


                        required
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="breed-input" className="form-label">
                        Monster Image Url:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="breed-input"
                        name="imgUrl"

                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="breed-input" className="form-label">
                        Monster Type (required)
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="breed-input"
                        name="type"

                        required
                    />
                </div>
                <div className="form-group mb-4">
                    <label htmlFor="age-input" className="form-label">
                        Monster Top-Weakness
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="age-input"
                        name="topweakness"

                    />
                </div>
                <div className="d-grid">
                    <button
                        type="submit"
                        className="btn btn-primary btn-fluid"

                    >
                        Save Monster
                    </button>
                </div>
                <div className="d-grid">
                    <Link
                        to="/"
                        className="btn btn-danger btn-fluid"
                    >
                        Cancel
                    </Link>
                </div>
            </form>
        </>
    )
}

export default EditMonster