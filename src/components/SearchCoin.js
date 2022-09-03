import styled from "@emotion/styled"
import { FaSearch } from 'react-icons/fa'
import { useState } from "react"
import { Container } from "@mui/material"

const SearchCoin = ({ setSearchRes, setSearched, searchRes, data }) => {
    const [search, setSearch] = useState('')
    const handleRes = (e) => {
        console.log(searchRes)
        const searchedRow = data.filter((el, index) => (
            el.id === search ? { ...el } : null
        ))
        setSearched(searchedRow)
    }

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }
    return (
        <Container>
            <form

                style={{  display: 'flex', alignItems: 'center', position: 'relative', borderRadius: '20px', background: 'white', margin: '30px auto' }}
            >
                <input
                    style={{ width: '100%', padding: '1.2rem', background: 'transparent', border: 'none', outline: 'none', fontSize: '1.1rem' }}
                    placeholder={'Search Your Coin'}
                    type="text"
                    value={search}
                    onChange={e => handleSearch(e)}
                />
                <FaSearch style={{ color: 'black', fontSize: '2rem', cursor: 'pointer', padding: '0.9rem' }}
                    onClick={handleRes}
                />

            </form>
        </Container>
    )
}

export default SearchCoin
