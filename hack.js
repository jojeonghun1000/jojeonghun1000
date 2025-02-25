// 끄투핵 2021ver
console.clear();
var words = []; // words 초기화
if (location.host != "kkutu.co.kr" && location.host != "kkutu.be"){
console.log("일반 끄투 전용 db를 가져오겠습니다.");
if (location.host == "zep-kkutu.online"){
	words = KKuTu.concat(ZEP);
}else{
	words = KKuTu;
}
/*}else if (location.host == "kkutu.co.kr"){
console.log("끄투코리아 전용 db를 가져오겠습니다.");
words = KKuKo;
}else if (location.host == "kkutu.be"){
console.log("끄튜브 전용 db를 가져오겠습니다.");
words = Club;*/
}
if (location.host != "kkutu.co.kr" && location.host != "kkutu.club"){
console.log("일반 끄투 전용 한방 필터링을 가져오겠습니다.");
}else if (location.host == "kkutu.co.kr"){
console.log("끄투코리아 전용 한방 필터링을 가져오겠습니다.");
hanbang = hbkk;
}else if (location.host == "kkutu.be"){
console.log("끄튜브 전용 한방 필터링을 가져오겠습니다.");
hanbang = hbkc;
}

/*
다른사람에게 들키지 않도록 치는 시간은 무작위.
randoms = (Math.random() * 4000) + 500;
asdf = setInterval(function(){randoms = (Math.random() * 4000) + 500;document.getElementById("ChatBox").childNodes[1].childNodes[1].value = "/r";document.getElementById("CheatBtn").click();}, randoms)
*/


var DanDae_words = [];

DanDae_words = KIP; // ES, KIP, HH, MATH, HDM
var myTurn = "pass";
var Overlap = new Array();
var StackPrevention = new Array();
words.sort(() => Math.random() - 0.5);
var Wt, Ms, sec2, sec, tT, rT, chain, Iochat, IoBtn, DDlongver = 0;
var isSay = 0;
var idx, idx1, idx2, endidx1, endidx2;
var historywds = "Nothing";
var myName = "";
var myId = "";
var myFail = 0;
var isGameStarted = "no";
var topic = "";
var pandan = "attacker";
var nextB = "0";
var whatS = "";
var newWords = [];
var apLongVer = 0;
var topic;
var holds = true; // false=자동시작, true=자동시작 멈추기
var isManner = false;//false = 스택킬, true = 스택킬 금지
var heads = ""; //채팅 내역 앞 하나
var shuffling = "impossible"; // possible = 셔플 가능한 때, keep = 게임 끝날 때까지 대기
var lumDef = ["늠름", "늠균", "늠준"];
var fromAvoid = [];

/*
words.sort(function(a, b){return b.length - a.length;});
DanDae_words.sort(function(a, b){return b.length - a.length;});
*/

var o = ""; // words에 쓰이는 중요한것
var Mission = "";

var basicalavoid = (true) ? /[늡컥]/ : 0;


var avoid = new RegExp("^(?!.*뻬(다|)깐|쥬쥬).*([^숲뚝가각간갈감갑갓강갖개갤갯거건걸검것겉게겨격결겹경곁계고곡곤곧골곰곱곳공과관광괴교구국군굴굵굽굿궁궈귀귓규귤그극근글금긔기긴길김깃까깍깔깜깨꺼껄께꼬꼭꼰꼴꼼꼽꽁꽃꾀꾸꿀꿋끄끈끌끓끝끼ㄴ나낙난낟냥날남납낫낱내냄냉너넉넌널넓넙넝네넬넵녀년녈념녑녕노녹논놀놋농뇌누눈뉴느늘늡능늦늪늿니닉닌닐님닙닛닝ㄷ다단달닭담답당대댄댓댱더던덜덤덧덩데덴뎃뎅뎌도독돈돋돌동돼되된두둔둘둥뒤뒬뒷듁드든들등디딘딜따딴딸땀땅때땍땔땜땟땡떠떡떨뗑똥뙤뚝뚤뚫뜨뜬뜰뜸뜻띠ㄹ라락란랄람랍랑램랭량러럼레렌려력련렬렴렵령례로료록론롤롱룡루류률륭륙뤼르릉리릭린릴림립링ㅭㅁ마막만맏말맔망맞매맥맨맹머먹멀멍메멘멜멧며명모목몬몰몸못몽묏무묵묶문물묽뭇므믄믈미민믿밀ㅂ바박밖반받발밤밥밧방밭배백밸뱃버번벌범법베벤벨벼별병보본볼봄봉부북분불붉붓붕뷰브블비빈빌빗빙빚빛빠빤빨뻔뻘뽀뽕뾰뿌뿔뿡ㅅ사삭삯산살삸삼삽삿상새색샐샘샛생샤서석선섣설섬성세센셀셈셋셰소속손솔솜솟송쇠수숙술숨숫숭쉬슈스슬승시신실심십싯싱싸싼쌀쌍써썬썰쑬쒜쓰쓴쓸씨씬씰아악안알앏암압앙앞애액앤앨앵야약얄얌양얘어억언얼엄엇엉에엠엥여역연열염엽영옆예옌옐옛오옥온올옴옷옹옻와왁완왈왓왕왜왱외왼요욜용우운울웃웅워원월웽위윈윌윗유육율융윷으은음응의이익인일임입잉자잔잘잠잡잣장잦재잭잰잿쟝저전절젊점접정젖제젠젬젱젹젼조존졸좀종좋죗주줄중쥐쥬즘지진질짐집짓징짜째쩌쩔쩽쪼쪽쫄쭈쭉쭐쯔찌찔차착찬찰참찻창채책챈챙처천첨첫청체첼쳉초촌촐총최쵯추출충취측치친칠침칩카칸칼캄캐캘커컨컬컷케코콕콜콤콧콩쾌쿠쿨쿵쿼퀴퀵큐크큰클키킥킬킷킹타탄탈탐탑탕태터턱턴텁텅테텔텩토톰톱통퇴투툴트특틈티팀파팍판팔패팬팽퍼펀펄페펜펠편평폐폭폴퐁표푸푼풀풋풍퓌프플피필핑하한할함합핫항해핵향허헐헛헝헤헥헬현혈혐협혓혜호혼홀홉홑화환활황횅횡후훅훌훳훼휑휘흉흐흑흙흠흡희흰히힐힘혀롯욕래략꺽꾼낮냇랫댕뚜봇싹썩씩앍벽얽져업푹뇨뇽룩짝포컥컹뻑릅괄작낭꽝털벅됴즈퍽봐봅쇼됨펑품뿍빵푹큼쟈눌뽈넬밋셩뒈삿죽깐춘펭쿡굼닥컴템쭝홈쌤퀸뱅잇쩜껍뮈빡띵찍뎨맴떼걱뵈칵괘깽벙녁쿰팅철복쫑식힙쎌썸릎슨렁쩡샌줅맛축밑흥직증헌붐삶웹슛홍델훠쉿낯랴넥척릿순쩍학꿈잼촉첩벳즑뎐럭슉엘뇌롬뢰섹툰튠똔습눅확즐]$|^(션보롬|놈놈놈|쩍쩍|뻑뻑|컹컹|컥컥|늡늡|괄괄|꽝꽝|콕콕|퍽퍽|봐봐봐|봅보로봅봅|럽미닥터|값표|뻬쭉|짚공예품|뿍뿍|푹푹|큼큼|톤킬로이론|칙칙|뒈뒈|ㅎ(받침|)변칙|킨드레드의표식|핍뇨증|쿡쿡|긋기뱃바닥|퀄퀄|쌤쌤|빡빡|맴맴|넨장|칵칵|쿰쿰|팅팅|늬굽|쩡쩡|딘딘|뿡뿡|찍찍|됨됨|갖갖|쑨커|캄캄|펫숍오브호러즈|쭉쭉|똔똔|눅눅|(슴뻑){1,2})$|^(?=.*^콕)(?=.*증$).*$|^(?=.*^[낚뮨])(?=.*늘$).*$)$"); //섯 덕 엘 층 철 행 흥 효 증 군 식 면 멸 훈 탁 칙 권 변 회 지금은 없지만 봐야됨 / 킵, 쿄, 봐야 됨 // 끄투코리아 

