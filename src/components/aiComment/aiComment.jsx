import React from 'react';
import { Images } from '../../styles/images';
import { AiCommentContainer } from './style';

/**
 *
 * @description ai 코멘트 컴포넌트
 * @param {string} aiComment - 기본 코멘트
 * @param {React.JSX.Element} children (optional) children 있을 경우 기본 코멘트 말고 children 컴포넌트로 대체됨
 */
export default function AiComment({ aiComment, children }) {
  return (
    <AiCommentContainer>
      <img alt="ai" src={Images.ai} />
      {children || <span className="ai-comment">&quot;{aiComment}&quot;</span>}
    </AiCommentContainer>
  );
}
