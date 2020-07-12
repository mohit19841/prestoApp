import React from 'react';
import {
    useParams,
} from "react-router-dom";

const ProductDetails = ({ allProducts, updateItem }) => {
    const [price, changePrice] = React.useState('');
    const [availability, changeAvailability] = React.useState(false);
    const [isEditPrice, setPriceFlag] = React.useState(false);
    const [isEditAvailability, setAvailabilityFlag] = React.useState(false);
    let { productId } = useParams() || 0;
    let product = allProducts.filter(x => x.itemId.toString() === productId.toString())[0] || {};
    const changePriceVal = (val) => {
        changePrice(val);
    }
    const changeAvailabilityVal = (val) => {
        changeAvailability(val);
    }

    const editPrice = (flag, val) => {
        setPriceFlag(flag);
        changePrice(flag ? val : '');
    }
    const editAvailability = (flag, val) => {
        setAvailabilityFlag(flag);
        changeAvailability(flag ? val : '');
    }

    const updatePriceVal = (value, id) => {
        let obj = {
            itemId: id,
            updatedVal: value,
            type: 'price'
        }
        updateItem(obj);
    }
    const updateAvailabilityVal = (value, id) => {
        let obj = {
            itemId: id,
            updatedVal: value,
            type: 'availability'
        }
        updateItem(obj);
    }

    return (
        <>
            <div>
                <h1>Product Details</h1>
            </div>
            <div style={{ display: 'flex' }}>
                <div style={{ backgroundColor: '#f4f4f4', height: 250, width: 250 }}>
                    <img
                        src={product.imageUrl}
                        alt=""
                        style={{ height: 250, width: 250 }}
                    />
                </div>
                <div style={{ marginLeft: 20 }}>
                    <div style={{ display: 'flex', height: 40, alignItems: 'center' }}>
                        <p style={{ fontWeight: 'bold', width: 150, textAlign: 'left', fontSize: 15 }}>Product Name</p>
                        <p style={{ fontSize: 14 }}>{product.name}</p>
                    </div>

                    <div style={{ display: 'flex', height: 40, alignItems: 'center' }}>
                        <p style={{ fontWeight: 'bold', width: 150, textAlign: 'left', fontSize: 15 }}>Description</p>
                        <p style={{ fontSize: 14 }}>{product.description || "-"}</p>
                    </div>

                    <div style={{ display: 'flex', height: 40, alignItems: 'center' }}>
                        <p style={{ fontWeight: 'bold', width: 150, textAlign: 'left', fontSize: 15 }}>Category</p>
                        <p style={{ fontSize: 14 }}>{product.category}</p>
                    </div>

                    <div style={{ display: 'flex', height: 40, alignItems: 'center' }}>
                        <p style={{ fontWeight: 'bold', width: 150, textAlign: 'left', fontSize: 15 }}>Price</p>
                        {!isEditPrice ? <p style={{ fontSize: 14 }}>{product.price}</p> :
                            <input type="text" value={price} pattern="[0-9]*" onChange={(event) => changePriceVal((event.target.validity.valid) ? event.target.value : price)} />
                        }
                        {!isEditPrice ? <span className={'link'} style={{ fontSize: 14 }} onClick={() => editPrice(true, product.price)}>Edit</span> :
                            <div>
                                <span style={{ fontSize: 14 }} className={'link'} onClick={() => { updatePriceVal(price, product.itemId); editPrice(false, '') }}>Update</span>
                                <span style={{ fontSize: 14 }} className={'link'} onClick={() => editPrice(false, '')}>Cancel</span>
                            </div>
                        }
                    </div>

                    <div style={{ display: 'flex', height: 40, alignItems: 'center' }}>
                        <p style={{ fontWeight: 'bold', width: 150, textAlign: 'left', fontSize: 15 }}>Tax</p>
                        <p style={{ fontSize: 14 }}>{product.tax}</p>
                    </div>

                    <div style={{ display: 'flex', height: 40, alignItems: 'center' }}>
                        <p style={{ fontWeight: 'bold', width: 150, textAlign: 'left', fontSize: 15 }}>Availability</p>
                        {!isEditAvailability ? <p style={{ fontSize: 14 }}>{product.itemId ? (product.available ? 'Aviable' : 'Not Available') : ""}</p> :
                            <input type="checkbox" checked={availability} onChange={(event) => changeAvailabilityVal(!availability)} />}
                        {!isEditAvailability ? <span style={{ fontSize: 14 }} className={'link'} onClick={() => editAvailability(true, product.available)}>Edit</span> :
                            <div>
                                <span style={{ fontSize: 14 }} className={'link'} onClick={() => { updateAvailabilityVal(availability, product.itemId); editAvailability(false, false) }}>Update</span>
                                <span style={{ fontSize: 14 }} className={'link'} onClick={() => editAvailability(false, false)}>Cancel</span>
                            </div>
                        }
                    </div>

                </div>

            </div>

        </>
    );
};

export default ProductDetails;
