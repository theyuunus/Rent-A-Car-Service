import React, { useState } from 'react';
import Helmet from '../Helmet/Helmet';

function AdminPage() {
    const [adminEmailCode, setAdminEmailCode] = useState('');
    const [adminPasswordCode, setAdminPasswordCode] = useState('');
    const [carData, setCarData] = useState({
        brand: '',
        carName: '',
        image: '', 
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
        if (adminEmailCode === 'y' && adminPasswordCode === 'AdminPassword') {
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
            setCarData((prevData) => ({
                ...prevData,
                image: file.name,
            }));

            const formData = new FormData();
            formData.append('image', file);

            fetch('http://localhost:8080/upload-image', {
                method: 'POST',
                body: formData,
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log('Image uploaded:', data);
                })
                .catch((error) => {
                    console.error('Error uploading image:', error);
                });
        }
    };

    const handleSubmit = () => {
        fetch('http://localhost:8080/cars', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(carData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Data sent:', data);
                setCarData({
                    brand: '',
                    carName: '',
                    image: '',
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
        <Helmet title="Admin">
            <div>
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
                        <label htmlFor="speed">GPS:</label>
                        <input
                            type="text"
                            id="GPS"
                            name="GPS"
                            value={carData.GPS}
                            onChange={handleChange}
                        />
                        <br />
                        <button type="button" onClick={handleSubmit}>
                            Add Car
                        </button>
                    </form>
                ) : (
                    <div>
                        <p>Please enter the admin email and password:</p>
                        <input
                            type="text"
                            placeholder="Admin Email"
                            value={adminEmailCode}
                            onChange={(e) => setAdminEmailCode(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Admin Password"
                            value={adminPasswordCode}
                            onChange={(e) => setAdminPasswordCode(e.target.value)}
                        />
                        <button type="button" onClick={handleAdminCodeSubmit}>
                            Submit
                        </button>
                    </div>
                )}
            </div>
        </Helmet>
    );
}

export default AdminPage;
