import { useEffect, useState, Suspense, startTransition } from "react";
import styled from "styled-components";
import { device, fetcher } from "./src/config";
import useSWR from "swr";
import Skeleton from "./src/skeleton";
import ErrorBoundary from "./src/error";

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

const Albums = () => {
  //render as you fetch
  //https://jsonplaceholder.typicode.com/photos
  const { data } = useSWR("http://nuc:6969/wait?for=5000", fetcher, {
    suspense: true,
  });

  return (
    data &&
    data.map((album: Album) => (
      <AlbumThumnail key={album.id}>
        <a href={album.url} target="_blank">
          <img src={album.thumbnailUrl} />
        </a>
        <span>{album.title}</span>
      </AlbumThumnail>
    ))
  );
};

export const List = () => {
  return (
    <AlbumContainer>
      <ErrorBoundary fallback={<div>HELP</div>}>
        <Suspense fallback={<Skeleton />}>
          <Albums />
        </Suspense>
      </ErrorBoundary>
    </AlbumContainer>
  );
};
