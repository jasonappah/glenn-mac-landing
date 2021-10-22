export default function PatternBg() {
  const options = ["~", "*", "+", "-", "/"];

  return (
    <div className="select-none fixed w-full h-full opacity-10 text-white grid grid-cols-12 grid-rows-12 font-mono">
      {Array(144)
        .fill(0, 0, 144)
        .map((_, index) => {
          return (
            <div
              key={index}
              className="flex justify-center content-center items-center"
            >
              <PatternChar
                char={options[Math.floor(Math.random() * options.length)]}
              />
            </div>
          );
        })}
    </div>
  );
}

function PatternChar({ char }) {
  return <span>{char}</span>;
}

//   originally i was changing the number of rows and columns based on the window size/aspect ratio but then i realized that this is mostly going to be accessed from school computers with a 16:9 aspect ratio so this is kinda a waste of time for little gain

// const [w, setW] = useState(0);
// const [h, setH] = useState(0);

// const [col, setCol] = useState("grid-cols-12");
// const [row, setRow] = useState("grid-rows-12");

// function gcd(a, b) {
//     return b == 0 ? a : gcd(b, a % b);
//   }

//   useEffect(() => {
//     setW(window.innerWidth);
//     setH(window.innerHeight);
//     console.log(w, h);
//     var r = gcd(w, h);
//     const a = w / r;
//     const b = h / r;
//
// this is super cumbersome but it had to be done this way to make sure tailwind's jit compiler doesn't purge classes we actually need - see https://tailwindcss.com/docs/optimizing-for-production#writing-purgeable-html for more info
//     switch (a) {
//       case 1:
//         setCol("grid-cols-1");
//       case 2:
//         setCol("grid-cols-2");
//       case 3:
//         setCol("grid-cols-3");
//       case 4:
//         setCol("grid-cols-4");
//       case 5:
//         setCol("grid-cols-5");
//       case 6:
//         setCol("grid-cols-6");
//       case 7:
//         setCol("grid-cols-7");
//       case 8:
//         setCol("grid-cols-8");
//       case 9:
//         setCol("grid-cols-9");
//       case 10:
//         setCol("grid-cols-10");
//       case 11:
//         setCol("grid-cols-11");
//       default:
//         setCol("grid-cols-12");
//     }

//     switch (b) {
//       case 1:
//         setRow("grid-rows-1");
//       case 2:
//         setRow("grid-rows-2");
//       case 3:
//         setRow("grid-rows-3");
//       case 4:
//         setRow("grid-rows-4");
//       case 5:
//         setRow("grid-rows-5");
//       case 6:
//         setRow("grid-rows-6");
//       case 7:
//         setRow("grid-rows-7");
//       case 8:
//         setRow("grid-rows-8");
//       case 9:
//         setRow("grid-rows-9");
//       case 10:
//         setRow("grid-rows-10");
//       case 11:
//         setRow("grid-rows-11");
//       default:
//         setRow("grid-rows-12");
//     }
//   });
