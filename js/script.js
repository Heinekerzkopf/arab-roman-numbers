const decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

const romanValue = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

//========================================================================================================================================================

function romanConverter(number) {
    let result = '';
    decimalValue.map((item, index) => {
        while (item <= number) {
            result += romanValue[index];
            number = number - item;
            console.table({
                'number': number + item,
                'item': item,
                'number = number - item': number,
                'result': result
            });
        }
    });
    return result;
}

//========================================================================================================================================================

document.querySelector('.item__btn').onclick = () => {
    let num = +document.querySelector("input").value;
    document.querySelector('.item__out').innerHTML = romanConverter(num);
}

//========================================================================================================================================================
