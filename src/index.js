class Sorter {
	constructor() {
    this.element = [];
    this.comparator = "STANDART";
	}
  
	add(element) {
		return this.element.push(element);
	}
  
	at(index) {
		return this.element[index];
	}
  
	get length() {
		return this.element.length;
	}
  
	toArray() {
		return this.element;
	}
  
	sort(indices) {
		let b = this.element;

		switch (this.comparator) {
			case "STANDART": 
				for (let i = 0; i < indices.length; i++) {
					if (indices[i] < indices[i+1]) {
						if (b[indices[i]] > b[indices[i+1]]) {
							var a = b[indices[i+1]];
							b[indices[i+1]] = b[indices[i]];
							b[indices[i]] = a;
							i = -1;
						}
					} else {
						if (b[indices[i]] < b[indices[i+1]]) {
							var a = b[indices[i+1]];
							b[indices[i+1]] = b[indices[i]];
							b[indices[i]] = a;
							i = -1;
						}
					}
				}
				return b;

			case "REVERSE_COMPARATOR":
				for (let i = 0; i < indices.length; i++) {
					if (indices[i] < indices[i+1]) {
						if (b[indices[i]] < b[indices[i+1]]) {
							var a = b[indices[i+1]];
							b[indices[i+1]] = b[indices[i]];
							b[indices[i]] = a;
							i = -1;
						}
					} else {
						if (b[indices[i]] > b[indices[i+1]]) {
							var a = b[indices[i+1]];
							b[indices[i+1]] = b[indices[i]];
							b[indices[i]] = a;
							i = -1;
						}
					}
				} 
				return b;
				
			case "AGE_COMPARATOR": 
				for (let i = 0; i < indices.length; i++) {
					if (indices[i] < indices[i+1]) {

						if (b[indices[i]].age > b[indices[i+1]].age) {

							var copy = Object.assign({}, b[indices[i+1]]);
							var copy2 = Object.assign({}, b[indices[i]]);

							b[indices[i]].age = copy.age;
							b[indices[i+1]].age = copy2.age;

							i = -1;	
						}
					} else {
						if (b[indices[i]].age < b[indices[i+1]].age) {

							var copy = Object.assign({}, b[indices[i+1]]);
							var copy2 = Object.assign({}, b[indices[i]]);

							b[indices[i]].age = copy.age;
							b[indices[i+1]].age = copy2.age;

							i = -1;
						}
					}
				return b; 
				}			
		}	
	} 
  
	setComparator(compareFunction) {
		this.comparator = compareFunction.name;
	}
}



module.exports = Sorter;