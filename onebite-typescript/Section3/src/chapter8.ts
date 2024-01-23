/**
 * 서로소 유니온 타입
 */

type Admin = {
    tag : "ADMIN";
    name : string;
    kickCount : number;
};

type Member = {
    tag : "MEMBER";
    name : string;
    point : number;
};

type Guest = {
    tag : "GUEST";
    name : string;
    visitCount : number;
};

type User = Admin | Member | Guest;

// Admin -> {name}님 현재까지 {kickCount}명 강퇴했습니다.
// Member -> {name}님 현재까지 {point} 모았습니다.
// Guest -> {name}님 현재까지 {visitcount}번 방문하셨습니다.

function login(user: User) {
    switch (user.tag) {
        case "ADMIN": {
            console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
            break;
        }
        case "MEMBER": {
            console.log(`${user.name}님 현재까지 ${user.point} 모았습니다.`);
            break;
        }
        case "GUEST": {
            console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문하셨습니다.`);
            break;
        };
    }
}


/**
 * 다른 예제
 */

type LoadingTask = {
    state : "LOADING";
};

type FailedTask = {
    state : "FAILED";
    error : {
        message : string;
    };
};

type SuccessTask = {
    state : "SUCCESS";
    response : {
        data : string;
    }
}

type AsyncTask = LoadingTask | FailedTask | SuccessTask;

//로딩중 -> 콘솔에 로딩중 출력
//실패 -> 실패 : 에러메시지를 출력
//성공 -> 성공 : 데이터를 출력

function processResult(task : AsyncTask) {
    switch(task.state){
        case "LOADING" : {
            console.log("로딩 중");
            break;
        }
        case "FAILED" : {
            console.log(`에러 발생 : ${task.error.message}`);
            break;
        }
        case "SUCCESS" : {
            console.log(`성공 : ${task.response.data}`);
            break;
        }
    }
}

const loading : AsyncTask = {
    state : "LOADING",
};

const failed : AsyncTask = {
    state : "FAILED",
    error : {
        message : "오류 발생 원인은 ~~",
    },
};

const success : AsyncTask = {
    state : "SUCCESS",
    response : {
        data : "데이터는 ~~",
    },
};