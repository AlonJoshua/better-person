import { component$ } from "@builder.io/qwik";

interface GiraffeProps {
  classes?: string;
}

export const Giraffe = component$((props: GiraffeProps) => {
  return (
    <svg
      width="40"
      height="55"
      viewBox="0 0 134 176"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class={props.classes}
    >
      <path
        d="M55.8105 99.7668C54.0492 100.178 44.0391 101.117 44.0391 101.117C44.0391 101.117 43.9511 116.103 44.0391 124.572C44.1419 134.699 44.8611 141.935 44.7583 148.232C44.6409 154.954 43.6282 161.97 43.2025 163.218C42.7769 164.465 40.9275 168.281 41.2357 169C41.544 169.72 42.997 170.16 46.7104 170.233C51.9797 170.336 53.0071 169.514 53.3153 168.369C53.4474 167.87 53.829 143.153 54.24 139.132C54.695 134.699 54.8564 118.363 54.8564 118.363L55.8105 99.7668Z"
        fill="#FA821B"
      />
      <path
        d="M107.563 112.683L99.1971 122.297L101.883 135.418C101.883 135.418 105.802 141.201 105.802 143.887C105.802 146.573 105.391 153.574 105.288 154.528C105.083 156.495 103.527 162.175 103.116 164.245C102.705 166.314 102.191 168.384 102.808 169.103C103.424 169.822 106.639 169.676 108.077 169.617C110.455 169.514 111.585 169 112.319 168.589C113.199 168.09 113.243 158.462 113.449 153.398C113.64 148.819 114.271 142.038 114.271 140.482C114.271 138.926 111.379 135.727 109.926 132.835C108.899 130.766 107.857 127.771 107.857 125.907C107.857 124.043 107.563 112.683 107.563 112.683Z"
        fill="#FA821B"
      />
      <path
        d="M23.432 11.3939L23.0944 4.30473L27.7765 4.15796L29.0828 10.4252L23.432 11.3939Z"
        fill="#FA821B"
      />
      <path
        d="M122.549 116.294C122.549 116.294 126.262 115.707 128.743 117.218C131.223 118.73 133.381 121.724 133.352 126.685C133.337 130.59 131.943 134.112 130.387 136.328C129.183 138.046 127.701 138.941 127.216 138.677C126.732 138.413 126.879 133.863 126.042 130.692C125.206 127.522 122.945 119.875 122.74 118.98C122.549 118.084 122.549 116.294 122.549 116.294Z"
        fill="#D57657"
      />
      <path
        d="M32.8403 11.4673C32.8403 11.4673 28.7599 9.20697 24.1512 10.66C19.5425 12.1131 17.0767 15.4596 15.286 18.7033C13.4954 21.947 11.6313 24.1046 9.98744 25.2494C6.50888 27.6712 -1.78389 30.548 0.344347 37.2409C1.94419 42.29 10.325 40.1324 15.0218 39.7948C19.7039 39.4572 27.4243 39.6627 27.4243 39.6627L38.7259 21.5507L32.8403 11.4673Z"
        fill="#D57657"
      />
      <path
        d="M44.9492 20.1417L57.0434 18.2483L59.4652 20.1123C59.4652 20.1123 55.8545 27.1428 52.1851 28.9628C49.0001 30.548 43.4374 30.137 43.4374 30.137C43.4374 30.137 46.05 38.195 48.8093 43.4348C51.5687 48.6747 57.0727 57.3491 58.7313 59.0663C60.3898 60.7836 69.8274 66.9921 71.0604 68.093C72.2933 69.1938 76.8433 78.7048 76.8433 78.7048L59.0689 79.1011L33.4567 29.7114L44.9492 20.1417Z"
        fill="#D57657"
      />
      <path
        d="M41.0303 4.84776L35.3207 3.18921C35.3207 3.18921 34.1465 7.73922 33.5301 8.89874C32.9136 10.0729 29.7433 11.7168 29.3911 13.4488C29.0535 15.166 29.259 16.1347 29.259 16.1347C29.259 16.1347 18.8526 15.166 17.6931 24.1927C17.1207 28.5665 18.2215 31.4287 19.5572 33.4982C21.3185 36.2282 23.8723 37.2556 24.1072 37.8427C24.5181 38.8701 31.0643 54.9273 32.2972 58.1563C33.5301 61.4 42.5567 81.0972 42.7035 82.5356C42.8356 83.9887 42.0871 86.249 41.7348 88.5974C41.3972 90.9458 40.634 97.8295 43.2466 103.055C45.8592 108.28 51.6568 113.388 52.1998 115.252C52.7576 117.116 55.3702 123.515 56.1921 128.197C57.014 132.879 58.2616 142.933 58.8047 146.794C59.3624 150.654 60.9329 157.126 60.8742 161.941C60.8008 166.755 58.8781 172.274 59.2157 173.507C59.5532 174.739 62.1071 175.855 64.9986 175.708C67.89 175.576 70.7815 174.255 70.9283 173.507C71.0604 172.743 69.9009 158.08 69.622 154.984C69.3431 151.887 68.5212 142.449 69.0642 134.67C69.622 126.891 70.8549 115.941 70.8549 115.941C70.8549 115.941 75.6104 115.457 77.6065 115.12C79.6027 114.782 86.0754 112.771 86.0754 112.771C86.0754 112.771 87.0441 118.011 88.5559 125.863C90.0677 133.716 91.2419 141.495 90.6254 144.386C90.009 147.278 88.9669 153.266 86.912 158.917C84.8572 164.568 81.7456 173.242 82.1565 174.138C82.5675 175.033 85.3269 176.06 88.2183 175.796C91.1098 175.517 93.0325 174.417 93.3848 173.595C93.7371 172.773 94.559 164.362 94.8379 163.394C95.1167 162.425 101.663 143.77 102.279 139.22C102.896 134.67 103.997 122.414 104.408 121.108C104.819 119.802 107.915 117.732 109.501 113.534C111.086 109.337 111.776 104.86 111.776 104.86C111.776 104.86 114.183 109.542 116.59 112.434C118.997 115.325 123.679 119.493 124.237 120.154C125.191 121.255 127.26 120.359 125.749 118.363C124.237 116.367 120.582 113.065 118.997 110.437C117.412 107.825 114.594 101.352 114.109 99.6935C113.625 98.035 111.849 94.894 111.189 93.8226C110.117 92.1053 104.07 81.9778 100.489 81.0091C96.9074 80.0404 91.7116 78.8956 85.7965 78.9543C82.2886 78.9983 74.5683 76.7527 73.4675 76.2683C72.3667 75.784 69.5486 74.4043 69.5486 74.4043C69.5486 74.4043 67.2002 70.412 65.2775 68.548C63.3547 66.6839 58.5992 64.7612 57.425 63.587C56.2508 62.4128 50.2624 53.4595 47.0921 46.9868C43.9217 40.514 40.7514 35.2154 40.0616 32.5295C39.3717 29.8435 38.7553 26.3943 38.7553 26.3943C38.7553 26.3943 45.0226 26.7319 48.8093 25.5723C52.5961 24.4128 57.6892 18.7473 57.6892 18.7473C57.6892 18.7473 53.6969 14.9605 47.8406 15.0926C41.9843 15.2247 40.2964 16.5163 40.2964 16.5163C40.2964 16.5163 40.1937 13.2286 40.3258 11.7168C40.4725 10.2197 41.0303 4.84776 41.0303 4.84776Z"
        fill="#FFB305"
      />
      <path
        d="M5.99518 31.825C4.89437 32.8377 4.13114 34.2174 4.95308 35.1421C5.92179 36.2282 7.33083 35.5824 8.35825 34.7017C9.40035 33.8358 10.5158 32.2506 9.6939 31.2379C8.96003 30.3278 7.40421 30.5187 5.99518 31.825Z"
        fill="#2E2A32"
      />
      <path
        d="M34.2787 25.4403C34.2787 28.9776 31.3725 32.0452 27.7325 32.0452C24.0925 32.0452 21.113 29.3152 21.113 25.7779C21.113 22.2406 24.0631 19.3785 27.7031 19.3785C31.3432 19.3785 34.2787 21.9031 34.2787 25.4403Z"
        fill="#FEE2B2"
      />
      <path
        d="M23.9457 25.4844C24.2833 24.6771 24.5475 23.7671 25.3547 23.0773C26.8078 21.8444 29.3617 21.815 30.5506 23.6644C31.9303 25.7926 31.0056 28.0089 29.3177 28.8015C27.7912 29.5207 25.5309 28.7721 25.5309 28.7721C25.5309 28.7721 23.6375 29.6675 21.9496 29.4326C21.2304 29.3299 20.1149 28.6987 20.0855 28.0823C20.0562 27.2897 20.3351 27.0108 22.0817 26.8494C23.5641 26.6879 23.7696 25.8953 23.9457 25.4844Z"
        fill="#2E2A32"
      />
      <path
        d="M25.5309 0.268342C22.5954 0.0481802 21.7588 1.35447 21.7147 2.89561C21.656 4.45142 22.5954 5.94852 25.0759 5.94852C27.5564 5.94852 28.6865 5.06787 28.6865 2.85158C28.6865 0.884795 26.8812 0.371084 25.5309 0.268342Z"
        fill="#4D4D4D"
      />
      <path
        d="M34.5281 2.17644C33.5007 4.49548 34.7336 6.37419 37.2728 7.2842C39.8561 8.20888 42.0283 7.69517 42.6008 5.0679C43.1732 2.44063 41.7788 1.25176 40.3257 0.576595C38.8874 -0.0838905 35.8344 -0.773732 34.5281 2.17644Z"
        fill="#4D4D4D"
      />
      <path
        d="M35.4969 33.6449C36.7004 34.2467 36.6271 36.2281 36.2161 37.3583C35.9666 38.0335 34.352 39.0168 33.1191 37.7693C31.8862 36.5363 33.6475 32.7055 35.4969 33.6449Z"
        fill="#D57657"
      />
      <path
        d="M29.7727 44.0218C29.7286 45.2107 31.167 48.9828 32.8696 49.0856C34.5722 49.1883 36.8472 48.2049 36.6857 46.972C36.5243 45.7391 35.0859 41.967 33.7943 41.9083C32.5027 41.8496 29.8167 42.4807 29.7727 44.0218Z"
        fill="#D57657"
      />
      <path
        d="M38.5498 40.6607C36.7004 41.6147 37.9333 43.4054 38.6525 44.33C39.3717 45.2547 40.9275 46.5463 42.0137 45.7244C43.0998 44.9025 42.6888 43.4347 42.4833 42.466C41.7495 39.0608 40.6633 39.5892 38.5498 40.6607Z"
        fill="#D57657"
      />
      <path
        d="M42.9384 47.9994C41.9403 48.6306 40.7661 48.9828 42.1164 51.6101C43.4667 54.2374 45.9326 60.6954 48.7213 59.3011C51.51 57.9067 48.9268 54.1933 47.8993 52.2265C46.8719 50.2744 45.5803 46.3556 42.9384 47.9994Z"
        fill="#D57657"
      />
      <path
        d="M33.5888 54.8685C33.2219 56.483 36.0106 62.765 38.5498 63.0292C41.0743 63.2933 42.7916 61.7375 42.7916 60.4019C42.7916 59.0516 40.0469 52.1825 37.9333 52.2412C35.8198 52.2999 33.853 53.7383 33.5888 54.8685Z"
        fill="#D57657"
      />
      <path
        d="M40.5606 69.4872C40.4725 70.632 43.3493 76.0921 45.7271 76.3122C48.1048 76.5324 52.1851 74.7564 52.3906 72.7016C52.5961 70.632 50.2184 65.2601 47.5324 65.0106C44.8464 64.7464 40.6633 68.0488 40.5606 69.4872Z"
        fill="#D57657"
      />
      <path
        d="M50.9963 62.721C49.7193 64.174 50.4239 64.3795 53.2713 67.8287C54.2253 68.9882 56.2215 72.0118 57.9681 69.7955C59.4505 67.9315 59.2597 67.9902 55.5903 64.629C54.24 63.3961 52.0824 61.4881 50.9963 62.721Z"
        fill="#D57657"
      />
      <path
        d="M59.7294 73.2594C59.7294 74.7565 64.6904 77.9562 65.7178 76.6646C66.7452 75.3729 64.2207 71.2339 62.8263 70.8816C61.432 70.5294 59.7294 72.276 59.7294 73.2594Z"
        fill="#D57657"
      />
      <path
        d="M49.2497 83.5483C52.0384 87.0122 53.7997 86.1315 55.3995 86.9094C56.9994 87.6873 59.9936 89.7862 61.1384 89.7569C62.9437 89.6982 66.8186 87.3791 66.98 84.6931C67.1415 82.0072 61.975 76.4738 58.5111 75.8573C55.0326 75.2262 46.7105 80.3926 49.2497 83.5483Z"
        fill="#D57657"
      />
      <path
        d="M46.8719 88.3919C46.96 88.9496 45.683 90.8137 45.1106 92.7364C44.5382 94.6445 44.4942 97.3304 44.0832 97.7414C43.6722 98.1524 41.6614 97.8001 41.6614 97.8001C41.6614 97.8001 40.9569 94.8646 41.1917 90.8283C41.3532 88.1424 42.4833 85.0454 42.4833 85.0454C42.4833 85.0454 46.7105 87.4232 46.8719 88.3919Z"
        fill="#D57657"
      />
      <path
        d="M50.5413 89.7423C49.7193 90.0505 48.0608 91.9145 47.3856 93.9841C46.7104 96.0536 46.094 99.7229 46.505 100.237C46.9159 100.75 58.0268 105.976 59.8908 105.711C61.7548 105.447 68.4184 100.281 68.5652 98.4754C68.7266 96.67 67.5378 91.5476 65.2041 91.2981C62.885 91.0339 59.2156 94.6005 58.2323 94.806C57.2489 95.0115 51.9356 89.2286 50.5413 89.7423Z"
        fill="#D57657"
      />
      <path
        d="M69.0789 78.8955C69.1376 79.7175 71.0897 81.3173 71.2952 83.9006C71.5007 86.4838 69.4312 88.7001 69.4312 89.6394C69.4312 90.5788 72.0144 95.8627 72.9391 95.7306C74.9059 95.4664 78.5752 89.5367 78.8247 84.4143C78.9862 81.3173 77.9441 78.1176 77.1222 77.5892C76.3002 77.0755 73.9665 76.1362 72.3667 76.6059C70.7815 77.0902 68.9762 77.5452 69.0789 78.8955Z"
        fill="#D57657"
      />
      <path
        d="M83.5509 81.3761C82.0391 81.7137 79.1623 90.4615 80.087 92.076C81.0117 93.6759 87.6312 95.9509 89.2751 94.3951C90.9337 92.8392 89.7888 88.7149 88.8054 86.7481C87.8367 84.7813 85.1507 81.0092 83.5509 81.3761Z"
        fill="#D57657"
      />
      <path
        d="M75.3315 97.3892C74.6123 98.3139 79.4119 104.625 81.2172 106.695C82.4207 108.06 88.2477 100.134 87.9835 98.578C87.734 97.0222 78.2964 93.5877 75.3315 97.3892Z"
        fill="#D57657"
      />
      <path
        d="M72.6896 100.853C70.4733 100.56 64.7931 105.506 64.6316 106.431C64.4702 107.355 66.8039 112.478 69.7394 112.272C72.6896 112.067 77.3276 109.425 77.2249 108.353C77.1368 107.252 74.6563 101.103 72.6896 100.853Z"
        fill="#D57657"
      />
      <path
        d="M54.2547 107.619C52.4787 108.647 54.7684 113.153 57.9681 116.147C61.0797 119.053 62.6208 120.844 63.9125 119.758C65.2041 118.671 66.026 112.58 64.9399 111.597C63.8684 110.613 56.9407 106.063 54.2547 107.619Z"
        fill="#D57657"
      />
      <path
        d="M62.885 124.454C62.6649 125.775 64.5876 127.551 65.6297 127.14C66.6571 126.729 68.4184 123.676 67.2295 122.649C66.026 121.607 63.1345 122.899 62.885 124.454Z"
        fill="#D57657"
      />
      <path
        d="M58.9515 129.313C58.4671 130.663 60.1403 132.468 61.7989 132.468C63.4574 132.468 63.6629 129.944 62.1658 128.96C60.654 127.962 59.2597 128.432 58.9515 129.313Z"
        fill="#D57657"
      />
      <path
        d="M98.3751 93.2502C96.3496 92.8099 91.8143 96.4058 90.8309 99.5028C89.8475 102.6 90.8896 112.991 93.1499 113.608C95.4103 114.224 100.841 108.133 101.164 106.431C101.472 104.728 100.019 93.6171 98.3751 93.2502Z"
        fill="#D57657"
      />
      <path
        d="M101.619 93.8666C102.749 97.4773 103.732 102.746 104.98 104.611C106.771 107.297 111.071 101.514 110.616 98.2112C110.146 94.9087 107.211 91.3421 105.552 91.1807C103.894 91.0339 101.061 92.0907 101.619 93.8666Z"
        fill="#D57657"
      />
      <path
        d="M100.797 113.505C99.5934 112.962 94.2948 117.747 94.0306 119.493C93.7664 121.255 96.9221 125.643 98.9916 124.704C101.061 123.779 101.824 113.975 100.797 113.505Z"
        fill="#D57657"
      />
      <path
        d="M103.644 113.138C104.334 114.503 106.903 113.857 107.783 112.668C108.664 111.48 108.664 107.458 108.048 107.296C107.431 107.135 104.892 109.204 104.642 109.615C104.364 110.041 103.439 112.727 103.644 113.138Z"
        fill="#D57657"
      />
      <path
        d="M95.014 130.193C94.9553 130.707 96.9661 135.448 98.0082 135.404C99.4613 135.345 100.078 131.367 100.224 130.545C100.342 129.914 99.2411 127.86 98.0082 127.918C96.7753 127.977 95.1167 129.357 95.014 130.193Z"
        fill="#D57657"
      />
      <path
        d="M93.5609 92.1199C94.2067 93.9399 98.0522 90.0064 98.3604 89.3312C98.6687 88.6561 99.8135 84.9867 98.3604 84.062C96.9074 83.1373 91.8583 83.9006 91.5941 84.8399C91.3446 85.7646 93.2527 91.2393 93.5609 92.1199Z"
        fill="#D57657"
      />
      <path
        d="M101.883 88.6561C102.411 89.3166 105.039 89.7422 106.169 89.434C107.299 89.1257 107.827 88.8175 107.827 88.8175C107.827 88.8175 105.406 85.2069 104.774 84.429C104.158 83.6511 101.986 81.6402 101.413 81.376C100.856 81.1119 100.327 86.748 101.883 88.6561Z"
        fill="#D57657"
      />
      <path
        d="M90.8309 82.8144C93.0032 82.8144 95.2782 79.7615 95.2782 79.7615C95.2782 79.7615 92.1812 79.2478 91.462 79.1451C90.7428 79.0423 87.0148 78.9396 87.0148 78.9396C87.0148 78.9396 89.1283 82.8144 90.8309 82.8144Z"
        fill="#D57657"
      />
    </svg>
  );
});