//var avoid = new RegExp("^(?!.*뻬(다|)깐|쥬쥬).*([^숲뚝가각간갈감갑갓강갖개갤갯거건걸검것겉게겨격결겹경곁계고곡곤곧골곰곱곳공과관광괴교구국군굴굵굽굿궁궈귀귓규귤그극근글금긔기긴길김깃까깍깔깜깨꺼껄께꼬꼭꼰꼴꼼꼽꽁꽃꾀꾸꿀꿋끄끈끌끓끝끼ㄴ나낙난낟냥날남납낫낱내냄냉너넉넌널넓넙넝네넬넵녀년녈념녑녕노녹논놀놋농뇌누눈뉴느늘늡능늦늪늿니닉닌닐님닙닛닝ㄷ다단달닭담답당대댄댓댱더던덜덤덧덩데덴뎃뎅뎌도독돈돋돌동돼되된두둔둘둥뒤뒬뒷듁드든들등디딘딜따딴딸땀땅때땍땔땜땟땡떠떡떨뗑똥뙤뚝뚤뚫뜨뜬뜰뜸뜻띠ㄹ라락란랄람랍랑램랭량러럼레렌려력련렬렴렵령례로료록론롤롱룡루류률륭륙뤼르릉리릭린릴림립링ㅭㅁ마막만맏말맔망맞매맥맨맹머먹멀멍메멘멜멧며명모목몬몰몸못몽묏무묵묶문물묽뭇므믄믈미민믿밀ㅂ바박밖반받발밤밥밧방밭배백밸뱃버번벌범법베벤벨벼별병보본볼봄봉부북분불붉붓붕뷰브블비빈빌빗빙빚빛빠빤빨뻔뻘뽀뽕뾰뿌뿔뿡ㅅ사삭삯산살삸삼삽삿상새색샐샘샛생샤서석선섣설섬성세센셀셈셋셰소속손솔솜솟송쇠수숙술숨숫숭쉬슈스슬승시신실심십싯싱싸싼쌀쌍써썬썰쑬쒜쓰쓴쓸씨씰아악안알앏암압앙앞애액앤앨앵야약얄얌양얘어억언얼엄엇엉에엠엥여역연열염엽영옆예옌옐옛오옥온올옴옷옹옻와왁완왈왓왕왜왱외왼요욜용우운울웃웅워원월웽위윈윌윗유육율융윷으은음응의이익인일임입잉자잔잘잠잡잣장잦재잭잰잿쟝저전절젊점접정젖제젠젬젱젹젼조존졸좀종좋죗주줄중쥐쥬즘지진질짐집짓징짜째쩌쩔쩽쪼쪽쫄쭈쭉쭐쯔찌찔차착찬찰참찻창채책챈챙처천첨첫청체첼쳉초촌촐총최쵯추출충취측치친칠침칩카칸칼캄캐캘커컨컬컷케코콕콜콤콧콩쾌쿠쿨쿵쿼퀴퀵큐크큰클키킥킬킷킹타탄탈탐탑탕태터턱턴텁텅테텔텩토톰톱통퇴투툴트특틈티팀파팍판팔패팬팽퍼펀펄페펜펠편평폐폭폴퐁표푸푼풀풋풍퓌프플피필핑하한할함합핫항해핵향허헐헛헝헤헥헬현혈혐협혓혜호혼홀홉홑화환활황횅횡후훅훌훳훼휑휘흉흐흑흙흠흡희흰히힐힘혀롯욕래략꺽꾼낮냇랫댕뚜봇싹썩씩앍벽얽져업푹뇨뇽룩짝포컥컹뻑릅괄작낭꽝털벅됴즈퍽봐봅쇼됨펑품뿍빵푹큼쟈눌뽈밋셩뒈삿죽깐춘펭쿡굼닥컴템쭝홈쌤퀸뱅잇쩜껍뮈빡띵찍뎨맴떼걱뵈칵괘깽벙녁쿰팅철복쫑식힙쎌썸릎슨렁쩡샌줅맛축밑흥직증헌붐삶웹슛홍델훠쉿낯랴넥척릿순쩍학잼촉첩벳즑뎐럭슉엘뇌롬뢰섹툰튠똔습눅확즐]$|^(션보롬|놈놈놈|쩍쩍|뻑뻑|컹컹|컥컥|늡늡|괄괄|꽝꽝|콕콕|퍽퍽|봐봐봐|봅보로봅봅|럽미닥터|값표|뻬쭉|짚공예품|뿍뿍|푹푹|큼큼|톤킬로이론|칙칙|뒈뒈|ㅎ(받침|)변칙|킨드레드의표식|핍뇨증|쿡쿡|긋기뱃바닥|퀄퀄|쌤쌤|빡빡|맴맴|넨장|칵칵|쿰쿰|팅팅|늬굽|쩡쩡|딘딘|뿡뿡|찍찍|됨됨|갖갖|쑨커|캄캄|펫숍오브호러즈|쭉쭉|똔똔|눅눅|(슴뻑){1,2})$|^(?=.*^콕)(?=.*증$).*$|^(?=.*^[낚뮨])(?=.*늘$).*$)$"); //섯 덕 엘 층 철 행 흥 효 증 군 식 면 멸 훈 탁 칙 권 변 회 지금은 없지만 봐야됨 / 킵, 쿄, 봐야 됨 

var attacks = (location.host != "kkutu.co.kr") ? new RegExp("[름릇듭죄샷귄늠뀌톤긋톳끗욘앗럴짚댐킨붑슛졀셕늣쳐룻눗괵좃뭄슭랙뎡듯냬쑈돝샃븨좆팟믓쏭않넨댁뎀씸엣얏띔셤껏춍뇰욜넛끗쥭츼룸눔낏뮨듸겡핍썹랗쨈쉰숍슷믜꿔딤낀봅뽄뮬깁튝텬졍슘션늬균값룹눕틀응놓뺨캅듯슴맑둑렝즘눙룽뽐놉롭xyz]$") : new RegExp("[름톳릇듭쌈뿐앗샷컵을긋끗짚톤귄킨뀌늠욘럴댐붑졀셕늣쳐룻눗괵좃뭄슭랙뎡듯냬쑈돝샃븨좆팟믓쏭않넨댁뎀씸엣얏띔셤껏춍뇰욜넛끗쥭츼룸눔낏뮨듸겡핍썹랗돔쨈쉰숍슷슴믜꿔딤낀봅뽄뮬깁튝텬륨윰늄졍슘롭션늬균틀값룹눕응뺨캅놉듯맑둑렝즘눙룽뽐럽름흔츄죄읍펫꽂폰줘xyz]$"); // [름톳릇듭쌈뿐앗샷컵을긋끗짚톤귄킨뀌늠욘럴댐붑졀셕늣쳐룻눗괵좃뭄슭랙뎡듯냬쑈돝샃븨좆팟믓쏭않넨댁뎀씸엣얏띔셤껏춍뇰욜넛끗쥭츼룸눔낏뮨듸겡핍썹랗돔쨈쉰숍슷슴믜꿔딤낀봅뽄뮬깁튝텬륨윰늄졍슘롭션늬균틀값룹눕응뺨캅놉듯맑둑렝즘눙룽뽐럽름흔츄죄읍펫꽂폰줘xyz]$

/*
var avoid = new RegExp("[^가각간갈감갑갓강개갤갯거건걸검것겉게겨격견결겹경곁계고곡곤곧골곰곱곳공과관광괴교구국군굴굵굽굿궁궈권궤귀귓규균귤그극근글금급긔기긴길김깃까깍깔깜깨꺼껄께꼬꼭꼰꼴꼼꼽꽁꽃꾀꾸꿀꿋끄끈끌끓끝끼ㄴ나낙난낟냥날남납낫낱내냄냉너넉넌널넓넙넝네넬넵녀년녈념녑녕노녹논놀놋농뇌누눈뉴느늘늠늡능늦늪늿니닉닌닐님닙닛닝ㄷ다단달닭담답당대댄댓댱더덕던덜덤덧덩데덴뎃뎅뎌도독돈돋돌동돼되된두둔둘둥뒤뒬뒷듁드든들등디딜딥따딱딴딸땀땅때땍땔땜땟땡떠떡떨뗑똥뙤뚝뚤뚫뜨뜬뜰뜸뜻띠ㄹ라락란랄람랍랑램랭량러럼레렌려력련렬렴렵령례로료록롤롱룡루류률륭륙륜뤼르릉리릭린릴림립링ㅭㅁ마막만맏말맔맛망맞매맥맨맹머먹먼멀멍메멘멜멧며면멸명모목몬몰몸못몽묏묘무묵묶문물묽뭇므믄믈미민믿밀ㅂ바박밖반받발밤밥밧방밭배백밸뱃버번벌범법베벤벨벼변별병보복본볼봄봉부북분불붉붓붕뷰브블비빈빌빗빙빚빛빠빤빨뻔뻘뽀뽕뾰뿌뿔ㅅ사삭삯산살삸삼삽삿상새색샐샘샛생샤서석선섣설섬섭성세센셀셈셋셰소속손솔솜솟송쇠수숙술숨숫숭숯쉬슈스슬습승시식신실심십싯싱싸싼쌀쌈쌍써썬썰쑬쒜쓰쓴쓸씨씬씰아악안알앏암압앙앞애액앤앨앵야약얄얌양얘어억언얼엄엇엉에엘엠엥여역연열염엽영옆예옌옐옛오옥온올옴옷옹옻와왁완왈왓왕왜왱외왼요욜용우운울웃웅워원월웽위윈윌윗유육윤율융윷으은음응의이익인일임입잉자잔잘잠잡잣장잦재잭잰잿쟁쟝저적전절젊점접정젖제젠젬젱젹젼조존졸좀종좋좌죗주준줄중쥐쥬즉즘지직진질짐집짓징짜째쩌쩔쩽쪼쪽쫄쭈쭉쭐쯔찌찔차착찬찰참찻창채책챈챙처척천철첨첫청체첼쳉초촌촐총최쵯추축출충취측층치칙친칠침칩카칸칼캄캐캘커컨컬컷케코콕콜콤콧콩쾌쿠쿨쿵쿼퀴퀵큐크큰클키킥킬킷킹타탁탄탈탐탑탕태택터턱턴텁텅테텔텩토톰톱통퇴투툴트특틈티팀파팍판팔패팬팽퍼펀펄페펜펠편평폐폭폴퐁표푸푼풀품풋풍퓌프플피필핑ㅎ하한할함합핫항해핵행향허헌헐헛헝헤헥헨헬현혈혐협혓형혜호혼홀홉홍홑화환활황횅회횡효후훅훈훌훳훼휑휘흉흐흑흔흙흠흡흥희흰히힐힘혀롯욕래론략꺽꾼낮냇랫댕뚜봇싹썩씩앍벽얽져업푹뇨뇽룩짝포컥컹뻑릅괄작쩍낭꽝털증벅됴즈퍽뽈]$|^(뻑뻑|컹컹|컥컥|늡늡|괄괄|쩍쩍|꽝꽝|핍뇨증|콕콕|퍽퍽)$|^(?=.*^콕)(?=.*증$).*$"); //섯  뽈 지금은 없지만 킵 //순정 and 미완성

이거는 일반끄투에서임
*/

