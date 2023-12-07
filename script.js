const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const ignoreWords = ['a','an','the'];

function compareArticles(article1,article2) {
    const comArticle1 = article1.toLowerCase().split(' ').filter(word => !ignoreWords.includes(word)).join(' ');	
    const comArticle2 = article2.toLowerCase().split(' ').filter(word => !ignoreWords.includes(word)).join(' ');

	if(comArticle1 < comArticle2){
		return -1;
	} else if(comArticle1 > comArticle2){
		return 1;
	}else{
		return 0;
	}
}

const sortedBands = bands.sort(compareArticles);
// alert(sortedBands)

const ul = document.getElementById('bands');
sortedBands.forEach((bands) => {
	const listItems = document.createElement('li');
	listItems.textContent = bands;
	ul.appendChild(listItems);
});

