export const device = {
  xsmall: "(max-width: 320px)",
  small: "(max-width: 720px)",
  medium: "(min-width: 720px)",
  large: "(min-width: 1024px)",
  xlarge: "(min-width: 1440px)",
};

export const fetcher = async (url: string) => {
  try {
    const res = await fetch(url);
    return await res.json();
  } catch (error) {
    throw new Error(`There was a problem fetching the request ${error}`);
  }
};
