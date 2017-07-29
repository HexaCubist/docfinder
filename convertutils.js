// Source of Formula
// http://www.shapesense.com/fitness-exercise/calculators/walking-calorie-burn-calculator.shtml
// Based on 0% incline
// CB = [0.0215 x KPH3 - 0.1765 x KPH2 + 0.8710 x KPH + 1.4577] x WKG x T

//CB = Calorie burn (in calories)
//KPH = Walking speed (in kilometres per hour)
//WKG = Weight (in kilograms)
//T = Time (in hours)

function TimeToCaloriesCal(KPH,T,WKG) 
{
	
	var Calories = (((0.0215 * (KPH*KPH*KPH) - 0.1765 * (KPH*KPH) + 0.8710 * KPH + 1.4577) * WKG) * T)
	Calories = Calories/60; // Converts time from hours to minutes	
	return Calories; // Returns the Calorie value
}

function CaloriesToTimeCal(KPH,Calories,WKG) 
{
	var T =  Calories/((0.0215 * (KPH*KPH*KPH) - 0.1765 * (KPH*KPH) + 0.8710 * KPH + 1.4577) * WKG) ; //T is Time and this is the Formula to generate it
	T = T*60; // Converts time from minutes to hours
	return T; // Returns the time value
}


//function CaloriesToTimeCal(KPH,Calories,WKG) { //Enternal extar f for function
//	var T = Calories/((0.0215*KPH*KPH*KPH-0.1765*KPH*KPH+0.871*KPH)*WKG); //T is Time and this is the Formula to genorate it
//	T = T*60; // Convertes time from hours to minutes
//	return T; // Writes T
//}

//function TimeToCaloriesCal(KPH,T,WKG) {
//T = T/60; // Convertes time from hours to minutes
// //Enternal extar f for function
//var Calories = T*((0.0215*KPH*KPH*KPH-0.1765*KPH*KPH+0.871*KPH)*WKG);
//
//return Calories;
//}