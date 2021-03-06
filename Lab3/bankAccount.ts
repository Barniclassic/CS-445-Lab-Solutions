let bankAccount: {
    money: number,
    deposit(value:number): any,
}

bankAccount = { 
	money: 2000, 
	deposit(value) { 
		this.money += value; 
	} 
}; 

let myself:{
    name:String, 
    bankAccount: typeof bankAccount,
    hobbies:String[]
}

myself = { 
	name: "John", 
	bankAccount: bankAccount, 
	hobbies: ["Violin", "Cooking"] 
}; 

myself.bankAccount.deposit(3000); 
console.log(myself);