import React from 'react';
import styled from '@emotion/styled';
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import { Images } from '../../styles/images';
import { Colors } from '../../styles/colors';

const BottomNav = styled(BottomNavigation)`
  background-color: transparent;
`;
const BottomNavAction = styled(BottomNavigationAction)`
  .Mui-selected {
    color: ${Colors.Gray01};
  }
  font-family: 'Ownglyph_ryurue-Rg', sans-serif !important;
`;

function NavBar() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: '100%' }}>
      <BottomNav
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavAction label="홈" icon={<img src={Images.home} alt="plus-icon" />} />
        <BottomNavAction label="일기내역" icon={<img src={Images.calendar} alt="plus-icon" />} />
        <BottomNavAction label="일기작성" icon={<img src={Images.plus} alt="plus-icon" />} />
        <BottomNavAction label="통계" icon={<img src={Images.barchart} alt="plus-icon" />} />
        <BottomNavAction label="설정" icon={<img src={Images.settings} alt="plus-icon" />} />
      </BottomNav>
    </Box>
  );
}

export default NavBar;
