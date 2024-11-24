const mbtiTypes = [
  {
    id: 'VAIE',
    title: '쨍쩅히 비취는 사랑의 빛',
    description:
      '이 유형은 마치 봄날의 햇볕 같아서, 가까이 있는 것만으로도 몸과 마음을 따뜻하게 만들어 줍니다. 어떤 때는 꽤 뜨겁게 느껴질 정도로 사랑의 온도가 무척 높습니다.|**사랑과 긍휼에 있어 아주 효율이 좋습니다**. 누군가에게 연락하는 것을 어려워하지 않는 데 비해, 무척이나 열정적이고 적극적으로 사랑과 긍휼의 언어를 사용하기 때문입니다.|이들의 진가는 단순히 선제적으로 연락하는 데 그치지 않습니다. 상대방의 사정과 상황을 잘 기억하고 적재적소에 걸맞은 말들로 마음을 어루만져주는 데서 이들의 존재가 빛을 발합니다.|그렇기에 생각보다 많은 사람들이 이 유형의 사람들을 의지하고 있으며, 이들 역시 그들의 기대에 부응하기 위해 늘 사랑과 긍휼의 마음으로 살고자 노력합니다.',
  },
  {
    id: 'VAIO',
    title: '열정적인 응원단장',
    description:
      '이 유형은 누구보다도 앞장서서 몸담고 있는 모임의 구성원들이 사랑과 긍휼로 나아가도록 열정적인 자세로 응원합니다.|**이들은 관계지향적이면서도 동시에 미래지향적이기 때문에, 한 발 앞서 나가되, 혼자서만 나아가는 것은 지양합니다**. 그렇기에 다른 구성원들이 힘을 내어 함께 발맞추어 갈 수 있도록 힘을 북돋고, 할 수 있는 모든 역량을 총동원하여 그들을 돕습니다.|**격려와 권면은 이들의 특기입니다**. 속한 모임이 어떠한 목표를 가지고 나아갈 때, 한 명도 낙오되는 일이 없도록 주위를 수시로 둘러보며 적극적으로 연락하기도 합니다.',
  },
  {
    id: 'VASE',
    title: '상처 재발방지위원회',
    description:
      '만약 여러분의 마음 속 상처가 다시 재발할 것 같다면, 이 유형의 사람을 주변에서 찾아 보세요.|이 유형은 누구보다도 발달한 감각을 활용하여, 자신 주위에서 보듬어줘야 할 사람을 쉽사리 찾아내는 재주가 있습니다.|특유의 섬세하면서도 따뜻한 화법을 통해 마음을 위로해주는 데 탁월한 재능을 지니고 있습니다. 거창한 표현을 쓰지 않아도, 대단한 선물을 주지 않아도 얼마든지 충분히 마음을 어루만져 줄 수 있다는 걸 몸소 보여줍니다.|**알아차리지도 못할 만큼 선뜻 주위로 다가와 뭉근히 위로를 건네는 이들 속에서 사랑과 긍휼을 발견해 보세요**.',
  },
  {
    id: 'VASO',
    title: '다정다감한 컨설턴트',
    description:
      '어딘가 아리송한 표정을 짓고 있다면, 어느새 이 유형의 사람들이 다가와 말을 걸어올 겁니다. **이들의 언어에는 벅찬 희망과 미래를 향한 행복이 한 가득 담겨 있어서, 그것들을 사람들에게 나눠주기를 즐거워합니다**.|스스로가 생각하는 사랑이 무엇인지, 긍휼이 무엇인지 함께 나누고 교제하는 시간을 즐깁니다.|하지만 이들은 여기서 그치지 않습니다. 구체적으로 어떤 방법으로 사랑과 긍휼을 삶 속에 녹여낼지 함께 고민하지요. 이들과 찬찬히 대화를 나누다 보면 어느새 사랑과 긍휼의 청사진을 그리고 있는 스스로의 모습을 발견할 수 있을 겁니다.',
  },
  {
    id: 'DAIE',
    title: '사랑 가득 페이스메이커',
    description:
      '사랑과 긍휼은 앞서 나가는 것만이 능사가 아닙니다. 이 유형의 사람들은 이 사실을 누구보다도 잘 알고 있지요. 이들은 넘치는 열정을 원동력 삼아 다른 이들이 지치지 않도록 계속해서 에너지를 공급합니다.|중요한 점은, 결코 말로만 하지 않는다는 겁니다. 삶에서 현장에서 함께하면서 솔선수범 사랑과 긍휼을 베푸는 모습을 보여줌으로써, 동역자가 적정한 페이스를 유지해 나갈 수 있도록 희생하며 도와주는 역할을 자처합니다.|**이들은 열 마디 말보다, 대개는, 함께 있어주는 짧은 시간이 더 많은 힘을 전해준다는 사실을 참 잘 알고 있으며, 또한 잘 실천하고 있습니다**.',
  },
  {
    id: 'DAIO',
    title: '멈춤 없이 달려가는 무한동력',
    description:
      '‘비전’, ‘꿈’, ‘소망’… 이 유형의 사람들이 자주 언급하거나 중요시 여기는 가치들입니다.|이들은 뜨거운 가슴을 가지고 미래를 향한 무한한 소망 아래, 잠시도 멈추지 않고 늘 더 나은 삶을 향해 달려 나갑니다.|때로 마음이 꺾이지 않느냐고요? 그럴 리가요. 아마 이들만큼 심지가 굳은 사람들도 없을 겁니다. 일단 한 번 목표를 삼았다면 거기 도달할 때까지는 아무런 주저함이 없습니다.|**그러니 아무런 걱정 말고 함께 마음을 모아 사랑과 긍휼을 향해 같이 달려 주기만 해 주세요**.|이들에게 가장 괴로운 건, 아무것도 하지 않은 채 가만히 멈춰 있는 것이랍니다.',
  },
  {
    id: 'DASE',
    title: '모범답안지',
    description:
      '어디서부터 어떻게 풀어야 할지 막막한 문제를 눈 앞에 두고 있나요? 그렇다면 이 유형의 사람을 찾아 보세요.|아무리 어려운 문제라도 반드시 답이 있습니다. 이들은 이 사실을 무척이나 잘 알고 있으며, 더군다나 답을 찾아내는 능력이 무척이나 뛰어나기까지 합니다.|이들은 지극히 섬세한 삶의 태도로 사랑과 긍휼을 발현하며, 마치 모범답안 같은 면모를 자주 보여줍니다. 사랑과 긍휼의 원칙에서 한 치도 벗어나지 않는 정교한 삶의 모습은, 지켜보는 이들로 하여금 부드러운 카리스마를 느끼게 합니다.|중요한 건 이들은 다른 이들에게 자신과 같은 높은 수준의 삶을 강요하지는 않는다는 겁니다. **그저 자신의 자리를 온전히 지키며 타의 모범이 되길 바라는 마음뿐입니다**.',
  },
  {
    id: 'DASO',
    title: '살아있는 소확행',
    description:
      '‘소확행’이라는 말을 아시나요? ‘담백하지만 확실한 행복’이라는 뜻입니다. 정말이지 이 유형의 사람들을 가장 잘 표현하는 말이라고 할 수 있겠습니다.|남들과는 다른 시선으로 세상을 바라보며, 새로운 시각에서 일상 속 숨어 있는 사랑과 긍휼, 그리고 행복을 찾아내는 재주가 있습니다. 이들과 함께라면 삶 속에서 참 아름다운 것들을 많이 마주치게 될 거예요.|잔잔한 호수에 작은 조약돌 하나를 던지면 파문이 일어나듯, **이들의 행복한 시선이 여러분들의 마음에 사랑과 긍휼이 파문처럼 번져나가게 할 겁니다**.',
  },
  {
    id: 'VRIE',
    title: '긍휼한 오답노트',
    description:
      '무언가를 잘 기억한다는 건 마냥 좋기만 한 건 아닙니다. 하지만 이들만큼은 예외죠.|빼어난 기억력을 바탕으로 과거 있었던 일들이 옳고 그름을 분명하게 알고 있지만, 누군가를 비난하거나 탓하는 데 에너지를 쓰는 일이 없거든요.|오히려 긍휼한 마음으로 과거의 실수를 보듬어주며 더 선한 삶을 살아갈 수 있도록 이끌어주고 깨우쳐주는 데 많은 에너지를 쏟는 유형입니다. 이들과 함께라면 같은 잘못을 두 번 반복하는 일은 아마 잘 없을 거예요.|**옆에서 오답노트처럼, 하지만 긍휼한 마음을 품고, 여러분들을 응원하는 데 많은 보람을 느낄 거랍니다**.',
  },
  {
    id: 'VRIO',
    title: '사랑의 네비게이션',
    description:
      '이 유형의 사람들은 남들 앞에 나서서 방향을 제시하거나, 이끄는 일을 어려워하는 경향이 있습니다.|다만 관심이 없지는 않습니다. 언제나 마음 속 한 구석에는 저마다 몸 담고 있는 모임이 앞으로 나아가야 할 길에 대한 청사진을 그리고 있다는 점이 이들의 특징입니다.|모임을 향한 숨겨진 열정이 아주 뜨겁기 때문에, **아주 작은 일을 맡더라도 아주 열정적으로 충실히 감당하는 모습을 확인할 수 있습니다**.',
  },
  {
    id: 'VRSE',
    title: '베일 뒤에 감춰진 중재자',
    description:
      '있는 듯, 없는 듯 하지만 막상 정말로 있다가 없으면 큰일나는 유형입니다.|남들이 알게 모르게 많은 일들을 감당하고 있으며, 특히 앞에 나서는 일 없이 사람들을 위로하고 힘 주는 데 탁월함을 보입니다.|정작 본인은 잘 모르고 있을 수도 있겠지만, 대개의 경우 상당히 많은 사람들이 심리적으로 이 유형의 사람을 의지하고 있는 것을 심심치 않게 찾아볼 수 있습니다.|**작지만 확실한 울림이 있는 단어와 문장들로 사람의 마음을 따뜻하게 위로할 줄 아는 이들은, 모임에 결코 없어서는 안 될 윤활유 같은 존재라고 할 수 있겠네요**.',
  },
  {
    id: 'VRSO',
    title: '더 사랑스러운 미래를 꿈꾸는 몽상가',
    description:
      '이들과 대화를 하다 보면 다소 터무니없고 현실성 없는 말들을 늘어놓는 것 같다고 느껴질 때가 있습니다.|해맑은 얼굴로, 또는 무척 진지한 얼굴로 말도 안 되는 이야기를 끝없이 풀어놓는 스타일이죠. 그러나 정말이지 이런 사람이 없어서는 안 된다고 할 수 있겠습니다.|모두가 현실만 직시하면서 적당히 타협하는 사랑과 긍휼의 삶을 살아가려고 할 때, **이들과 같이 순수하게 그리고 이상적인 사랑과 긍휼의 태도를 일깨워주는 역할이 꼭 필요합니다**.|때묻지 않은 맑은 열정은 주변 사람들을 감화 그리고 변화시키기 마련이거든요.',
  },
  {
    id: 'DRIE',
    title: '든든한 후방지원군',
    description:
      '이들은 공명심이 없습니다. 자신의 업적을 자랑하지도 않습니다.|**그저 사랑하고 긍휼한 마음으로, 잘 보이지 않는 곳에서, 리더를 돕고 주위 사람들을 돕는 데 탁월함을 발휘하는 사람들입니다**. 남부럽지 않은 뜨거운 열정을 갖고 있으면서도, 마음만 앞서는 일 없이 순리에 맞게 도움의 손길을 내밀 줄 아는 사람들입니다.|리더의 입장에서는 이들과 같은 사람이 모임에 많다면 그렇게 든든할 수가 없습니다.|방향을 제시하는 것만으로도 각자의 역할을 생각해 내고, 일사불란하게 움직이는 모습을 보고 있노라면 저도 모르게 힘을 얻기 마련이거든요.',
  },
  {
    id: 'DRIO',
    title: '팽팽히 당겨진 활시위',
    description:
      '365일 24시간 사랑과 긍휼을 베풀 준비가 되어 있는 사람들이 있습니다.|마음 속 품고 있는 열정이 너무도 크고 뜨거워서 이를 발산하지 않고는 견디기 어려운 사람들이 있습니다. 이들은 그래서 기회가 될 때마다, 적당한 때와 장소를 만날 때마다 지체 없이 사랑과 긍휼의 말과 행동을 마음껏 쏟아냅니다.|숙련된 명사수가 목표를 포착함과 동시에, 팽팽히 당겨진 활시위를 놓아 준비된 화살을 쏘아버리듯, 이들이 품고 있는 사랑과 긍휼의 태도가 그러합니다.|그러니 당황하지 마세요. 아주 가끔은 부담스럽다고 느껴질 때도 있지만, **그건 다른 이유에서가 아니라 사랑과 긍휼이 넘쳐 흐르기 때문인 걸요**.',
  },
  {
    id: 'DRSE',
    title: '사랑의 가랑비',
    description:
      '이들은 평소에는 대단한 영향력을 발휘하지 않는 것처럼 보입니다. 존재감이 그다지 선명하지 않을 때도 있지요.|그러나 그렇다고 해서 이들이 가진 사랑과 긍휼의 크기가 작은 건 아닙니다. **이들은 이들만이 할 수 있는 방법으로, 천천히 그러나 확실하게 주위 사람들에게 사랑과 긍휼의 마음을 스며들게 합니다**.|마치 가랑비에 옷 젖는 걸 알아차리기 힘들 듯, 이들을 가까이 한다면 나도 모르게 어느 새 조금 더 사랑과 긍휼의 태도로 변해버린 스스로의 모습을 발견할 수 있을 거예요.',
  },
  {
    id: 'DRSO',
    title: '천리 길을 위해 내딛는 한 걸음',
    description:
      '열정적인 사람들이 보기에 이 사람들은 다소 답답해 보일 수도 있습니다.|**그러나 느릿하지만 꾸준히 목표를 향해 나아가는 이들 특유의 저력이 있답니다**.|이들은 사랑과 긍휼의 목표를 설정함에 있어서 참 신중하기 때문에, 꽤 오랜 고민의 시간을 거칩니다. 그러나 그 시간이 지나고 나면 중간에 멈추는 일 없이 꾸준히 한 걸음씩 목표를 향해 나아갑니다.|상당한 고민 끝에 세운 목표이기 때문일까요, 이들은 대개 방황하는 일 없이 우직하게 한 길만 걷습니다. 그렇기에 때로는 이리로 저리로 흔들리는 이들보다 더 빨리 목적지에 도달하는 멋진 모습을 보여주기도 한답니다.',
  },
]

export default mbtiTypes