a = new AudioContext();

    function beep(vol, freq, duration) {
        v = a.createOscillator();
        u = a.createGain();
        v.connect(u);
        v.frequency.value = freq;
        v.type = "square";
        u.connect(a.destination);
        u.gain.value = vol * 0.01;
        v.start(a.currentTime);
        v.stop(a.currentTime + duration * 0.001);
    };

/*
if (location.host != "kkutu.co.kr"){

}else if (location.host == "kkutu.co.kr"){

}
*/

/* 웹폰트 적용 코드. 적용 후 웹 배치가 깨지는 현상 때문에 사용 불가
document.head.innerHTML += "<style type='text/css'>@font-face{font-family:GmarketSansMedium;src:url(https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff) format('woff');font-weight:400;font-style:normal}</style>";
document.body.style.fontFamily += "'GmarketSansMedium'";

및 개발하면서 이런 주의 알림 코드는 개별로만 핵을 사용함에 따라 쓸모가 없게 되어 없앰.
document.getElementById("Loading").innerHTML = `핵 사용 전에 주의할 점이 있습니다.<br/>핵을 사용하는 것은 후에 생길 불상사(제재 등)를 감안하는 것에 동의하는 것이며,<br/>핵 개발자 측에서는 사용자가 혹여 이 프로그램을 사용한 후 생긴 불상사 이후에도 그 어떠한 책임도 지지 않을 것입니다.<br/><button style="left:0; right:0; margin-left:auto; margin-right:auto;" onclick="document.getElementById('Loading').style.display = 'none';onsetting();">위 사항을 모두 이해했으며, 사용할 준비가 되었습니다.</button>`
document.getElementById("Loading").style.display = "block";
*/

var qna;
if (location.host != "kkutu.co.kr") {
    if (document.getElementById("Top") != null){
      qna = "Top";
    }else{
      var qna = prompt("설정창에 띄워쓸 자리의 id가 Top이 아닙니다. 직접 찾아서 해당 id의 값을 입력 해 주십시오.");
    }
    Btm = document.getElementById(qna).innerHTML;
    document.getElementById(qna).innerHTML = '<div style=position:absolute;top:63px;left:399px;z-index:200; id=divpop1 onmousedown=initializedrag(event) onmouseup=stopdrag()> <map name=Map> <area coords=0,0,100,100> </map> <table cellpadding=0 cellspacing=0> <tr> <td> <div style="vertical-align:top;text-align:center;border:2px solid white;background-color:black;color:white;width:200px;height:80px;margin-top:-23px"><div style="width:50px;height:20px;border:2px solid white;text-align:center;background-color:black;color:white"id=body111 onclick="if(document.getElementById(`body111`).innerText==`닫기`){document.getElementById(`body112`).style.display=`none`;document.getElementById(`body111`).innerText=`열기`}else{document.getElementById(`body112`).style.display=`block`;document.getElementById(`body111`).innerText=`닫기`}">닫기</div><font size="6px" style="font-style:oblique;font-weight:lighter;">setting</font></div><div style="width:450px;border:3px solid white;background-color:#000;display:block"id=body112 border=0 oncontextmenu=return!1 ondragstart=return!1 onselectstart=return!1 usemap=#Map> <div style=margin-left:25%;padding-top:0;padding-bottom:0;width:200px> <form> <fieldset style=padding-top:0;padding-bottom:0;width:190px> <legend style=color:#ff0>끝말잇기 전용 <sub>(단일선택)</sub></legend> <p style=font-size:15p;color:#fff><input id=atk name=chkd style=left:0;right:0;margin-left:auto;margin-right:auto type=checkbox>공격 우선 <input id=nrm name=chkd style=left:0;right:0;margin-left:auto;margin-right:auto type=checkbox>장문 우선 </fieldset> <fieldset style=padding-top:0;padding-bottom:0;width:135px> <legend style=color:#ff0>모드</legend> <p style=font-size:15p;color:#fff><input id=kkt name=chkd style=left:0;right:0;margin-left:auto;margin-right:auto type=checkbox>쿵쿵따 <input id=kall name=chkd style=left:0;right:0;margin-left:auto;margin-right:auto type=checkbox>끄투 <input id=dd name=chkd style=left:0;right:0;margin-left:auto;margin-right:auto type=checkbox>단어 대결 <input id=ap name=chkd style=left:0;right:0;margin-left:auto;margin-right:auto type=checkbox>앞말잇기(베타) <p style=font-size:15p;color:#fff><input id=hmje name=chkd style=left:0;right:0;margin-left:auto;margin-right:auto type=checkbox>훈민정음 </fieldset><fieldset style=padding-top:0;padding-bottom:0;width:185px> <legend style=color:#ff0>다른 기능</legend> <p style=font-size:15p;color:#fff><input id=sgam name=chkd style=left:0;right:0;margin-left:auto;margin-right:auto type=checkbox>스겜모드 <input id=stopm name=chkd style=left:0;right:0;margin-left:auto;margin-right:auto type=checkbox>잠시 중단 <input id=incmis name=chkd style=left:0;right:0;margin-left:auto;margin-right:auto type=checkbox>미션 <input id=autoready name=chkd style=left:0;right:0;margin-left:auto;margin-right:auto type=checkbox>자동 시작 <input id=mannergame name=chkd style=left:0;right:0;margin-left:auto;margin-right:auto type=checkbox>매너게임(스택킬 금지) </fieldset> </form> </div></div></table></div>';
} else if (location.host == "kkutu.co.kr") {
    var Btm = document.getElementById("Footer").innerHTML;
    document.getElementById("Footer").innerHTML = '<div style=position:absolute;top:63px;left:399px;z-index:200; id=divpop1 onmousedown=initializedrag(event) onmouseup=stopdrag()> <map name=Map> <area coords=0,0,100,100> </map> <table cellpadding=0 cellspacing=0> <tr> <td> <div style="vertical-align:top;text-align:center;border:2px solid white;background-color:black;color:white;width:200px;height:80px;margin-top:-23px"><div style="width:50px;height:20px;border:2px solid white;text-align:center;background-color:black;color:white"id=body111 onclick="if(document.getElementById(`body111`).innerText==`닫기`){document.getElementById(`body112`).style.display=`none`;document.getElementById(`body111`).innerText=`열기`}else{document.getElementById(`body112`).style.display=`block`;document.getElementById(`body111`).innerText=`닫기`}">닫기</div><font size="6px" style="font-style:oblique;font-weight:lighter;">setting</font></div><div style="width:450px;border:3px solid white;background-color:#000;display:block"id=body112 border=0 oncontextmenu=return!1 ondragstart=return!1 onselectstart=return!1 usemap=#Map> <div style=margin-left:25%;padding-top:0;padding-bottom:0;width:200px> <form> <fieldset style=padding-top:0;padding-bottom:0;width:190px> <legend style=color:#ff0>끝말잇기 전용 <sub>(단일선택)</sub></legend> <p style=font-size:15p;color:#fff><input id=atk name=chkd style=left:0;right:0;margin-left:auto;margin-right:auto type=checkbox>공격 우선 <input id=nrm name=chkd style=left:0;right:0;margin-left:auto;margin-right:auto type=checkbox>장문 우선 </fieldset> <fieldset style=padding-top:0;padding-bottom:0;width:135px> <legend style=color:#ff0>모드</legend> <p style=font-size:15p;color:#fff><input id=kkt name=chkd style=left:0;right:0;margin-left:auto;margin-right:auto type=checkbox>쿵쿵따 <input id=kall name=chkd style=left:0;right:0;margin-left:auto;margin-right:auto type=checkbox>끄투 <input id=dd name=chkd style=left:0;right:0;margin-left:auto;margin-right:auto type=checkbox>단어 대결 <input id=ap name=chkd style=left:0;right:0;margin-left:auto;margin-right:auto type=checkbox>앞말잇기(베타) <p style=font-size:15p;color:#fff><input id=hmje name=chkd style=left:0;right:0;margin-left:auto;margin-right:auto type=checkbox>훈민정음 </fieldset><fieldset style=padding-top:0;padding-bottom:0;width:185px> <legend style=color:#ff0>다른 기능</legend> <p style=font-size:15p;color:#fff><input id=sgam name=chkd style=left:0;right:0;margin-left:auto;margin-right:auto type=checkbox>스겜모드 <input id=stopm name=chkd style=left:0;right:0;margin-left:auto;margin-right:auto type=checkbox>잠시 중단 <input id=incmis name=chkd style=left:0;right:0;margin-left:auto;margin-right:auto type=checkbox>미션 <input id=autoready name=chkd style=left:0;right:0;margin-left:auto;margin-right:auto type=checkbox>자동 시작 <input id=mannergame name=chkd style=left:0;right:0;margin-left:auto;margin-right:auto type=checkbox>매너게임(스택킬 금지) </fieldset> </form> </div></div></table></div>';
}

