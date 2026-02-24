import { urlModel } from "../model/urlModel.js";

const createUrl = async (req, res) => {
  try {
    const { fullUrl } = req.body;
    if (!fullUrl) {
      return res.status(400).json({ message: "Full URL is required" });
    }
    const urlFound = await urlModel.findOne({ fullUrl });

    if (urlFound) {
      return res.status(409).json({ error: "URL already exists" });
    } else {
      const newUrl = await urlModel.insertOne({ fullUrl });
      res.status(201).json({ newUrl });
    }

    return res.status(200).json({ fullUrl });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

const getAllUrl = async (req, res) => {
  try {
    const allUrls = await urlModel.find({});
    res.status(200).json({ total: allUrls.length, allUrls });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

const getUrl = async (req, res) => {
  try {
    const { id } = req.params;
    const url = await urlModel.findOne({ shortId: id });
    if (!url) {
      return res.status(404).json({ error: "URL not found" });
    }
    url.clicks += 1;
    await url.save();
    res.redirect(`${url.fullUrl}`);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

const deleteUrl = async (req, res) => {
  try {
    const { id } = req.params;

    const exists = await urlModel.findOne({ _id: id });

    if (!exists) {
      return res.status(404).json({ error: "URL not found" });
    }
    const deletedUrl = await urlModel.findByIdAndDelete({ _id: id });
    res.status(200).json({ status: "URL deleted successfully", deletedUrl });
  } catch (error) {
    const { message, name } = error;

    if (name === "CastError") {
      return res.status(400).json({
        message: "Invalid URL ID :"+error.value,
      });
    }
    res.status(500).json({
      message: "Internal server error",
      error: message,
      name: name,
    });
  }
};

export { createUrl, getAllUrl, getUrl, deleteUrl };
