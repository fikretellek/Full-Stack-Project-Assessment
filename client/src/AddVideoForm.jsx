import React, { useState } from "react";

const AddVideoForm = ({ setVideos }) => {
    const [title, setTitle] = useState("");
    const [url, setUrl] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newVideo = { title, url };

        try {
            const response = await fetch('/api/videos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newVideo),
            });

            if (response.ok) {
                const data = await response.json();
                setVideos(prevVideos => [...prevVideos, { ...newVideo, id: data.id }]);
                setTitle("");
                setUrl("");
            } else {
                console.error("Failed to add video");
            }
        } catch (error) {
            console.error("Error adding video:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Video Title:
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    YouTube URL:
                    <input
                        type="url"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        required
                    />
                </label>
            </div>
            <button type="submit">Add Video</button>
        </form>
    );
};

export default AddVideoForm;
