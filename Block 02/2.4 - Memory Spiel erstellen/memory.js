document.addEventListener('DOMContentLoaded', () => {
	let tries = 0;
	const cantons = ['ag', 'ar', 'bl', 'fr', 'gl', 'ju', 'ne', 'ow', 'sh', 'sz', 'ti', 'vd', 'zg', 'ai', 'be', 'bs', 'ge', 'gr', 'lu', 'nw', 'sg', 'so', 'tg', 'ur', 'vs', 'zh'];
	const board = document.getElementById("board")
	const tiles = board.getElementsByClassName("tile")
	const revealedTiles = board.getElementsByClassName("tile revealed")
	const checkIfPlayerHasWon = () => {
		if (Array.from(tiles).every(tile => tile.classList.contains("found"))) {
			alert(`You won in ${tries} turns!`)
			tries = 0
		}
	}
	const checkForTurn = (event) => {
		let tile = event.currentTarget;
		if (revealedTiles.length >= 2) {
			Array.from(revealedTiles).forEach(otherTile => otherTile.classList.remove("revealed"));
		}

		Array.from(revealedTiles).forEach(otherTile => {
			if (tile != otherTile && tile.children[0].src === otherTile.children[0].src) {
				tile.classList.add("found");
				otherTile.classList.add("found");
			}
		});

		tile.classList.add("revealed");
		tries++;

		checkIfPlayerHasWon()
	}

	const createTile = (canton) => {

		const tileImage = document.createElement('img');
		tileImage.setAttribute('src', `img/${canton}.png`);

		const tile = document.createElement('button');
		tile.append(tileImage);
		tile.className = "tile";
		tile.onclick = checkForTurn;
		return tile;
	}

	const initialisieren = () => {
    board.innerHTML = ""
		const shuffled = cantons.sort(() => 0.5 - Math.random()).slice(0, 10);
		for (let i = 2; i; i--) {
			for (let canton of shuffled.sort(() => 0.5 - Math.random())) {
				board.append(createTile(canton));
			};
		}

	}

	initialisieren()
});