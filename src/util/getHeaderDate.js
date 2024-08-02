/**
 *
 * @description
 * 서버에서 넘겨주는 날짜 포멧 변경
 *
 * @param {string} date  ex) '2024-08-02'
 * @returns {string} ex) '2024.08.02.'
 */

export default function getHeaderDate(date) {
  return `${date.replaceAll('-', '.')}.`;
}
