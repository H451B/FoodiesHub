import React, { useState } from 'react'
import './Restaurateur.css'
import axios from 'axios'

function RestaurantAddMenu() {
    const [image, setImage] = useState(null);
    const [foodName, setFoodName] = useState('');
    const [foodType, setFoodType] = useState('');
    const [foodCategory, setFoodCategory] = useState('');
    const [foodDescription, setFoodDescription] = useState('');
    const [foodPrice, setFoodPrice] = useState('');


    function handleAddMenuPhotoClick() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.onchange = (event) => {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = () => {
                    const imageBase64 = reader.result;
                    setImage(imageBase64);
                };
                reader.readAsDataURL(file);
            }
        };
        input.click();
    }

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('/api/products', {
        //   name,
        //   description,
        //   price,
        //   userId: userToken.userId
        }, {
        //   headers: {
        //     Authorization: `Bearer ${userToken.token}`
        //   }
        })
          .then(response => {
            console.log(response.data);
            // handle success
          })
          .catch(error => {
            console.error(error);
            // handle error
          });
        }    


    return (
        <div className="r-add-menu">
            <form className='r-add-menu-form' onSubmit={handleSubmit}>
                <div className='r-add-menu-photo' onClick={handleAddMenuPhotoClick}>
                    {image ? (
                        <img src={image} alt="Uploaded Image" />
                    ) : (
                        <p>Click here to upload an image</p>
                    )}

                </div>

                <input
                    placeholder="Name of food"
                    type="text"
                    value={foodName}
                    onChange={event => setFoodName(event.target.value)}
                />

                <input
                    placeholder="Type of food"
                    type="text"
                    value={foodType}
                    onChange={event => setFoodType(event.target.value)}
                />

                <input
                    placeholder="Category of food"
                    type="text"
                    value={foodCategory}
                    onChange={event => setFoodCategory(event.target.value)}
                />

                <input
                    placeholder="Description of food"
                    type="text" value={foodDescription}
                    onChange={event => setFoodDescription(event.target.value)}
                />

                <input
                    placeholder="Price of food"
                    type="text" value={foodPrice}
                    onChange={event => setFoodPrice(event.target.value)}
                />

                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default RestaurantAddMenu
