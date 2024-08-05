/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { Images } from '../../styles/images';

export const SearchWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
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

export const SearchInputWrapper = styled.div`
  width: 83%;
  background-color: white;
  border-radius: 10px;
  height: 36px;
  padding-left: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  font-size: 17px;
  padding-left: 10px;
  flex-grow: 1;
  flex-shrink: 0;
  font-family: 'Ownglyph_ryurue-Rg', sans-serif !important;
`;

export const InputCancel = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

export const CancelButton = styled.button`
  margin-left: 5%;
  font-size: 17px;
  font-weight: bold;
  cursor: pointer;
  border: none;
  background: none;
  font-family: 'Ownglyph_ryurue-Rg', sans-serif !important;
`;

export const NavBarWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-image: url(${Images.background});
`;
