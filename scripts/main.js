const app = () => {
	const searchBarIcon = document.querySelector(`#search-bar-icon`)

	searchBarIcon.addEventListener('click', () => {
		const searchBar = document.querySelector('#search-bar')
		searchBar.classList.toggle('collapse-input')
		searchBar.classList.toggle('expanded-input')
	})

	const setHeroHeight = () => {
		const navbarHeight = document.querySelector('.navbar').offsetHeight
		const windowHeight = window.innerHeight

		const heroSection1 = document.getElementById('intro')
		heroSection1.style.height = windowHeight - navbarHeight + 'px'

		const heroSection2 = document.getElementById('offer')
		heroSection2.style.minHeight = windowHeight - navbarHeight + 'px'

		const heroSection3 = document.getElementById('about-us')
		heroSection3.style.height = windowHeight - navbarHeight + 'px'

		const projectsSection = document.getElementById('projects')
		projectsSection.style.maxHeight = windowHeight * 1.5 - navbarHeight + 'px'

		//sets scroll padding so it doesn't overflow when scrolling
		document.documentElement.style.setProperty('--scroll-padding', navbarHeight + 'px')
	}

	window.addEventListener('load', setHeroHeight)
	window.addEventListener('resize', setHeroHeight)
	// load masonry grid
	const enableMasonryGrid = () => {
		const windowWidth = window.innerWidth
		const grid = document.querySelector('.grid')
		const masonry = new Masonry(grid, {
			itemSelector: '.grid-item',
			resize: false,
			columnWidth: windowWidth / 9,
			gutter: 20,
			percentPosition: true,
		})
		/* const gridItems = document.querySelectorAll('.grid-item')
		Array.from(gridItems).map((gridItem) => {
			gridItem.style.width = windowWidth / 3 + 'px'
		}) */
	}

	window.addEventListener('load', enableMasonryGrid)
	window.addEventListener('resize', enableMasonryGrid)

	const introLeftArrow = document.querySelector('#introLeftArrow')
	const introRightArrow = document.querySelector('#introRightArrow')
	const introImage = document.querySelector('#introImage')
	const picturesUrls = ['./shared/photos/garden.png', 'https://picsum.photos/1200?random=2', 'https://picsum.photos/1200?random=3', 'https://picsum.photos/1200?random=4', 'https://picsum.photos/1200?random=5']

	let currentPic = 0
	introLeftArrow.addEventListener('click', () => {
		currentPic === 0 ? (currentPic = picturesUrls.length - 1) : (currentPic -= 1)
		introImage.style.backgroundImage = `url(${picturesUrls[currentPic]})`
	})
	introRightArrow.addEventListener('click', () => {
		currentPic === picturesUrls.length - 1 ? (currentPic = 0) : (currentPic += 1)
		introImage.style.backgroundImage = `url(${picturesUrls[currentPic]})`
	})
}

app()
