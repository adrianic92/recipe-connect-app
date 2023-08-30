
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
        if (j.length == 1) {
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
        if (j.length == 1) {
            j = "0" + j
        }
        days.push(j)
    }

    return days

}

export { dayArray, monthArray, yearArray }