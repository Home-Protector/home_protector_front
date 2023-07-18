function Valitator(valueDict) {
    const validateValue = (value, pattern) => {
        let isOk = true;
        if (value.length === 0) isOk = false; // 값이 없는 경우
        if (pattern.test(value)) isOk = false; // 조건에 부합하지 않는 경우
        return isOk;
    };
    
    let errorMsg = '';
    console.log(valueDict)
    // 순서: id, password, pwConfirm, nickname
    const username = valueDict["username"]
    const password = valueDict["password"]
    const pwConfirm = valueDict["pwConfirm"]
    const nickname = valueDict["nickname"]

    // id
    if (validateValue(username, /^[a-zA-Z0-9]*$/)) {
        // 영문(대문자, 소문자), 숫자만 입력 가능
        errorMsg = '잘못된 형식의 ID 입니다. 다시 입력해주세요.';
    }

    // password
    else if (validateValue(password, /^[a-zA-Z0-9]*$/)) {
        // 영문(대문자, 소문자), 숫자만 입력 가능
        errorMsg = '잘못된 형식의 비밀번호 입니다. 다시 입력해주세요.';
    }

    // password 일치 확인
    else if (password !== pwConfirm) {
        errorMsg = '비밀번호가 일치 하지 않습니다. 다시 입력해주세요.';
    }

    // nickname
    else if (validateValue(nickname, /^[a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣]*$/)) {
        // 영문(대문자, 소문자), 숫자, 한글만 가능
        errorMsg = '잘못된 형식의 닉네임 입니다. 다시 입력해주세요.';
    }

    return errorMsg;
}
    
export default Valitator;