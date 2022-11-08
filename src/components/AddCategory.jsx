import { useState } from 'react'

function AddCategory({ onNewCategory }) {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length < 1) return;

        onNewCategory(inputValue.trim())
        setInputValue('');
    }

    return (
        <>
            <form onSubmit={onSubmit} >
                <input
                    type="text"
                    placeholder='Buscar gifs'
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </form>
        </>
    )
}

export default AddCategory
