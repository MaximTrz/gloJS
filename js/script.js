let money,
				shopName,
				time,
				price;



//////////////////////
let object = {
	budget : money,
	shopName : shopName,
	shopGoods : [],
	employers: {},
	open: false,
	discount: false,
	shopItems: [],
	workTime: function (time){
		if (time<0){
			console.log('Такого не может быть');
		} else if (time > 8 && time <20){
				console.log('Время работать!');
				object.open = true;
			} else if (time<24){
				console.log('Уже слишком поздно!')
			} else {
				console.log('В сутках только 24 часа!');
			}
	},

	chooseGoods: function(){
		let good;
		for (i = 0; i < 3; i++) {
			good = prompt('Какие товары будем продавать?');
			if (good!="" || typeof(good)!=null){
				object.shopGoods.push(good);
			}else {
				i--;
			}
		}
	},

	start: function () {
		time = 21;
		while (isNaN(money)|| money=="" || money==null){
			money = (prompt('Какой ваш месячный бюджет?'));
		}
		while(shopName=="" || shopName==null){
			shopName = (prompt('Как называется ваш любимый магазин?')).toUpperCase;
		}
},

	getEmployers: function (){
		let name;
			for (i = 1; i <= 4; i++) {
				name = prompt("Введите имя сотрудника");
					if ((typeof(name)==='string') && (typeof(name)!=null) && (name!='')){
						object.employers[i] = name;
					} else {
							i--;
					}
		}
		console.log(object.employers);
	},

	makeDiscount: function (discount){
		if (discount==true) {
			price = price*0.8;
		}	
	},

	dayBudget: function(){
		alert('Бюджет на 1 день равен '+ money/30 + ' рублей');
	},

	chooseShopItems: function(){
		let items = prompt("Перечислите через запятую ваши товары", "");
		while ( (typeof(items) != "string") || (items=="") ) {
			items = prompt("Перечислите через запятую ваши товары", "");
		}
		object.shopItems = items.split(",");
		object.shopItems.push = prompt("Подождите, еще ", "");
		object.shopItems.sort();
	}  
};


object.chooseShopItems();
console.log(object.shopItems);

// object.workTime(9);
// object.dayBudget();
// object.getEmployers();
