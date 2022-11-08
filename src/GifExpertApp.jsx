import { useState } from 'react'
import { AddCategory, GifGrid } from './components'

function GifExpertApp() {

    const [categories, setCategories] = useState([]);

    const onAddCategory = (value) => {
        if ((categories.map(category => category.toUpperCase())).includes((value.toUpperCase()))) return;

        setCategories([value, ...categories])
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory onNewCategory={(value) => onAddCategory(value)} />

            {
                categories.map((category) => (
                    <GifGrid key={category} category={category} />
                ))
            }
        </>
    )
}

export default GifExpertApp