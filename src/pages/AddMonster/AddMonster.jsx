import React, { useState, useRef, useEffect } from 'react'

function AddMonster(props) {
    const [validForm, setValidForm] = useState(false)
    //Building a piece of state caled formData
    const [formData, setFormData] = useState({
        name: '',
        imgUrl: '',
        type: '',
        topweakness: '',
    })
    const formElement = useRef()
    const handleChange = evt => {
		setFormData({ ...formData, [evt.target.name]: evt.target.value })
	}

    useEffect(() => {
		formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
	}, [formData])

    const handleSubmit = evt => {
        evt.preventDefault()
        props.AddMonster(formData)
    }

	return (
		<>
			<h1>Add Monster</h1>
			<form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
				<div className="form-group mb-3">
					<label htmlFor="name-input" className="form-label">
						Monster Name (required)
					</label>
					<input 
						type="text"
						className="form-control"
						id="name-input"
						name="name"
                        value={formData.name}
                        onChange={handleChange}
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
                        value={formData.imgUrl}
                        onChange={handleChange}
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
                        value={formData.type}
                        onChange={handleChange}
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
                        value={formData.topweakness}
                        onChange={handleChange}
					/>
				</div>
				<div className="d-grid">
					<button
						type="submit"
						className="btn btn-primary btn-fluid"
                        disabled={!validForm}
					>
						Add Monster
					</button>
				</div>
			</form>
		</>
	)
}

export default AddMonster