let apiKey = '2fcb2848'

let model = {
	getMovies(search){
		return new Promise((resolve, reject) => {
			let url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${search}`
			let xhr = new XMLHttpRequest()

			xhr.open('GET', url)

			xhr.addEventListener("load", () => {
				console.log(JSON.parse(xhr.responseText))
				resolve(JSON.parse(xhr.responseText)['Search'])
			})


			xhr.send()
		})
	}
}

export default model