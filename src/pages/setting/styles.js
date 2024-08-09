/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Images } from '../../styles/images';
import { fontGenerator } from '../../styles/styles.js';

// Main container styles
export const SettingContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  & > .top {
    ${fontGenerator('32px', 'bold')};
    width: 100%;
    margin-bottom: 20px;
  }
  & > .userInfo {
    margin-top: 20px;
    display: flex;
    width: 100%;
    //height: 239px;
    padding: 25px 30px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 12px;
    border-radius: 15px;
    border: var(--extra_small, 2px) solid var(--Gray-10, #e0e0e0);
    & > .title {
      color: var(--M3-sys-light-on-primary-fixed-variant, #4f378b);
      font-size: 25px;
      font-weight: bold;
      line-height: 110%;
      letter-spacing: 1px;
    }
    & > .info {
      width: 100%;
      & > input {
      }
    }
  }
  & > .moreWrap {
    margin: 25px 0;

    & > .more {
      display: flex;
      justify-content: space-between;
      padding: 10px;
      & > .title {
        font-size: 24px;
        font-weight: 400;
        line-height: 23px;
      }
    }
  }
`;
