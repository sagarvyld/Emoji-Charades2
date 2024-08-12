import React from "react";
import GuessBox from "../components/GuessBox";
import profile from "../assets/Profile.png";
import { useState, useEffect ,useRef } from "react";
import profile2 from "../assets/Profile2.png";
import profile3 from "../assets/Profile3.png";
import Confetti from "react-confetti";
import { useNavigate,useLocation } from "react-router-dom";
import Loader from "../components/Loader";
const Landingpage = ({ skip, setskip , Single , Share , CF }) => {
  const [loading, setLoading] = useState(false);
  const textareaRef = useRef(null)
  const [word, setword] = useState("");
  const [Kill2,setKill2]=useState(true);
  const [right, setright] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [message, setmessage] = useState("");
  const [topic, settopic] = useState("");
  const [answer, setanswer] = useState("");
  const [emojies, setemoji] = useState("");
  const [data_it, setdata_it] = useState(0);
  const [Params,setParams]=useState(false);
  const [firsttime,setfirsttime]=useState(0);
  const [limit,setlimit]=useState(3);
  // console.log(Kill2);
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
   
    const currentPath = location.pathname;
    const basePath = currentPath.split('?')[0];
    navigate(basePath);
    setsend(false);
    setLoading(false);
    const urlParams = new URLSearchParams(window.location.search);
    const url = "https://vyld-cb-dev-api.vyld.io/api/v1/activity-games/game";
    const params = new URLSearchParams({
      activityId: urlParams.get("activityId"),
    });
  
    if(window.location.search){
    setParams(true);
    fetch(`${url}?${params}`, {
      method: "GET",
      headers: {},
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        
        const Data_coming = data.data;
        console.log(Data_coming);
        setmessage(Data_coming.ActD.message);
        settopic(Data_coming.ActD.reqD[0].topicArea);
        setanswer(Data_coming.ActD.reqD[1].topic);
        setemoji(Data_coming.ActD.reqD[2].Emoji);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    }else{
      setParams(false);
      fetch(`${url}`, {
        method: "GET",
        headers: {},
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          
          const Data_coming = data.data;
        console.log(Data_coming);
        setmessage(Data_coming.ActD.message);
        settopic(Data_coming.ActD.reqD[0].topicArea);
        setanswer(Data_coming.ActD.reqD[1].topic);
        setemoji(Data_coming.ActD.reqD[2].Emoji);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
      setLoading(true);
      fetch("https://vyld-cb-dev-api.vyld.io/api/v1/activity-games/guestUser/check", {
        method: "POST",
        credentials: "include", 
      })
        .then(response => response.json())
        .then(data => setlimit(data.data.result.limit))
        .catch(error => console.error("Error:", error));
  
  };
  useEffect(()=>{
    if(limit>0){
      console.log(limit);
    }else{
      openPlayStore();
    }
  },[limit])
  const openPlayStore = () => {
    const playStoreUrl = 'https://wyb.social/get-app/i';
    window.location.href = playStoreUrl
 
  };
  const backward = () => {
    // console.log("oppp")
    setsend(false);
    setIsEmpty(true);
  };
  const triggerConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 2500);
  };
  useEffect(() => {
    setLoading(false)
    const urlParams = new URLSearchParams(window.location.search);
    const url = "https://vyld-cb-dev-api.vyld.io/api/v1/activity-games/game";
    const params = new URLSearchParams({
      activityId: urlParams.get("activityId"),
    });
  
    if(window.location.search){
    setParams(true);
    fetch(`${url}?${params}`, {
      method: "GET",
      headers: {},
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        
        const Data_coming = data.data;
        console.log(Data_coming);
        setmessage(Data_coming.ActD.message);
        settopic(Data_coming.ActD.reqD[0].topicArea);
        setanswer(Data_coming.ActD.reqD[1].topic);
        setemoji(Data_coming.ActD.reqD[2].Emoji);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    }else{
      setParams(false);
      fetch(`${url}`, {
        method: "GET",
        headers: {},
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          
          const Data_coming = data.data;
          console.log(Data_coming);
          setmessage(Data_coming.ActD.message);
          settopic(Data_coming.ActD.reqD[0].topicArea);
          setanswer(Data_coming.ActD.reqD[1].topic);
          setemoji(Data_coming.ActD.reqD[2].Emoji);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
      setLoading(true);
      fetch("https://vyld-cb-dev-api.vyld.io/api/v1/activity-games/guestUser/check", {
        method: "POST",
        credentials: "include", 
      })  .then(response => response.json())
      .then(data => setlimit(data.data.result.limit))
      .catch(error => console.error("Error:", error));
   
  }, []);

  const [isEmpty, setIsEmpty] = useState(true);
  const [style, setstyle] = useState(false);
  const [send, setsend] = useState(false);
useEffect(()=>{
    if(send){
      setdata_it((prev)=>prev+1);
    }
  },[send]);
  useEffect(() => {
    if (send) {
      triggerConfetti();
    }
  }, [right, send]);

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
    const handleTextareaChange = (event) => {
        const value = event.target.value.trim(); 
       setword(value);
        if (value === '') {
          setIsEmpty(true);
        } else {
          setIsEmpty(false);
        }
      };

  const forward = () => {
    // console.log("forward");
    if (!isEmpty) {
      
      setsend(true);
    }
    const data = {
      reqD: [{ topicArea: topic }, { topic: answer }, { Emoji: emojies }],
      message: message,
      isCorrect: right,
    };
    const staging_url = "https://vyld-cb-dev-api.vyld.io";
    const url = `${staging_url}/api/v1/activity-games/game-response`;

   
  };

  useEffect(() => {
    if (isEmpty) {
      setstyle(false);
    } else {
      setstyle(true);
    }
  }, [isEmpty, send]);
  useEffect(()=>{
    console.log(firsttime)
  },[firsttime])
    useEffect(()=>{
      setfirsttime((prev)=>prev+1);
    },[send])
  return (
    <>
   {loading? <div className="app_container">
   
      {
        <div className="background_svg">
          <svg
            width="360"
            height="250"
            viewBox="0 0 360 250"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-12 -97C16.3333 -95.3333 137.593 89.8627 95 62.5C12.5 9.5 -5.5 80.5 43.5 108.5C108 145.357 218.245 240 144 240C95 240 113 137.5 191.5 159.5C270 181.5 313.387 225.588 336.5 172.5C368.5 99 257.5 52 311 -23C360.614 -92.5529 388 -32 388 0.5"
              stroke="#1D2939"
              stroke-width="19"
            />
          </svg>
        </div>
      }
    {showConfetti && send && <Confetti />}
        <div className="upper_buttons">
          <button className="back_button" onClick={()=>send && backward()}>
            {!send?<svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.165 11.9934L13.1634 11.6393C13.1513 10.2348 13.0666 8.98174 12.9206 8.18763C12.9206 8.17331 12.7613 7.38572 12.6599 7.12355C12.5006 6.74463 12.2126 6.42299 11.8515 6.2192C11.5624 6.0738 11.2592 6 10.9417 6C10.6922 6.01157 10.2806 6.13714 9.98692 6.24242L9.74283 6.33596C8.12612 6.97815 5.03561 9.07656 3.85199 10.3598L3.76473 10.4495L3.37527 10.8698C3.12982 11.1915 3 11.5847 3 12.0077C3 12.3866 3.11563 12.7656 3.3469 13.0718C3.41614 13.171 3.52766 13.2983 3.62693 13.4058L4.006 13.8026C5.31046 15.1243 8.13485 16.9782 9.59883 17.5924C9.59883 17.6057 10.5086 17.9857 10.9417 18H10.9995C11.6639 18 12.2846 17.6211 12.6021 17.0086C12.6888 16.8412 12.772 16.5132 12.8352 16.2252L12.949 15.6813C13.0788 14.8067 13.165 13.465 13.165 11.9934ZM19.4967 13.5183C20.3269 13.5183 21 12.8387 21 12.0004C21 11.1622 20.3269 10.4825 19.4967 10.4825L15.7975 10.8097C15.1463 10.8097 14.6183 11.3417 14.6183 12.0004C14.6183 12.6581 15.1463 13.1912 15.7975 13.1912L19.4967 13.5183Z"
                fill="white"
              />
            </svg>:
                <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="13"
                  cy="13"
                  r="12.25"
                  stroke="white"
                  stroke-width="1.5"
                />
                <path
                  d="M9 9L17 17"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17 9L9 17"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>}
          </button>
          <button className="skip_button" onClick={() => !send?setskip(true):console.log("share")}>
            {!send?'Skip':Share && <svg width="38" height="38" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="16" cy="16" r="15.5" fill="#384353" stroke="#0E1928"/>
<rect width="14" height="14" transform="translate(8 8)" fill="#384353"/>
<path d="M19.7 13.4C21.1912 13.4 22.4 12.1912 22.4 10.7C22.4 9.20883 21.1912 8 19.7 8C18.2088 8 17 9.20883 17 10.7C17 10.8129 17.0069 10.9243 17.0204 11.0335L12.5743 13.2566C12.0887 12.7881 11.428 12.5 10.7 12.5C9.20883 12.5 8 13.7088 8 15.2C8 16.6912 9.20883 17.9 10.7 17.9C11.428 17.9 12.0888 17.6119 12.5744 17.1434L17.0204 19.3664C17.0069 19.4757 17 19.587 17 19.7C17 21.1912 18.2088 22.4 19.7 22.4C21.1912 22.4 22.4 21.1912 22.4 19.7C22.4 18.2088 21.1912 17 19.7 17C18.972 17 18.3113 17.2881 17.8257 17.7566L13.3796 15.5335C13.3931 15.4243 13.4 15.3129 13.4 15.2C13.4 15.087 13.3931 14.9757 13.3796 14.8664L17.8256 12.6434C18.3112 13.1119 18.972 13.4 19.7 13.4Z" fill="white"/>
</svg>
}
          </button>
        </div>
     
        <div className="upper_cross_button" onClick={() => backward()}>
          <button>
        
          </button>
        </div>
 
      <div className="heading_above">
        <p className="you_got_a"><svg width="102" height="29" viewBox="0 0 102 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1438_1502)">
<path d="M101.5 14.0519C101.5 18.1121 98.5685 21.4163 94.9661 21.4163C94.1251 21.4163 93.2944 21.2328 92.5187 20.8813C92.2046 21.2105 91.7618 21.4163 91.2727 21.4163H86.2972C85.2743 21.4163 84.4436 20.5847 84.4436 19.5644V6.9035C84.4436 6.16106 84.8847 5.49406 85.566 5.20257C87.1485 4.527 88.6279 3.63024 89.9631 2.53973C90.3012 2.26367 90.708 2.11621 91.1388 2.11621C92.1634 2.11621 92.9958 2.94781 92.9958 3.96803V7.02867C93.6308 6.80234 94.295 6.68574 94.9661 6.68574C98.5685 6.68574 101.5 9.98986 101.5 14.0519Z" fill="white"/>
<path d="M94.9662 7.54546C93.9365 7.54546 92.9719 7.86096 92.1378 8.41136V3.97043C92.1378 3.12854 91.1595 2.67244 90.5056 3.2057C89.1189 4.33736 87.5725 5.28042 85.9043 5.99371C85.5387 6.14974 85.3019 6.5081 85.3019 6.9059V19.5668C85.3019 20.1155 85.7481 20.5613 86.2973 20.5613H91.2728C91.7499 20.5613 92.1378 20.1738 92.1378 19.6972C92.9719 20.2458 93.9365 20.5613 94.9662 20.5613C98.1001 20.5613 100.642 17.6482 100.642 14.0543C100.642 10.4604 98.1001 7.54546 94.9662 7.54546ZM93.4696 15.5786C92.7351 15.5786 92.1378 14.8961 92.1378 14.0543C92.1378 13.2124 92.7351 12.5282 93.4696 12.5282C94.2042 12.5282 94.7997 13.2107 94.7997 14.0543C94.7997 14.8979 94.2042 15.5786 93.4696 15.5786Z" fill="#0E1928"/>
<path d="M75.085 28.6178C73.0478 28.6178 71.0826 28.0177 69.4041 26.8843C68.8927 26.5397 68.5872 25.9618 68.5872 25.3411V21.7129C68.5872 20.8556 69.1621 20.1183 69.9396 19.8903C69.3543 19.2747 68.9338 18.5151 68.7296 17.6869C68.6352 17.2977 68.5872 16.9016 68.5872 16.509V8.54446C68.5872 7.52082 69.4213 6.6875 70.4459 6.6875H75.2841C75.3304 6.6875 75.3767 6.68921 75.4231 6.69264H75.4299L75.478 6.69779C76.1096 6.76466 76.6365 7.13845 76.918 7.66142C76.966 7.57397 77.0209 7.48995 77.0827 7.41108C77.426 6.96013 77.9786 6.6875 78.5536 6.6875H83.39C84.4164 6.6875 85.2505 7.52082 85.2505 8.54618V18.4603C85.2505 18.9798 85.211 19.501 85.1338 20.0051C84.473 24.3466 80.9769 27.8411 76.6296 28.5012C76.1233 28.5784 75.6033 28.6178 75.0833 28.6178H75.085Z" fill="white"/>
<path d="M83.3916 7.54297H78.5551C78.2325 7.54297 77.9441 7.69557 77.7622 7.93391C77.6318 8.10194 77.5545 8.31284 77.5545 8.54261V15.703C77.5545 16.0476 77.2971 16.3562 76.9521 16.3751C76.5848 16.394 76.2828 16.1025 76.2828 15.739V8.54089C76.2828 8.02478 75.8915 7.60127 75.3886 7.54811H75.3852C75.3525 7.54468 75.3182 7.54297 75.2839 7.54297H70.4457C69.8931 7.54297 69.4451 7.99049 69.4451 8.54261V16.5071C69.4451 16.8415 69.4863 17.1673 69.5618 17.4793C69.7901 18.4018 70.3342 19.2008 71.0739 19.753C71.0773 19.7564 71.079 19.7581 71.0825 19.7598C71.7587 20.2605 72.5962 20.5571 73.5024 20.5571C74.8068 20.5571 75.967 19.9416 76.7067 18.9848C77.2387 18.3007 77.5545 17.4416 77.5545 16.5071V17.5514C77.5545 18.2595 77.3726 18.9351 77.0517 19.5266C76.3566 20.8126 75.0093 21.7094 73.4715 21.6991C72.5756 21.6922 71.7518 21.3956 71.0825 20.9018C71.079 20.9001 71.0773 20.8983 71.0739 20.8949C70.8971 20.7509 70.6688 20.6669 70.42 20.6737C69.8708 20.6874 69.4451 21.1624 69.4451 21.7111V25.3393C69.4451 25.6719 69.6082 25.9857 69.8845 26.1726C71.3691 27.1739 73.1574 27.7586 75.0848 27.7586C75.5671 27.7586 76.0408 27.7226 76.5025 27.6523C80.5117 27.0436 83.6782 23.8801 84.2875 19.8747C84.3578 19.4135 84.3939 18.9402 84.3939 18.4584V8.54432C84.3939 7.99049 83.9459 7.54297 83.3916 7.54297Z" fill="#0E1928"/>
<path d="M59.7655 21.4163C59.0532 21.4163 58.4182 21.0202 58.1024 20.4029C57.7866 21.0202 57.1516 21.4163 56.4394 21.4163L50.0737 21.406C49.1418 21.406 48.3454 20.7064 48.2236 19.7822L46.775 8.79823C46.7047 8.26497 46.8677 7.72829 47.223 7.32363C47.5782 6.91898 48.0897 6.6875 48.6286 6.6875H53.1458C54.0898 6.6875 54.8879 7.39393 55.0011 8.33013L55.2603 10.4649C55.5675 10.2505 55.9382 10.1288 56.333 10.1288H59.8719C60.2667 10.1288 60.6391 10.2505 60.9446 10.4649L61.2037 8.33013C61.317 7.39393 62.1151 6.6875 63.059 6.6875H67.5763C68.1152 6.6875 68.6266 6.91898 68.9819 7.32363C69.3372 7.72829 69.5002 8.26497 69.4298 8.79823L67.9796 19.7822C67.8577 20.7064 67.0631 21.4043 66.1294 21.4043L59.7672 21.4146H59.7638L59.7655 21.4163Z" fill="white"/>
<path d="M67.5778 7.54468H63.0606C62.5491 7.54468 62.1183 7.92533 62.0565 8.43287L61.4352 13.5614L60.8363 11.6873C60.7024 11.2689 60.3128 10.9843 59.8734 10.9843H56.3345C55.8951 10.9843 55.5055 11.2689 55.3717 11.6873L54.7727 13.5597L54.1514 8.43115C54.0896 7.92362 53.6588 7.54297 53.1474 7.54297H48.6284C48.0174 7.54297 47.5472 8.07965 47.6261 8.68492L49.0764 19.6689C49.1433 20.1713 49.5706 20.5451 50.0769 20.5468L56.4392 20.5571C56.8785 20.5571 57.2698 20.2742 57.4037 19.8541L58.104 17.6662L58.8042 19.8541C58.9381 20.2725 59.3277 20.5571 59.7687 20.5571L66.131 20.5468C66.6373 20.5468 67.0646 20.1713 67.1316 19.6689L68.5818 8.68492C68.6625 8.07965 68.1905 7.54297 67.5795 7.54297L67.5778 7.54468Z" fill="#0E1928"/>
</g>
<path d="M42.7498 8.07255C42.6846 9.92376 41.6683 12.2224 38.9546 14.3869C34.7264 17.7615 32.4891 20.2485 30.7863 22.1395C28.8805 24.2642 27.4548 25.8564 24.5309 26.8545C21.0799 27.9159 16.1343 26.2857 13.2938 23.9853C10.908 22.1142 10.2576 19.7974 9.60728 17.0297C9.07468 14.8525 8.54752 12.3872 6.20517 11.6771C3.49326 10.786 2.58023 10.1502 2.06031 9.46186L2.05125 9.45281C1.58931 8.846 1.41721 7.90953 1.81937 6.97669C2.22154 6.0529 3.16174 5.21786 4.80845 4.71249C8.42071 3.6764 12.7576 6.30649 14.7684 9.28254C16.0329 7.0111 19.4694 1.71833 23.1034 1.64768C24.4132 1.57161 25.5835 2.10958 26.2392 3.30326C28.0164 3.13843 29.6794 3.76516 30.4819 5.83916C30.9982 6.0221 31.5598 6.34452 32.0616 6.84808C32.7319 7.51828 33.3297 8.55075 33.4692 10.1031C34.3949 9.6267 35.3876 8.99816 36.0941 8.20478C37.3369 6.87163 38.5995 4.38826 40.7299 4.58932C42.2064 4.85921 42.7915 6.57457 42.748 8.06893L42.7498 8.07255Z" fill="#0E1928"/>
<path d="M43.6062 8.69348C43.8961 6.65389 43.0609 4.0546 40.8472 3.69052C38.6461 3.49308 37.4596 5.13598 36.3364 6.48544C35.6824 7.32953 35.0701 8.09935 34.1281 8.67899C33.898 7.87656 33.5122 7.12666 32.9723 6.49449V6.48L32.7586 6.26264C32.7586 6.26264 32.7549 6.25902 32.7531 6.25721L32.7423 6.24272L32.6952 6.19924C32.3165 5.79712 31.5521 5.3153 31.0992 4.99107C30.6481 4.06366 29.8945 3.28296 28.9615 2.84643L28.9344 2.83194C28.6228 2.71963 28.2623 2.56386 27.9398 2.49684C27.746 2.45336 27.5449 2.42438 27.3474 2.40265C27.3655 2.40265 26.7007 2.34106 26.6916 2.34106C24.8601 -0.00826365 21.6283 0.49167 19.3639 2.18347C17.4653 3.56191 15.6991 6.04528 14.6755 7.67912C12.7951 5.52361 9.79518 3.77565 6.97458 3.59089C4.37861 3.33731 1.59242 4.96209 0.994608 6.61948C0.496428 7.76787 0.617802 9.05394 1.32612 9.99222L1.32975 9.99584C1.33699 10.0049 1.37685 10.0556 1.38409 10.0665H1.38591V10.0683L1.39134 10.0737C1.6051 10.3454 1.85872 10.5918 2.1685 10.8272C2.9511 11.4232 4.1268 11.9485 5.94199 12.5444C7.81877 13.1077 8.22093 15.2524 8.67745 17.0239C9.02165 18.4313 9.33686 19.7645 9.93105 21.1556L9.93467 21.1592C11.9745 25.7075 18.3041 28.4481 23.3149 28.0387C26.9634 27.5297 29.3039 25.2094 31.4633 22.7441C33.1644 20.8549 35.2748 18.511 39.2911 15.2796C42.3055 13.019 43.4794 10.2132 43.608 8.6971L43.6062 8.69348Z" fill="#0E1928"/>
<path d="M25.798 9.74494C24.5312 12.4689 22.8561 14.6594 21.485 15.8128C21.2287 16.0284 20.9416 16.2002 20.6385 16.3244C20.6992 17.0039 20.9952 17.4927 21.5049 17.746C22.2799 18.1324 23.4463 17.9298 24.3415 17.2542C25.9739 16.0224 27.8934 13.8726 29.3171 11.0573C30.4607 8.79721 30.8075 6.89082 30.3216 5.54373C30.0871 5.03112 29.793 4.62879 29.4672 4.31486C29.2685 4.12313 29.0568 3.96418 28.8402 3.83504C28.4677 3.61152 28.0792 3.47144 27.7076 3.38899C27.5218 3.34826 27.343 3.32144 27.1721 3.30554C27.2804 3.68205 27.333 4.09631 27.3271 4.54633C27.3112 5.86362 26.8104 7.56436 25.797 9.74394L25.798 9.74494Z" fill="#D4FA05"/>
<path d="M30.1378 11.4725C28.9108 13.8985 27.192 15.9151 25.8 17.2225C25.8387 17.6635 26.0096 18.1513 26.5452 18.3103C26.6684 18.347 26.8065 18.3659 26.9535 18.3659C27.9977 18.3659 30.102 17.296 31.4036 15.3469C32.7568 13.3183 33.4334 11.5371 33.4274 10.0241C33.2605 8.39685 32.5849 7.35276 31.8636 6.70405C31.7185 6.57392 31.5735 6.46067 31.4324 6.36331C31.5685 7.78689 31.1343 9.49956 30.1368 11.4735L30.1378 11.4725Z" fill="#D4FA05"/>
<path d="M42.1965 5.74443C41.8547 5.14936 41.3301 4.68146 40.7002 4.60198C39.6152 4.46489 38.73 5.13943 38.0335 5.86264C37.6749 6.23518 37.3321 6.65739 37.0082 7.06469C36.9615 7.1233 36.9148 7.18191 36.8681 7.23953C36.5909 7.58922 36.3276 7.92102 36.0633 8.21806H36.0623C35.5795 8.76643 34.9347 9.24129 34.3316 9.61382C34.4657 11.407 33.7424 13.4981 32.1677 15.8565C31.3857 17.0278 29.9322 18.0997 28.9396 18.6739C28.2461 19.0752 27.5596 19.2838 26.9496 19.2838C26.7151 19.2838 26.4925 19.253 26.2839 19.1915C25.651 19.0037 25.2079 18.5507 25.0022 17.906C24.9665 17.9338 24.9307 17.9616 24.8949 17.9884C24.1388 18.5586 23.2417 18.8596 22.4071 18.8596C21.9381 18.8596 21.4881 18.7643 21.0956 18.5696C20.3316 18.1891 19.8616 17.4818 19.7404 16.5529C19.6341 16.5638 19.5278 16.5698 19.4215 16.5698C19.037 16.5698 18.6575 16.4963 18.3117 16.3443C17.4533 15.9668 16.9357 15.179 16.8929 14.1826C16.8234 12.5554 17.7434 11.0175 18.5551 9.66151C19.2446 8.50913 19.8954 7.42034 19.8348 6.50241C19.8179 6.24909 20.0097 6.03053 20.263 6.01364C20.5154 5.99676 20.735 6.18849 20.7519 6.44181C20.8313 7.64584 20.109 8.85385 19.344 10.1324C18.5621 11.4387 17.7543 12.7898 17.812 14.1419C17.8398 14.7846 18.1488 15.2664 18.6823 15.5019C19.3669 15.8029 20.2551 15.6449 20.8929 15.1085C22.1597 14.0435 23.7553 11.9563 24.9645 9.35653C26.4935 6.06828 26.6147 4.32184 26.2104 3.31649C26.2084 3.31649 26.2074 3.31649 26.2064 3.31649C25.5497 2.12239 24.3813 1.58395 23.0698 1.66045C21.6649 1.74191 20.114 2.51976 18.7648 3.85294C16.888 5.70668 15.4245 8.07501 14.735 9.29493C13.6898 7.72929 12.0524 6.34843 10.2779 5.47521C8.49551 4.59801 6.4965 4.19468 4.7737 4.72418C3.1274 5.22983 2.18652 6.06431 1.78413 6.9882C1.38771 7.90016 1.55164 8.83398 1.98781 9.42706L2.01563 9.46481L2.02457 9.47375C2.5432 10.1622 3.45825 10.798 6.16963 11.6881C6.9734 11.9514 7.55661 12.3756 8.0047 12.9358C8.4518 13.4951 8.76277 14.1915 9.02408 15.0002C9.22974 15.636 9.39566 16.3155 9.57152 17.0407C9.62318 17.2523 9.67584 17.4679 9.73048 17.6874C9.96993 18.6461 10.2461 19.6584 10.6585 20.6518C11.7464 23.2695 14.3664 25.1153 17.0598 26.1584C18.416 26.6829 19.8169 27.0157 21.1006 27.1409C22.3753 27.265 23.5705 27.1895 24.4965 26.8647C27.2218 25.916 28.5492 24.5848 30.3276 22.6198C30.4657 22.4668 30.6078 22.3098 30.7528 22.1479C32.4548 20.2554 34.6932 17.7689 38.9218 14.3942C41.6351 12.2295 42.6515 9.93172 42.7171 8.07997C42.7489 7.16006 42.5462 6.35141 42.1965 5.74244V5.74443Z" fill="#D4FA05"/>
<defs>
<clipPath id="clip0_1438_1502">
<rect width="54.7406" height="26.4998" fill="white" transform="translate(46.7594 2.11719)"/>
</clipPath>
</defs>
</svg>
</p>
        <p className="Emoji_charades">Emoji charades</p>
      </div>
      <GuessBox
      handleClick={handleClick}
      params={Params}
      Single={Single}
      Kill3={Kill2}
        kill2={setKill2}
        emojies={emojies}
        isEmpty={isEmpty}
        topic={topic}
        answer={answer}
        send={send}
        forward={forward}
        setword={setword}
        setIsEmpty={setIsEmpty}
        right={right}
        word={word}
      />
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
{send && <div className="send_to_friend">
  <div className="images">
<img src={profile2} className="share_pic "/>
<img src={profile} className="share_pic pic_b"/>
<img src={profile3} className="share_pic pic_b"/>
  </div>
  <div className="text">
  <svg width="70" height="36" className="text_back_svg" viewBox="0 0 70 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.2">
<rect x="56.7549" y="-11" width="15" height="87" transform="rotate(30 56.7549 -11)" fill="#5D77FF"/>
<rect x="43.5" y="-11" width="5.82893" height="87" transform="rotate(30 43.5 -11)" fill="#5D77FF"/>
</g>
</svg>

  152 people sent this to their friends
  </div>
  </div>}
      {!send && message !== "" && (
        <div className="Lie_Information">
          <div className="User_picture">
            <img src={profile} alt="User" />
          </div>
          <div className="User_comment_Sec">
            <div className="User_name">Alita</div>
            <div className="User_text">{message}</div>
          </div>
         
        </div>
      )}
      {!send ? (
        <button
          className={`${style?'SpotPage_Submit button_setpos':'SpotPage_Submit2'}`}
          onClick={() => {
            forward();
          }}
        >
          <p>Send</p>
        </button>
      ) : (
      <div className="lower_bottom_buttons">
          <button className="Create_Own" onClick={()=>openPlayStore()}>Create your own</button>
        {CF &&<button className="SpotPage_Submit" onClick={() => console.log("share")}>
          <p>Challenge friends!</p>
        </button> }
        </div>
      )}
      {<div className={`the_answer_reveal ${send?'Animation_div':firsttime>2?'Animation_div2':'display-none'} ${!Single && "top-single-answer"}`}>
        <p className="Your_guess">Your Guess</p>
        <p className="Guess_is">{word}</p>
        {Single && <button className="Guess_More_Button" onClick={()=>handleClick()}>Guess More &gt;</button> }
      </div>}
    </div>:<Loader/>}
    </>
  );
};

export default Landingpage;
