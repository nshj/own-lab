const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');

// show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
} 

// Check email is vaild
function checkEmail(input) {
    // 正则表达式
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // String.prototype.trim()从一个字符串的两端删除空白字符
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, '无效邮箱');
    }
}


// Get fieldname
// charAt() 方法从一个字符串中返回指定的字符;
// slice() 方法提取某个字符串的一部分，并返回一个新的字符串，且不会改动原字符串
// function getFieldName(input) {
//     return input.id.charAt(0).toUpperCase() + input.id.slice(1);
//   }
function getFieldName(input) {
    return input.parentElement.querySelector('label').innerText;
}

// Check required fields
function checkRequired(inputArr) {
    let isRequired = false;
    // forEach() 方法对数组的每个元素执行一次给定的函数
    inputArr.forEach(input => {
        if (input.value.trim() === ''){
            showError(input, `${getFieldName(input)}不能为空`);
            isRequired = true;
        } else {
            showSuccess(input);
        }
    })
}

// Check input length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(
            input,
            `${getFieldName(input)}长度必须${min}位以上`
        );
        
    } else if (input.value.length > max) {
        showError(
            input,
            `${getFieldName(input)}长度必须${max}位以下`
        );
    } else {
        showSuccess(input);
    }
}

//Check passwords match
function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, '两次密码不一致');
    }
}

//Event listeners
form.addEventListener('submit', function(e) {
    //取消事件默认动作
    e.preventDefault();


    if(!checkRequired([username, email, password1, password2])){
        checkLength(username, 3, 15);
        checkLength(password1, 6, 25);
        checkEmail(email);
        checkPasswordsMatch(password1, password2);
      }
    
});