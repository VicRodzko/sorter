class Sorter {
	constructor() {
    this.elementsArr = [];
    this.comparator = (a , b) => a - b;
	}
  
	add(element) {
		return this.elementsArr.push(element);
	}
  
	at(index) {
		return this.elementsArr[index];
	}
  
	get length() {
		return this.elementsArr.length;
	}
  
	toArray() {
		return this.elementsArr;
	}
  
	sort(indices) {
		let elementsArr = this.elementsArr;

		let filterElementsArr = elementsArr.filter((element, i) => indices.includes(i)).sort(this.comparator);

		return this.elementsArr = elementsArr.map((element, i) => {
			if (indices.includes(i)) {
				return filterElementsArr.shift();
			} else return element;
		});
	} 
  
	setComparator(compareFunction) {
		return this.comparator = compareFunction;
	}
}



module.exports = Sorter;