//실행코드

var createScript = document.createElement("script");
createScript.innerHTML = "var dragapproved=false; var minrestore=0; var initialwidth,initialheight; var ie5=document.all&&document.getElementById; var ns6=document.getElementById&&!document.all; function iecompattest(){return (!window.opera && document.compatMode && document.compatMode!='BackCompat')? document.documentElement : document.body;}function drag_drop(e){if (ie5&&dragapproved&&event.button==1){document.getElementById('divpop1').style.left=tempx+event.clientX-offsetx+'px'; document.getElementById('divpop1').style.top=tempy+event.clientY-offsety+'px';}else if (ns6&&dragapproved){document.getElementById('divpop1').style.left=tempx+e.clientX-offsetx+'px'; document.getElementById('divpop1').style.top=tempy+e.clientY-offsety+'px';}}function initializedrag(e){offsetx=ie5? event.clientX : e.clientX; offsety=ie5? event.clientY : e.clientY; tempx=parseInt(document.getElementById('divpop1').style.left); tempy=parseInt(document.getElementById('divpop1').style.top); dragapproved=true; document.getElementById('divpop1').onmousemove=drag_drop;}function stopdrag(){dragapproved=false; document.getElementById('divpop1').onmousemove=null;};";
document.head.appendChild(createScript);

console.log("시스템 시작")

function Io() {

    for (var i = 0; i < document.getElementsByClassName("chat-input").length; i++) {
        if (document.getElementsByClassName("chat-input")[i].scrollWidth != 0 && document.getElementsByClassName("chat-input")[i].scrollWidth !== undefined) {
            Iochat = document.getElementsByClassName("chat-input")[i].id;
            break;
        }
    }

    for (var o = 0; o < document.getElementsByTagName("button").length; o++) {
        if (document.getElementsByTagName("button")[o].id.search(/[a-zA-Z][a-zA-Z][a-zA-Z][a-zA-Z][a-zA-Z]/) != -1 && document.getElementsByTagName("button")[o].id.length == 5) {
            IoBtn = document.getElementsByTagName("button")[o].id;
            break;
        }
    }

}

function notice(a){
var chatbox = document.createElement("div")
chatbox.setAttribute("class","chat-item chat-notice")
document.getElementById("Chat").appendChild(chatbox);
var header = document.createElement("div")
header.setAttribute("class","chat-head ellipse")
header.innerText = "[Server]";
chatbox.appendChild(header);
var sendmsg = document.createElement("div")
sendmsg.setAttribute("class","chat-body")
sendmsg.innerHTML = a;
chatbox.appendChild(sendmsg);
var objDiv = document.getElementById("Chat"); 
objDiv.scrollTop = objDiv.scrollHeight;
}

function say(answer) {
    if (location.host != "kkutu.co.kr") { // 사이트가 끄코 이외라면
        document.getElementById("Talk").value = answer;
        document.getElementById("ChatBtn").click();
    } else if (location.host == "kkutu.co.kr") { // 사이트가 끄코라면
        document.getElementById("ChatBox").childNodes[1].childNodes[1].value = answer;
        document.getElementById("CheatBtn").click();
    }
}

function noWord(sp){
// failAudio();
// say(sp);
beep(30, 1700, 100);
}

function leftSaying(answer) {
    if (location.host != "kkutu.co.kr") { // 사이트가 끄코 이외라면
        document.getElementById("Talk").value = answer;
    } else if (location.host == "kkutu.co.kr") { // 사이트가 끄코라면
        document.getElementById("ChatBox").childNodes[1].childNodes[1].value = answer;
    }
}

function cho_hangul(str) {
  cho = ["ㄱ","ㄲ","ㄴ","ㄷ","ㄸ","ㄹ","ㅁ","ㅂ","ㅃ","ㅅ","ㅆ","ㅇ","ㅈ","ㅉ","ㅊ","ㅋ","ㅌ","ㅍ","ㅎ"];
  result = "";
  for(i=0;i<str.length;i++) {
    code = str.charCodeAt(i)-44032;
    if(code>-1 && code<11172) result += cho[Math.floor(code/588)];
    else result += str.charAt(i);
  }
  return result;
}

myName = document.getElementsByClassName("my-stat-name ellipse")[0].innerText;
say("/cls");
notice("사용자 : " + myName + ", 확인");
console.log("사용자 : " + myName + ", 확인")
say("/id ");
myId = document.getElementById("Chat").childNodes[document.getElementById("Chat").childNodes.length - 1].childNodes[1].innerText.replace("내 식별 번호: ", "");
document.getElementById("Chat").childNodes[document.getElementById("Chat").childNodes.length - 1].remove();
notice("내 id : " + myId + ", 확인");
console.log("내 id : " + myId + ", 확인")

notice("~ : 사용법 : ~<br>핵을 설정하시려면 화면에 나타난 핵 설정 체크박스를 이용하여 주세요.<br>끄투 입력창에 =를 입력하시면 [개발자 도구 > 콘솔]에서 새로 추가 가능한 단어들을 볼 수 있어요.<br>또한, 끄투 입력창에 |를 입력하시면 핵 동작이 완전히 종료되며, 핵 설정창도 자동으로 사라져요.<br>핵이 작동되는 중에는 장문 시 생기는 화면 지진이 최소화되어요.<br>이 메세지를 제대로 보지 못하셨다면 이 역시 [개발자 도구 > 콘솔]에서 다시 확인하실 수 있어요!<br>자, 그럼 이제 즐끄하세요!");

console.log("~ : 사용법 : ~\n 핵을 설정하시려면 화면에 나타난 핵 설정 체크박스를 이용하여 주십시오. \n\n 끄투 입력창에 =를 입력하시면 콘솔에서 새로 추가 가능한 단어들을 볼 수 있습니다. \n 또한, 끄투 입력창에 |를 입력하시면 핵 동작이 완전히 종료되며, 핵 설정창도 사라집니다. \n\n 핵이 작동되는 중에는 장문 시 생기는 화면 지진이 최소화됩니다.")

var myLose = "no";
var round = "Nothing";

function isStack(word){
var letter = word[word.length-1];
var available = new Array();

for(var i of words){
if (i.startsWith(letter)){
available.push(i);
}
}

for(var i of Overlap){ // 중복 단어는 available에서 삭제
if (available.indexOf(i) != -1){
delete available.indexOf(i);
}
}
available = available.filter(data => data !== undefined);

if(available.length <= 1){
if(letter.match(/[릇늣]/)){
StackPrevention.push("늣", "릇");
}
if(letter.match(/[륨윰늄]/)){
StackPrevention.push("륨", "윰", "늄");
}
StackPrevention.push(letter);
}

}

function LumDefs(){
var i=3;
for(var a of lumDef){
i = (Overlap.includes(a)) ? i-1 : i;
}
return i; // 남은 단어 개수
}

function lumF(){
var abc = "no";
if (Overlap.includes("늠준") && Overlap.includes("늠균") && LumDefs() < 3){

if (Overlap.includes("늠름")){
Overlap.push("면사포구름")
}
return "늠쩍";
}
if (Overlap.includes("쩍쩍") && !Overlap.includes("늠쩍")){
	return "늠쩍";
}
if (Overlap.includes("늠름") == false && LumDefs() > 0){
	abc = "늠름";
}else if (Overlap.includes("늠름") && (Overlap.includes("늠준") == false || Overlap.includes("늠균") == false) && LumDefs() > 0){
if (Overlap.includes("늠준") == false){
abc = "늠준"
}else{
abc = "늠균"
}
}
return abc;
}

function isThereWait(){
if (document.getElementsByClassName("room-users").length > 0){
if (holds){
return 1;
}
var arr = [];
var isThereReady = 0;
for(var roomUser=0; roomUser<document.getElementsByClassName("room-users")[0].childNodes.length;roomUser++){
arr.push(document.getElementsByClassName("room-users")[0].childNodes[roomUser].childNodes[1].childNodes[0].innerText);
}
for(var one of arr){
if (one.includes("대기")){
return 1;
}
if (one.includes("준비")){
isThereReady = 1;
}
}

if (isThereReady){
return 0;
}else{
return 1;
}
} else {
return 1;
}
}

/*


            idx1 = idx.substr(0, 1);
            idx2 = idx.substr(2, 1);


*/

