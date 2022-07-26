import { useEffect, useState } from "react";
import styled from "styled-components";
import { device } from "./src/config";

interface Album {
  title: string;
  id: string;
  thumbnailUrl: string;
  url: string;
}

const AlbumThumnail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    margin-top: 0.5rem;
    text-align: center;
  }
`;

const AlbumContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(3, minmax(min-content, 200px));

  @media ${device.small} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${device.xsmall} {
    grid-template-columns: 1fr;
  }
`;

export const List = () => {
  const [albums, setAlbums] = useState<Array<Album>>([]);

  //fetch on render, "waterfall"
  useEffect(() => {
    const populateList = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/photos");
      if (res.status !== 200) {
        throw new Error(`Status ${res.status}`);
      }
      const data = await res.json();
      setAlbums(data);
    };
    populateList();
  }, []);

  return (
    <AlbumContainer>
      {albums &&
        albums.map((album: Album) => (
          <AlbumThumnail key={album.id}>
            <a href={album.url} target="_blank">
              <img src={album.thumbnailUrl} />
            </a>
            <span>{album.title}</span>
          </AlbumThumnail>
        ))}
    </AlbumContainer>
  );
};
