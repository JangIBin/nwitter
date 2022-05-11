# 장이빈

[5월 11일]
- fbase.js에 firestore추가
```
import "firebase/firestore";
```
- ...을 사용하여 데이터 추가
```
const getNweets = async () => {
        const dbNweets = await dbService.collection("nweets").get();
        console.log(dbNweets);

        dbNweets.forEach((document) => 
            setNweets((prev) => [document.data(), ...prev])
        );
    }
```

[5월 4일]
- 구글 로그인, 깃허브 로그인을 위해 코드를 수정한다
- Auth.js 중 onSocialClick 부분
- Navigation.js 작성 
- Router.js 로그인이 되었을때만 Navigation이 보이도록 수정


[4월 27일]
- Firebase에 회원가입
- Auth.js 수정
```
    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            let data;
            if (newAccount) {
                // create newAccount
                data = await authService.createUserWithEmailAndPassword(
                    email,
                    password
                );
            } else {
                // log in
                data = await authService.signInWithEmailAndPassword(email, password);
            }
            console.log(data);
        } catch (error) {
            setError(error.message);
        }
    };
```

[04월 13일]
- useState를 사용
```
const [email, setEmail] = useState("");
```

- onChange를 사용하여 변경가능
```
  const onChange = (event) => {
    // console.log(event.target.name)
    const {
      target : {name, value},
    } = event;
    if(name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
```

[04월 06일]

useState
- Router.js에 useState를 추가한다
- react-router-dom 버전이 6버전이라면 Switch가 작동하지않아 Routes로 변경해주어야 한다 고로 다운그레이드를 시키도록 한다 $ npm react-router-dom@5.2.0
```
const AppRouter = ({ isLoggedIn }) => {
    // const [isLoggedIn, setIsLoggedIn] = useState(true);
    return (
        <Router>
            <Switch>
                {isLoggedIn ? (
                    <Route exact path="/">
                        <Home />
                    </Route>
                ) : (
                    <Route exact path="/">
                        <Auth />
                    </Route>
                )}
            </Switch>
        </Router>
    )
}
```

[03월 30일]

Firebase
- firebase.js 의 파일을 fbase.js로 변경한다
```
import firebase from 'firebase/compat/app';
import "firebase/auth";
...
firebase.initializeApp(firebaseConfig);
export const authService = firebase.auth();
```

[03월 23일]

로컬PC에서 push
$ git config --global user.name "YourNAME"
$ git config --global user.email "YOu@email.com"

확인방법
git config user.name
git config user.email


[03월 3일]
1. firebase에서 프로젝트 만들기
2. firebase sdk추가
3. .env로 firebaseconfig를 옮기고 .gitignore를 사용해 git에 올라가지 않도록 설정
4. src폴더 안에 component, routes폴더를 만들어서 파일을 따로 보관
5. npm install react-router-dom을 다운로드 하여 route를 사용



