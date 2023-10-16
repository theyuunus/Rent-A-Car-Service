import React, { useState } from 'react';
import axios from 'axios';
import "./admin.scss"
import Helmet from "../Helmet/Helmet"

function AdminPage() {
    const [adminEmailCode, setAdminEmailCode] = useState('');
    const [adminPasswordCode, setAdminPasswordCode] = useState('');
    const [carData, setCarData] = useState({
        brand: '',
        carName: '',
        image: null,
        model: '',
        price: '',
        speed: '',
        gps: '',
        seatType: '',
        automatic: '',
        description: '',
    });

    const [isAdmin, setIsAdmin] = useState(false);

    const handleAdminCodeSubmit = () => {
        if (adminEmailCode === 'AdminPanelEmail' && adminPasswordCode === 'AdminPanelPassword') {
            setIsAdmin(true);
        } else {
            alert('Invalid admin code. Please try again.');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCarData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();

            reader.onload = (event) => {
                setCarData((prevData) => ({
                    ...prevData,
                    image: event.target.result,
                }));
            };

            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = () => {
        axios.post('http://localhost:8080/cars', carData)
            .then((response) => {
                console.log('Data sent:', response.data);
                setCarData({
                    brand: '',
                    carName: '',
                    image: null,
                    rating: '',
                    model: '',
                    price: '',
                    speed: '',
                    gps: '',
                    seatType: '',
                    automatic: '',
                    description: '',
                });
            })
            .catch((error) => {
                console.error('Error sending car data:', error);
            });
    };

    return (
        <React.Fragment>
            <Helmet title="Admin">
                <h2>Admin Page</h2>
                {isAdmin ? (
                    <form>
                        <label htmlFor="brand">Brand:</label>
                        <input
                            type="text"
                            id="brand"
                            name="brand"
                            value={carData.brand}
                            onChange={handleChange}
                        />
                        <br />
                        <label htmlFor="carName">Car Name:</label>
                        <input
                            type="text"
                            id="carName"
                            name="carName"
                            value={carData.carName}
                            onChange={handleChange}
                        />
                        <br />
                        <label htmlFor="image">Image File:</label>
                        <input
                            type="file"
                            id="image"
                            name="image"
                            onChange={handleImageChange}
                        />
                        <br />
                        <label htmlFor="model">Model:</label>
                        <input
                            type="text"
                            id="model"
                            name="model"
                            value={carData.model}
                            onChange={handleChange}
                        />
                        <br />
                        <label htmlFor="price">Price:</label>
                        <input
                            type="text"
                            id="price"
                            name="price"
                            value={carData.price}
                            onChange={handleChange}
                        />
                        <br />
                        <label htmlFor="speed">Speed:</label>
                        <input
                            type="text"
                            id="speed"
                            name="speed"
                            value={carData.speed}
                            onChange={handleChange}
                        />
                        <br />
                        <label htmlFor="gps">gps:</label>
                        <input
                            type="text"
                            id="gps"
                            name="gps"
                            value={carData.gps}
                            onChange={handleChange}
                        />
                        <br />

                        <label htmlFor="seatType">seatType:</label>
                        <input
                            type="text"
                            id="seatType"
                            name="seatType"
                            value={carData.seatType}
                            onChange={handleChange}
                        />
                        <br />
                        <label htmlFor="automatic">automatic:</label>
                        <input
                            type="text"
                            id="automatic"
                            name="automatic"
                            value={carData.automatic}
                            onChange={handleChange}
                        />
                        <br />
                        <label htmlFor="description">description:</label>
                        <input
                            type="text"
                            id="description"
                            name="description"
                            value={carData.description}
                            onChange={handleChange}
                        />
                        <br />
                        <label htmlFor="description">rating:</label>
                        <input
                            type="number"
                            id="rating"
                            name="rating"
                            value={carData.rating}
                            onChange={handleChange}
                        />
                        <br />
                        <button type="button" onClick={handleSubmit}>
                            Add Car
                        </button>
                    </form>
                ) : (
                    <div className='Admin-Password'>
                        <p>Please enter the admin email and password:</p>
                        <input
                            type="text"
                            className='Admin-Password-Input'
                            placeholder="Admin Email"
                            value={adminEmailCode}
                            onChange={(e) => setAdminEmailCode(e.target.value)}
                        />
                        <input
                            type="password"
                            className='Admin-Password-Input'
                            placeholder="Admin Password"
                            value={adminPasswordCode}
                            onChange={(e) => setAdminPasswordCode(e.target.value)}
                        />
                        <br />
                        <button type="button" onClick={handleAdminCodeSubmit}>
                            Submit
                        </button>
                    </div>
                )}
            </Helmet>
        </React.Fragment>
    );
}

export default AdminPage;
