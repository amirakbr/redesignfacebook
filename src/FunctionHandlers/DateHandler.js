let monthArray = ['Jan','Feb','Mar','Apr','May','Jun','Jul',
'Aug','Sep','Oct','Nov','Dec'] ; 

export default function DateHandler(entryDate){
	let startTimeISOString = entryDate;
	let startTimeDate = new Date(startTimeISOString);
	let todayDate = new Date() ; 
	let diffBetWeenDays = Math.floor((todayDate - startTimeDate)/1000) ; 
	console.log(startTimeDate.getFullYear())
	//return Math.floor(diffBetWeenDays/(1000)) ; 
	let finalResult ;
	if(diffBetWeenDays < 60 ){
		if(diffBetWeenDays > 1) {
			finalResult = `Posted ${diffBetWeenDays} Second's ago`
		}else {
			finalResult = `Posted ${diffBetWeenDays} Second ago`
		}
		
	}
	else if(diffBetWeenDays < 3600){
		if(Math.floor(diffBetWeenDays/60) > 1) {
			finalResult = `Posted ${Math.floor(diffBetWeenDays/60)} Minuet's  ago`
		}else{
			finalResult = `Posted ${Math.floor(diffBetWeenDays/60)} Minuet  ago`
		}
	}
	else if(diffBetWeenDays < 86400){
		
		if(Math.floor(diffBetWeenDays/3600) > 1 ){
			finalResult = `Posted ${Math.floor(diffBetWeenDays/3600)} Hour's  ago`
		}else{
			finalResult = `Posted ${Math.floor(diffBetWeenDays/3600)} Hour  ago`
		}
	}
	else if(diffBetWeenDays >= 86400 && diffBetWeenDays < 2592000){
		if(Math.floor(diffBetWeenDays/86400) > 1){
			finalResult = `Posted ${Math.floor(diffBetWeenDays/86400)} Day's  ago`
		}else{
			finalResult = `Posted ${Math.floor(diffBetWeenDays/86400)} Day  ago`
		}
	}
	else if(diffBetWeenDays < 31104000){
		
		if(Math.floor(diffBetWeenDays/2592000) > 1){
			finalResult = `Posted ${Math.floor(diffBetWeenDays/2592000)} Month's ago`
		}else{
			finalResult = `Posted ${Math.floor(diffBetWeenDays/2592000)} Month ago`
		}
	}
	else if(diffBetWeenDays > 31104000){
		if(Math.floor(diffBetWeenDays/31104000) > 1){
			finalResult = `Posted on ${startTimeDate.getDate()} ${monthArray[startTimeDate.getMonth()]}, ${startTimeDate.getFullYear()}`
		}else{
			finalResult = `Posted ${Math.floor(diffBetWeenDays/31104000)} Year ago`
		}
	}
	return finalResult ; 
}