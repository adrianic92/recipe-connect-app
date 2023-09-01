
function yearArray(){

    const years = []

    for (let i = new Date().getFullYear(); i >= 1900; i--) {
        years.push(`${i}`)
    }

    return years

}

function monthArray(){

    const months = []

    for (let i = 1; i <= 12; i++ ) {
        let j = i.toString()
        if (j.length === 1) {
            j = "0" + j
        }
        months.push(j)
    }

    return months

}

function dayArray() {

    const days = []

    for (let i = 1; i <= 31; i++ ) {
        let j = i.toString()
        if (j.length === 1) {
            j = "0" + j
        }
        days.push(j)
    }

    return days

}

function ageFinder(date) {
    const today = new Date();
    const birthday = new Date(date);
    let age = today.getFullYear() - birthday.getFullYear();
    const month = today.getMonth() - birthday.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthday.getDate())) {
        age--;
    }
    return age;
}

export { dayArray, monthArray, yearArray, ageFinder }