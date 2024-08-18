/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

export const SearchWrapper = styled.div`
  width: 100%;
`;

export const SearchBar = styled.div`
  width: calc(100% - 12px);
  height: 56px;
  display: flex;
  flex-direction: row;
  border-radius: 30px;
  background-color: rgba(177, 185, 189, 0.3);
  margin: 0 6px;
  margin-bottom: 21px;
  padding: 0 15px;
  align-items: center;
`;

export const NoneData = styled.div`
  width: 100%;
  text-align: center;
`;

export const SearchInputWrapper = styled.div`
  width: 83%;
  background-color: white;
  border-radius: 10px;
  height: 36px;
  padding-left: 10px;
  padding-right: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  img {
    margin-left: 5px;
  }
`;

export const SearchInput = styled.input`
  width: 180px;
  border: none;
  outline: none;
  font-size: 17px;
  padding-left: 10px;
  font-family: 'Ownglyph_ryurue-Rg', sans-serif !important;
`;

export const InputCancel = styled.button`
  border: none;
  background: none;
  cursor: pointer;

  img {
    margin-right: 5px;
  }
`;

export const CancelButton = styled.button`
  width: 20%;
  // margin-left: 2%;

  font-size: 17px;
  font-weight: bold;
  color: black;
  cursor: pointer;
  border: none;
  background: none;
  font-family: 'Ownglyph_ryurue-Rg', sans-serif !important;
`;
