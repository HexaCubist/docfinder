<script>

		var KPH = Speed; //Kilometres per hour
		var C = Calories;  //Calorie
		var WKG = Weight;//Weight in kilograms

		CaloriesToTimeCal(KPH,C,WKG);

		function CaloriesToTimeCal(KPHF,CF,WKGF) { //Enternal extar f for function

			var T = CF/(0.0215*KPHF*KPHF*KPHF-0.1062*KPHF*KPHF+0.871*KPHF)*WKGF; //T is Time and this is the Formula to genorate it

			T = T/60; // Convertes time from seconds to minutes


			document.write(T); // Writes T

		}
	</script>