import jwt_decode from "jwt-decode";

function token() {
    const accessToken = localStorage.getItem("accessToken"); // 현재 로그인된 사용자의 토큰
    const isToken = accessToken ? true : false; // 토근 존재 여부

    const infoDict = accessToken ? jwt_decode(accessToken) : {}; // 현재 로그인된 사용자의 토근 디코딩;

    return [isToken, infoDict];
}

export default token;