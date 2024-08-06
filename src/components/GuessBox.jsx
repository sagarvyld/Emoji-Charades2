import React from "react";
import { useState,useEffect,useRef } from "react";
const GuessBox = ({setIsEmpty, isEmpty ,setword ,topic ,emojies, answer, forward , send , right , word}) => {
  const [class_set, setclass]=useState("");
  const emojis = emojies.split(' ');
  const colorStyle = !right ? { color: 'var(--Info-Error-Error-Light, #FF4567)' } : { color: '' };
  const [kill, setKill] = useState(false);
  function countWords(sentence) {
    return sentence.trim().split(/\s+/).filter(Boolean).length;
  }

  useEffect(() => {
    setword('');
    const timer = setTimeout(() => {
      setKill(true);

    }, 100);

    return () => clearTimeout(timer); 
  }, []);
      
  return (
    <div className={`guess_main_container ${send?'answer_box':''}`}>
      
      <div className={`guess_svg `}>
      <div className={`_realsvg ${send?'_send_width':'_notsend_width'} `}>
      <svg width="82" height="74" viewBox="0 0 82 74" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.2" d="M55.2797 52.6374L54.3243 52.4143C54.2488 52.5816 53.9131 53.1643 53.3693 54.0294C52.8348 54.8799 52.1183 55.9732 51.3013 57.1437C49.6605 59.4945 47.6391 62.1208 45.8822 63.7313L45.8816 63.7318C42.3601 66.9688 37.6142 69.1264 32.9817 68.4551L32.9807 68.4549C27.816 67.7171 23.5505 63.4995 21.6571 58.5415C20.7224 56.0938 20.43 52.3487 20.4425 49.0681C20.4487 47.4379 20.5299 45.943 20.6387 44.8107C20.6931 44.2439 20.7539 43.7736 20.8145 43.4254C20.8448 43.2509 20.874 43.1134 20.9006 43.0128C20.9254 42.9193 20.941 42.8851 20.9403 42.8848C20.9402 42.8848 20.9392 42.8864 20.9373 42.8895L20.0876 42.3624C17.8174 45.9469 15.4174 49.267 12.6186 52.1944C10.5594 54.343 8.16925 56.2706 5.38243 56.5422C2.75002 56.7933 0.0715408 55.4409 -1.66616 53.3595C-3.40422 51.2776 -4.30033 48.5612 -4.62326 45.7927C-4.77867 44.4173 -4.7702 42.3024 -4.71026 40.5192C-4.68044 39.6319 -4.63822 38.8361 -4.59869 38.2684C-4.57886 37.9837 -4.56 37.7606 -4.54412 37.6135C-4.54259 37.5994 -4.54113 37.5863 -4.53974 37.5742C-4.53004 37.5265 -4.52026 37.479 -4.51042 37.4315L-4.4511 37.1458L-4.67073 36.9536C-4.76369 36.8723 -4.92623 36.7962 -5.12035 36.8436C-5.27702 36.8818 -5.36426 36.9811 -5.39354 37.0175C-5.45428 37.093 -5.47832 37.1693 -5.48197 37.1801C-5.49772 37.2267 -5.50619 37.2723 -5.51028 37.2953C-5.51641 37.3297 -5.52223 37.3703 -5.52781 37.4151C-5.74365 38.4821 -5.92887 39.6286 -6.11907 40.806C-6.22692 41.4736 -6.33636 42.1511 -6.45389 42.8296C-6.7937 44.7913 -7.20612 46.797 -7.85408 48.7311C-9.14954 52.5978 -11.5084 56.206 -14.978 58.1958C-18.4509 60.1774 -23.1264 60.2124 -26.1304 57.7154C-28.9477 55.3706 -29.8943 51.4346 -30.4043 47.5941L-30.4044 47.5937C-32.1938 34.2029 -30.7241 20.4899 -27.3063 7.37642C-26.5131 4.35446 -25.5326 1.34268 -23.2649 -0.501842C-20.6256 -2.63706 -16.6011 -2.64702 -13.5261 -0.999371C-10.4548 0.646314 -8.27864 3.70082 -6.97544 7.02252C-5.6707 10.3481 -5.16663 13.9386 -4.66525 17.5585L-4.43876 19.1938L-3.71987 17.7076C0.990639 7.96927 8.38372 -0.329911 17.5557 -5.50462C21.2607 -7.59045 25.4584 -9.14897 29.4478 -8.23284C33.6624 -7.26243 36.9569 -3.52894 38.1487 0.705379L38.149 0.706398C39.35 4.93912 38.6789 9.56336 37.0638 13.7292C35.4838 17.8044 33.0828 21.5101 30.5152 25.4727C30.4537 25.5677 30.3921 25.6628 30.3304 25.7581L30.9892 26.469C31.325 26.2861 31.8002 25.9028 32.3285 25.441C32.8698 24.9679 33.5075 24.3755 34.1804 23.7413C34.4806 23.4584 34.7878 23.1672 35.0973 22.8739C36.1823 21.8455 37.2946 20.7911 38.2286 19.9768C40.6134 17.8974 43.6164 16.3263 46.5335 16.9005L46.5348 16.9008C49.5807 17.4915 51.8551 20.358 52.6659 23.495C53.0695 25.0565 53.2151 27.4976 53.2526 29.5988C53.2712 30.6412 53.2631 31.586 53.2492 32.2754C53.2422 32.6201 53.2338 32.9002 53.2265 33.0961C53.2253 33.1293 53.2241 33.1599 53.2229 33.188C53.2207 33.2429 53.2186 33.2879 53.2169 33.3223C53.2156 33.3486 53.2145 33.367 53.2137 33.3784C53.2133 33.3843 53.2131 33.3861 53.2132 33.385L53.2142 33.3758C53.2143 33.3754 53.2146 33.3723 53.2153 33.3672L54.1981 33.5484C54.2028 33.5275 54.2053 33.5095 54.2064 33.5014C55.5058 24.6758 58.9838 16.1667 64.2531 8.9658C66.1039 6.44472 68.3759 4.07724 71.2527 3.82808C73.9706 3.59969 76.6127 5.43991 78.0808 7.89642C79.5408 10.3561 80.0235 13.2892 80.3735 16.2486L80.3735 16.2488C82.2561 32.126 81.0491 48.4591 75.8671 63.5576L75.8668 63.5585C74.9988 66.1027 73.9947 68.588 72.2769 70.517C70.5507 72.4342 67.994 73.6871 65.5691 73.2479C63.1417 72.8064 61.2418 70.8108 59.7774 68.6046C56.6842 63.9107 55.0834 58.2529 55.2797 52.6374Z" stroke="#BCC9DA"/>
</svg>

      <svg width="27" height="27" className="svg_star" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.6" d="M13.38 26.76C13.38 19.37 7.39 13.38 0 13.38C7.39 13.38 13.38 7.39 13.38 0C13.38 7.39 19.37 13.38 26.76 13.38C19.37 13.38 13.38 19.37 13.38 26.76Z" stroke="#B398FF"/>
</svg>

      </div>
      </div>
      <><div className="guess_heading">{topic}</div>
      {!send &&<div className="random"><button><svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16.5" cy="16.5518" r="16" fill="#0E1928" fill-opacity="0.2"/>
      <path d="M23.8774 12.3085C23.6209 11.8631 23.2507 11.4839 22.7926 11.2181C22.7908 11.2162 22.7889 11.2162 22.7871 11.2145L17.7314 8.29535C17.7241 8.29168 17.7186 8.28801 17.7113 8.28434C16.7914 7.76396 15.6626 7.76762 14.75 8.30089L10.266 10.9066L10.2239 10.9304C9.7658 11.1961 9.39747 11.5717 9.14276 12.0153C8.89172 12.4459 8.75062 12.9425 8.74329 13.4573V13.494L8.72681 19.3029V19.3138C8.72681 20.3693 9.28936 21.346 10.2001 21.8792C10.2056 21.883 10.2092 21.8848 10.2147 21.8884L11.6001 22.6873L15.2704 24.8056C15.7322 25.0732 16.249 25.2052 16.7639 25.2052C17.2788 25.2033 17.7919 25.0677 18.2518 24.802L22.778 22.1724C22.7798 22.1706 22.7816 22.1706 22.7834 22.1687C23.6923 21.6374 24.2549 20.6643 24.2567 19.6089L24.2732 13.8V13.789C24.2732 13.2613 24.1321 12.7519 23.8774 12.3085Z" fill="white"/>
      <path d="M16.5101 10.8857C15.8015 10.8857 15.2271 11.25 15.2271 11.6993C15.2271 12.1486 15.8015 12.5128 16.5101 12.5128C17.2186 12.5128 17.793 12.1486 17.793 11.6993C17.793 11.25 17.2186 10.8857 16.5101 10.8857Z" fill="#0E1928"/>
      <path d="M20.1881 17.2402C19.7864 17.0392 19.2249 17.347 18.9341 17.928C18.6433 18.509 18.7332 19.143 19.1349 19.3441C19.5367 19.5452 20.0982 19.2373 20.389 18.6564C20.6799 18.0754 20.5899 17.4414 20.1881 17.2402ZM22.4862 18.9722C22.0845 18.7711 21.523 19.079 21.2322 19.66C20.9414 20.2409 21.0313 20.8749 21.4331 21.076C21.8349 21.2771 22.3964 20.9693 22.6872 20.3883C22.978 19.8073 22.888 19.1733 22.4862 18.9722Z" fill="#0E1928"/>
      <path d="M13.422 17.0685C13.8237 16.8675 14.3852 17.1753 14.676 17.7563C14.9668 18.3373 14.8768 18.9713 14.4751 19.1723C14.0733 19.3735 13.5118 19.0656 13.221 18.4847C12.9302 17.9037 13.0201 17.2697 13.422 17.0685ZM10.6713 18.9723C11.0731 18.7712 11.6345 19.079 11.9253 19.6601C12.2162 20.241 12.1262 20.875 11.7245 21.0761C11.3227 21.2772 10.7612 20.9693 10.4704 20.3884C10.1796 19.8074 10.2695 19.1734 10.6713 18.9723ZM10.7809 15.9551C11.1826 15.754 11.7441 16.0619 12.0349 16.6429C12.3257 17.2238 12.2357 17.8578 11.834 18.0589C11.4322 18.26 10.8707 17.9522 10.5799 17.3713C10.2891 16.7902 10.3791 16.1562 10.7809 15.9551ZM13.1675 20.186C13.5692 19.9849 14.1307 20.2928 14.4215 20.8738C14.7123 21.4547 14.6223 22.0887 14.2206 22.2898C13.8188 22.4909 13.2573 22.1831 12.9665 21.6021C12.6757 21.0211 12.7657 20.3871 13.1675 20.186Z" fill="#0E1928"/>
      </svg>
      </button>
      </div>}</>
      <div className="guess_symbol"> 
      <div className="emoji-container">
      {emojis.map((emoji, index) => (
        <span key={index} className="emoji">
          {emoji}
        </span>
      ))}
    </div>

</div>

{send &&<div className="answer_box_guessbox">{answer}</div>}

    </div>
  );
};

export default GuessBox;
