var pets = ['cat','dog','fish','rabbit','cow'];

function ex1(){
	var addressNumber = prompt("addressNumber");
	var addressStreet = prompt("addressStreet");
	var country = prompt("country");
	alert("I live in "+addressNumber+" "+addressStreet+" in "+ country);
}

function ex2(){
	alert(pets[1]);
	pets.push('horse');
	pets.splice(3,1);
	alert(pets.length);
}

function ex3(){
	var newDog = "Chihuahua";
	alert(newDog.length);
	alert(newDog.toUpperCase());
	alert(newDog.toLowerCase());
	if(newDog === "Chihuahua"){
		alert("I LOVE Chihuahua, it's my favorite "+pets[1]);
	}else{
		console.log("I dont care, I prefer CATS");
	}
}

function ex4(futur){
	var age = futur-1993;
	alert("in " + futur + " you will be "+ age);
}

function ex5(word){
	if(word.length >= 3){
		if(!word.endsWith("ing")){
			word+="ing";
		} else {
			word+="ly";
		}
	}
	alert(word);
}

function ex6(sentence){
	var new_string = sentence;
	if(sentence.indexOf('not') < sentence.indexOf('bad')){
		new_string = sentence.replace(/not.*bad/, 'good');
	}
	alert(new_string);
}

function ex7(){
	var num1 = prompt("give a number");
	if(num1%2==0){
		alert(num1+" is even");
	} else{
		alert(num1+" is not even");
	}
}

function ex8(){
	var x = parseInt(prompt("gave a x"));
	var y = parseInt(prompt("gave a y"));
	if(x>y){
		alert("x that is "+x+" is bigger");
	} else{
		alert("y that is "+y+" is bigger");
	}
}

function ex9(){
	var safa = prompt("what language are you speaking ?");
	if (safa === "French"){
		alert("Bonjour");
	}
	if (safa === "English"){
		alert("Hello");
	}

	if(safa === "Hebrew"){
		alert("Shalom");
	}

	if(safa !== "French" && safa !== "English" && safa !== "Hebrew" ){
		alert(":-)");
	}
}

function ex10(){
	var userGrade = [];
	var userCoefficient = [];
	var sum = 0;
	while(userGrade.length < 5){
		var grade = parseInt(prompt("Give me a grade"));
		userGrade.push(grade);
	}
	while(userCoefficient.length === 0){
		var coef = parseInt(prompt("Give me a coefficient"));
		userCoefficient.push(coef);
	}
	for(var i = 0; i<5;i++){
		sum+=userGrade[i];
	}
	alert(sum*userCoefficient[0]/5);
}

function ex11(){
	var grade = parseInt(prompt("What is your grade ?"));
	if(grade > 90){
		alert("A");
		return;
	}
	if(grade > 80){
		alert("B");
		return;
	}
	if(grade > 70){
		alert("C");
		return;
	}
	alert("D");
}

function ex12(){
	var colorarr = ["red", "blue", "green","orange","purple", "cyan"];
	for(var i = 0; i<colorarr.length; i++){
		console.log("my #"+ (i+1) +" choice is "+colorarr[i]);
	}
}

function ex13(){
	var num = 0;
	while(num < 10){
		num = parseInt(prompt("give a number bigger than 10"));
	}
	alert("thanks");
}

function ex14(){
	var people = ["Greg", "Mary", "Devon", "James"]
	for(var i = 0; i<people.length; i++){
		console.log(people[i]);
	}
	people.splice(people.indexOf("Greg"),1);
	people[people.indexOf("James")] = "Jason";
	console.log(people);
	people.push("Ben");

	var counter = 0;
	while(people[counter-1] !== "Mary"){
		console.log(people[counter]);
		counter++;
	}
	var people2 = people.slice(0);

	people2.splice(people2.indexOf("Mary"),(people2.indexOf("Mary"))+1);
	people2.splice(people2.indexOf("Ben"),(people2.indexOf("Ben"))+1);

	console.log("'Mary' is at index "+people.indexOf("Mary"));
	console.log("'Foo' is at index "+people.indexOf("Foo"));
	var last = people[people.length-1];
	console.log(last);
}

function ex15(){
	var age = [20,5,12,43,98,55];
	var sum = 0;
	var maxnum = 0;
	for(var i = 0; i<age.length;i++){
		sum+=age[i];
	}
	console.log("sum :"+sum);
	console.log("even numbers:")
	for(var i = 0; i<age.length;i++){
		if(age[i]%2 === 0){
			console.log(age[i]);
		}
	}
	for(var i = 0; i<age.length;i++){
		if(age[i] > maxnum){
			maxnum=age[i];
		}
	}
	console.log("largest number is :"+maxnum);
}

function ex16(){
	var num = prompt("give me a number");
	var counter = 1;
	console.log("==============================\n"+num+" bottles of beer on the wall\n"+num+" bottles of beer")
	console.log("Take "+counter+" down, pass it around\n"+num+" bottles of beer on the wall\n"+num+" bottles of beer on the wall\n"+num+" bottles of beer");
	num = num - counter;
	while(num>0){
		console.log("Take "+counter+" down, pass them around\n"+num+" bottles of beer on the wall\n"+num+" bottles of beer on the wall\n"+num+" bottles of beer");
		counter++;
		num = num - counter;
	}
	if(num === 1){
		console.log("Take 1 down, pass it around\n0 bottles of beer on the wall\n0 bottles of beer on the wall\n0 bottles of beer");		
		console.log("==============================");
		return;
	}
	if(counter>num){
		num = num + counter;
		console.log("Take "+num+" down, pass them round\nNo more bottles of beer on the wall\nNo more bottles of beer on the wall\nNo more bottles of beer");
		console.log("==============================");

	}
}

