const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar) {
    bar.addEventListener('click', ()=> {
        nav.classList.add('active');
    })
}

if(close) {
    close.addEventListener('click', ()=> {
        nav.classList.remove('active');
    })
}

let MainImg = document.getElementById('MainImg')
let smallimg = document.getElementsByClassName('small-img')

smallimg[0].onclick = function () {
    MainImg.src = smallimg[0].src;
}
smallimg[1].onclick = function () {
    MainImg.src = smallimg[1].src;
}
smallimg[2].onclick = function () {
    MainImg.src = smallimg[2].src;
}
smallimg[3].onclick = function () {
    MainImg.src = smallimg[3].src;
}

let mainImg = document.getElementById("MainImg");
let colorSelect = document.getElementById("colorSelect");


colorSelect.addEventListener("change", function () {
  const selectedColor = colorSelect.value;

  const colorImages = {
    Blue: "Images/SmartWatch8.png",
    liteBlue:"Images/p-page2.png",
    White: "Images/p-page3.png",
    Black: "Images/p-page4.png",
    Green: "Images/SmartWatch8.png"
  };

  if (colorImages[selectedColor]) {
    mainImg.src = colorImages[selectedColor];
  }
});


// document.addEventListener('DOMContentLoaded', function () {
//   const mainImg = document.getElementById('MainImg');
//   const smallImgs = document.querySelectorAll('.small-img');
//   const colorSelect = document.getElementById('colorSelect');

//   // normalize helper (lowercase, trim)
//   const norm = s => (s || '').toString().trim().toLowerCase();

//   // map normalized color keys -> image paths (use normalized keys, including spaces)
//   const colorImages = {
//     'blue': 'Images/SmartWatch8.png',
//     'liteblue': 'Images/p-page2.png',
//     'white': 'Images/p-page3.png',
//     'black': 'Images/p-page4.png',
//     'green': 'Images/SmartWatch8.png'
//   };

//   // helper: get filename from src (works with absolute or relative URLs)
//   function filenameFromSrc(src) {
//     try {
//       // URL constructor resolves relative paths
//       const url = new URL(src, location.href);
//       return url.pathname.split('/').pop().toLowerCase();
//     } catch (e) {
//       return src.split('/').pop().toLowerCase();
//     }
//   }

//   // build reverse map: filename -> normalized color key
//   const filenameToColor = {};
//   Object.keys(colorImages).forEach(colorKey => {
//     const filename = colorImages[colorKey].split('/').pop().toLowerCase();
//     filenameToColor[filename] = colorKey;
//   });

//   // set <select> to option whose normalized value/text matches colorKey
//   function setSelectToColor(colorKey) {
//     if (!colorKey) return;
//     for (let i = 0; i < colorSelect.options.length; i++) {
//       const opt = colorSelect.options[i];
//       if (norm(opt.value) === colorKey || norm(opt.text) === colorKey) {
//         colorSelect.selectedIndex = i;
//         return;
//       }
//     }
//   }

//   // update main image and sync select based on an image src
//   function updateByImageSrc(imgSrc) {
//     const fname = filenameFromSrc(imgSrc);
//     mainImg.src = imgSrc;
//     const colorKey = filenameToColor[fname];
//     if (colorKey) setSelectToColor(colorKey);
//   }

//   // thumbnail clicks -> update main image + select
//   smallImgs.forEach(img => {
//     img.addEventListener('click', function () {
//       updateByImageSrc(this.src);
//     });
//   });

//   // select change -> update main image
//   colorSelect.addEventListener('change', function () {
//     const selectedKey = norm(this.value);
//     if (colorImages[selectedKey]) {
//       mainImg.src = colorImages[selectedKey];
//     } else {
//       // try matching by option text if needed
//       for (const key in colorImages) {
//         if (norm(key) === selectedKey) {
//           mainImg.src = colorImages[key];
//           break;
//         }
//       }
//     }
//   });

//   // initial sync: set select to whatever the main image currently shows
//   updateByImageSrc(mainImg.src);
// });
