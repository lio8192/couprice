import './App.css';
import Logo from './img/Logo.svg';
import Banner from './img/Banner.svg';
import { ReactComponent as Category_edit } from './img/Category_edit.svg';

function App() {
  return (
    <div className="App">
        <div className="Navigation">
            <img className="Logo" src={ Logo }/>
            <div className="Search-Box">
                <a>검색어를 입력해주세요</a>
            </div>
            <a>로그인</a>
        </div>

        <div className="Body">
            <div className="BannerBody">
                <img className="Banner" src={ Banner }/>
            </div>

            <div className="Category">
                <ul>
                    <li className="Category_select"><a>전체</a></li>
                    <li><a>패션</a></li>
                    <li><a>뷰티</a></li>
                    <li><a>주방용품</a></li>
                    <li><a>생활용품</a></li>
                    <li class="push">
                        <Category_edit/>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  );
}

export default App;
