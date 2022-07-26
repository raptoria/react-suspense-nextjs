import { List } from "./list_suspense";
import styled from "styled-components";

const CatalogContainer = styled.div`
  margin: 1rem;
`;

const Catalog = () => {
  return (
    <CatalogContainer>
      <h2>Bird Catalog</h2>
      <List />
    </CatalogContainer>
  );
};
export default Catalog;
