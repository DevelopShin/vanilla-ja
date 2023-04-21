console.log("h3llo");

const container = document.querySelector(".image-container");
const startbtn = document.querySelector(".start-button");
const gameText = document.querySelector(".game-text");
const playTime = document.querySelector(".play-time");

const tileCount = 16;
x = 4;
y = 4;
startGame()
// https://www.youtube.com/watch?v=iTBZdg7tg-w
function startGame() {
	container.innerHTML = "";
	shuffle(creatImage()).forEach((li) => container.appendChild(li));
	setTimeout(() => {
		container.innerHTML = "";
		creatImage().forEach((li) => container.appendChild(li));
		setTimeout(() => {
			container.innerHTML = "";
			shuffle(creatImage()).forEach((li) => container.appendChild(li));
		}, 1000)
	}, 1000)
	console.log(11)

	

}


function createLiPositionStyle() {
	liPosition = [];
	for (let i = 0; i < y; i++) {
		for (let j = 0; j < x; j++) {

			liPosition.push(`${-j * 100}px ${-i * 100}px `);
		}
	}
	return  liPosition
}



function creatImage() {
	const liList = [];
	liPosition = createLiPositionStyle()
  Array(tileCount)
    .fill()
    .forEach((_, i) => {
      const li = document.createElement("li");
      li.setAttribute("data-index", i);
      li.classList.add(`list${i}`);

      li.style.backgroundPosition = liPosition[i];
      liList.push(li);
      // container.append(li);
      // console.log(i);
    });
  return liList;
}

function shuffle(array) {
  let index = array.length - 1;
  console.log("lll", index);
  while (index > 0) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    
		[array[index], array[randomIndex]] = [array[randomIndex], array[index]];
		index--;
  }
  return array;
}
