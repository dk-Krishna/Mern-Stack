import axios from "axios";
import { useEffect, useState } from "react";

const API_KEY = "xg52JW2C9WP6CZVBCurO0b1hctshpHhY";
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = async (tag) => {
    setLoading(true);
    const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
    const gifSrc = data.data.images.downsized_large.url;
    setGif(gifSrc);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { gif, loading, fetchData };
};

export default useGif;
