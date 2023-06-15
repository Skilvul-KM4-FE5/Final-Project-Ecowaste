import React, { useEffect, useState } from "react";

import "../berita.css";

const ListBerita = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("https://644e26454e86e9a4d8f1fcf6.mockapi.io/api/v1/berita")
      .then((response) => response.json())
      .then((data) => setNews(data))
      .catch((error) => console.log(error));
  }, []);

  const trimText = (text, maxLength) => {
    return text.length > maxLength ? text.substring(0, maxLength - 3) + "..." : text;
  };

  return <></>;
};

export default ListBerita;
