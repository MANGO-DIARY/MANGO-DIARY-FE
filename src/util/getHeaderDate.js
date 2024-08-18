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

/**
 * 날짜 YYYY-MM-DD. 로 변환
 *
 * @param {Date} date - The date object to format.
 * @returns {string} - The formatted date string.
 */
export const formatDateToISO = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Pad month with leading zero if needed
  const day = String(date.getDate()).padStart(2, '0'); // Pad day with leading zero if needed

  return `${year}-${month}-${day}`;
};
