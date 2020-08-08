# 생활코딩 曰

## 
### 객체 & 배열
- 객체 배열 모두 정보를 정리정돈하는 도구
- 객체는 순서없이. 배열은 순서대로

##
### 객체
- 함수는 값이다.
- 객체는 값을 담을수있는 그릇이다. 
- 객체는 결국에는 코드가 복잡해짐에 따라서 그 코드를 정리정돈해서 코드의 복잡성을 낮추는 기본적인 기능에서부터 출발한다.

##
### Clinet / Server
- 한마디로 정보의 주고받음에 있어서 '요청하는 쪽'이 클라이언트(Client) '요청에 응답해주는쪽'이 서버(Server)
- 웹브라우저/웹서버 관계, 게임 클라이언트(게임유저의 각 (단말기들로부터의) 요청)와 게임 서버(게임서비스를 제공하는 회사측 컴퓨터(서버)) 등 의 관계와 같음
- 한마디로 "정보를 요청하는 쪽 / 정보를 요청받아 그것를 제공하는 쪽" 에 대한 개념

##
### API
- Application Programming Interface 약자     
- Interface? 약속된 조작 장치     
- Application Programming 하기 위해 제공되는 함수 = API     
&nbsp;ex) Node.js 제공되는 함수(기능)들    
- 언어가 가지고 있는 조작 장치(제공되는 함수)


### Template Literal
- literal? 정보를 표현하는 방법. 기호      
- ` => Template Literal 시작과 끝을 나타냄          
&nbsp;ex) `TEST ${name}`

##
### Callback
- 작업이 끝나면 호출    
&nbsp;ex) fs.readFile('syntax/sample.txt', 'utf8', function(err, result){...});    
&nbsp; 실행되는 순서    
&nbsp;`1`. readFile함수 실행    
&nbsp;`2`. 1번 작업 끝난 후 3번째 인자 callback함수 실행    

- Node.js 대부분 비동기 함수이므로 callback 함수 사용 필요        
- readFile 함수는 비동기 처리함수     
- 비동기 처리함수 일 경우 언제 작업이 끝날지 모르므로 readFile 함수 작업이 끝나고 처리돼야 될 부분을 callback함수 안에 넣어줘야 함



##
### Package & Package Manager
- Package? 소프트웨어를 부르는 여러가지 표현    
&nbsp;ex) 독립적으로 실행되는 프로그램 
- Package Manager? 소프트웨어들을 생성/설치/업데이트 등을 관리해주는 프로그램

##
### NPM
- Node.js에서 가장 광범위하게 사용 중
- 기본적으로 Node.js 설치할 때 함께 설치되는 Package Manager

##
### pm2
- Node.js를 통해서 만든 프로그램을 감시/관리 해줌.    
&nbsp;ex) Node.js 소스가 수정되면 자동으로 관련 프로그램을 껐다 킴
- pm2 설치 명령어    
&nbsp;npm install pm2 -g
- pm2 명령어    
&nbsp;`1`. 백그라운드로 실행 X    
&nbsp;&nbsp;&nbsp;: pm2 start main.js --watch --no-daemon    
&nbsp;`2`. pm2 관리/감독 중인 서비스 모두 죽이기    
&nbsp;&nbsp;&nbsp;: pm2 kill    
&nbsp;`3`. 로그 확인    
&nbsp;&nbsp;&nbsp;: pm2 log    

##
### 모듈
- 모듈은 객체를 정리정돈 할 수 있는 가장 큰 틀(도구)

##
### 모듈 추가 하는 방법
- 순서(cmd에서 실행)    
&nbsp;`1`. Node.js 관련 소스 경로로 이동.(package.json 파일 존재해야함)    
&nbsp;`2`. 명령어 실행         
&nbsp;&nbsp;: npm install mysql     
&nbsp;&nbsp;&nbsp;&nbsp;-> package.json 파일 dependencies에 mysql이 추가됨.    
&nbsp;&nbsp;&nbsp;&nbsp;-> node_modules 폴더 안에 mysql 모듈 추가됨.    

##
### 검색 추천
- 검색어 Node.js AWESOME
- 주목받는 Node.js 모듈 검색가능
