function CaloriesToTimeCal(KPH,Calories,WKG) { //Enternal extar f for function

	var T = Calories/((0.0215*KPH*KPH*KPH-0.1765*KPH*KPH+0.871*KPH)*WKG); //T is Time and this is the Formula to genorate it

	T = T*60; // Convertes time from hours to minutes


	return T; // Writes T
}


function TimeToCaloriesCal(KPH,T,WKG) {
T = T/60; // Convertes time from hours to minutes
 //Enternal extar f for function
var Calories = T*(0.0215*KPH*KPH*KPH-(0.1765*KPH*KPH)+(0.871*KPH)*WKG);

return Calories;
}