function Kratt() {
    myLose = "no";
    isSay = 0;
    idx = (idx.length >= 9) ? idx.substring(idx.length - 1, idx.length) : idx;
    chain = document.getElementsByClassName("chain")[0].innerText;
    pandan = (topic.indexOf("매너") == -1) ? hanbang : attacks;
    if (chain == "0" || nextB == "1") {
        pandan = attacks;
    }
    if (idx.length == 1) { // 두음법칙없음
        for (var o of words) {
				if (Overlap.includes("놈놈놈") && !Overlap.includes("놈맥도널드나씽스페셜") && idx == "놈" && words.includes("놈맥도널드나씽스페셜")){
				o = "놈맥도널드나씽스페셜";
                say(o);
                Wt = o;
                isSay = 1;
                break;
                }
				if (!Overlap.includes("놈놈놈") && idx == "놈" && words.includes("놈놈놈")){
				o = "놈놈놈";
                say(o);
                Wt = o;
                isSay = 1;
                break;
                }
				if (!Overlap.includes("즘즉") && idx == "딥" && words.includes("딥워터호라이즌")){
				o = "딥워터호라이즌";
                say(o);
                Wt = o;
                isSay = 1;
                break;
                }
				if (!Overlap.includes("묘실도굴꾼") && idx == "묘" && Overlap.includes("꾼둑꾼둑") && Overlap.includes("꾼둑")){
				o = "묘실도굴꾼";
                say(o);
                Wt = o;
                isSay = 1;
                break;
                }
                if (o.startsWith(idx) && Overlap.indexOf(o) == -1 && o.endsWith("꾼") && (Overlap.includes("꾼둑") && Overlap.includes("꾼둑꾼둑") && StackPrevention.indexOf(o[o.length-1]) == -1)){
                say(o);
                Wt = o;
                isSay = 1;
                break;
                }
                if (idx == "껌"){
                if (Overlap.includes("늠쩍") && Overlap.includes("쩍쩍")){
                if (Overlap.includes("껌쩍") == false){
if (Math.random() * 1 > 0.5){
o = "껌쩍"
}else{
o = "껌쩍껌쩍";
}
}else{
o = "껌쩍껌쩍"
}
                say(o);
                Wt = o;
                isSay = 1;
                break;
                }
                }
            if (o.startsWith(idx) && Overlap.indexOf(o) == -1 && o.search(pandan) != -1 && o.includes(Mission) == true && StackPrevention.indexOf(o[o.length-1]) == -1) {
                if (idx == "늠" && LumDefs() > 0){
                o = lumF();
                say(o);
                Wt = o;
                isSay = 1;
                break;
                }else{
                say(o);
                Wt = o;
                isSay = 1;
                if (o.endsWith("슴")) StackPrevention.push("슴");
                break;
                }
            }
        } // for~
        if (isSay == 0 && nextB == "0") {
            nextB = "1";
            Kratt();
            return;
        } else if (isSay == 0 && nextB == "1") {
            if (Mission != ""){
            Mission = "";
            Kratt();
            }else{
			  fromAvoid.push(idx)
              KrAvoid();
            }
            return;
        }

    } else if (idx.length == 4) { // 두음법칙있음
            idx1 = idx.substr(2, 1);
            idx2 = idx.substr(0, 1);
			console.log("놈")
        for (var o of words) {
			/*
			if (Overlap.includes("놈놈놈") && !Overlap.includes("놈맥도널드나씽스페셜") && idx1 == "놈" && words.includes("놈맥도널드나씽스페셜")){
				o = "놈맥도널드나씽스페셜";
                say(o);
                Wt = o;
                isSay = 1;
                break;
                }
			if (!Overlap.includes("놈놈놈") && idx1 == "놈" && words.includes("놈놈놈")){
				o = "놈놈놈";
                say(o);
                Wt = o;
                isSay = 1;
                break;
                }*/
            if (o.startsWith(idx1) && Overlap.indexOf(o) == -1 && o.search(pandan) != -1 && o.includes(Mission) == true && StackPrevention.indexOf(o[o.length-1]) == -1) {
                if (idx1 == "늠" && LumDefs() > 0){
                o = lumF();
                say(o);
                Wt = o;
                isSay = 1;
                break;
                }else{
                say(o);
                Wt = o;
                isSay = 1;
                if (o.endsWith("슴")) StackPrevention.push("슴");
                break;
                }
                }
        } // for~
        if (isSay == 0) { // idx1 없으면
		console.log("롬")
            for (var o of words) {
                if (o.startsWith(idx2) && Overlap.indexOf(o) == -1 && o.search(pandan) != -1 && o.includes(Mission) == true && StackPrevention.indexOf(o[o.length-1]) == -1) {
                    say(o);
                    Wt = o;
                    isSay = 1;
                    break;
                }
            } // for~
        } // idx1m;
        if (isSay == 0 && nextB == "0") {
            nextB = "1";
            Kratt();
            return;
        } else if (isSay == 0 && nextB == "1") {
            if (Mission != ""){
            Mission = "";
            Kratt();
            }else{
			  fromAvoid.push(idx1, idx2)
              KrAvoid();
            }
            return;
        }
    } // 끝쪽
}; // Kratt(); 끝 

function KrL() {
    myLose = "no";
    isSay = 0;
    idx = (idx.length >= 9) ? idx.substring(idx.length - 1, idx.length) : idx;
    if (idx.length == 1) { // 두음법칙없음
        for (var o of words) {
            if (o.startsWith(idx) && Overlap.indexOf(o) == -1 && o.length >= 9 && o.includes(Mission) == true  && StackPrevention.indexOf(o[o.length-1]) == -1) { // Math.floor(Math.random() * 7) + 8
                say(o);
                Wt = o;
                isSay = 1;
                break;
            }
        } // for~
        if (isSay == 0) {
            if (Mission != ""){
            Mission = "";
            KrL();
            }else{
              Kr();
            }
        }

    } else if (idx.length == 4) { // 두음법칙있음
            idx1 = idx.substr(2, 1);
            idx2 = idx.substr(0, 1);
        for (var o of words) {
            if (o.startsWith(idx1) && Overlap.indexOf(o) == -1 && o.length >= 9 && o.includes(Mission) == true  && StackPrevention.indexOf(o[o.length-1]) == -1) { //Math.floor(Math.random() * 7) + 8
                say(o);
                Wt = o;
                isSay = 1;
                break;
            }
        } // for~
        if (isSay == 0) { // idx1 없으면
            for (var o of words) {
                if (o.startsWith(idx2) && Overlap.indexOf(o) == -1 && o.length >= 9 && o.includes(Mission) == true  && StackPrevention.indexOf(o[o.length-1]) == -1) { // Math.floor(Math.random() * 7) + 8
                    say(o);
                    Wt = o;
                    isSay = 1;
                    break;
                }
            } // for~
        } // idx1m;
        if (isSay == 0) {
            if (Mission != ""){
            Mission = "";
            KrL();
            }else{
              Kr();
            }
        }
    } // 끝쪽
}; // KrL(); 끝 

function Kkt() {
    myLose = "no";
    isSay = 0;
    console.log(idx)
    idx = idx.replace("(3)", "");
    if (idx.length == 1) { // 두음법칙없음
        for (var o of words) {
            if (o.startsWith(idx) && Overlap.indexOf(o) == -1 && o.length == 3 && o.includes(Mission) == true) {
                say(o);
                Wt = o;
                isSay = 1;
                break;
            }
        } // for~
        if (isSay == 0) {
            if (Mission != ""){
            Mission = "";
            Kkt();
            }else{
            noWord(idx + ".");
            myLose = "yes";
            }
        }

    } else if (idx.length == 4) { // 두음법칙있음
idx1 = idx.substr(2, 1); idx2 = idx.substr(0, 1);
        for (var o of words) {
            if (o.startsWith(idx1) && Overlap.indexOf(o) == -1 && o.length == 3 && o.includes(Mission) == true) {
                say(o);
                Wt = o;
                isSay = 1;
                break;
            }
        } // for~
        if (isSay == 0) { // idx1 없으면
            for (var o of words) {
                if (o.startsWith(idx2) && Overlap.indexOf(o) == -1 && o.length == 3 && o.includes(Mission) == true) {
                    say(o);
                    Wt = o;
                    isSay = 1;
                    break;
                }
            } // for~
        } // idx1m;
        if (isSay == 0) {
            if (Mission != ""){
            Mission = "";
            Kkt();
            }else{
            noWord(idx + ".");
            myLose = "yes";
            }
        }
    } // 끝쪽
}; // Kkt() 끝

