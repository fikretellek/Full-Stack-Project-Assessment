import { Router } from "express";
import db from "./db.js";
const router = Router();

router.get("/videos", async (_, res) => {
	try {
		const result = await db.query("SELECT * FROM videos;");
		res.json(result.rows);
	} catch (error) {
		console.error("Database connection error:", error);
		res
			.status(500)
			.json({ success: false, error: "Could not connect to the database" });
	}
});

router.delete("/videos/:id", async (req, res) => {
	const videoId = req.params.id;
	console.log(`request to delete video ${videoId}`);
	try {
		const checkResult = await db.query("SELECT * FROM videos WHERE id = $1;", [
			videoId,
		]);
		if (checkResult.rows.length === 0) {
			console.log(`video ${videoId} not found`);
			return res.status(404).json({ success: false, error: "Video not found" });
		}
		await db.query("DELETE FROM videos WHERE id = $1", [videoId]);
		console.log(`deleted video ${videoId}`);
		res.status(204).send();
	} catch (error) {
		console.error("Databse connection error:", error);
		res
			.status(500)
			.json({ success: false, error: "Could not delete the video" });
	}
});

export default router;
