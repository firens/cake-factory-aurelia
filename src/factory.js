import {Cake} from 'cake';

export class Factory{

	cakes = [];
	cakeValues = {};

	createCake() {
		this.cakes.push(new Cake(this.cakeValues.name, this.cakeValues.ingredient));
		this.cakeValues.name = '';
		this.cakeValues.ingredient = '';
	}

}