function KKtatt() { // ---------------------------------------------------여긴 쿵쿵따 구역이다. 착각하여 RegExp를 끝말잇기 형식으로 바꾸지 않도록.-------------
    myLose = "no";
    isSay = 0;
    chain = document.getElementsByClassName("chain")[0].innerText;
    pandan = (topic.indexOf("매너") == -1) ? hanbangkkt : new RegExp("[놈듭뀌댐칙셕괵뭄뎡쑈돝샃좆팟믓쏭앗넨댁씸엣띔껏춍끗꿋쥭츼룸눔듸슷꿔낀봅뽄뮬깁튝텬졍슘학죄늬균값틀죤룹눕벽응뺨택캅놉즈넬맑둑뇌]$");
    if (chain == "0") {
        pandan = new RegExp("[놈듭뀌댐칙셕괵뭄뎡쑈돝샃좆팟믓쏭앗넨댁씸엣띔껏춍끗꿋쥭츼룸눔듸슷꿔낀봅뽄뮬깁튝텬졍슘학죄늬균값틀죤룹눕벽응뺨택캅놉즈넬맑둑뇌]$");
    }
    console.log(idx)
    idx = idx.replace("(3)", "");
    if (idx.length == 1) { // 두음법칙없음
        for (var o of words) {
            if (o.startsWith(idx) && Overlap.indexOf(o) == -1 && o.search(pandan) != -1 && o.length == 3 && o.includes(Mission) == true) {
                say(o);
                Wt = o;
                isSay = 1;
                break;
            }
        } // for~
        if (isSay == 0) {
            if (Mission != ""){
            Mission = "";
            KKtatt();
            }else{
              Kkt();
            }
        }

    } else if (idx.length == 4) { // 두음법칙있음
            idx1 = idx.substr(2, 1);
            idx2 = idx.substr(0, 1);
        for (var o of words) {
            if (o.startsWith(idx1) && Overlap.indexOf(o) == -1 && o.search(pandan) != -1 && o.length == 3 && o.includes(Mission) == true) {
                say(o);
                Wt = o;
                isSay = 1;
                break;
            }
        } // for~
        if (isSay == 0) { // idx1 없으면
            for (var o of words) {
                if (o.startsWith(idx2) && Overlap.indexOf(o) == -1 && o.search(pandan) != -1 && o.length == 3 && o.includes(Mission) == true) {
                    say(o);
                    Wt = o;
                    isSay = 1;
                    break;
                }
            } // for~
        } // idx1m;
        if (isSay == 0) {
            if (Mission != ""){
            Mission = "";
            KKtatt();
            }else{
              Kkt();
            }
        }
    } // 끝쪽
}; // KKtatt() 끝

function KT(){
idx1 = idx.substring(0, idx.indexOf("("));
idx2 = idx.substring(idx.indexOf("(") + 1, idx.indexOf(")"));

if (idx.length < 5){

Kr();

}else{

for (var o of words){
if (o.startsWith(idx1) || o.startsWith(idx2)){
if (Overlap.indexOf(o) == -1 && o.length >= 4){
                    say(o);
                    Wt = o;
                    isSay = 1;
                    break;
}
}
} // for~
if (isSay == 0) {
            noWord(idx1 + ".");
            myLose = "yes";
}

}

}; // KT() 끝

function Kr() {
    myLose = "no";
    isSay = 0;
    idx = (idx.length >= 9) ? idx.substring(idx.length - 1, idx.length) : idx;
    if (idx.length == 1) { // 두음법칙없음
        for (var o of words) {
            if (o.startsWith(idx) && Overlap.indexOf(o) == -1 && o.includes(Mission) == true  && StackPrevention.indexOf(o[o.length-1]) == -1) {
                say(o);
                Wt = o;
                isSay = 1;
                break;
            }
        } // for~
        if (isSay == 0) {
            if (Mission != ""){
            Mission = "";
            Kr();
            }else{
            noWord(idx + ".");
            myLose = "yes";
            }
        }

    } else if (idx.length == 4) { // 두음법칙있음
            idx1 = idx.substr(2, 1);
            idx2 = idx.substr(0, 1);
        for (var o of words) {
            if (o.startsWith(idx1) && Overlap.indexOf(o) == -1 && o.includes(Mission) == true  && StackPrevention.indexOf(o[o.length-1]) == -1) {
                say(o);
                Wt = o;
                isSay = 1;
                break;
            }
        } // for~
        if (isSay == 0) { // idx1 없으면
            for (var o of words) {
                if (o.startsWith(idx2) && Overlap.indexOf(o) == -1 && o.includes(Mission) == true  && StackPrevention.indexOf(o[o.length-1]) == -1) {
                    say(o);
                    Wt = o;
                    isSay = 1;
                    break;
                }
            } // for~
        } // idx1m;
        if (isSay == 0) {
            if (Mission != ""){
            Mission = "";
            Kr();
            }else{
            noWord(idx1 + ".");
            myLose = "yes";
            }
        }
    } // 끝쪽
}; // Kr() 끝

function DanDae(){
if (DDlongver == 0){
if (document.getElementsByClassName("graph-bar")[5].innerText.substring(0, document.getElementsByClassName("graph-bar")[5].innerText.length-1) > 5.5){
 for (var o of DanDae_words) {
                if (Overlap.indexOf(o) == -1) {
                    say(o);
                    Wt = o;
                    isSay = 1;
                    break;
                }
} // for~
}else{
 for (var o of DanDae_words) {
                if (Overlap.indexOf(o) == -1) {// && o.length <= 2
                    say(o);
                    Wt = o;
                    isSay = 1;
                    break;
                }
} // for~
}
        if (isSay == 0) {
            noWord(".");
            myLose = "yes";
        }
}else if (DDlongver == 1){
 for (var o of DanDae_words) {
                if (Overlap.indexOf(o) == -1 && o.length >= 9) {
                    say(o);
                    Wt = o;
                    isSay = 1;
                    break;
                }
} // for~
        if (isSay == 0) {
            noWord(".");
            myLose = "yes";
        }
}else{


}
} //DanDae() 끝

function KrAvoid(){
if (idx.length == 1){ // 두음법칙 없다면

        for (var o of words) {
                if (o.startsWith(idx) && Overlap.indexOf(o) == -1 && o.endsWith("꾼") && ((Overlap.includes("꾼둑") && Overlap.includes("꾼둑꾼둑")) || Overlap.includes("둑신묘") == false) && StackPrevention.indexOf(o[o.length-1]) == -1){
                say(o);
                Wt = o;
                isSay = 1;
                break;
                }
                if (idx == "껌"){
                if (!(Overlap.includes("쩍쩍") && Overlap.includes("쩍하면") == false)){
                if (Overlap.includes("껌쩍") == false){
if (Math.random() * 1 > 0.5){
o = "껌쩍"
}else{
o = (Overlap.includes("껌쩍")) ? "껌쩍" : "껌쩍껌쩍";
}
}else{
o = "껌쩍껌쩍"
}
                say(o);
                Wt = o;
                isSay = 1;
                break;
                }
                }
            if (o.startsWith(idx) && Overlap.indexOf(o) == -1 && o.search(avoid) != -1  && StackPrevention.indexOf(o[o.length-1]) == -1) {
                if (idx == "늠" && LumDefs() > 0){
                o = lumF();
                say(o);
                Wt = o;
                isSay = 1;
                break;
                }else{
                say(o);
                Wt = o;
                isSay = 1;
                break;
                }
            }
        } // for~
        if (isSay == 0) {
			console.log("huh?")
        Kr();
        }


}else if (idx.length == 4){

            idx1 = idx.substr(2, 1);
            idx2 = idx.substr(0, 1);
        for (var o of words) {
                if (o.startsWith(idx1) && Overlap.indexOf(o) == -1 && o.endsWith("꾼") && ((Overlap.includes("꾼둑") && Overlap.includes("꾼둑꾼둑")) || Overlap.includes("둑신묘") == false) && StackPrevention.indexOf(o[o.length-1]) == -1){
                say(o);
                Wt = o;
                isSay = 1;
                break;
                }
            if (o.startsWith(idx1) && Overlap.indexOf(o) == -1 && o.search(avoid) != -1  && StackPrevention.indexOf(o[o.length-1]) == -1) {
                if (idx == "쩍" && Overlap.includes("쩍쩍") == false){
                o = "쩍쩍"
                say(o);
                Wt = o;
                isSay = 1;
                break;
                }
                if (idx == "늠" && LumDefs() > 0){
                o = lumF();
                say(o);
                Wt = o;
                isSay = 1;
                break;
                }else{
                say(o);
                Wt = o;
                isSay = 1;
                break;
                }
            }
        } // for~
        if (isSay == 0) { // idx1 없으면
            for (var o of words) {
                if (o.startsWith(idx2) && Overlap.indexOf(o) == -1 && o.search(avoid) != -1  && StackPrevention.indexOf(o[o.length-1]) == -1) {
                    say(o);
                    Wt = o;
                    isSay = 1;
                    break;
                }
            } // for~
        } // idx1m;
        if (isSay == 0) { 
            Kr();
        }
}

} // 끝쪽



