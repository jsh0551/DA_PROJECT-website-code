//      {name:'a', value:0, key:0},
//     {name:'b', value:0, key:1},
//     {name:'c', value:0, key:2},
//     {name:'d', value:0, key:3},
const qnaList = [
    {q : '성별을 골라주세요.',
    a : [
        {
            answer : '남성',
            score : 1.0
        },
        {
            answer : '여성',
            score : 2.0
        }
    ]
    },
    {q : '연령대를 골라주세요.',
    a : [
        {
            answer : '10대',
            score : 1.0
        },
        {
            answer : '20대',
            score : 2.0
        },
        {
            answer : '30대',
            score : 3.0
        },
        {
            answer : '40대',
            score : 4.0
        }
    ]
    },
    {q : '1. 상쾌한 하루의 시작!<br>이제 곧 출발해야 하는데,<br>내가 주로 이용하는 대중교통은?',
    a : [
        {
            answer : '대중교통 (버스나 지하철)',
            score : 8.0
        },
        {
            answer : '자차',
            score : 1.5
        },
        {
            answer : '카풀',
            score : 3.5
        },
        {
            answer : '자전거 혹은 도보 이용',
            score : 10.0
        },
    ]
    },
    {q : '1_1_2. 역시 편한 게 최고지.<br>내 소중한 자동차가 연료로 사용하는 것은?',
    a : [
        {
            answer : '휘발유',
            score : 1.0
        },
        {
            answer : '경유',
            score : 0.5
        },
        {
            answer : 'LPG',
            score : 1.5
        },
        {
            answer : '전기차',
            score : 2.0
        },
    ]
    },
    {q : '1_2. 출발할 생각을 했더니 벌써 힘드네.<br>집에서 학교/회사까지 걸리는 시간은?',
    a : [
        {
            answer : '30분 이내',
            score : 2.0
        },
        {
            answer : '30분에서 1시간 사이',
            score : 1.0
        },
        {
            answer : '1시간에서 2시간 사이',
            score : 0.5
        },
        {
            answer : '2시간 이상',
            score : 0.2
        }
    ]
    },
    {q : '2. 열심히 일하고 나니까 벌써 점심 시간!<br>점심 시간의 컴퓨터 상태는?',
    a : [
        {
            answer : '일반 모드',
            score : 0.0
        },
        {
            answer : '절전 모드',
            score : 1.0
        },
        {
            answer : '전원 끔',
            score : 2.0
        },
    ]
    },
    {q : '3. 점심 시간이 벌써 끝나간다니...<br>믿을 수 없어도 커피는 마셔야지<br>하루에 나는 커피를?',
    a : [
        {
            answer : '마시지 않는다',
            score : 5.0
        },
        {
            answer : '1잔',
            score : 3.0
        },
        {
            answer : '2잔',
            score : 1.5
        },
        {
            answer : '3잔 이상',
            score : 0.0
        }
    ]
    },
    {q : '3_2. 역시 점심 후에는 커피지.<br>커피 마실 때 나의 컵 선택지는?',
    a : [
        {
            answer : '일회용 컵 사용',
            score : 0.0
        },
        {
            answer : '텀블러 사용',
            score : 5.0
        },
        {
            answer : '매장에서 다회용 컵 사용',
            score : 5.0
        }
    ]
    },
    {q : '4. 드디어 퇴근!<br>힘든 하루 끝 내가 선택하는 저녁은 주로?<br>',
    a : [
        {
            answer : '배달',
            score : 0.0
        },
        {
            answer : '포장',
            score : 5.0
        },
        {
            answer : '직접 요리',
            score : 5.0
        }
    ]
    },
    {q : '4_1_1. 일하고 힘든데 저녁 차릴 힘이 어딨어.<br>내가 배달을 시키는 횟수는?',
    a : [
        {
            answer : '주 5회 이상',
            score : 0.0
        },
        {
            answer : '주 3회 이상',
            score : 1.5
        },
        {
            answer : '주 1회 이상',
            score : 3.0
        }
    ]
    },
    {q : '4_1_2. 그래도 내가 만든 음식이 제일 맛있지!<br>밥이 조금 남았는데 나는 이걸?',
    a : [
        {
            answer : '보온 상태로 보관',
            score : 0.0
        },
        {
            answer : '소분해서 냉장고에 보관',
            score : 1.0
        },
        {
            answer : '전 밥이 안 남아요',
            score : 2.0
        }
    ]
    },
    {q : '4_2. 밥은 맛있는 걸로 먹어야지.<br>메뉴 중에서 먹고싶은 음식의 갯수는?<br>※메뉴 : 소고기,돼지고기,닭고기,양고기,치즈',
    a : [
        {
            answer : '4개 이상',
            score : 0.0
        },
        {
            answer : '3개 이상',
            score : 1.0
        },
        {
            answer : '2개 이상',
            score : 2.0
        },
        {
            answer : '1개 이상',
            score : 3.0
        },
        {
            answer : '먹고 싶은 메뉴가 없어요',
            score : 5.0
        }
    ]
    },
    {q : '5. 옷들을 깨끗하게 해주자! <br>일주일 간 나의 세탁 횟수는?',
    a : [
        {
            answer : '주 7회(매일)',
            score : 0.0
        },
        {
            answer : '주 5-6회',
            score : 1.0
        },
        {
            answer : '주 3-4회',
            score : 2.0
        },
        {
            answer : '주 1-2회',
            score : 4.0
        }
    ]
    },
    {q : '5_2. 세탁 시 내가 선택하는 물 온도는?<br>',
    a : [
        {
            answer : '찬물',
            score : 2.0
        },
        {
            answer : '기본 설정값',
            score : 0.0
        },
        {
            answer : '찬물 & 따뜻한 물 혼합',
            score : 1.0
        }
    ]
    },
    {q : '5_3. 세탁 끝! 이제 건조해야지.<br>나의 건조 선택은?',
    a : [
        {
            answer : '건조기 사용',
            score : 0.0
        },
        {
            answer : '자연 건조',
            score : 2.0
        }
    ]
    },
    {q : '6. 드디어 자유 시간!<br>이렇게 늦게서야 자유 시간을 가질 수 있는 게 맞는건가요? <br>그래도 이메일은 체크하고 자야지..<br>나는 이메일을 주기적으로?',
    a : [
        {
            answer : '지우지 않는다',
            score : 0.0
        },
        {
            answer : '매일 지운다',
            score : 5.0
        },
        {
            answer : '한 달에 한 번 이상은 지운다',
            score : 3.0
        },
        {
            answer : '일 년에 한 번 이상은 지운다',
            score : 1.5
        }
    ]
    },
    {q : '6_2. 이제 내가 좋아하는 콘텐츠 보고 자야지!<br>내가 하루에 유튜브 or 넷플릭스를 시청하는 시간은? <br>',
    a : [
        {
            answer : '시청하지 않는다',
            score : 5.0
        },
        {
            answer : '30분 미만',
            score : 4.0
        },
        {
            answer : '30분에서 1시간 사이 ',
            score : 3.0
        },
        {
            answer : '1시간에서 2시간 사이 ',
            score : 2.0
        },
        {
            answer : '2시간 이상 ',
            score : 0.0
        }
    ]
    }
]


