//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const ignoreWords = /(a|an|the)\s?/i;
// (a|an|the): This matches the words "a", "an", or "the".
// \s?: This matches an optional space character.
// i: This flag makes the matching case-insensitive.
const soretdBand = bands.sort((a, b) => {
	//ignore the words at the begining in each word
	const alphaA = a.replace(ignoreWords,'');
	const alphaB = b.replace(ignoreWords,'');
   // sort alphabatically 
	return alphaA.localeCompare(alphaB);
});
// alert(soretdBand)  
const ul = document.getElementById('band');
soretdBand.forEach((band)=>{
	const li = document.createElement('li');
	li.textContent = band;
	ul.appendChild(li);
});