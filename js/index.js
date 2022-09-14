const refs = {
    inputPrice: document.querySelector('#price-input'),
    inputMyMoney: document.querySelector('#myMoney-input'),
    output: document.querySelector('#output')
};

const param = {
    priceToday: '',
    myMoney: ''
}

const blankLine = 'Please enter all imputs !';

const onInputWrite = (e) => {
    if (e.currentTarget.id === 'price-input') {
        param.priceToday = e.currentTarget.value;
    }
   
    if (e.currentTarget.id === 'myMoney-input') {
        param.myMoney = e.currentTarget.value;
    }

    if (param.myMoney === '' || param.priceToday === '') {
        return refs.output.textContent = blankLine;
    }
    
    if (e.currentTarget.value === '') {
        return refs.output.textContent = blankLine;
    }

    const myBitcoin = Number(param.myMoney) / Number(param.priceToday);
    return refs.output.textContent = `You can buy ${myBitcoin.toFixed(10)} BTC !!!`;

};

refs.inputPrice.addEventListener('input', onInputWrite);
refs.inputMyMoney.addEventListener('input', onInputWrite);
    
