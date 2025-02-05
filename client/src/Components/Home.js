import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        textInput: '',
        dropdown1: '',
        dropdown2: ''
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add your submission logic here
    };

    // Navigate to profile page
    const goToProfile = () => {
        navigate('/profile');
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow">
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Text Input */}
                <div>
                    <input
                        type="text"
                        name="textInput"
                        value={formData.textInput}
                        onChange={handleChange}
                        placeholder="Search"
                        className="w-full p-2 border rounded"
                    />
                </div>

                {/* First Dropdown */}
                <div>
                    <select
                        name="dropdown1"
                        value={formData.dropdown1}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                    >
                        <option value="">Select Mood</option>
                        <option value="option1">Happy</option>
                        <option value="option2">Sad</option>
                        <option value="option3">Aggitated</option>
                    </select>
                </div>

                {/* Second Dropdown */}
                <div>
                    <select
                        name="dropdown2"
                        value={formData.dropdown2}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                    >
                        <option value="">Language</option>
                        <option value="optionA">Hindi</option>
                        <option value="optionB">English</option>
                        <option value="optionC">Punjabi</option>
                        <option value="optionC">Nepali</option>
                    </select>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                >
                    Submit
                </button>
            </form>

            {/* Profile Button */}
            <button
                onClick={goToProfile}
                className="mt-4 w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
            >
                 Profile
            </button>
        </div>
    );
};

export default Home;