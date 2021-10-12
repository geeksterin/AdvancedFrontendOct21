function generateFizzBuzz(number) {
    let fb_values = []
    for(let i=1; i <= number; i++) {
        let string = "";
        string = "";
        // if(i % 3 == 0) {
        //     string = "fizz";
        // }
        // if(i % 5 == 0) {
        //     string += "buzz";
        // }
        // if(string == '') {
        //     string = i;
        // }

        let num = i;
        if(i % 3 == 0) {
            string="Fizz";
            num = "";
        }
        if(i % 5 == 0) {
            string += "Buzz";
            num="";
        }


        // if(i % 15 == 0) {
        //     string = "FizzBuzz";
        // }else if(i % 3 == 0) {
        //     string = "Fizz";
        // } else if(i % 5 == 0) {
        //     string = "Buzz";
        // } else {
        //     string = i;
        // }
        fb_values.push(string + num);
        // console.log(string + num);
    }
    return fb_values;
}

function display() {
    let count = document.getElementById('fb_input').value;
    count = parseInt(count);
    let fb = generateFizzBuzz(count);
    let list_elem = document.getElementById('fb_result');
    list_elem.innerHTML = '';
    // for(let i = 0; i < fb.length)
    fb.forEach((fb_single_value) => {
        let new_element = document.createElement('li');
        new_element.innerText = fb_single_value;
        list_elem.appendChild(new_element);
    });

}