// Ap(100)은 일반이고, Ap(0)이 장문이다. 헷갈리지 마시길
function Ap(a){

if (a == 100){
apLongVer = 0;
}else{
if (document.getElementById("nrm").checked){
apLongVer = 9;
}
}


if (idx.length == 1){ // 두음법칙 없다면
console.log(apLongVer)

        for (var o of words) {
            if (o.endsWith(idx) && Overlap.indexOf(o) == -1 && o.length >= apLongVer) {
                say(o);
                Wt = o;
                isSay = 1;
                break;
            }
        } // for~
        if (isSay == 0) {
        if (apLongVer == 9){
        apLongVer = 0;
        Ap(100);
        }
        }


}else if (idx.length == 4){
console.log(apLongVer)

            idx1 = idx.substr(2, 1);
            idx2 = idx.substr(0, 1);
        for (var o of words) {
            if (o.endsWith(endidx1) && Overlap.indexOf(o) == -1 && o.length >= apLongVer) {
                say(o);
                Wt = o;
                isSay = 1;
                break;
            }
        } // for~
        if (isSay == 0) { // idx1 없으면
            for (var o of words) {
                if (o.endsWith(endidx2) && Overlap.indexOf(o) == -1 && o.length >= apLongVer) {
                    say(o);
                    Wt = o;
                    isSay = 1;
                    break;
                }
            } // for~
        } // endidx1m;
        if (isSay == 0) { 
        if (apLongVer == 9){
        apLongVer = 0;
        Ap(100);
        }
        }
}

} // 끝쪽


function HMJE(){
for(var o of words){
                if (o.match(/[ㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊㅋㅌㅍㅎㄲㄸㅉㅃㅆ]/) == -1 && idx.substring(1,3) == cho_hangul(o) && Overlap.indexOf(o) == -1) {
                    say(o);
                    Wt = o;
                    isSay = 1;
                    break;
                }
}
if (isSay == 0) { 
            noWord(".");
            myLose = "yes";
}

} // 끝쪽




 // 아 그리고 Kkt()는 쿵쿵따, Kr()은 일반 끝말잇기 함수이니 주의하도록

function start() {
	if (!Overlap.includes("놈놈놈")){
		StackPrevention.push("놈")
	}else{
		if (StackPrevention.includes("놈")) delete StackPrevention[StackPrevention.indexOf("놈")];
	}
	
    //console.log(StackPrevention)
	            StackPrevention = StackPrevention.reduce((a, b) => {
            if (a.indexOf(b) < 0) a.push(b);
            return a;
        }, []);
    if (document.getElementById("stopm").checked){
        myTurn = "pass";
        return;
    }
    if (myTurn == "yes") {
        // ==
		if ((LumDefs() == 1 && !Overlap.includes("늠름")) || (Overlap.includes("쩍쩍") && !Overlap.includes("늠쩍"))){
StackPrevention.push("름", "늠", "룽"); 
console.log("늠름만없음 또는 늠쩍이 쩍쩍이 없어서 유리로 걸림");
	if (StackPrevention.includes("틀")) delete StackPrevention[StackPrevention.indexOf("틀")];
	if (StackPrevention.includes("행")) delete StackPrevention[StackPrevention.indexOf("행")];
	if (StackPrevention.includes("면")) delete StackPrevention[StackPrevention.indexOf("면")];
	if (StackPrevention.includes("층")) delete StackPrevention[StackPrevention.indexOf("층")];
	if (StackPrevention.includes("섯")) delete StackPrevention[StackPrevention.indexOf("섯")];
	if (StackPrevention.includes("죄")) delete StackPrevention[StackPrevention.indexOf("죄")];
	if (StackPrevention.includes("적")) delete StackPrevention[StackPrevention.indexOf("적")];
	if (StackPrevention.includes("변")) delete StackPrevention[StackPrevention.indexOf("변")];
	if (StackPrevention.includes("증")) delete StackPrevention[StackPrevention.indexOf("증")];
	if (StackPrevention.includes("윤")) delete StackPrevention[StackPrevention.indexOf("윤")];
	if (StackPrevention.includes("츠")) delete StackPrevention[StackPrevention.indexOf("츠")];
	if (StackPrevention.includes("륜")) delete StackPrevention[StackPrevention.indexOf("륜")];
	if (StackPrevention.includes("습")) delete StackPrevention[StackPrevention.indexOf("습")];
	if (StackPrevention.includes("칭")) delete StackPrevention[StackPrevention.indexOf("칭")];
	if (StackPrevention.includes("셔")) delete StackPrevention[StackPrevention.indexOf("셔")];
	if (StackPrevention.includes("형")) delete StackPrevention[StackPrevention.indexOf("형")];
	}
	if (Overlap.includes("젓딥")){
		StackPrevention.push("권");
	}
	if (Overlap.includes("꾼둑") && Overlap.includes("꾼둑꾼둑")){
		if (!Overlap.includes("묘실도굴꾼")){
			StackPrevention.push("묘");
		}
		if (!Overlap.includes("응사꾼")){
			StackPrevention.push("응");
		}
		if (!Overlap.includes("급수꾼")){
			StackPrevention.push("급");
		}
		if (!Overlap.includes("탁주꾼")){
			StackPrevention.push("탁");
		}
		if (!Overlap.includes("쟁기꾼")){
			StackPrevention.push("쟁");
		}
		StackPrevention.push("행");
		StackPrevention.push("쌈");
	}
	
	if (!Overlap.includes("읍읍") && Overlap.includes("읍륵")){
			StackPrevention.push("읍");
		}
		if (Overlap.includes("죤득죤득") && !Overlap.includes("적외선텔레비죤")){
			StackPrevention.push("적");
		}
    if (LumDefs() == 0 || (LumDefs() == 1 && !Overlap.includes("늠준") && Overlap.includes("젓딥"))){ 
		StackPrevention.push("틀", "행", "면",  "층", "섯", "죄", "적", "변", "증", "윤", "츠", "회", "륜", "습", "칭", "셔", "형");
		if (StackPrevention.includes("늠") || StackPrevention.includes("름")){
			delete StackPrevention[StackPrevention.indexOf("늠")];
			delete StackPrevention[StackPrevention.indexOf("름")];
			StackPrevention = StackPrevention.filter(
				(element, i) => element != null
			);
		}
		console.log("go");
	}	
            StackPrevention = StackPrevention.reduce((a, b) => {
            if (a.indexOf(b) < 0) a.push(b);
            return a;
        }, []);
        nextB = "0";
        idx = document.getElementsByClassName("jjo-display ellipse")[0].innerText.replaceAll("ᄀ", "ㄱ").replaceAll("ᄁ", "ㄲ").replaceAll("ᄂ", "ㄴ").replaceAll("ᄃ", "ㄷ").replaceAll("ᄄ", "ㄸ").replaceAll("ᄅ", "ㄹ").replaceAll("ᄆ", "ㅁ").replaceAll("ᄇ", "ㅂ").replaceAll("ᄉ", "ㅅ").replaceAll("ᄊ", "ㅆ").replaceAll("ᄋ", "ㅇ").replaceAll("ᄌ", "ㅈ").replaceAll("ᄍ", "ㅉ").replaceAll("ᄎ", "ㅊ").replaceAll("ᄏ", "ㅋ").replaceAll("ᄐ", "ㅌ").replaceAll("ᄑ", "ㅍ").replaceAll("ᄒ", "ㅎ");
        rT = document.getElementsByClassName("graph jjo-round-time")[0].childNodes[0].innerText.replace("초", "");
        tT = document.getElementsByClassName("graph jjo-turn-time")[0].childNodes[0].innerText.replace("초", "");
        sec2 = (rT > 5 && document.getElementById("sgam").checked == false) ? Math.random() * tT * 0.5 : null;
        sec = Math.random() * sec2 * 1000; //1 * 글자수 / 5;ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
        Mission =  (document.getElementsByClassName("items")[0].style.opacity == "1" && document.getElementById("incmis").checked) ? document.getElementsByClassName("items")[0].innerText : "";
        whatS = (location.host != "kkutu.co.kr") ? document.getElementById("Talk").value : document.getElementById("ChatBox").childNodes[1].childNodes[1].value;
        DDlongver = (document.getElementById("dd").checked && document.getElementById("nrm").checked) ? 1 : 0;
        setTimeout(function() {
            if (document.getElementById("atk").checked) {
	if (document.getElementById("kkt").checked){
                        KKtatt();
	}else{
				if (fromAvoid.includes(idx) || fromAvoid.includes(idx1)){
					KrAvoid();
				}else{
					Kratt();
				}
	}
            } else if (document.getElementById("nrm").checked) {
                        if (document.getElementById("dd").checked){
                            DanDae();
                        }else if (document.getElementById("ap").checked){
                            Ap(0);
                        }else{
                            KrL();
                        }
            } else if (document.getElementById("kkt").checked) {
                Kkt();
            } else if (document.getElementById("kall").checked) {
                KT();
            } else if (document.getElementById("dd").checked) {
                DanDae();
            } else if (document.getElementById("ap").checked) {
                Ap(100);
            } else if (document.getElementById("hmje").checked) {
                HMJE();
                    } else if (document.getElementById("atk").checked == false && document.getElementById("nrm").checked == false && document.getElementById("kkt").checked == false && document.getElementById("kall").checked == false && document.getElementById("dd").checked == false && document.getElementById("ap").checked == false && document.getElementById("hmje").checked == false) {
                        Kr();
                    }
            miss = setInterval(function() {
                if (document.getElementsByClassName("game-input")[0].style.display == "none"){
                clearInterval(miss);
                }
                if (document.getElementsByClassName("game-fail-text")[0] !== undefined && myLose == "no") { // 만약 자신이 망한턴이 아니고 틀린글자나 그런거 썼을때
                    if (document.getElementsByClassName("game-fail-text")[0].innerText.includes("한방 단어") == true){ notice(Wt + "(한방)"); console.log(Wt + "(한방)") }else{ notice(Wt); console.log(Wt) };
                    Overlap.push(Wt);
                    Overlap = Overlap.reduce((a, b) => {
                        if (a.indexOf(b) < 0) a.push(b);
                        return a;
                    }, []);
                    if (document.getElementById("atk").checked) {
	if (document.getElementById("kkt").checked){                                         
                        KKtatt();
	}else{
				if (fromAvoid.includes(idx) || fromAvoid.includes(idx1)){
					KrAvoid();
				}else{
					Kratt();
				}
	}
                    } else if (document.getElementById("nrm").checked) {
                        if (document.getElementById("dd").checked){
                            DanDae();
                        }else if (document.getElementById("ap").checked){
                            Ap(0);
                        }else{
                            KrL();
                        }
                    } else if (document.getElementById("kkt").checked) {
                        Kkt();
                    } else if (document.getElementById("kall").checked) {
                        KT();
                    } else if (document.getElementById("dd").checked) {
                        DanDae();
                    } else if (document.getElementById("ap").checked) {
                        Ap(100);
                    } else if (document.getElementById("hmje").checked) {
                        HMJE();
                    } else if (document.getElementById("atk").checked == false && document.getElementById("nrm").checked == false && document.getElementById("kkt").checked == false && document.getElementById("kall").checked == false && document.getElementById("dd").checked == false && document.getElementById("ap").checked == false && document.getElementById("hmje").checked == false) {
                        Kr();
                    }
                } else if (document.getElementsByClassName("game-fail-text")[0] === undefined) { // 아니면
                    clearInterval(miss);
                }
leftSaying(whatS);

            }, 90);
            if (isManner){
            isStack(Wt); //스택 확인
            }

        }, sec);
        // ==
    }
    return;
};

