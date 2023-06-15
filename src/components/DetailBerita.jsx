// @ts-nocheck
import { useContext, useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";

const url = "https://644e26454e86e9a4d8f1fcf6.mockapi.io/api/v1/berita/";

const DetailBerita = () => {
  const param = useParams();

  const [berita, setBerita] = useState([]);

  const { isLoggedIn } = useContext(AuthContext);

  const getDataBerita = async () => {
    const response = await fetch(url + param.newsId);
    const dataBerita = await response.json();
    setBerita(dataBerita);
  };

  useEffect(() => {
    getDataBerita();
  }, []);

  return (
    <>
      <section id="blog" className="blog"></section>
    </>
  );
};

export default DetailBerita;