function ex17(){
	var sentence = prompt("Give a sentence");
	var sentence_arr = sentence.split(" ");
	var jaden_sentence = "";
	for(var i = 0; i < sentence_arr.length; i++){
		sentence_arr[i] = sentence_arr[i].slice(0,1).toUpperCase()+sentence_arr[i].slice(1);
	}
	for(var i =0; i<sentence_arr.length; i++){
		jaden_sentence += sentence_arr[i]+" ";
	}
	console.log(jaden_sentence);
}

function ex18(){
	console.log("      *\n     * *\n    *   *\n   *     *\n  *********\n *         *\n*           *\n");
	return;
}

function ex19(){
	var sentence = prompt("give me a sentence");
	var longest = 0;
	var sentence_arr = sentence.split(" ");
	var frame = "";
	for(var i = 0; i<sentence_arr.length; i++){
		if(sentence_arr[i].length > longest){
			longest = sentence_arr[i].length;
		}
	}
	for(var i = 0; i<longest+4;i++){
		frame += "*";
	}
	frame += "\n";

	for(var i = 0; i<sentence_arr.length;i++){
		frame+= "*";
		for(var j = 0; j<(longest-sentence_arr[i].length)/2;j++){
			frame+=" ";
		}
		frame+= " "+sentence_arr[i]+" ";
		if(sentence_arr[i].length%2===0){
			for(var j = 0; j<(longest-sentence_arr[i].length)/2;j++){
				frame+=" ";
			}
		}else{
			for(var j = 0; j<((longest-sentence_arr[i].length)/2)-1;j++){
				frame+=" ";
			}
		}

		frame+= "*\n";
	}
	for(var i = 0; i<longest+4;i++){
		frame += "*";
	}
	console.log(frame);
}

function ex20(){
	var words = ["aspect","symptom","forestry","headquarters","virtue",
	"limited","preference","provoke","liability","pyramid","nominate",
	"print","shed","belong","replace","dawn","snap","comfortable","restaurant","voter"];
	console.log(words);
	var wordnum = Math.floor(Math.random() * 21);
	var splittedword = words[wordnum].split('');
	var actualguess = words[wordnum].split('');
	var finished = false;
	var guessedletters = [];
	var lifes = 7;
	var arraynum = ["0","1","2","3","4","5","6","7","8","9"];
	console.log(splittedword);
	console.log(actualguess);
	for(var i = 0; i<actualguess.length;i++){
		actualguess[i]="_";
	}

	while(actualguess.includes("_") && lifes > 0){
		var guess = "";
		var text = "Hangman you have "+lifes+" more lives\n\n";
		for(var i = 0; i< actualguess.length;i++){
			text+=actualguess[i]+" ";
		}
		text+="\n\n";
		text+="given letters: \n\n";
		for(var i = 0;i<guessedletters.length;i++){
			text+=guessedletters[i].toUpperCase()+" ";
		}
		text+="\n==============\ntry a letter : "
		guess = prompt(text).toLowerCase();

		if(guess.length === 1 && !arraynum.includes(guess)){
			if(guess.length === 1){
				if(!guessedletters.includes(guess)){
					guessedletters.push(guess);
				}
				var losinglife = true;
				for(var i = 0; i<splittedword.length;i++){
					if(splittedword[i]==guess){
						actualguess[i]=guess;
						losinglife = false;
					}
				}
				if(losinglife){
					lifes--;
				}
			}		
		}else{
			alert("Please enter only one character");
		}
	}

	if(lifes>0){
		alert("good job you won the word was "+words[wordnum]+"\n you won with "+lifes+" lives");
	}else{
		alert("you are dead.. the word was "+words[wordnum]);
	}
}

function ex21(){
	var line = [25,25,25,25,25,25,100,100];
	var change = [0, 0]
	var changegiven = false;
	for(var i = 0; i<line.length;i++){
		if (line[i] == 25){
			change[0]++;
		}
		if(line[i] == 50){
			if(change[0]>0){
				change[0]--;
				change[1]++;
			}else{
				console.log("false 50");
				return false;
			}
		}
		if(line[i] == 100){
			changegiven = false;
			if (change[0]>0 && change[1]>0) {
				console.log("50 25");
				change[0]--;
				change[1]--;
				changegiven = true;
			}else{
				if(change[0]>2 && !changegiven){
					console.log("25 25 25");
					change[0] = change[0]-3;
				}else{
					console.log("false 100");
					return false;
				}
			}
		}
		console.log("line is "+line);
		console.log("change is "+change);
	}
	console.log("true");
	return true;
}
//ex1();
//ex2();
//ex3();
//ex4(2113);
//ex5("ba");
//ex6("This dinner is bad!");
//ex7();
//ex8();
//ex9();
//ex10();
//ex11();
//ex12();
//ex13();
//ex14();
//ex15();
//ex16();
//ex17();
//ex18();
//ex19();
//ex20();
//ex21();






