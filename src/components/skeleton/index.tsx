import React, { CSSProperties } from 'react';
import { SkeletonWrap } from './styles';

const Skeleton = ({ className, width, height, style = {} }) => {
  const getStyle = () => {
    const newStyle: CSSProperties = style;
    if (width) newStyle.width = width;
    if (height) newStyle.height = height;
    return newStyle;
  };

  return (
    <SkeletonWrap>
      <div className={`skeleton ${className}` || ''} style={getStyle()} />
    </SkeletonWrap>
  );
};

export default Skeleton;