const best_img = ['trans_high','laundary_high','elec_high','coffee_high','deli_high'];
const worst_img = ['trans_low','laundary_low','elec_low','coffee_low','deli_low'];

const resultList = [
    {worst : 'trans_high',
    best : 'trans_low',
    worst_text : '우리 액히, <span style="color:#DF6D5A;font-weight: bold;">스모커</span> 옵하가 차 태워줄게~ 오빠가 맨날 타고 다니는 애마야<br>'
    +'( ͡° ͜ʖ ͡°)<br><br>'
    +'드라이브하다 들었는데 1km 당 약 150g의 이산화탄소가 배출된다더라? 연간 사용하면 2,000Kg!?<br><br>'
    +'2,000kg의 무게를 짊어진 오빠랑 드라이브 어때 베이비? 액히도 오빠랑 같은 타입인 줄 알았는데 오늘은 대중교통 이용한다고?!',
    best_text : '안녕! 나는 활동적인 <span style="color:#3A66DF;font-weight: bold;">워커</span>야!<br>'
    +'걷거나 대중교통 타도 충분히 괜찮거든. 너도 그런가보구나!<br><br>'
    +'돈 아끼고 건강도 챙기고 이산화탄소 배출도 줄일 수 있지! 매일 자동차를 타고 다니면 2,000Kg의 이산화탄소가 배출된다고 해. 그걸 흡수하려면 소나무가 740그루나 필요하다더라..<br><br>'
    +'내 친구는 카풀로 출근하더라! 그것도 좋은 것 같아. 다음에도 나랑 꼭 만날 수 있길 빌게. 그럼 나는 출근하러 가볼게!'},
    {worst : 'laundary_high',
    best : 'laundary_low',
    worst_text : '안녕, 나는 세탁을 많이 하는 <span style="color:#DF6D5A;font-weight: bold;">라니</span>라고해! 너도 세탁을 자주 하는구나, 반가워!<br><br>'
    +'근데 그거 알아? 주 5회 세탁 시 평균적으로 연간 372Kg의 이산화탄소가 배출된다고 해. 그걸 흡수하려면 무려 138그루의 소나무가 필요하다는 데 너무 충격적인 거 있지 ㅠㅠ.<br><br>'
    +'우리 같이 줄여보는 거 어떨까? 같이 한다면 충분히 할 수 있을 거야. 세탁기 설정을 찬물로 하는 센스까지 곁들이면 우리 지구는 더 행복해질 수 있다구! 그럼 나중에 또 보자',
    best_text : '세탁에 크게 신경을 쓰지말자~ 안녕! 나는 <span style="color:#3A66DF;font-weight: bold;">라퓨</span>야!<br><br>'
    +'일주일에 5번 세탁하는 사람들은 1년에 372kg의 이산화탄소를 배출한다던데, 그걸 흡수하려면 61 그루의 소나무가 필요하대. 우리는 적어도 30그루의 소나무를 살린거야!<br><br>'
    +'지구를 구하느라 고생이 많아. 앞으로 지금처럼 환경을 위해 노력해보자, 화이팅!!'
    },
    {worst : 'elec_high',
    best : 'elec_low',
    worst_text : '으윽! 안녕하세요. 저는 <span style="color:#DF6D5A;font-weight: bold;">일렉토</span>예요.<br>친구들이 전기사용을 줄여라고해서 머리가 지끈.. 그래서 전기에 굉장히 예민해졌어요.<br><br>'
    +'친구들이 안쓰는 코드는 바로 뽑고, 컴퓨터 사용하지 않을 땐 절전 모드를 하라네요. 이메일 하나에 4g의 이산화탄소가 배출된다는 것도 알려줬어요!<br><br>'
    +'후우.. 이제부터 이런 사소한 습관을 고쳐나갈 거예요.. 으악! 또 안쓰는 코드가 꼽혀있네요! 그럼 이만!',
    best_text : '안녕? 나는 <span style="color:#3A66DF;font-weight: bold;">오펠</span>이라고 해.<br>보아하니 나랑 같은 유형인 듯 하네~ 나는 전기 사용을 줄이기 위해 엄청 노력하고 있어.<br><br>'
    +'컴퓨터를 사용하지 않을 땐 절전 모드로 변경하고 이메일을 가능하면 비워두어야 해. 그리고 카톡으로 사진이나 영상을 매번 보내지말고, 공유 버튼을 눌러서 보내면 전기 사용을 줄일 수 있지.<br><br>'
    +'나는 태양열 자동차로 전기 사용을 엄청 줄일거야. 너도 그러길 바래!  나는 일 때문에 바빠서 먼저 가볼게~'},
    {worst : 'coffee_high',
    best : 'coffee_low',
    worst_text : '우와! 반가워! 나는 <span style="color:#DF6D5A;font-weight: bold;">샤카</span>라고 해. 커피를 엄청 좋아하지 히히.<br><br>'
    +'참! 얼마 전, 친구랑 카페를 갔는데 나한테 텀블러 사용하냐는거야. 플라스틱 컵 하나에 602g의 이산화탄소가 배출된다 하더라고. 연간으로는 219Kg! 나 이산화탄소에 깔려죽겠는데?<br><br>'
    +'그래서 나도 이젠 텀블러를 사용하려고. 우리 같이 텀블러 사용하며 카페에서 데이트 어때요? (플러팅 중)',
    best_text : '안녕하세요, 저는 대리 <span style="color:#3A66DF;font-weight: bold;">디카</span>입니다. 디카페인만 마셨지만 대리까지 올라간 엘리트죠.<br><br>'
    +'저는 텀블러를 주로 이용하는데요, 이 엘리트가 설명해보자면 플라스틱 컵 하나에 602g의 이산화탄소가 배출됩니다. 연간으로 하면 219Kg라는 엄청난 수치! 그걸 흡수하려면 81그루의 소나무가 필요하다고 합니다.<br><br>'    
    +'하지만 여러분은 이미 잘 하고 있는 것 같으니, 주말에 나무 심으러 가는 건 없던 일로 하죠. 그럼 부장님이 부르셔서 이만..'},
    {worst : 'deli_high',
    best : 'deli_low',
    worst_text : '안녕! 내 소개를 잠깐하자면 나는 배달 음식을 좋아하는 <span style="color:#DF6D5A;font-weight: bold;">델리버</span>얍.<br><br>'
    +'오늘 열심히 일했으니 맛있는 음식을 먹어야겠지? 근데 한편으로는 이산화탄소가 너무 많이 배출되는 것 같아 걱정되넵. 주 3회 배달하면 연간 52.88kg 만큼의 이산화탄소가 배출된다하더라곱!<br><br>'
    +'일단 오늘은 먹고, 다음 주에는 배달음식을 줄여봐야겠업 ㅎㅎㅎ',
    best_text : '안녕하세요, 집에서 요리하는 요리사 <span style="color:#3A66DF;font-weight: bold;">홈디</span>예요!<br><br>'
    +'주 3회 배달을 시키면 연간 52kg의 이산화탄소가 배출된다고 해요. 집에서 요리하는 우리는 지구와 우리의 건강 모두를 지키는 건강 수호대!<br><br>'
    +'지구가 나를 지키고, 내가 지구를 지키는 우리 사이, 영원하자 :)'}
]
