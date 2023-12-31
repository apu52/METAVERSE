import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Tooltip } from "@mui/material";
import "./AnimeDetail.css";

function AnimeDetail() {
  const { category } = useParams();
  const [anime, setAnime] = useState([]);
  const [characters, setCharacters] = useState([]);

  const imgUrl = require(`../../assets/images/MAL.png`);

  const fetchAnime = async (category) => {
    const temp = await fetch(`https://api.jikan.moe/v4/anime/${category}`).then(
      (res) => res.json()
    );

    setAnime(temp.data);
  };

  const fetchCharacters = async (anime) => {
    const temp = await fetch(
      `https://api.jikan.moe/v4/anime/${anime}/characters`
    ).then((res) => res.json());

    let sortedData = temp?.data.sort((a, b) =>
      a.favorites < b.favorites ? 1 : -1
    );
    setCharacters(sortedData?.slice(0, 10));
  };

  useEffect(() => {
    if (category) {
      fetchAnime(category);
      fetchCharacters(category);
    }
  }, [category]);

  return (
    <div>
      <h1 className="title">
        <NavLink to="/">
          <Tooltip title="Back">
            <ArrowBackIosIcon className="back-button" fontSize="large" />
          </Tooltip>
        </NavLink>
        {anime?.title_english || anime?.title_japanese}
        <a href={anime?.url} target="_blank" rel="noreferrer">
          <img
            src={imgUrl}
            height="28px"
            width="28px"
            alt=""
            title="View at MyAnimeList.net"
          />
        </a>
      </h1>
      <div className="background-text">
        <div>{anime?.synopsis}</div>
        <div>{anime?.background}</div>
      </div>
      <div className="list-group">
        <div className="image-container">
          <img src={anime?.images?.jpg?.image_url} alt=""></img>
        </div>
        <div className="text-container">
          <div>
            <span className="dark-text">Rank: </span>
            <span>{anime?.rank}</span>
          </div>
          <div>
            <span className="dark-text">Popularity: </span>
            <span>{anime?.popularity}</span>
          </div>
          <div>
            <span className="dark-text">Score: </span>
            <span>{anime?.score}</span>
          </div>
          <div>
            <span className="dark-text">Members: </span>
            <span>{anime?.members}</span>
          </div>
          <div>
            <span className="dark-text">Source: </span>
            <span>{anime?.source}</span>
          </div>
          <div>
            <span className="dark-text">Source: </span>
            <span>{anime?.duration}</span>
          </div>
          <div>
            <span className="dark-text">Status: </span>
            <span>{anime?.status}</span>
          </div>
          <div>
            <span className="dark-text">Status: </span>
            <span>{anime?.status}</span>
          </div>
          <div>
            <span className="dark-text">Rating: </span>
            <span>{anime?.rating}</span>
          </div>
        </div>
      </div>
      {characters?.length > 0 && (
        <div className="character-section">
          <h1 className="title">Characters</h1>
          <div className="character">
            {characters?.map((item) => {
              return (
                <div className="character-item">
                  <span>{item.character.name}</span>
                  <div>
                    <img
                      width="150"
                      height="200"
                      src={item.character.images.jpg.image_url}
                      alt=""
                    ></img>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      {anime?.trailer?.embed_url ? (
        <div className="trailer-section">
          <h1 className="title">Trailer</h1>
          <div align="center">
            <iframe
              id="inlineFrameExample"
              title="Inline Frame Example"
              width="1000"
              height="500"
              src={anime?.trailer?.embed_url}
            ></iframe>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default AnimeDetail;
