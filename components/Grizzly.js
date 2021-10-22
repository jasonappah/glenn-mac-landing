import { motion } from "framer-motion";

export default function Grizzly(props) {
  const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(0, 0, 0, 0)",
      strokeWidth: "1px",
    },
    visible: {
      pathLength: 1,
      fill: "rgba(0, 0, 0, 0.2)",
      strokeWidth: "0px",
    },
  };

  return (
    <svg
      fillRule="evenodd"
      clipRule="evenodd"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 86 76"
      width="86"
      height="76"
      style={{
        stroke: "#fff",
        strokeLinejoin: "round",
      }}
      {...props}
    >
      <motion.path
        d="M17.7833 0.0114111C17.7174 0.0177906 17.5087 0.0375364 17.3194 0.0552471C14.4994 0.319206 11.8954 1.31611 9.76936 2.94561C8.53909 3.88853 7.45586 5.08541 6.6347 6.40915C6.39169 6.80085 5.87765 7.83369 5.71549 8.25598C4.83575 10.547 4.72372 12.8183 5.38212 15.0152C5.7851 16.3598 6.6007 17.7664 7.60545 18.8494L7.86515 19.1294L7.50952 19.5785C6.98452 20.2416 5.956 21.7809 5.02748 23.2933C1.21047 29.5104 -0.354748 34.4133 0.0667569 38.8319C0.34789 41.7792 1.49017 44.6151 3.82112 48.1527C4.10929 48.5901 4.35846 48.9468 4.37483 48.9454C4.39117 48.944 4.59158 48.6457 4.82016 48.2823C5.16025 47.7418 5.24271 47.6291 5.27378 47.6621C5.2947 47.6843 5.51058 47.9964 5.75359 48.3556C7.74887 51.3054 10.187 54.5188 12.4839 57.2257C12.7318 57.5179 12.9627 57.7901 12.997 57.8305L13.0595 57.9041L13.5767 57.0639C13.8612 56.6017 14.1026 56.2236 14.1132 56.2236C14.1237 56.2236 14.4554 56.5527 14.8504 56.955C20.8606 63.0763 27.8134 68.2991 35.4121 72.4005C36.4296 72.9497 38.6392 74.0619 39.6621 74.5397C41.0591 75.1923 42.905 76 42.9993 76C43.0937 76 44.9396 75.1923 46.3365 74.5397C47.3595 74.0619 49.5691 72.9497 50.5866 72.4005C55.6113 69.6884 60.374 66.4731 64.7585 62.833C66.9714 60.9957 69.1354 59.0051 71.1483 56.955C71.5433 56.5527 71.875 56.2236 71.8855 56.2236C71.8961 56.2236 72.1374 56.6017 72.422 57.0639L72.9392 57.9041L73.0016 57.8305C73.036 57.7901 73.2669 57.5179 73.5148 57.2257C75.8117 54.5188 78.2498 51.3054 80.2451 48.3556C80.4881 47.9964 80.704 47.6843 80.7249 47.6621C80.756 47.6291 80.8387 47.7423 81.1798 48.2849C81.409 48.6496 81.6095 48.948 81.6253 48.948C81.7131 48.948 83.2958 46.4083 83.8025 45.4544C85.7678 41.7545 86.3766 38.4699 85.7818 34.7764C85.2466 31.4532 83.6816 27.7167 80.9722 23.2933C80.5665 22.631 79.4338 20.8851 79.0136 20.2745L78.8072 19.9745L79.3052 19.4694C80.2282 18.5334 80.7992 17.7318 81.3231 16.6365C81.7842 15.6726 82.0413 14.799 82.1983 13.6634C82.271 13.1371 82.2707 11.8074 82.1977 11.2519C81.7997 8.22372 80.2403 5.5046 77.7299 3.46171C74.1383 0.538934 69.145 -0.422576 63.9205 0.802588C62.0702 1.23648 60.2872 1.89196 58.3757 2.84098L57.6048 3.22372L56.52 3.03507C52.5199 2.33953 49.531 1.99613 46.4413 1.87723C45.4407 1.83874 40.5726 1.83898 39.5574 1.87759C36.8452 1.98073 34.1414 2.2696 30.728 2.82087C30.2095 2.90463 29.7718 2.97568 29.7553 2.97881C29.7388 2.98194 29.4829 2.85961 29.1866 2.70698C26.3477 1.24475 23.5775 0.381299 20.7164 0.0669429C20.2941 0.0205245 18.1141 -0.0207293 17.7833 0.0114111ZM18.3145 4.00272C19.4205 4.06235 20.3319 4.23508 21.3836 4.58438C22.6486 5.00451 23.6684 5.54418 24.8698 6.42929C25.5725 6.94697 25.9493 7.25316 26.4335 7.69984C26.6111 7.8637 26.8289 8.0642 26.9175 8.14537L27.0785 8.29298L27.5041 8.16983C28.1898 7.97139 28.3463 7.93084 28.9771 7.78824C31.0905 7.31051 33.3151 7.057 36.729 6.90481C41.0511 6.71215 44.9243 6.68924 47.1447 6.8432C49.5547 7.01031 52.2565 7.36103 54.3578 7.77949C54.7777 7.86309 54.7948 7.85729 53.8939 7.93652C51.6648 8.13246 48.6434 8.8236 44.9598 9.98011L44.7802 10.0365L44.7882 10.1715C44.7926 10.2458 44.9711 12.5143 45.1849 15.2127C45.3987 17.911 45.5817 20.276 45.5914 20.4681C45.6203 21.0342 45.6658 21.1326 45.9921 21.3337C47.9146 22.5191 50.859 22.8759 53.7592 22.2748C54.039 22.2168 54.3415 22.1493 54.4312 22.1249C54.521 22.1004 54.5984 22.0844 54.6033 22.0894C54.6196 22.106 53.8541 22.5273 53.2803 22.8176C51.7428 23.5955 50.1126 24.1842 48.9652 24.3758C48.5267 24.4491 47.7241 24.4497 47.3629 24.3771C46.6869 24.2412 46.0875 23.9432 45.6351 23.5181C45.4548 23.3486 45.4536 23.3481 45.4538 23.4343C45.4541 23.582 45.5724 24.3491 45.6663 24.8121C46.3861 28.3598 48.3168 31.6244 51.0655 33.9411C51.8682 34.6177 52.7243 35.1896 53.7399 35.7279C54.3592 36.0561 54.5117 36.1828 54.6547 36.4883C54.8775 36.9642 55.4142 39.4572 55.7021 41.3533C56.1214 44.1149 56.2808 46.4429 56.2492 49.3429C56.2285 51.241 56.157 52.4734 55.9715 54.1275C55.9313 54.4867 55.8898 54.8596 55.8794 54.9562C55.869 55.0529 55.8509 55.1379 55.8392 55.1453C55.8274 55.1527 55.6978 55.0531 55.5512 54.9241C52.8373 52.5352 49.5349 50.9071 45.925 50.1783C45.8304 50.1592 45.7529 50.1298 45.7529 50.113C45.7529 50.0522 45.9136 49.6705 46.075 49.3476C47.003 47.492 48.8286 46.093 50.8771 45.6676C51.0795 45.6256 51.4722 45.5747 51.7499 45.5544L52.2547 45.5177L52.235 45.3222C52.2033 45.008 52.0728 44.3962 51.9328 43.9051C51.6029 42.748 50.9918 41.5271 50.285 40.613L50.1546 40.4444L49.8917 40.4521C49.4456 40.4651 48.4894 40.5477 47.8929 40.6247C46.4314 40.8134 45.1229 41.1129 43.6204 41.6024L42.9993 41.8048L42.3783 41.6024C40.8758 41.1129 39.5673 40.8134 38.1058 40.6247C37.5092 40.5477 36.5531 40.4651 36.107 40.4521L35.8441 40.4444L35.7137 40.613C35.0069 41.5271 34.3958 42.748 34.0659 43.9051C33.9259 44.3962 33.7954 45.008 33.7637 45.3222L33.744 45.5177L34.2488 45.5544C34.5265 45.5747 34.9192 45.6256 35.1216 45.6676C37.1701 46.093 38.9957 47.492 39.9236 49.3476C40.0851 49.6705 40.2458 50.0522 40.2458 50.113C40.2458 50.1298 40.1683 50.1592 40.0737 50.1783C36.463 50.9073 33.1615 52.5351 30.4461 54.9253C30.2987 55.055 30.1689 55.1507 30.1576 55.138C30.1202 55.0959 29.9325 53.3211 29.8611 52.3352C29.7825 51.2496 29.7657 50.7964 29.7496 49.3277C29.7184 46.4864 29.878 44.1206 30.2803 41.4597C30.574 39.517 31.121 36.9583 31.343 36.4883C31.4875 36.1826 31.6406 36.0555 32.2588 35.7279C34.1137 34.7448 35.5704 33.5558 36.9668 31.8851C37.2544 31.541 37.8838 30.6681 38.1392 30.2592C39.3758 28.2793 40.1634 26.1578 40.4835 23.9447C40.5172 23.7117 40.5448 23.4821 40.5449 23.4343C40.5451 23.3481 40.5439 23.3486 40.3636 23.5181C39.9112 23.9432 39.3118 24.2412 38.6358 24.3771C38.273 24.45 37.4724 24.4491 37.0283 24.3752C35.8415 24.1778 34.0883 23.5321 32.4789 22.6997C31.0186 21.9443 29.4991 20.9173 28.3117 19.8833L28.0054 19.6165L27.6794 19.7825C26.739 20.2612 25.8946 20.8836 25.0609 21.7128C24.126 22.6427 23.4221 23.6316 22.8777 24.7798L22.6699 25.2182L22.7606 25.2962C23.391 25.839 23.5882 26.0022 23.92 26.2557C25.9899 27.8371 28.4887 28.9825 31.0391 29.5189C31.4591 29.6073 32.2792 29.7413 32.6361 29.78C32.739 29.7912 32.8231 29.8103 32.8231 29.8225C32.8231 29.8689 32.3312 30.4448 32.0521 30.725C31.1845 31.5962 30.0937 32.2807 28.9379 32.6794C28.5675 32.8071 27.946 32.9665 27.6811 33.0016C27.4882 33.0272 27.4892 33.026 27.0943 33.7132C26.567 34.6305 25.9815 35.8523 25.5804 36.8725C23.9587 40.9969 23.4121 45.739 23.966 50.877C24.2952 53.9308 25.0742 57.2893 26.0934 60.048C26.2069 60.3553 26.2944 60.6123 26.2878 60.619C26.2688 60.6382 25.5671 59.8045 25.0614 59.1619C22.691 56.1502 19.5462 51.4128 17.7476 48.1445C17.3229 47.3726 16.6334 45.9728 16.4376 45.4848C16.3572 45.2843 16.2824 45.1094 16.2713 45.0962C16.2334 45.0506 15.0461 46.0561 14.2461 46.8112C13.8197 47.2137 13.2887 47.7706 12.6502 48.4851L12.5453 48.6024L12.0216 48.1019C10.8292 46.9621 9.7796 45.7049 8.9617 44.4368C7.51937 42.2003 6.71548 39.8408 6.51507 37.2554C6.47589 36.7501 6.47625 35.4889 6.5157 34.9435C6.71701 32.1618 7.57788 29.2437 9.14059 26.0463C9.95595 24.378 10.7675 22.9608 11.9174 21.1972C12.8891 19.707 13.0546 19.4847 14.1904 18.1453C15.1881 16.9688 15.8289 16.2667 16.8689 15.2106C18.4688 13.5859 19.6766 12.5328 21.3887 11.2697C21.6445 11.0811 21.8578 10.9149 21.8627 10.9006C21.8758 10.8628 21.6519 10.5006 21.4203 10.185C20.3706 8.75467 18.6261 7.56842 17.0487 7.21233C16.0231 6.98081 15.1889 7.05184 14.3949 7.43825C13.8315 7.71242 13.1438 8.2726 12.8023 8.7355C12.3178 9.39214 12.1249 9.93391 12.0809 10.7622C12.0667 11.0295 12.0399 11.4328 12.0214 11.6584C11.9702 12.2813 12.0427 13.1077 12.2146 13.8608C12.3322 14.3765 12.6098 15.2064 12.873 15.8295C12.9196 15.9397 12.9193 15.9437 12.8678 15.9157C12.7704 15.8628 11.9159 15.0089 11.6563 14.7051C10.0616 12.8383 9.60286 10.9463 10.2585 8.9395C10.9787 6.7349 12.9873 4.92647 15.4219 4.29065C16.0556 4.12514 16.7985 4.01645 17.4541 3.9933C17.5857 3.98865 17.7137 3.98243 17.7384 3.97945C17.7631 3.9765 18.0223 3.98695 18.3145 4.00272ZM70.5547 4.3535C72.1642 4.54458 73.5361 5.10488 74.706 6.04892C75.539 6.72117 76.2143 7.56372 76.6575 8.48382C77.314 9.84672 77.4309 11.2561 76.9976 12.5826C76.9013 12.8772 76.8502 12.947 76.8502 12.7839C76.8502 12.613 76.7255 12.0396 76.612 11.6887C76.3049 10.7395 75.7904 9.91218 75.0252 9.13696C73.2125 7.30049 70.7457 6.60409 68.0807 7.17648C66.9683 7.41544 65.7359 7.95141 64.6986 8.64747C64.5093 8.77448 64.3396 8.88831 64.3214 8.9004C64.3015 8.91361 64.1868 8.79893 64.0329 8.61195C63.559 8.0361 62.8461 7.32224 62.3342 6.91073L62.2294 6.82655L62.3162 6.75902C64.1334 5.3449 66.3827 4.48164 68.7055 4.3069C69.1561 4.27303 70.071 4.29605 70.5547 4.3535ZM29.6954 24.1904C30.5879 24.6834 32.7035 25.5867 33.8557 25.9666C34.0203 26.0209 34.1675 26.0769 34.1827 26.0911C34.2178 26.124 33.1973 26.6293 32.8437 26.7541C32.2674 26.9576 31.6271 27.023 31.1715 26.925C30.5857 26.799 30.0207 26.4009 29.5743 25.7996C29.273 25.3935 28.9611 24.6352 28.8154 23.9539L28.7585 23.688L29.1372 23.8896C29.3455 24.0005 29.5967 24.1358 29.6954 24.1904ZM57.1833 23.9541C57.0387 24.6298 56.7547 25.3281 56.445 25.7692C56.1283 26.2203 55.6712 26.6074 55.2362 26.7929C54.6546 27.0409 53.9292 27.0274 53.155 26.7541C52.8014 26.6293 51.7809 26.124 51.816 26.0911C51.8312 26.0769 51.9784 26.0209 52.143 25.9666C53.4764 25.527 55.3125 24.7256 56.6923 23.9813C56.9887 23.8214 57.2331 23.6901 57.2356 23.6894C57.2381 23.6888 57.2145 23.8079 57.1833 23.9541ZM76.9066 28.9007C78.3194 32.7073 78.6767 36.1061 77.9999 39.3028C77.6142 41.1246 76.8428 42.9237 75.7153 44.6312C74.9332 45.8155 73.9161 47.0195 72.7808 48.1049L72.258 48.6046L72.1549 48.4877C71.2941 47.5121 70.5833 46.7983 69.7568 46.0792C69.1242 45.5289 68.5578 45.0664 68.5393 45.0851C68.5301 45.0945 68.4719 45.2293 68.41 45.3847C67.3801 47.971 64.1099 53.2959 60.8213 57.7413C59.9099 58.9734 58.7928 60.3773 58.5604 60.5829C58.4977 60.6385 58.4992 60.6306 58.5781 60.4918C59.5175 58.8393 60.5311 56.6461 61.2672 54.6729C63.0449 49.9074 64.1708 44.158 64.4587 38.3762C64.477 38.0087 64.4989 37.6378 64.5072 37.5521L64.5225 37.3962L65.8874 38.2134C67.5032 39.1808 68.2091 39.6226 69.0385 40.1856C70.6357 41.27 71.8838 42.3333 72.8452 43.4287L73.0136 43.6207L73.1714 43.4287C75.0065 41.1964 76.3153 38.0836 76.7747 34.8588C76.9092 33.9147 76.9444 33.4342 76.9612 32.3125C76.9823 30.8959 76.9131 29.8904 76.7152 28.7374C76.6381 28.288 76.6303 28.2244 76.6557 28.2501C76.664 28.2585 76.7769 28.5513 76.9066 28.9007ZM44.2115 53.3414C44.9118 53.4082 45.8225 53.6243 46.5861 53.905C48.0967 54.4603 50.3663 55.7057 51.8248 56.7797C52.3649 57.1774 53.3353 58.0181 53.2953 58.0537C53.2871 58.061 53.0177 57.9936 52.6967 57.9039C50.9337 57.4115 48.9904 57.0865 46.98 56.9479C46.2601 56.8983 44.2455 56.8992 43.5456 56.9495C43.0992 56.9815 42.8995 56.9815 42.4531 56.9495C41.7532 56.8992 39.7386 56.8983 39.0187 56.9479C37.0083 57.0865 35.065 57.4115 33.302 57.9039C32.981 57.9936 32.7116 58.061 32.7034 58.0537C32.6634 58.0181 33.6338 57.1774 34.1738 56.7797C35.6324 55.7057 37.902 54.4603 39.4126 53.905C40.1419 53.6369 41.0927 53.4073 41.7423 53.3425C42.1129 53.3055 43.8271 53.3047 44.2115 53.3414Z"
        variants={icon}
        initial="hidden"
        animate="visible"
        transition={{
          repeat: Infinity,
          repeatDelay: 1.5,
          duration: 3,
          ease: "easeInOut",
          repeatType: "mirror",
        }}
      />
    </svg>
  );
}
