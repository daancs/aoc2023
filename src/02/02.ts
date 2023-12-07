export function parse(input: string) {
	return input
}

export function partOne(input: ReturnType<typeof parse>) {
	const max_red_cubes = 12
	const max_green_cubes = 13
	const max_blue_cubes = 14
	console.log(input)
	const data = input.split('\n')
	console.log(data)
	let game_result = 0
	data.forEach((item, index) => {
		let possible_game = true
		let game = item.split(':')
		let gamenum = game[0]!.split(" ")[1]
		const cubes_sets = game[1]!.split(";")
		console.log(cubes_sets)
		for (let i = 0; i < cubes_sets.length; i++) {
			console.log(cubes_sets[i])
			let cubes = cubes_sets[i]!.split(",")
			console.log(cubes)
			for (let j = 0; j < cubes.length; j++) {
				let cube = cubes[j]!.split(" ")
				cube.shift()
				console.log(cube)
				switch (cube[1]) {
					case "red":
						if (Number.parseInt(cube[0]!) > max_red_cubes) {
							console.log("red")
							console.log(gamenum)
							possible_game = false
						}
						break
					case "green":
						if (Number.parseInt(cube[0]!) > max_green_cubes) {
							console.log("green")
							console.log(gamenum)
							possible_game = false
						}
						break
					case "blue":
						if (Number.parseInt(cube[0]!) > max_blue_cubes) {
							console.log("blue")
							console.log(gamenum)
							possible_game = false
						}
						break
				}
			}
		}
		if (possible_game) {
			game_result += Number.parseInt(gamenum!)
		}

	})

	return game_result
}

export function partTwo(input: ReturnType<typeof parse>) {
	let gamesets: Gamesets[] = []
	const max_red_cubes = 12
	const max_green_cubes = 13
	const max_blue_cubes = 14
	const data = input.split('\n')
	data.forEach((item, index) => {
		let all_cubes: Cubes = {
			red: [],
			green: [],
			blue: []
		}
		all_cubes.red.push(1)
		all_cubes.green.push(1)
		all_cubes.blue.push(1)
		let game = item.split(':')
		let gamenum = game[0]!.split(" ")[1]
		const cubes_sets = game[1]!.split(";")
		for (let i = 0; i < cubes_sets.length; i++) {
			console.log(cubes_sets[i])
			let cubes = cubes_sets[i]!.split(",")
			for (let j = 0; j < cubes.length; j++) {
				let cube = cubes[j]!.split(" ")
				cube.shift()
				switch (cube[1]) {
					case "red":
						all_cubes.red.push(Number.parseInt(cube[0]!))
						break
					case "green":
						all_cubes.green.push(Number.parseInt(cube[0]!))
						break
					case "blue":
						all_cubes.blue.push(Number.parseInt(cube[0]!))
						break
				}
			}

		}
		gamesets.push({
			gamenum: Number.parseInt(gamenum!),
			gamestring: cubes_sets,
			Cubes: all_cubes
		})

	})
	console.log(gamesets)
	let prod_sum = 0
	gamesets.forEach((gameset, index) => {
		let prod_cubes = Math.max(...gameset.Cubes.red) * Math.max(...gameset.Cubes.green) * Math.max(...gameset.Cubes.blue)
		console.log("Game num", gameset.gamenum)
		console.log(gameset.gamestring)
		console.log(gameset.Cubes)
		console.log("max red: " + Math.max(...gameset.Cubes.red))
		console.log("max green: " + Math.max(...gameset.Cubes.green))
		console.log("max blue: " + Math.max(...gameset.Cubes.blue))
		console.log(prod_cubes)
		prod_sum += prod_cubes
	})

	return prod_sum
}

type Gamesets = {
	gamenum: number,
	gamestring: String[]
	Cubes: Cubes
}

type Cubes = {
	red: number[],
	green: number[],
	blue: number[]
}