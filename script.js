//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const ignoredWords = ['a', 'an', 'the'];

function compareArticles(article1,article2) {
	const comArticle1  = comArticle1.toLowerCase().slpit(' ').filter(word => !ignoredWords.includes(word)).join(' '); 
	const comArticle2  = comArticle2.toLowerCase().slpit(' ').filter(word => !ignoredWords.includes(word)).join(' ');  
    if(comArticle1 < comArticle2){
		return -1;
	} else if(comArticle1 > comArticle2){
		return 1;
	} else{
		return 0;
	}
}
const sortedBands = bands.sort(compareArticles);

alert(sortedBands);    
  
const ul = document.getElementById('bands');
sortedBands.forEach((band) => {
	const listItems = document.createElement('li');
	listItems.textContent = band;
	ul.appendChild(listItems);
});