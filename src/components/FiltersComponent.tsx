import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProductsByFilters, setOnSaleFilter, setSelectedGender, updateProductsList, updateSearchValue } from '../store/actions';
import { RootState } from '../store/store';


function FiltersComponent() {
    const dispatch = useDispatch();
    const searchValue = useSelector<RootState, string>((state) => state.products.searchValue);
    const selectedGender = useSelector<RootState, string>((state) => state.products.selectedGender);
    const onSale = useSelector<RootState, boolean>((state) => state.products.onSale);
    const handleInputChange = (e: any) => {
        dispatch(updateSearchValue(e.target.value))
    }


    const handleOptionChange = (e: any) => {
        dispatch(setSelectedGender(e.target.value))
    }

    const handleOnSaleChange = () => {
        dispatch(setOnSaleFilter(!onSale))
    }


    useEffect(() => {
        if (searchValue.length < 3) {
            dispatch(updateProductsList([]))
            dispatch(setSelectedGender(""))
            dispatch(setOnSaleFilter(false))
            return;
        }

        fetchProducts();
    }, [searchValue, selectedGender, onSale])


    const fetchProducts = async () => {
        dispatch(loadProductsByFilters(searchValue, selectedGender, onSale))
    }

    return (
        <div className="filters-wrapper">

            <input type="text"
                className="search-input"
                placeholder="Search Products..."
                value={searchValue} onChange={(e) => handleInputChange(e)} />
            <select value={selectedGender}
                className="gender-selection"
                onChange={(e) => handleOptionChange(e)} >
                <option value="">&nbsp;</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="unisex">Unisex</option>
            </select>

            <label style={{ marginLeft: "16px" }}>
                <input
                    type="checkbox"
                    checked={onSale}
                    onChange={handleOnSaleChange}
                />
                On Sale
            </label>

        </div>
    )
}

export default FiltersComponent;