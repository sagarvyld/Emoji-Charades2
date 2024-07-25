import React from "react";
import { useState,useEffect,useRef } from "react";
const GuessBox = ({setIsEmpty, isEmpty ,setword ,topic ,emojies, answer, forward , send , right , word}) => {
  const textareaRef = useRef(null);
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
  const handleFocus = () => {
    if (textareaRef.current) {
      textareaRef.current.setAttribute('inputmode', 'text');
      textareaRef.current.setAttribute('enterkeyhint', 'done');
    }
  };

  const handleBlur = () => {
    if (textareaRef.current) {
      textareaRef.current.removeAttribute('inputmode');
      textareaRef.current.removeAttribute('enterkeyhint');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (textareaRef.current) {
        textareaRef.current.blur();
      }
    }
  };

    useEffect(()=>{
setIsEmpty(true);
    },[])
    const handleTextareaChange = (event) => {
        const value = event.target.value.trim(); 
       setword(value);
        if (value === '') {
          setIsEmpty(true);
        } else {
          setIsEmpty(false);
        }
      };
  return (
    <div className={`guess_main_container ${send?'answer_box':''}`}>
      {send && <div className={`Upper_tickmark ${kill?'Animation_div2':''}`} style={{marginTop:right &&'-21px' , marginBottom:right && '11px'}}>
        {right?<svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.4376 4.37728C19.3731 -1.45909 27.6269 -1.45909 30.5624 4.37728C36.5252 1.81231 42.848 7.17125 41.3826 13.5481C47.5827 15.4547 49.0159 23.6651 43.8354 27.5987C47.3716 33.0847 43.2447 40.3048 36.773 39.9545C35.9907 46.453 28.2347 49.3045 23.5 44.8342C18.7653 49.3045 11.0093 46.453 10.227 39.9545C3.7553 40.3048 -0.371583 33.0847 3.16463 27.5987C-2.01593 23.6651 -0.582681 15.4547 5.61737 13.5481C4.15203 7.17125 10.4748 1.81231 16.4376 4.37728Z" fill="#00D562"/>
<path d="M17.728 23.7201L22.096 28.0881L30.832 19.3521" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
:<svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.4376 4.37728C19.3731 -1.45909 27.6269 -1.45909 30.5624 4.37728C36.5252 1.81231 42.848 7.17125 41.3826 13.5481C47.5827 15.4547 49.0159 23.6651 43.8354 27.5987C47.3716 33.0847 43.2447 40.3048 36.773 39.9545C35.9907 46.453 28.2347 49.3045 23.5 44.8342C18.7653 49.3045 11.0093 46.453 10.227 39.9545C3.7553 40.3048 -0.371583 33.0847 3.16463 27.5987C-2.01593 23.6651 -0.582681 15.4547 5.61737 13.5481C4.15203 7.17125 10.4748 1.81231 16.4376 4.37728Z" fill="#FF406A"/>
<path d="M18.64 29.2L29.64 18.2" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M29.64 29.2L18.64 18.2" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

}

        </div>}
        {send && <div className={`Win_status `} >{!right?"Oops! Wrong guess":"You've Won!"}</div>}
      <div className={`guess_svg ${send && 'svg_answer'}`}>
      <div className={`_realsvg ${send?'_send_width':'_notsend_width'} `}>
      <svg width="82" height="74" viewBox="0 0 82 74" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.2" d="M55.2797 52.6374L54.3243 52.4143C54.2488 52.5816 53.9131 53.1643 53.3693 54.0294C52.8348 54.8799 52.1183 55.9732 51.3013 57.1437C49.6605 59.4945 47.6391 62.1208 45.8822 63.7313L45.8816 63.7318C42.3601 66.9688 37.6142 69.1264 32.9817 68.4551L32.9807 68.4549C27.816 67.7171 23.5505 63.4995 21.6571 58.5415C20.7224 56.0938 20.43 52.3487 20.4425 49.0681C20.4487 47.4379 20.5299 45.943 20.6387 44.8107C20.6931 44.2439 20.7539 43.7736 20.8145 43.4254C20.8448 43.2509 20.874 43.1134 20.9006 43.0128C20.9254 42.9193 20.941 42.8851 20.9403 42.8848C20.9402 42.8848 20.9392 42.8864 20.9373 42.8895L20.0876 42.3624C17.8174 45.9469 15.4174 49.267 12.6186 52.1944C10.5594 54.343 8.16925 56.2706 5.38243 56.5422C2.75002 56.7933 0.0715408 55.4409 -1.66616 53.3595C-3.40422 51.2776 -4.30033 48.5612 -4.62326 45.7927C-4.77867 44.4173 -4.7702 42.3024 -4.71026 40.5192C-4.68044 39.6319 -4.63822 38.8361 -4.59869 38.2684C-4.57886 37.9837 -4.56 37.7606 -4.54412 37.6135C-4.54259 37.5994 -4.54113 37.5863 -4.53974 37.5742C-4.53004 37.5265 -4.52026 37.479 -4.51042 37.4315L-4.4511 37.1458L-4.67073 36.9536C-4.76369 36.8723 -4.92623 36.7962 -5.12035 36.8436C-5.27702 36.8818 -5.36426 36.9811 -5.39354 37.0175C-5.45428 37.093 -5.47832 37.1693 -5.48197 37.1801C-5.49772 37.2267 -5.50619 37.2723 -5.51028 37.2953C-5.51641 37.3297 -5.52223 37.3703 -5.52781 37.4151C-5.74365 38.4821 -5.92887 39.6286 -6.11907 40.806C-6.22692 41.4736 -6.33636 42.1511 -6.45389 42.8296C-6.7937 44.7913 -7.20612 46.797 -7.85408 48.7311C-9.14954 52.5978 -11.5084 56.206 -14.978 58.1958C-18.4509 60.1774 -23.1264 60.2124 -26.1304 57.7154C-28.9477 55.3706 -29.8943 51.4346 -30.4043 47.5941L-30.4044 47.5937C-32.1938 34.2029 -30.7241 20.4899 -27.3063 7.37642C-26.5131 4.35446 -25.5326 1.34268 -23.2649 -0.501842C-20.6256 -2.63706 -16.6011 -2.64702 -13.5261 -0.999371C-10.4548 0.646314 -8.27864 3.70082 -6.97544 7.02252C-5.6707 10.3481 -5.16663 13.9386 -4.66525 17.5585L-4.43876 19.1938L-3.71987 17.7076C0.990639 7.96927 8.38372 -0.329911 17.5557 -5.50462C21.2607 -7.59045 25.4584 -9.14897 29.4478 -8.23284C33.6624 -7.26243 36.9569 -3.52894 38.1487 0.705379L38.149 0.706398C39.35 4.93912 38.6789 9.56336 37.0638 13.7292C35.4838 17.8044 33.0828 21.5101 30.5152 25.4727C30.4537 25.5677 30.3921 25.6628 30.3304 25.7581L30.9892 26.469C31.325 26.2861 31.8002 25.9028 32.3285 25.441C32.8698 24.9679 33.5075 24.3755 34.1804 23.7413C34.4806 23.4584 34.7878 23.1672 35.0973 22.8739C36.1823 21.8455 37.2946 20.7911 38.2286 19.9768C40.6134 17.8974 43.6164 16.3263 46.5335 16.9005L46.5348 16.9008C49.5807 17.4915 51.8551 20.358 52.6659 23.495C53.0695 25.0565 53.2151 27.4976 53.2526 29.5988C53.2712 30.6412 53.2631 31.586 53.2492 32.2754C53.2422 32.6201 53.2338 32.9002 53.2265 33.0961C53.2253 33.1293 53.2241 33.1599 53.2229 33.188C53.2207 33.2429 53.2186 33.2879 53.2169 33.3223C53.2156 33.3486 53.2145 33.367 53.2137 33.3784C53.2133 33.3843 53.2131 33.3861 53.2132 33.385L53.2142 33.3758C53.2143 33.3754 53.2146 33.3723 53.2153 33.3672L54.1981 33.5484C54.2028 33.5275 54.2053 33.5095 54.2064 33.5014C55.5058 24.6758 58.9838 16.1667 64.2531 8.9658C66.1039 6.44472 68.3759 4.07724 71.2527 3.82808C73.9706 3.59969 76.6127 5.43991 78.0808 7.89642C79.5408 10.3561 80.0235 13.2892 80.3735 16.2486L80.3735 16.2488C82.2561 32.126 81.0491 48.4591 75.8671 63.5576L75.8668 63.5585C74.9988 66.1027 73.9947 68.588 72.2769 70.517C70.5507 72.4342 67.994 73.6871 65.5691 73.2479C63.1417 72.8064 61.2418 70.8108 59.7774 68.6046C56.6842 63.9107 55.0834 58.2529 55.2797 52.6374Z" stroke="#BCC9DA"/>
</svg>

      <svg width="27" height="27" className="svg_star" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.6" d="M13.38 26.76C13.38 19.37 7.39 13.38 0 13.38C7.39 13.38 13.38 7.39 13.38 0C13.38 7.39 19.37 13.38 26.76 13.38C19.37 13.38 13.38 19.37 13.38 26.76Z" stroke="#B398FF"/>
</svg>

      </div>
      </div>
      <div className="guess_text">Guess the {topic}</div>
      {!send &&<div className="guess_heading">{countWords(answer)} words</div>}
      <div className="guess_symbol"> 
      <div className="emoji-container">
      {emojis.map((emoji, index) => (
        <span key={index} className="emoji">
          {emoji}
        </span>
      ))}
    </div>

</div>
{!send &&<div className="guess_answer">
  <textarea
        ref={textareaRef}
        onChange={handleTextareaChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyPress={handleKeyPress}
        inputMode="text"
        enterKeyHint="done"
        placeholder="Type answer here"
      ></textarea>
      </div>
}
{send && <div className={`Movie_name ${right?'margin_it':''}`} style={colorStyle}>{right?answer:word}</div>}
       {(send && !right &&
        <div className={`Wrong_div ${kill?'Animation_div':''}`}>
            <p className="right_answer_head">The Right answer is</p>
            <div className="Movie_name_wrong">{answer}</div>
        </div>
)}
    </div>
  );
};

export default GuessBox;
