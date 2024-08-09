import React from 'react';
import styled from '@emotion/styled';
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Images } from '../../styles/images';
import { Colors } from '../../styles/colors';
import { PATH } from '../../route/path.js';

const BottomNav = styled(BottomNavigation)`
  background-color: transparent;
  background-image: url('../../public/assets/img/img-background.png');
`;
const BottomNavAction = styled(BottomNavigationAction)`
  .Mui-selected {
    color: ${Colors.Gray01};
  }
`;

function NavBar() {
  // const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  return (
    <Box className="navbar" sx={{ width: '100%', position: 'fixed', bottom: 0, left: 0, right: 0 }}>
      <BottomNav
        showLabels
        // value={value}
        // onChange={(event, newValue) => {
        //   setValue(newValue);
        // }}
      >
        <BottomNavAction
          label="홈"
          icon={<img src={Images.home} alt="plus-icon" />}
          onClick={() => {
            navigate(PATH.HOME);
          }}
        />
        <BottomNavAction
          label="일기내역"
          icon={<img src={Images.calendar} alt="plus-icon" />}
          onClick={() => {
            navigate(PATH.CALENDAR);
          }}
        />
        <BottomNavAction
          label="일기작성"
          icon={<img src={Images.plus} alt="plus-icon" />}
          onClick={() => {
            navigate(PATH.DIARYWRITE);
          }}
        />
        <BottomNavAction
          label="통계"
          icon={<img src={Images.barchart} alt="plus-icon" />}
          onClick={() => {
            navigate(PATH.CHART);
          }}
        />
        <BottomNavAction
          label="설정"
          icon={<img src={Images.settings} alt="plus-icon" />}
          onClick={() => {
            navigate(PATH.SETTING);
          }}
        />
      </BottomNav>
    </Box>
  );
}

export default NavBar;
