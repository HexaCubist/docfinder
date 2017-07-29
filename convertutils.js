function CaloriesToTimeCal(KPH,Calories,WKG) { //Enternal extar f for function

	var T = Calories/(0.0215*KPH*KPH*KPH-0.1062*KPH*KPH+0.871*KPH)*WKG; //T is Time and this is the Formula to genorate it

	T = T/60; // Convertes time from seconds to minutes


	return T; // Writes T

}