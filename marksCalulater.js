function calulatorResult() {
    let n = document.getElementById("nSubject").value;
    let total = 0;

    for(let i=1; i<=n; i++) {
        let marks = parseFloat(prompt("Enter the marks of subject " +i));
        total += marks;
    }
     
    let average = total / n ;
    let grade , result ;
    
    if(average>=90) {
        grade = "A+" ;
    } else if (average>=80 && average<90) {
        grade = "B+" ;
    } else if (average>=70 && average<80) {
        grade = "C+ ";
    } else {
        grade = "D"
    }
     
    if(average>40){
        result = "pass";
    } else {
        result = "Fail" ;
    }
    
    document.getElementById("result").innerHTML = 
    "Total Marks :" + total + "<br>" + 
    "Average Marks :" + average.toFixed(2) + "<br>" +
    "Grade : " + grade + "<br>" + 
    "Result : " + result ;
    
}