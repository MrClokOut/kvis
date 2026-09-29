function quest(btn, isCorrect, id) {
    btn.classList.add('selected');
    document.querySelectorAll('button').forEach(b => {
        b.disabled = true;
    });
    if (isCorrect === true) {
        alert('Правильно!');
    } else if(isCorrect === false) {
        alert('Неправильно!');
    }
    else if(isCorrect === null){
        sessionStorage.setItem(id, 'used');
        window.location.href = '../center/kvis.html';
    }
    
    sessionStorage.setItem(id, 'used');
    window.location.href = '../center/kvis.html';
}