function refresharr(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

/*saying = setInterval(function(){
whatS = (location.host != "kkutu.co.kr") ? document.getElementById("Talk").value : document.getElementById("ChatBox").childNodes[1].childNodes[1].value;
leftSaying(whatS);
}, 300)*/

function shutdownf(){
clearInterval(non);
clearInterval(rooms);
clearInterval(noEQ);
}

noEQ = setInterval(function(){
document.getElementById("Middle").style.paddingTop = "0px";
});


non = setInterval(function() {

if (document.getElementsByClassName("expl expl-active")[0] !== undefined){ // 주제 뜨는게 나온다면
topic = document.getElementsByClassName("expl expl-active")[0].innerText;
}


if (document.getElementById("kkt").checked) {
document.getElementById("nrm").disabled = true;
document.getElementById("nrm").checked = false;
}else{
document.getElementById("nrm").disabled = false;
}

if (document.getElementById("kall").checked) {
document.getElementById("nrm").checked = false;
document.getElementById("nrm").disabled = true;
document.getElementById("atk").checked = false;
document.getElementById("atk").disabled = true;
document.getElementById("incmis").checked = false;
document.getElementById("incmis").disabled = true;
}else{
document.getElementById("nrm").disabled = false;
document.getElementById("atk").disabled = false;
document.getElementById("incmis").disabled = false;
}

if (document.getElementById("dd").checked) {
document.getElementById("kkt").checked = false;
document.getElementById("kkt").disabled = true;
document.getElementById("kall").checked = false;
document.getElementById("kall").disabled = true;
document.getElementById("atk").checked = false;
document.getElementById("atk").disabled = true;
document.getElementById("incmis").checked = false;
document.getElementById("incmis").disabled = true;
}else{
document.getElementById("kkt").disabled = false;
document.getElementById("kall").disabled = false;
document.getElementById("atk").disabled = false;
document.getElementById("incmis").disabled = false;
}


        if(isGameStarted == "yes" && shuffling == "possible"){
                    refresharr(words); // ---------------------------------------------------------------------------- 일반 단어 db 단어 배열 섞기
                    refresharr(DanDae_words); // ---------------------------------------------------------------------------- 단대 단어 배열 섞기
            StackPrevention = [];
               shuffling = "impossible";
        }

if (document.getElementById("autoready").checked) {
holds = false;
}else{
holds = true;
}

if (document.getElementById("mannergame").checked) {
isManner = true;
}else{
isManner = false;
}

    if (document.getElementsByClassName("room-head-mode expl-mother")[0] !== undefined) {
        topic = document.getElementsByClassName("room-head-mode expl-mother")[0].innerText;
    } else if (document.getElementsByClassName("room-head-mode")[0] !== undefined) {
        topic = document.getElementsByClassName("room-head-mode")[0].innerText;
    }

    if (document.getElementById("ResultDiag") !== null) {
        if (document.getElementById("ResultDiag").style.display == "block") {
            document.getElementById("result-ok").click();
            isGameStarted = "no";
        }
    } else {}

    if (location.host != "kkutu.co.kr") {

        if (document.getElementById("Talk").value == "|") { // 끄는거
            notice("시스템 종료");
            console.log("시스템 종료");
            shutdownf();
            document.getElementById(qna).innerHTML = Btm;
            document.getElementById("Talk").value = ""
        }
    }else if (location.host == "kkutu.co.kr") {

        if (document.getElementById("ChatBox").childNodes[1].childNodes[1].value == "|") { // 끄는거
            notice("시스템 종료");
            console.log("시스템 종료");
            shutdownf();
            document.getElementById("Footer").innerHTML = Btm;
            document.getElementById("ChatBox").childNodes[1].childNodes[1].value = ""
        }

    }



if (location.host != "kkutu.co.kr"){
if (document.getElementById("Talk").value == "="){
console.log(newWords);
document.getElementById("Talk").value = ""
}
}else if (location.host == "kkutu.co.kr"){
if(document.getElementById("ChatBox").childNodes[1].childNodes[1].value == "="){
console.log(newWords);
document.getElementById("ChatBox").childNodes[1].childNodes[1].value = ""
}
}

    if (document.getElementsByClassName("chain")[0] !== undefined) {
        if (document.getElementsByClassName("chain")[0].innerText == "0") {
            myFail = 0;
            if (document.getElementsByClassName("rounds-current")[0] !== undefined) {
                if (round != document.getElementsByClassName("rounds-current")[0].innerText) {
                    round = document.getElementsByClassName("rounds-current")[0].innerText;
                    refresharr(words); // ---------------------------------------------------------------------------- 일반 단어 db 단어 배열 섞기
                    refresharr(DanDae_words); // ---------------------------------------------------------------------------- 단대 단어 배열 섞기
                }
            }

            // console.log("cleared");
            Overlap = [];
            StackPrevention = [];
			fromAvoid = [];
        }
    }
    if (document.getElementById("SpectateBtn").style.display == "none" && document.getElementsByClassName("ellipse history-item expl-mother")[0] !== undefined) { // 시작됐으면
        isGameStarted = "yes";
        
        if (document.getElementsByClassName("ellipse history-item expl-mother")[0].innerHTML.substring(0, document.getElementsByClassName("ellipse history-item expl-mother")[0].innerHTML.indexOf("<")).length >= 9 && words.includes(document.getElementsByClassName("ellipse history-item expl-mother")[0].innerHTML.substring(0, document.getElementsByClassName("ellipse history-item expl-mother")[0].innerHTML.indexOf("<"))) == false){

            newWords.push(document.getElementsByClassName("ellipse history-item expl-mother")[0].innerHTML.substring(0, document.getElementsByClassName("ellipse history-item expl-mother")[0].innerHTML.indexOf("<")));
            newWords = newWords.reduce((a, b) => {
            if (a.indexOf(b) < 0) a.push(b);
            return a;
        }, []);
        }
        historywds = document.getElementsByClassName("ellipse history-item expl-mother")[0].innerHTML;
        Addwd = historywds.substring(0, historywds.indexOf("<"));
        Overlap.push(Addwd);
        Overlap = Overlap.reduce((a, b) => {
            if (a.indexOf(b) < 0) a.push(b);
            return a;
        }, []);
    }else{
        shuffling = "possible";
    }

        // document.getElementById("obtain-ok").click();

if (document.getElementById("game-user-" + myId) != null){
    if (document.getElementsByClassName("game-input")[0].style.display == "block") { // document.getElementById("game-user-" + myId).className == "game-user game-user-current"
        if (myTurn == "pass") {
            myTurn = "yes";
            start();
        }
    } else if (document.getElementsByClassName("game-input")[0].style.display == "none") {
        if (document.getElementById("game-user-" + myId) !== null && document.getElementById("game-user-" + myId).className == "game-user game-user-bomb") {
                myLose = "yes";
        }
        myTurn = "pass";
        return;
    }
}
});

var rooms = setInterval(function(){

        heads = document.getElementsByClassName("chat-item chat-notice")
        if ((heads[heads.length - 1].innerHTML.indexOf("모든 참여자가 준비했습니다. 30초 이내에 게임을 시작하지 않으면 자동으로 방에서 나가게 됩니다.") != -1 || isThereWait() == 0) && isGameStarted == "no") { //시작함을 알린다면
           
            document.getElementById("StartBtn").click();
            //heads[heads.length - 1].remove();
            isGameStarted = "yes";
        }

},1000);
