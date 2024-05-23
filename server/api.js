import { Router } from "express";
import { v4 as uuidv4 } from 'uuid';
import db from "./db.js";

const router = Router();

// Endpoint to get all videos
router.get("/videos", async (_, res) => {
    try {
        const result = await db.query("SELECT * FROM videos;");
        res.json(result.rows);
    } catch (error) {
        console.error("Database connection error:", error);
        res.status(500).json({ success: false, error: "Could not connect to the database" });
    }
});

// Endpoint to delete a video by id
router.delete("/videos/:id", async (req, res) => {
    const videoId = req.params.id;
    console.log(`request to delete video ${videoId}`);
    try {
        const checkResult = await db.query("SELECT * FROM videos WHERE id = $1;", [videoId]);
        if (checkResult.rows.length === 0) {
            console.log(`video ${videoId} not found`);
            return res.status(404).json({ success: false, error: "Video not found" });
        }
        await db.query("DELETE FROM videos WHERE id = $1", [videoId]);
        console.log(`deleted video ${videoId}`);
        res.status(204).send();
    } catch (error) {
        console.error("Database connection error:", error);
        res.status(500).json({ success: false, error: "Could not delete the video" });
    }
});

// Endpoint to add a new video
router.post("/videos", async (req, res) => {
    const { title, src } = req.body;

    if (!title || !src) {
        return res.status(400).json({ error: 'Title and SRC are required' });
    }

    const newVideo = {
        id: uuidv4(),
        title,
        src,
    };

    try {
        // Assuming you have a table 'videos' with columns 'id', 'title', and 'url'
        await db.query("INSERT INTO videos (id, title, src) VALUES ($1, $2, $3)", [newVideo.id, newVideo.title, newVideo.url]);
        res.status(201).json({ id: newVideo.id });
    } catch (error) {
        console.error("Database connection error:", error);
        res.status(500).json({ success: false, error: "Could not add the video" });
    }
});

export default router;
