import { Web3Storage, File, getFilesFromPath } from "web3.storage";

const { resolve } = require("path");

export default async function handler(req, res) {
    if (req.method === "POST") {
        return await sotreEventData(req, res);
    } else {
        return res
        .status(405)
        .json({ message: "Method not allowed", success: false });
    }
}
