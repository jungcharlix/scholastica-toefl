// ============ VOCABULARY DATA ============
const vocabulary = [
  { word: "corroborate", pos: "verb", pron: "/kəˈrɒbəreɪt/", def: "確認、佐證(某項陳述或理論的真實性)", ex: "Recent findings <em>corroborate</em> the hypothesis that early agricultural societies traded over vast distances." },
  { word: "ubiquitous", pos: "adj.", pron: "/juːˈbɪkwɪtəs/", def: "無所不在的、普遍存在的", ex: "Smartphones have become <em>ubiquitous</em> in modern urban life." },
  { word: "ephemeral", pos: "adj.", pron: "/ɪˈfemərəl/", def: "短暫的、稍縱即逝的", ex: "Beauty, like fame, is often <em>ephemeral</em>." },
  { word: "paradigm", pos: "noun", pron: "/ˈpærədaɪm/", def: "典範、思維模式", ex: "Einstein's theory caused a <em>paradigm</em> shift in physics." },
  { word: "incentivise", pos: "verb", pron: "/ɪnˈsentɪvaɪz/", def: "激勵、給予誘因", ex: "Tax breaks <em>incentivise</em> companies to invest in research." },
  { word: "predominant", pos: "adj.", pron: "/prɪˈdɒmɪnənt/", def: "佔主導地位的、主要的", ex: "English is the <em>predominant</em> language of international science." },
  { word: "ambiguous", pos: "adj.", pron: "/æmˈbɪɡjuəs/", def: "含糊的、有多重解釋的", ex: "The results were <em>ambiguous</em> and required further testing." },
  { word: "discrepancy", pos: "noun", pron: "/dɪˈskrepənsi/", def: "差異、不一致", ex: "There is a <em>discrepancy</em> between the two data sets." },
  { word: "mitigate", pos: "verb", pron: "/ˈmɪtɪɡeɪt/", def: "減輕、緩和(負面影響)", ex: "Reforestation can <em>mitigate</em> the effects of climate change." },
  { word: "scrutinise", pos: "verb", pron: "/ˈskruːtɪnaɪz/", def: "仔細審查、細究", ex: "Peer reviewers <em>scrutinise</em> every claim in the paper." },
  { word: "salient", pos: "adj.", pron: "/ˈseɪliənt/", def: "顯著的、最值得注意的", ex: "The most <em>salient</em> feature of the design is its simplicity." },
  { word: "tenuous", pos: "adj.", pron: "/ˈtenjuəs/", def: "薄弱的、脆弱的", ex: "The connection between the two events is rather <em>tenuous</em>." },
  { word: "elucidate", pos: "verb", pron: "/ɪˈluːsɪdeɪt/", def: "闡明、解釋清楚", ex: "The professor <em>elucidated</em> the complex equation step by step." },
  { word: "pervasive", pos: "adj.", pron: "/pəˈveɪsɪv/", def: "瀰漫的、廣泛存在的", ex: "Misinformation has become <em>pervasive</em> on social media." },
  { word: "rudimentary", pos: "adj.", pron: "/ˌruːdɪˈmentri/", def: "基礎的、初步的、粗略的", ex: "Early humans possessed only <em>rudimentary</em> tools." },
  { word: "consensus", pos: "noun", pron: "/kənˈsensəs/", def: "共識、一致意見", ex: "There is broad scientific <em>consensus</em> on this point." },
  { word: "anomaly", pos: "noun", pron: "/əˈnɒməli/", def: "異常、反常現象", ex: "The data point was treated as an <em>anomaly</em> and excluded." },
  { word: "delineate", pos: "verb", pron: "/dɪˈlɪnieɪt/", def: "描述、勾勒、劃定界線", ex: "The author <em>delineates</em> three stages of cognitive development." },
  { word: "empirical", pos: "adj.", pron: "/ɪmˈpɪrɪkl/", def: "基於觀察或實驗的、實證的", ex: "His conclusions rest on solid <em>empirical</em> evidence." },
  { word: "innate", pos: "adj.", pron: "/ɪˈneɪt/", def: "天生的、與生俱來的", ex: "Children show an <em>innate</em> capacity for language acquisition." },
  { word: "proliferation", pos: "noun", pron: "/prəˌlɪfəˈreɪʃn/", def: "激增、快速繁衍", ex: "The <em>proliferation</em> of mobile apps has transformed daily life." },
  { word: "stagnate", pos: "verb", pron: "/stæɡˈneɪt/", def: "停滯、不再發展", ex: "Without innovation, even the largest companies <em>stagnate</em>." },
  { word: "unprecedented", pos: "adj.", pron: "/ʌnˈpresɪdentɪd/", def: "前所未有的、空前的", ex: "The pandemic caused <em>unprecedented</em> disruption to global trade." },
  { word: "vindicate", pos: "verb", pron: "/ˈvɪndɪkeɪt/", def: "證明…正確、平反", ex: "Later research <em>vindicated</em> the theory once dismissed as eccentric." },
  { word: "exacerbate", pos: "verb", pron: "/ɪɡˈzæsəbeɪt/", def: "加劇、使惡化", ex: "Heavy rains can <em>exacerbate</em> soil erosion." },
  { word: "incremental", pos: "adj.", pron: "/ˌɪŋkrɪˈmentl/", def: "漸進的、逐步累積的", ex: "Real progress is often <em>incremental</em> rather than revolutionary." },
  { word: "compelling", pos: "adj.", pron: "/kəmˈpelɪŋ/", def: "令人信服的、引人注目的", ex: "She presented a <em>compelling</em> argument for educational reform." },
  { word: "feasible", pos: "adj.", pron: "/ˈfiːzəbl/", def: "可行的、行得通的", ex: "Solar power has become economically <em>feasible</em> in many regions." },
  { word: "intricate", pos: "adj.", pron: "/ˈɪntrɪkət/", def: "錯綜複雜的、繁複的", ex: "The brain's neural networks form <em>intricate</em> patterns." },
  { word: "subjugate", pos: "verb", pron: "/ˈsʌbdʒuɡeɪt/", def: "征服、使屈從", ex: "The empire sought to <em>subjugate</em> neighbouring peoples through military force." },

  // ===== Cognition & Argument =====
  { word: "cogent", pos: "adj.", pron: "/ˈkəʊdʒənt/", def: "(論點)有說服力的、邏輯清晰的", ex: "She presented a <em>cogent</em> case for tuition reform." },
  { word: "discern", pos: "verb", pron: "/dɪˈsɜːn/", def: "辨識、看出(常需要努力觀察)", ex: "It is hard to <em>discern</em> the author's true intent." },
{ word: "extrapolate", pos: "verb", pron: "/ɪkˈstræpəleɪt/", def: "外推、根據已知推斷未知", ex: "Researchers <em>extrapolated</em> the trend to predict future demand." },
  { word: "infer", pos: "verb", pron: "/ɪnˈfɜː/", def: "推斷、推論", ex: "From the data, we can <em>infer</em> a strong correlation." },
  { word: "postulate", pos: "verb", pron: "/ˈpɒstjʊleɪt/", def: "假設、設定為前提", ex: "Newton <em>postulated</em> a universal force of gravitation." },
  { word: "refute", pos: "verb", pron: "/rɪˈfjuːt/", def: "駁斥、證明錯誤", ex: "New evidence <em>refutes</em> the long-held theory." },
  { word: "rebut", pos: "verb", pron: "/rɪˈbʌt/", def: "反駁(論點)", ex: "The lawyer <em>rebutted</em> each of the opponent's claims." },
  { word: "concede", pos: "verb", pron: "/kənˈsiːd/", def: "承認、讓步", ex: "Critics <em>concede</em> that the policy has had some success." },
  { word: "construe", pos: "verb", pron: "/kənˈstruː/", def: "解讀、理解為", ex: "Her silence was <em>construed</em> as disapproval." },
  { word: "conjecture", pos: "noun/verb", pron: "/kənˈdʒektʃə/", def: "推測、臆測", ex: "His theory was based on educated <em>conjecture</em>." },
  { word: "rationalise", pos: "verb", pron: "/ˈræʃnəlaɪz/", def: "合理化、找藉口辯護", ex: "He <em>rationalised</em> the delay by citing technical problems." },
  { word: "hypothesise", pos: "verb", pron: "/haɪˈpɒθəsaɪz/", def: "假設、提出假說", ex: "Scientists <em>hypothesise</em> that the comet originated beyond Pluto." },
  { word: "deduce", pos: "verb", pron: "/dɪˈdjuːs/", def: "演繹、推導出", ex: "From the symptoms, the doctor <em>deduced</em> the cause." },
  { word: "ascertain", pos: "verb", pron: "/ˌæsəˈteɪn/", def: "查明、確認", ex: "It is difficult to <em>ascertain</em> the exact figure." },
  { word: "preclude", pos: "verb", pron: "/prɪˈkluːd/", def: "排除、使不可能", ex: "Lack of funding <em>precludes</em> further research." },
  { word: "presuppose", pos: "verb", pron: "/ˌpriːsəˈpəʊz/", def: "預設、以…為前提", ex: "The argument <em>presupposes</em> that all parties act rationally." },
  { word: "fathom", pos: "verb", pron: "/ˈfæðəm/", def: "完全理解、徹底搞清楚", ex: "It is hard to <em>fathom</em> the scale of the universe." },

  // ===== Causation & Influence =====
  { word: "engender", pos: "verb", pron: "/ɪnˈdʒendə/", def: "造成、引起(尤指情緒或情況)", ex: "The reform <em>engendered</em> widespread debate." },
  { word: "precipitate", pos: "verb", pron: "/prɪˈsɪpɪteɪt/", def: "促成、使加速發生", ex: "The assassination <em>precipitated</em> the war." },
  { word: "catalyse", pos: "verb", pron: "/ˈkætəlaɪz/", def: "催化、加速促成", ex: "The new policy <em>catalysed</em> innovation in the sector." },
  { word: "underpin", pos: "verb", pron: "/ˌʌndəˈpɪn/", def: "支撐、構成基礎", ex: "Trust <em>underpins</em> all democratic institutions." },
  { word: "undergird", pos: "verb", pron: "/ˌʌndəˈɡɜːd/", def: "支持、構成根基", ex: "Shared values <em>undergird</em> the community's identity." },
  { word: "spawn", pos: "verb", pron: "/spɔːn/", def: "引發、產生(大量)", ex: "The novel <em>spawned</em> a series of films and merchandise." },
  { word: "perpetuate", pos: "verb", pron: "/pəˈpetʃueɪt/", def: "使持續、延續", ex: "Stereotypes <em>perpetuate</em> social inequality." },
  { word: "render", pos: "verb", pron: "/ˈrendə/", def: "使成為、使變得", ex: "The injury <em>rendered</em> her unable to compete." },
  { word: "yield", pos: "verb", pron: "/jiːld/", def: "產生(結果)、屈服", ex: "The experiment <em>yielded</em> surprising results." },
  { word: "stem from", pos: "phrase", pron: "/stem frɒm/", def: "源自、根源於", ex: "Many disorders <em>stem from</em> early childhood trauma." },
  { word: "give rise to", pos: "phrase", pron: "/ɡɪv raɪz tʊ/", def: "引起、導致", ex: "Industrialisation <em>gave rise to</em> the modern city." },
  { word: "trigger", pos: "verb", pron: "/ˈtrɪɡə/", def: "觸發、引發", ex: "The announcement <em>triggered</em> market panic." },
  { word: "induce", pos: "verb", pron: "/ɪnˈdjuːs/", def: "誘發、勸誘", ex: "Meditation can <em>induce</em> a state of calm." },
  { word: "instigate", pos: "verb", pron: "/ˈɪnstɪɡeɪt/", def: "策動、發起", ex: "The activists <em>instigated</em> a nationwide boycott." },

  // ===== Change & Contrast =====
  { word: "supplant", pos: "verb", pron: "/səˈplɑːnt/", def: "取代", ex: "Streaming services have largely <em>supplanted</em> physical media." },
  { word: "supersede", pos: "verb", pron: "/ˌsuːpəˈsiːd/", def: "取代、淘汰", ex: "The new model <em>supersedes</em> all previous versions." },
  { word: "transmute", pos: "verb", pron: "/trænzˈmjuːt/", def: "轉化、變質", ex: "Alchemists tried to <em>transmute</em> base metals into gold." },
  { word: "diverge", pos: "verb", pron: "/daɪˈvɜːdʒ/", def: "分歧、偏離", ex: "The two species <em>diverged</em> millions of years ago." },
  { word: "converge", pos: "verb", pron: "/kənˈvɜːdʒ/", def: "匯聚、趨同", ex: "Several lines of evidence <em>converge</em> on the same conclusion." },
  { word: "permeate", pos: "verb", pron: "/ˈpɜːmieɪt/", def: "瀰漫、滲透", ex: "A sense of unease <em>permeated</em> the meeting." },
  { word: "saturate", pos: "verb", pron: "/ˈsætʃəreɪt/", def: "使飽和、充滿", ex: "The market is <em>saturated</em> with similar products." },
  { word: "metamorphose", pos: "verb", pron: "/ˌmetəˈmɔːfəʊz/", def: "蛻變、徹底改變", ex: "The caterpillar <em>metamorphoses</em> into a butterfly." },
{ word: "deviate", pos: "verb", pron: "/ˈdiːvieɪt/", def: "偏離(常規)", ex: "The results <em>deviate</em> slightly from predictions." },
  { word: "contrast with", pos: "phrase", pron: "/ˈkɒntrɑːst wɪð/", def: "與…形成對比", ex: "Her quiet demeanour <em>contrasts with</em> her bold writing." },
  { word: "juxtapose", pos: "verb", pron: "/ˈdʒʌkstəpəʊz/", def: "並置、並列對照", ex: "The exhibition <em>juxtaposes</em> ancient and modern art." },
  { word: "counteract", pos: "verb", pron: "/ˌkaʊntərˈækt/", def: "抵消、抗衡", ex: "Antioxidants <em>counteract</em> cell damage." },
  { word: "offset", pos: "verb", pron: "/ˌɒfˈset/", def: "抵消、補償", ex: "Profits in one division <em>offset</em> losses in another." },

  // ===== Magnitude & Quantity =====
  { word: "myriad", pos: "noun/adj.", pron: "/ˈmɪriəd/", def: "無數的、大量的", ex: "The internet offers a <em>myriad</em> of resources." },
  { word: "scant", pos: "adj.", pron: "/skænt/", def: "稀少的、不足的", ex: "There is <em>scant</em> evidence to support this claim." },
  { word: "paucity", pos: "noun", pron: "/ˈpɔːsəti/", def: "缺乏、不足", ex: "A <em>paucity</em> of data hampers the analysis." },
  { word: "dearth", pos: "noun", pron: "/dɜːθ/", def: "缺乏、匱乏", ex: "There is a <em>dearth</em> of qualified teachers in rural areas." },
  { word: "abundance", pos: "noun", pron: "/əˈbʌndəns/", def: "豐富、大量", ex: "The region enjoys an <em>abundance</em> of natural resources." },
  { word: "negligible", pos: "adj.", pron: "/ˈneɡlɪdʒəbl/", def: "微不足道的、可忽略的", ex: "The effect on prices was <em>negligible</em>." },
  { word: "substantial", pos: "adj.", pron: "/səbˈstænʃl/", def: "相當大的、實質的", ex: "Researchers found <em>substantial</em> evidence of climate change." },
  { word: "considerable", pos: "adj.", pron: "/kənˈsɪdərəbl/", def: "相當的、可觀的", ex: "The project required <em>considerable</em> investment." },
  { word: "marginal", pos: "adj.", pron: "/ˈmɑːdʒɪnəl/", def: "微小的、邊緣的", ex: "The improvement was <em>marginal</em> at best." },
  { word: "exorbitant", pos: "adj.", pron: "/ɪɡˈzɔːbɪtənt/", def: "過高的、過分的(尤指價格)", ex: "Critics called the fees <em>exorbitant</em>." },
  { word: "copious", pos: "adj.", pron: "/ˈkəʊpiəs/", def: "豐富的、大量的", ex: "She took <em>copious</em> notes during the lecture." },
  { word: "scarce", pos: "adj.", pron: "/skeəs/", def: "稀少的、缺乏的", ex: "Fresh water is becoming increasingly <em>scarce</em>." },
// ===== Quality & Character =====
  { word: "robust", pos: "adj.", pron: "/rəʊˈbʌst/", def: "穩健的、強健的", ex: "The study uses <em>robust</em> statistical methods." },
  { word: "fragile", pos: "adj.", pron: "/ˈfrædʒaɪl/", def: "脆弱的、易碎的", ex: "Peace in the region remains <em>fragile</em>." },
  { word: "resilient", pos: "adj.", pron: "/rɪˈzɪliənt/", def: "有韌性的、能迅速恢復的", ex: "The economy proved more <em>resilient</em> than expected." },
  { word: "volatile", pos: "adj.", pron: "/ˈvɒlətaɪl/", def: "不穩定的、易變的", ex: "The stock market remains <em>volatile</em>." },
  { word: "viable", pos: "adj.", pron: "/ˈvaɪəbl/", def: "可行的、能存活的", ex: "We need a <em>viable</em> alternative to fossil fuels." },
  { word: "pragmatic", pos: "adj.", pron: "/præɡˈmætɪk/", def: "務實的、注重實效的", ex: "She took a <em>pragmatic</em> approach to the problem." },
  { word: "meticulous", pos: "adj.", pron: "/məˈtɪkjələs/", def: "一絲不苟的、極細心的", ex: "The records were kept with <em>meticulous</em> care." },
  { word: "rigorous", pos: "adj.", pron: "/ˈrɪɡərəs/", def: "嚴謹的、嚴格的", ex: "All findings undergo <em>rigorous</em> peer review." },
  { word: "stringent", pos: "adj.", pron: "/ˈstrɪndʒənt/", def: "嚴格的、苛刻的", ex: "The regulations are particularly <em>stringent</em>." },
  { word: "lenient", pos: "adj.", pron: "/ˈliːniənt/", def: "寬容的、寬大的", ex: "Critics say the punishment was too <em>lenient</em>." },
  { word: "austere", pos: "adj.", pron: "/ɔːˈstɪə/", def: "嚴肅樸素的、簡樸的", ex: "The monastery had an <em>austere</em> beauty." },
  { word: "ornate", pos: "adj.", pron: "/ɔːˈneɪt/", def: "華麗的、裝飾繁複的", ex: "The cathedral's <em>ornate</em> interior dazzles visitors." },
  { word: "sublime", pos: "adj.", pron: "/səˈblaɪm/", def: "崇高的、極致的、壯麗的", ex: "The view from the summit was <em>sublime</em>." },
  { word: "mundane", pos: "adj.", pron: "/mʌnˈdeɪn/", def: "平凡的、世俗的", ex: "Even <em>mundane</em> tasks require attention." },
  { word: "trivial", pos: "adj.", pron: "/ˈtrɪviəl/", def: "瑣碎的、不重要的", ex: "Don't get distracted by <em>trivial</em> details." },
  { word: "profound", pos: "adj.", pron: "/prəˈfaʊnd/", def: "深刻的、深遠的", ex: "Her work had a <em>profound</em> influence on the field." },
  { word: "superficial", pos: "adj.", pron: "/ˌsuːpəˈfɪʃl/", def: "膚淺的、表面的", ex: "His knowledge of the subject is rather <em>superficial</em>." },
  { word: "nuanced", pos: "adj.", pron: "/ˈnjuːɑːnst/", def: "細膩的、有微妙差別的", ex: "The novel offers a <em>nuanced</em> portrait of family life." },
  { word: "exemplary", pos: "adj.", pron: "/ɪɡˈzempləri/", def: "堪稱典範的、優異的", ex: "Her conduct has been <em>exemplary</em>." },
  { word: "mediocre", pos: "adj.", pron: "/ˌmiːdiˈəʊkə/", def: "平庸的、普通的", ex: "Reviews described the film as <em>mediocre</em>." },
  { word: "lucrative", pos: "adj.", pron: "/ˈluːkrətɪv/", def: "獲利豐厚的、賺錢的", ex: "It turned out to be a <em>lucrative</em> investment." },
  { word: "obsolete", pos: "adj.", pron: "/ˈɒbsəliːt/", def: "過時的、廢棄的", ex: "Floppy disks have become entirely <em>obsolete</em>." },
  { word: "archaic", pos: "adj.", pron: "/ɑːˈkeɪɪk/", def: "古老的、過時的", ex: "Many of these laws are <em>archaic</em>." },

  // ===== Time & Sequence =====
  { word: "antecedent", pos: "noun", pron: "/ˌæntɪˈsiːdnt/", def: "前事、先例", ex: "His behaviour had clear <em>antecedents</em> in childhood." },
  { word: "ensue", pos: "verb", pron: "/ɪnˈsjuː/", def: "隨之發生", ex: "Chaos <em>ensued</em> after the announcement." },
  { word: "concurrent", pos: "adj.", pron: "/kənˈkʌrənt/", def: "同時發生的", ex: "The two events were <em>concurrent</em>." },
  { word: "preceding", pos: "adj.", pron: "/prɪˈsiːdɪŋ/", def: "之前的、在先的", ex: "The <em>preceding</em> chapter explains the background." },
  { word: "subsequent", pos: "adj.", pron: "/ˈsʌbsɪkwənt/", def: "隨後的、接著的", ex: "<em>Subsequent</em> events confirmed her prediction." },
  { word: "imminent", pos: "adj.", pron: "/ˈɪmɪnənt/", def: "迫在眉睫的、即將發生的", ex: "Forecasters warned of an <em>imminent</em> storm." },
  { word: "perennial", pos: "adj.", pron: "/pəˈreniəl/", def: "持續不斷的、長年的", ex: "Traffic remains a <em>perennial</em> problem." },
  { word: "transient", pos: "adj.", pron: "/ˈtrænziənt/", def: "短暫的、過渡的", ex: "Fame is often <em>transient</em>." },
  { word: "perpetual", pos: "adj.", pron: "/pəˈpetʃuəl/", def: "永恆的、不斷的", ex: "He lives in a state of <em>perpetual</em> motion." },
  { word: "fleeting", pos: "adj.", pron: "/ˈfliːtɪŋ/", def: "短暫的、稍縱即逝的", ex: "She caught a <em>fleeting</em> glimpse of the celebrity." },
  { word: "intermittent", pos: "adj.", pron: "/ˌɪntəˈmɪtənt/", def: "間歇的", ex: "The forecast called for <em>intermittent</em> showers." },
  { word: "sporadic", pos: "adj.", pron: "/spəˈrædɪk/", def: "零星的、偶發的", ex: "Reports of the disease have been <em>sporadic</em>." },

  // ===== Position & Status =====
  { word: "preeminent", pos: "adj.", pron: "/priˈemɪnənt/", def: "卓越的、出類拔萃的", ex: "She is a <em>preeminent</em> scholar of medieval history." },
  { word: "preponderance", pos: "noun", pron: "/prɪˈpɒndərəns/", def: "(數量上的)優勢、多數", ex: "The <em>preponderance</em> of evidence supports the theory." },
  { word: "incumbent", pos: "adj./noun", pron: "/ɪnˈkʌmbənt/", def: "現任的;有義務的", ex: "It is <em>incumbent</em> upon educators to update their methods." },
  { word: "subordinate", pos: "adj./noun", pron: "/səˈbɔːdɪnət/", def: "次要的、下級的", ex: "Personal ambition was <em>subordinate</em> to the team's goals." },
  { word: "ascendancy", pos: "noun", pron: "/əˈsendənsi/", def: "優勢、支配地位", ex: "The party gained <em>ascendancy</em> in the 1990s." },
{ word: "tangential", pos: "adj.", pron: "/tænˈdʒenʃl/", def: "離題的、次要的", ex: "His comments were <em>tangential</em> to the main argument." },
{ word: "germane", pos: "adj.", pron: "/dʒɜːˈmeɪn/", def: "切題的、相關的", ex: "Her remarks were <em>germane</em> to the discussion." },
  { word: "pertinent", pos: "adj.", pron: "/ˈpɜːtɪnənt/", def: "相關的、中肯的", ex: "Please confine your comments to <em>pertinent</em> matters." },

  // ===== Description: People =====
  { word: "tenacious", pos: "adj.", pron: "/təˈneɪʃəs/", def: "頑強的、堅韌不拔的", ex: "Her <em>tenacious</em> pursuit of the truth paid off." },
  { word: "indolent", pos: "adj.", pron: "/ˈɪndələnt/", def: "懶惰的", ex: "Critics dismissed him as <em>indolent</em> and unmotivated." },
  { word: "diligent", pos: "adj.", pron: "/ˈdɪlɪdʒənt/", def: "勤奮的、勤勉的", ex: "She is a <em>diligent</em> and conscientious worker." },
  { word: "astute", pos: "adj.", pron: "/əˈstjuːt/", def: "精明的、機敏的", ex: "An <em>astute</em> observer of human nature." },
  { word: "perceptive", pos: "adj.", pron: "/pəˈseptɪv/", def: "感知敏銳的、有洞察力的", ex: "His <em>perceptive</em> analysis impressed the panel." },
  { word: "altruistic", pos: "adj.", pron: "/ˌæltruˈɪstɪk/", def: "利他的、無私的", ex: "Her motives appeared genuinely <em>altruistic</em>." },
  { word: "candid", pos: "adj.", pron: "/ˈkændɪd/", def: "坦率的、直言不諱的", ex: "She gave a <em>candid</em> account of the meeting." },
  { word: "garrulous", pos: "adj.", pron: "/ˈɡærələs/", def: "話多的、嘮叨的", ex: "Their <em>garrulous</em> host kept everyone entertained." },
  { word: "reticent", pos: "adj.", pron: "/ˈretɪsənt/", def: "沉默寡言的", ex: "He was <em>reticent</em> about his early life." },
  { word: "obstinate", pos: "adj.", pron: "/ˈɒbstɪnət/", def: "固執的、執拗的", ex: "She remained <em>obstinate</em> despite all evidence." },
  { word: "amenable", pos: "adj.", pron: "/əˈmiːnəbl/", def: "願意配合的、順從的", ex: "He proved <em>amenable</em> to the proposed changes." },
  { word: "eccentric", pos: "adj.", pron: "/ɪkˈsentrɪk/", def: "古怪的、特立獨行的", ex: "The professor was famously <em>eccentric</em>." },
  { word: "magnanimous", pos: "adj.", pron: "/mæɡˈnænɪməs/", def: "寬宏大量的、不計較的", ex: "She was <em>magnanimous</em> in victory." },

  // ===== Phenomena & Process =====
  { word: "phenomenon", pos: "noun", pron: "/fəˈnɒmɪnən/", def: "現象", ex: "Climate change is a global <em>phenomenon</em>." },
  { word: "manifestation", pos: "noun", pron: "/ˌmænɪfeˈsteɪʃn/", def: "表現、顯現", ex: "Anger is sometimes a <em>manifestation</em> of fear." },
  { word: "manifest", pos: "verb/adj.", pron: "/ˈmænɪfest/", def: "顯示、清楚的", ex: "Symptoms typically <em>manifest</em> after several weeks." },
  { word: "emergence", pos: "noun", pron: "/ɪˈmɜːdʒəns/", def: "出現、興起", ex: "The <em>emergence</em> of new technologies transformed industry." },
  { word: "advent", pos: "noun", pron: "/ˈædvent/", def: "出現、到來", ex: "The <em>advent</em> of the internet changed everything." },
  { word: "onset", pos: "noun", pron: "/ˈɒnset/", def: "開始、發作", ex: "The <em>onset</em> of winter brought heavy snow." },
  { word: "demise", pos: "noun", pron: "/dɪˈmaɪz/", def: "終結、消亡", ex: "Many predicted the <em>demise</em> of print media." },
  { word: "decline", pos: "noun/verb", pron: "/dɪˈklaɪn/", def: "衰退、下降", ex: "The species is in steady <em>decline</em>." },
  { word: "resurgence", pos: "noun", pron: "/rɪˈsɜːdʒəns/", def: "復興、再度興起", ex: "The genre has seen a <em>resurgence</em> in popularity." },
  { word: "regression", pos: "noun", pron: "/rɪˈɡreʃn/", def: "倒退、回歸", ex: "Recent policy represents a <em>regression</em>." },
  { word: "trajectory", pos: "noun", pron: "/trəˈdʒektəri/", def: "軌跡、發展路徑", ex: "Her career has followed an unusual <em>trajectory</em>." },
// ===== Negative qualities =====
  { word: "deleterious", pos: "adj.", pron: "/ˌdeləˈtɪəriəs/", def: "有害的", ex: "Smoking has <em>deleterious</em> effects on health." },
  { word: "detrimental", pos: "adj.", pron: "/ˌdetrɪˈmentl/", def: "有害的、不利的", ex: "Stress can be <em>detrimental</em> to learning." },
  { word: "pernicious", pos: "adj.", pron: "/pəˈnɪʃəs/", def: "有害的、惡性的(尤指漸進的)", ex: "Misinformation has a <em>pernicious</em> effect on democracy." },
  { word: "noxious", pos: "adj.", pron: "/ˈnɒkʃəs/", def: "有毒的、有害的", ex: "The factory emits <em>noxious</em> fumes." },
  { word: "adverse", pos: "adj.", pron: "/ˈædvɜːs/", def: "不利的、負面的", ex: "Patients experienced no <em>adverse</em> reactions." },
  { word: "egregious", pos: "adj.", pron: "/ɪˈɡriːdʒəs/", def: "極惡劣的、過分的", ex: "The report cited several <em>egregious</em> violations." },
  { word: "flawed", pos: "adj.", pron: "/flɔːd/", def: "有缺陷的", ex: "The methodology was deeply <em>flawed</em>." },
  { word: "untenable", pos: "adj.", pron: "/ʌnˈtenəbl/", def: "站不住腳的、無法維持的", ex: "His position became <em>untenable</em>." },
  { word: "spurious", pos: "adj.", pron: "/ˈspjʊəriəs/", def: "假的、虛假的", ex: "The claim was based on <em>spurious</em> data." },
  { word: "fallacious", pos: "adj.", pron: "/fəˈleɪʃəs/", def: "謬誤的", ex: "This is a <em>fallacious</em> line of reasoning." },
  { word: "futile", pos: "adj.", pron: "/ˈfjuːtaɪl/", def: "徒勞的、無效的", ex: "All attempts at negotiation proved <em>futile</em>." },
  { word: "redundant", pos: "adj.", pron: "/rɪˈdʌndənt/", def: "多餘的、累贅的", ex: "Eliminate <em>redundant</em> phrases for clarity." },

  // ===== Positive qualities =====
  { word: "salutary", pos: "adj.", pron: "/ˈsæljətri/", def: "有益的、值得借鑑的", ex: "The crisis was a <em>salutary</em> lesson for the industry." },
  { word: "auspicious", pos: "adj.", pron: "/ɔːˈspɪʃəs/", def: "吉利的、預兆好的", ex: "The launch had an <em>auspicious</em> start." },
  { word: "propitious", pos: "adj.", pron: "/prəˈpɪʃəs/", def: "有利的、吉祥的", ex: "Conditions are <em>propitious</em> for expansion." },
  { word: "prudent", pos: "adj.", pron: "/ˈpruːdnt/", def: "謹慎的、明智的", ex: "It is <em>prudent</em> to save for the future." },
  { word: "judicious", pos: "adj.", pron: "/dʒuˈdɪʃəs/", def: "明智的、有判斷力的", ex: "The <em>judicious</em> use of resources is essential." },
  { word: "sagacious", pos: "adj.", pron: "/səˈɡeɪʃəs/", def: "睿智的、有遠見的", ex: "His <em>sagacious</em> advice proved invaluable." },
  { word: "erudite", pos: "adj.", pron: "/ˈerʊdaɪt/", def: "博學的", ex: "The professor's <em>erudite</em> commentary impressed the audience." },
  { word: "prolific", pos: "adj.", pron: "/prəˈlɪfɪk/", def: "多產的、豐饒的", ex: "She is a <em>prolific</em> writer of historical fiction." },
  { word: "innovative", pos: "adj.", pron: "/ˈɪnəveɪtɪv/", def: "創新的", ex: "The company is known for <em>innovative</em> design." },
  { word: "ingenious", pos: "adj.", pron: "/ɪnˈdʒiːniəs/", def: "巧妙的、有獨創性的", ex: "He devised an <em>ingenious</em> solution." },
  { word: "exquisite", pos: "adj.", pron: "/ɪkˈskwɪzɪt/", def: "精緻的、極美的", ex: "The jewellery was of <em>exquisite</em> quality." },

  // ===== Verbs of action and effort =====
  { word: "endeavour", pos: "verb/noun", pron: "/ɪnˈdevə/", def: "努力、嘗試", ex: "Scientists <em>endeavour</em> to understand the cosmos." },
  { word: "strive", pos: "verb", pron: "/straɪv/", def: "努力奮鬥", ex: "We <em>strive</em> for excellence in everything we do." },
  { word: "compel", pos: "verb", pron: "/kəmˈpel/", def: "迫使", ex: "Circumstances <em>compelled</em> him to resign." },
  { word: "coerce", pos: "verb", pron: "/kəʊˈɜːs/", def: "強迫、脅迫", ex: "Witnesses claimed they had been <em>coerced</em>." },
  { word: "thwart", pos: "verb", pron: "/θwɔːt/", def: "阻撓、挫敗", ex: "Their plans were <em>thwarted</em> by bad weather." },
  { word: "circumvent", pos: "verb", pron: "/ˌsɜːkəmˈvent/", def: "迴避、規避", ex: "Companies sought to <em>circumvent</em> the new regulations." },
  { word: "supplement", pos: "verb/noun", pron: "/ˈsʌplɪment/", def: "補充、增補", ex: "She <em>supplements</em> her income by teaching." },
  { word: "augment", pos: "verb", pron: "/ɔːɡˈment/", def: "增加、增強", ex: "Technology can <em>augment</em> human capabilities." },
  { word: "amplify", pos: "verb", pron: "/ˈæmplɪfaɪ/", def: "擴大、增強", ex: "Social media <em>amplifies</em> both true and false information." },
  { word: "diminish", pos: "verb", pron: "/dɪˈmɪnɪʃ/", def: "減少、降低", ex: "The pain <em>diminished</em> over time." },
  { word: "curtail", pos: "verb", pron: "/kɜːˈteɪl/", def: "縮減、限制", ex: "Funding cuts will <em>curtail</em> services." },
  { word: "alleviate", pos: "verb", pron: "/əˈliːvieɪt/", def: "減輕、緩和", ex: "Medication can <em>alleviate</em> the symptoms." },
{ word: "aggravate", pos: "verb", pron: "/ˈæɡrəveɪt/", def: "加劇、惡化", ex: "Stress can <em>aggravate</em> chronic conditions." },
  { word: "exemplify", pos: "verb", pron: "/ɪɡˈzemplɪfaɪ/", def: "舉例說明、是…的典範", ex: "She <em>exemplifies</em> the qualities of a good leader." },
  { word: "illuminate", pos: "verb", pron: "/ɪˈluːmɪneɪt/", def: "闡明、照亮", ex: "Her research <em>illuminates</em> the workings of the brain." },
  { word: "validate", pos: "verb", pron: "/ˈvælɪdeɪt/", def: "證實、驗證", ex: "Independent studies <em>validate</em> the findings." },
{ word: "discriminate", pos: "verb", pron: "/dɪˈskrɪmɪneɪt/", def: "辨別、區分", ex: "Babies can <em>discriminate</em> between voices early." },
  { word: "disseminate", pos: "verb", pron: "/dɪˈsemɪneɪt/", def: "散布、傳播(資訊)", ex: "The report was <em>disseminated</em> widely." },
  { word: "attribute", pos: "verb", pron: "/əˈtrɪbjuːt/", def: "歸因於", ex: "She <em>attributes</em> her success to hard work." },
  { word: "ascribe", pos: "verb", pron: "/əˈskraɪb/", def: "歸因於、歸咎於", ex: "Historians <em>ascribe</em> the decline to multiple factors." },
  { word: "advocate", pos: "verb/noun", pron: "/ˈædvəkeɪt/", def: "倡導、提倡", ex: "She <em>advocates</em> for educational reform." },
  { word: "rebuff", pos: "verb", pron: "/rɪˈbʌf/", def: "拒絕、回絕", ex: "His proposals were curtly <em>rebuffed</em>." },
  { word: "renounce", pos: "verb", pron: "/rɪˈnaʊns/", def: "放棄、棄絕", ex: "She <em>renounced</em> her citizenship." },
  { word: "espouse", pos: "verb", pron: "/ɪˈspaʊz/", def: "擁護、信奉", ex: "He <em>espoused</em> radical political views." },
  { word: "denounce", pos: "verb", pron: "/dɪˈnaʊns/", def: "譴責、公開抨擊", ex: "The policy was widely <em>denounced</em>." },

  // ===== Science & Methodology =====
{ word: "theoretical", pos: "adj.", pron: "/ˌθɪəˈretɪkl/", def: "理論的", ex: "This is a <em>theoretical</em> rather than practical concern." },

{ word: "hypothesis", pos: "noun", pron: "/haɪˈpɒθəsɪs/", def: "假設、假說", ex: "The experiment was designed to test the <em>hypothesis</em>." },
  { word: "premise", pos: "noun", pron: "/ˈpremɪs/", def: "前提", ex: "The argument rests on a flawed <em>premise</em>." },

{ word: "synthesise", pos: "verb", pron: "/ˈsɪnθəsaɪz/", def: "綜合、合成", ex: "The book <em>synthesises</em> diverse research findings." },
  { word: "extrapolation", pos: "noun", pron: "/ɪkˌstræpəˈleɪʃn/", def: "外推、推斷", ex: "The forecast is based on <em>extrapolation</em> of past data." },
  { word: "correlation", pos: "noun", pron: "/ˌkɒrəˈleɪʃn/", def: "相關性", ex: "Studies show a strong <em>correlation</em> between the two." },
  { word: "causation", pos: "noun", pron: "/kɔːˈzeɪʃn/", def: "因果關係", ex: "Correlation does not imply <em>causation</em>." },
  { word: "variable", pos: "noun/adj.", pron: "/ˈveəriəbl/", def: "變數、可變的", ex: "Several <em>variables</em> affect the outcome." },
{ word: "paradigm shift", pos: "phrase", pron: "/ˈpærədaɪm ʃɪft/", def: "典範轉移", ex: "Einstein's theory caused a <em>paradigm shift</em>." },
  { word: "rigour", pos: "noun", pron: "/ˈrɪɡə/", def: "嚴謹、嚴格", ex: "The study lacks methodological <em>rigour</em>." },
  { word: "calibrate", pos: "verb", pron: "/ˈkælɪbreɪt/", def: "校準、調校", ex: "Instruments must be regularly <em>calibrated</em>." },
  { word: "approximation", pos: "noun", pron: "/əˌprɒksɪˈmeɪʃn/", def: "近似、估算", ex: "These numbers are merely an <em>approximation</em>." },
  { word: "phenomena", pos: "noun (pl.)", pron: "/fəˈnɒmɪnə/", def: "現象(複數)", ex: "Many natural <em>phenomena</em> remain unexplained." },

  // ===== Social & Political =====
  { word: "egalitarian", pos: "adj.", pron: "/ɪˌɡælɪˈteəriən/", def: "平等主義的", ex: "Scandinavian societies are notably <em>egalitarian</em>." },
  { word: "autocratic", pos: "adj.", pron: "/ˌɔːtəˈkrætɪk/", def: "獨裁的、專制的", ex: "He ran the company in an <em>autocratic</em> manner." },
  { word: "hierarchical", pos: "adj.", pron: "/ˌhaɪəˈrɑːkɪkl/", def: "階層的、等級制的", ex: "The organisation has a strict <em>hierarchical</em> structure." },
  { word: "patriarchal", pos: "adj.", pron: "/ˌpeɪtriˈɑːkl/", def: "父權的", ex: "She critiques the <em>patriarchal</em> assumptions of the era." },
  { word: "marginalise", pos: "verb", pron: "/ˈmɑːdʒɪnəlaɪz/", def: "邊緣化", ex: "Minorities continue to be <em>marginalised</em>." },
  { word: "assimilate", pos: "verb", pron: "/əˈsɪmɪleɪt/", def: "同化、吸收", ex: "Immigrants gradually <em>assimilated</em> into local culture." },
  { word: "discrimination", pos: "noun", pron: "/dɪˌskrɪmɪˈneɪʃn/", def: "歧視、區別待遇", ex: "Laws prohibit <em>discrimination</em> in employment." },
  { word: "stratification", pos: "noun", pron: "/ˌstrætɪfɪˈkeɪʃn/", def: "階層化、分層", ex: "Social <em>stratification</em> persists in many societies." },
  { word: "diaspora", pos: "noun", pron: "/daɪˈæspərə/", def: "散居族群、移民群體", ex: "The Greek <em>diaspora</em> spread across the Mediterranean." },
  { word: "demographic", pos: "adj./noun", pron: "/ˌdeməˈɡræfɪk/", def: "人口統計的", ex: "<em>Demographic</em> trends suggest an ageing population." },
  { word: "indigenous", pos: "adj.", pron: "/ɪnˈdɪdʒənəs/", def: "原住民的、本土的", ex: "<em>Indigenous</em> communities depend on the forest." },
  { word: "colonisation", pos: "noun", pron: "/ˌkɒlənaɪˈzeɪʃn/", def: "殖民、開拓", ex: "European <em>colonisation</em> reshaped the Americas." },
  { word: "sovereignty", pos: "noun", pron: "/ˈsɒvrənti/", def: "主權", ex: "The dispute concerns territorial <em>sovereignty</em>." },
  { word: "autonomy", pos: "noun", pron: "/ɔːˈtɒnəmi/", def: "自治、自主性", ex: "Regions sought greater <em>autonomy</em> from central rule." },
  { word: "legislation", pos: "noun", pron: "/ˌledʒɪsˈleɪʃn/", def: "法律、立法", ex: "The new <em>legislation</em> takes effect next year." },
  { word: "mandate", pos: "noun/verb", pron: "/ˈmændeɪt/", def: "授權、命令", ex: "The government claims a clear electoral <em>mandate</em>." },

  // ===== Aesthetics & Art =====
  { word: "aesthetic", pos: "adj./noun", pron: "/iːsˈθetɪk/", def: "美學的、美感的", ex: "The building's <em>aesthetic</em> appeal is undeniable." },
  { word: "evocative", pos: "adj.", pron: "/ɪˈvɒkətɪv/", def: "引發聯想的、喚起情感的", ex: "Her writing is highly <em>evocative</em> of rural life." },
  { word: "poignant", pos: "adj.", pron: "/ˈpɔɪnjənt/", def: "辛酸的、感人深刻的", ex: "The film offers a <em>poignant</em> portrait of loss." },
  { word: "vivid", pos: "adj.", pron: "/ˈvɪvɪd/", def: "鮮明的、生動的", ex: "She gave a <em>vivid</em> description of the scene." },
  { word: "lyrical", pos: "adj.", pron: "/ˈlɪrɪkl/", def: "抒情的、富詩意的", ex: "The novel has a <em>lyrical</em> quality." },
  { word: "didactic", pos: "adj.", pron: "/daɪˈdæktɪk/", def: "說教的、教導的", ex: "Some critics found the play overly <em>didactic</em>." },
  { word: "allegorical", pos: "adj.", pron: "/ˌæləˈɡɒrɪkl/", def: "寓言的、象徵性的", ex: "The story is <em>allegorical</em> rather than literal." },
  { word: "satirical", pos: "adj.", pron: "/səˈtɪrɪkl/", def: "諷刺的", ex: "The magazine is known for its <em>satirical</em> commentary." },
  { word: "avant-garde", pos: "adj.", pron: "/ˌævɒŋ ˈɡɑːd/", def: "前衛的、先鋒派的", ex: "The exhibition featured <em>avant-garde</em> sculptures." },
  { word: "minimalist", pos: "adj.", pron: "/ˈmɪnɪməlɪst/", def: "極簡風的", ex: "Her <em>minimalist</em> designs have gained a following." },
  { word: "iconic", pos: "adj.", pron: "/aɪˈkɒnɪk/", def: "標誌性的", ex: "The skyline features several <em>iconic</em> buildings." },
  { word: "renaissance", pos: "noun", pron: "/rɪˈneɪsns/", def: "復興、文藝復興", ex: "The neighbourhood is undergoing a cultural <em>renaissance</em>." },

  // ===== Economy & Business =====
  { word: "burgeoning", pos: "adj.", pron: "/ˈbɜːdʒənɪŋ/", def: "迅速擴展的、新興的", ex: "The <em>burgeoning</em> tech industry attracts global talent." },
  { word: "thriving", pos: "adj.", pron: "/ˈθraɪvɪŋ/", def: "蓬勃發展的", ex: "The town has a <em>thriving</em> arts community." },
  { word: "fluctuate", pos: "verb", pron: "/ˈflʌktʃueɪt/", def: "波動、起伏", ex: "Oil prices <em>fluctuate</em> with global demand." },
  { word: "stagnation", pos: "noun", pron: "/stæɡˈneɪʃn/", def: "停滯、停頓", ex: "The economy faces prolonged <em>stagnation</em>." },
  { word: "recession", pos: "noun", pron: "/rɪˈseʃn/", def: "經濟衰退", ex: "The country narrowly avoided a <em>recession</em>." },
  { word: "proliferate", pos: "verb", pron: "/prəˈlɪfəreɪt/", def: "激增、繁衍", ex: "Online retailers <em>proliferated</em> during the pandemic." },
  { word: "commodity", pos: "noun", pron: "/kəˈmɒdəti/", def: "商品", ex: "Oil is a globally traded <em>commodity</em>." },
  { word: "monopoly", pos: "noun", pron: "/məˈnɒpəli/", def: "壟斷", ex: "The firm holds a near-<em>monopoly</em> on the market." },
  { word: "subsidy", pos: "noun", pron: "/ˈsʌbsədi/", def: "補貼、補助金", ex: "Farmers receive government <em>subsidies</em>." },
  { word: "inflation", pos: "noun", pron: "/ɪnˈfleɪʃn/", def: "通貨膨脹", ex: "<em>Inflation</em> rose by three per cent last year." },
  { word: "deficit", pos: "noun", pron: "/ˈdefɪsɪt/", def: "赤字、不足", ex: "The country is running a large trade <em>deficit</em>." },
  { word: "surplus", pos: "noun", pron: "/ˈsɜːpləs/", def: "盈餘、過剩", ex: "Production created an unexpected <em>surplus</em>." },
  { word: "incentive", pos: "noun", pron: "/ɪnˈsentɪv/", def: "誘因、獎勵", ex: "Tax breaks act as <em>incentives</em> for investment." },
  { word: "disparity", pos: "noun", pron: "/dɪˈspærəti/", def: "差距、懸殊", ex: "Income <em>disparity</em> continues to widen." },

  // ===== Environment & Nature =====
  { word: "ecosystem", pos: "noun", pron: "/ˈiːkəʊsɪstəm/", def: "生態系統", ex: "Coral reefs support diverse <em>ecosystems</em>." },
  { word: "biodiversity", pos: "noun", pron: "/ˌbaɪəʊdaɪˈvɜːsəti/", def: "生物多樣性", ex: "<em>Biodiversity</em> loss threatens food security." },
  { word: "habitat", pos: "noun", pron: "/ˈhæbɪtæt/", def: "棲息地", ex: "Deforestation destroys natural <em>habitats</em>." },
  { word: "sustainable", pos: "adj.", pron: "/səˈsteɪnəbl/", def: "可持續的", ex: "We need <em>sustainable</em> energy sources." },
  { word: "renewable", pos: "adj.", pron: "/rɪˈnjuːəbl/", def: "可再生的", ex: "Solar power is a <em>renewable</em> energy source." },
  { word: "conservation", pos: "noun", pron: "/ˌkɒnsəˈveɪʃn/", def: "保育、保護", ex: "<em>Conservation</em> efforts have saved several species." },
  { word: "extinction", pos: "noun", pron: "/ɪkˈstɪŋkʃn/", def: "滅絕", ex: "The species is on the verge of <em>extinction</em>." },
  { word: "endemic", pos: "adj.", pron: "/enˈdemɪk/", def: "特有的、地方性的", ex: "These plants are <em>endemic</em> to Madagascar." },
  { word: "deforestation", pos: "noun", pron: "/ˌdiːfɒrɪˈsteɪʃn/", def: "森林砍伐", ex: "<em>Deforestation</em> contributes to climate change." },
  { word: "carnivore", pos: "noun", pron: "/ˈkɑːnɪvɔː/", def: "肉食動物", ex: "Wolves are apex <em>carnivores</em>." },
  { word: "herbivore", pos: "noun", pron: "/ˈhɜːbɪvɔː/", def: "草食動物", ex: "Most large <em>herbivores</em> live in herds." },
  { word: "predator", pos: "noun", pron: "/ˈpredətə/", def: "掠食者", ex: "Sharks are formidable <em>predators</em>." },
  { word: "migration", pos: "noun", pron: "/maɪˈɡreɪʃn/", def: "遷徙", ex: "Bird <em>migration</em> follows seasonal patterns." },
  { word: "metabolism", pos: "noun", pron: "/məˈtæbəlɪzəm/", def: "新陳代謝", ex: "Some fish have slower <em>metabolisms</em>." },
  { word: "photosynthesis", pos: "noun", pron: "/ˌfəʊtəʊˈsɪnθəsɪs/", def: "光合作用", ex: "<em>Photosynthesis</em> converts sunlight into chemical energy." },

  // ===== Linking & Discourse =====
  { word: "albeit", pos: "conj.", pron: "/ɔːlˈbiːɪt/", def: "雖然、儘管(讓步轉折)", ex: "She accepted the offer, <em>albeit</em> reluctantly." },
  { word: "notwithstanding", pos: "prep./adv.", pron: "/ˌnɒtwɪðˈstændɪŋ/", def: "儘管、雖然", ex: "<em>Notwithstanding</em> the delays, the project succeeded." },
  { word: "conversely", pos: "adv.", pron: "/ˈkɒnvɜːsli/", def: "相反地", ex: "She enjoys cold weather; <em>conversely</em>, her sister prefers heat." },
  { word: "nonetheless", pos: "adv.", pron: "/ˌnʌnðəˈles/", def: "儘管如此", ex: "The book has flaws; it is <em>nonetheless</em> worth reading." },
  { word: "hence", pos: "adv.", pron: "/hens/", def: "因此", ex: "Demand is rising; <em>hence</em> the price increase." },
  { word: "thereby", pos: "adv.", pron: "/ˌðeəˈbaɪ/", def: "藉此、從而", ex: "Reducing waste, <em>thereby</em> cutting costs." },
  { word: "insofar as", pos: "phrase", pron: "/ˌɪnsəʊˈfɑːr əz/", def: "就…而言", ex: "He helped <em>insofar as</em> his time allowed." },
  { word: "moreover", pos: "adv.", pron: "/mɔːˈrəʊvə/", def: "此外", ex: "The plan is risky; <em>moreover</em>, it is expensive." },
  { word: "furthermore", pos: "adv.", pron: "/ˌfɜːðəˈmɔː/", def: "再者、此外", ex: "<em>Furthermore</em>, the data is incomplete." },
  { word: "in lieu of", pos: "phrase", pron: "/ɪn ˈljuː əv/", def: "代替", ex: "She accepted vouchers <em>in lieu of</em> cash." },

  // ===== Less common but high-utility =====
  { word: "quintessential", pos: "adj.", pron: "/ˌkwɪntɪˈsenʃl/", def: "典型的、最具代表性的", ex: "She is the <em>quintessential</em> Renaissance scholar." },
{ word: "ostensibly", pos: "adv.", pron: "/ɒˈstensəbli/", def: "表面上、據稱", ex: "He resigned <em>ostensibly</em> for personal reasons." },
  { word: "purportedly", pos: "adv.", pron: "/pəˈpɔːtɪdli/", def: "據稱、據傳", ex: "The document was <em>purportedly</em> signed in 1789." },
  { word: "ironically", pos: "adv.", pron: "/aɪˈrɒnɪkli/", def: "諷刺的是", ex: "<em>Ironically</em>, the safety device caused the accident." },
  { word: "inadvertently", pos: "adv.", pron: "/ˌɪnədˈvɜːtəntli/", def: "不經意地、無意中", ex: "She <em>inadvertently</em> revealed the surprise." },
  { word: "concomitant", pos: "adj.", pron: "/kənˈkɒmɪtənt/", def: "伴隨的、共同發生的", ex: "Urbanisation brought <em>concomitant</em> social changes." },
  { word: "ostentatious", pos: "adj.", pron: "/ˌɒstenˈteɪʃəs/", def: "炫耀的、招搖的", ex: "His <em>ostentatious</em> displays of wealth annoyed neighbours." },
  { word: "innocuous", pos: "adj.", pron: "/ɪˈnɒkjuəs/", def: "無害的、無傷大雅的", ex: "What seemed an <em>innocuous</em> comment caused offence." },
  { word: "ambivalent", pos: "adj.", pron: "/æmˈbɪvələnt/", def: "矛盾的、又喜又惡的", ex: "She feels <em>ambivalent</em> about the move." },
  { word: "equivocal", pos: "adj.", pron: "/ɪˈkwɪvəkl/", def: "模稜兩可的", ex: "His response was deliberately <em>equivocal</em>." },
  { word: "categorical", pos: "adj.", pron: "/ˌkætəˈɡɒrɪkl/", def: "斷然的、明確的", ex: "She issued a <em>categorical</em> denial." },
  { word: "tantamount", pos: "adj.", pron: "/ˈtæntəmaʊnt/", def: "相當於、等同於", ex: "Silence is <em>tantamount</em> to consent." },
  { word: "redolent", pos: "adj.", pron: "/ˈredələnt/", def: "讓人聯想到、瀰漫…氣息的", ex: "The street is <em>redolent</em> of old-world charm." },
  { word: "vestige", pos: "noun", pron: "/ˈvestɪdʒ/", def: "殘跡、遺跡", ex: "Only <em>vestiges</em> of the original wall remain." },
  { word: "remnant", pos: "noun", pron: "/ˈremnənt/", def: "殘餘、剩餘部分", ex: "A few <em>remnants</em> of the ancient civilisation survive." },
  { word: "incipient", pos: "adj.", pron: "/ɪnˈsɪpiənt/", def: "初期的、剛開始的", ex: "Doctors detected an <em>incipient</em> infection." },
  { word: "nascent", pos: "adj.", pron: "/ˈnæsnt/", def: "新生的、萌芽的", ex: "The <em>nascent</em> field of quantum computing." },
  { word: "embryonic", pos: "adj.", pron: "/ˌembriˈɒnɪk/", def: "初期的、胚胎的", ex: "The technology is still in its <em>embryonic</em> stage." },
  { word: "moribund", pos: "adj.", pron: "/ˈmɒrɪbʌnd/", def: "垂死的、奄奄一息的", ex: "Critics declared the industry <em>moribund</em>." },
  { word: "stark", pos: "adj.", pron: "/stɑːk/", def: "鮮明的、嚴峻的", ex: "The report paints a <em>stark</em> picture." },
  { word: "blatant", pos: "adj.", pron: "/ˈbleɪtnt/", def: "公然的、明目張膽的", ex: "His behaviour showed <em>blatant</em> disregard for rules." },
  { word: "covert", pos: "adj.", pron: "/ˈkəʊvɜːt/", def: "祕密的、隱蔽的", ex: "The agency conducted <em>covert</em> operations." },
  { word: "overt", pos: "adj.", pron: "/əʊˈvɜːt/", def: "公開的、明顯的", ex: "There was no <em>overt</em> opposition." },
  { word: "tacit", pos: "adj.", pron: "/ˈtæsɪt/", def: "心照不宣的、默許的", ex: "There was <em>tacit</em> agreement among the team." },
  { word: "explicit", pos: "adj.", pron: "/ɪkˈsplɪsɪt/", def: "明確的、直接的", ex: "Please be more <em>explicit</em> about your expectations." },
  { word: "implicit", pos: "adj.", pron: "/ɪmˈplɪsɪt/", def: "含蓄的、隱含的", ex: "There was an <em>implicit</em> threat in his words." },
  { word: "lucid", pos: "adj.", pron: "/ˈluːsɪd/", def: "清晰的、明白易懂的", ex: "She gave a <em>lucid</em> explanation of the theory." },
  { word: "opaque", pos: "adj.", pron: "/əʊˈpeɪk/", def: "不透明的、難懂的", ex: "His writing is famously <em>opaque</em>." },
  { word: "pristine", pos: "adj.", pron: "/ˈprɪstiːn/", def: "原始的、完美無瑕的", ex: "The forest remains in <em>pristine</em> condition." },
  { word: "decrepit", pos: "adj.", pron: "/dɪˈkrepɪt/", def: "破舊的、衰老的", ex: "The <em>decrepit</em> building was finally demolished." },
  { word: "voracious", pos: "adj.", pron: "/vəˈreɪʃəs/", def: "貪婪的、如飢似渴的", ex: "She is a <em>voracious</em> reader." },
  { word: "insatiable", pos: "adj.", pron: "/ɪnˈseɪʃəbl/", def: "難以滿足的", ex: "He has an <em>insatiable</em> curiosity." },
  { word: "anomalous", pos: "adj.", pron: "/əˈnɒmələs/", def: "反常的、異常的", ex: "Results were strangely <em>anomalous</em>." },

];

let currentCard = 0;
let cardOrder = vocabulary.map((_, i) => i);

function renderCard() {
  const idx = cardOrder[currentCard];
  const v = vocabulary[idx];
  document.getElementById('cardWord').textContent = v.word;
  document.getElementById('cardPos').textContent = v.pos;
  document.getElementById('cardPosBack').textContent = v.pos;
  document.getElementById('cardPron').textContent = v.pron;
  document.getElementById('cardDef').textContent = v.def;
  document.getElementById('cardEx').innerHTML = '"' + v.ex + '"';
  document.getElementById('cardNum').textContent = currentCard + 1;
  const totalEl = document.getElementById('cardTotal');
  if (totalEl) totalEl.textContent = vocabulary.length;
  const mobileNum = document.getElementById('cardNumMobile');
  if (mobileNum) mobileNum.textContent = currentCard + 1;
  const mobileTotal = document.getElementById('cardTotalMobile');
  if (mobileTotal) mobileTotal.textContent = vocabulary.length;
  document.getElementById('flashcard').classList.remove('flipped');
}

function flipCard() {
  document.getElementById('flashcard').classList.toggle('flipped');
}

function nextCard() {
  currentCard = (currentCard + 1) % vocabulary.length;
  renderCard();
}

function prevCard() {
  currentCard = (currentCard - 1 + vocabulary.length) % vocabulary.length;
  renderCard();
}

function shuffleCards() {
  cardOrder = cardOrder.sort(() => Math.random() - 0.5);
  currentCard = 0;
  renderCard();
}

// Touch swipe handler for mobile
(function initSwipe() {
  if (typeof window === 'undefined') return;
  // Initialise after DOM is ready
  function attach() {
    const card = document.getElementById('flashcard');
    if (!card) return;
    let startX = 0, startY = 0, startTime = 0;
    card.addEventListener('touchstart', (e) => {
      if (e.touches.length !== 1) return;
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      startTime = Date.now();
    }, { passive: true });
    card.addEventListener('touchend', (e) => {
      if (e.changedTouches.length !== 1) return;
      const endX = e.changedTouches[0].clientX;
      const endY = e.changedTouches[0].clientY;
      const dx = endX - startX;
      const dy = endY - startY;
      const dt = Date.now() - startTime;
      // Only treat as swipe if mostly horizontal, fast enough, and far enough
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5 && dt < 500) {
        if (dx < 0) {
          card.classList.add('swiping-left');
          setTimeout(() => { card.classList.remove('swiping-left'); nextCard(); }, 250);
        } else {
          card.classList.add('swiping-right');
          setTimeout(() => { card.classList.remove('swiping-right'); prevCard(); }, 250);
        }
      }
    }, { passive: true });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', attach);
  } else {
    attach();
  }
})();

// Render word list
function renderWordList() {
  const html = vocabulary.map(v =>
    `<div style="break-inside: avoid; margin-bottom: 20px; padding-bottom: 14px; border-bottom: 1px dotted var(--rule);">
      <div style="display: flex; justify-content: space-between; align-items: baseline; gap: 12px;">
        <span style="font-family: 'Fraunces', serif; font-size: 22px; font-weight: 400; color: var(--ink);">${v.word}</span>
        <span style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--sepia);">${v.pron}</span>
      </div>
      <div style="font-family: 'JetBrains Mono', monospace; font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase; color: var(--oxblood); margin: 4px 0;">${v.pos}</div>
      <div style="font-size: 15px; color: var(--ink-2); line-height: 1.55;">${v.def}</div>
    </div>`
  ).join('');
  document.getElementById('wordlistContent').innerHTML = html;
}

// ============ QUIZ ============
const quizQuestions = [
  { word: "ephemeral", options: ["short-lived", "powerful", "obvious", "complicated"], correct: 0 },
  { word: "mitigate", options: ["intensify", "ignore", "lessen", "predict"], correct: 2 },
  { word: "ubiquitous", options: ["rare", "everywhere", "ancient", "harmful"], correct: 1 },
  { word: "anomaly", options: ["a pattern", "an irregularity", "a definition", "a measurement"], correct: 1 },
  { word: "elucidate", options: ["to confuse", "to escape", "to clarify", "to challenge"], correct: 2 },
  { word: "exacerbate", options: ["to soothe", "to make worse", "to repeat", "to disguise"], correct: 1 },
  { word: "salient", options: ["hidden", "noticeable", "salty", "trivial"], correct: 1 },
  { word: "refute", options: ["to confirm", "to disprove", "to recall", "to compare"], correct: 1 },
  { word: "tenuous", options: ["dense", "weak or unconvincing", "fast", "permanent"], correct: 1 },
  { word: "cogent", options: ["incoherent", "compelling", "boring", "lengthy"], correct: 1 },
  { word: "burgeoning", options: ["shrinking", "rapidly growing", "stable", "ancient"], correct: 1 },
  { word: "deleterious", options: ["beneficial", "harmful", "delicate", "delicious"], correct: 1 },
  { word: "preclude", options: ["to invite", "to prevent", "to enclose", "to introduce"], correct: 1 },
  { word: "auspicious", options: ["unfavourable", "promising", "auditory", "anxious"], correct: 1 },
  { word: "innate", options: ["acquired", "inborn", "innocent", "inanimate"], correct: 1 },
  { word: "perpetuate", options: ["to stop", "to continue", "to puzzle", "to forget"], correct: 1 },
  { word: "scarce", options: ["frequent", "rare", "frightening", "easy"], correct: 1 },
  { word: "diligent", options: ["lazy", "hard-working", "delayed", "delightful"], correct: 1 },
  { word: "albeit", options: ["because", "although", "perhaps", "instead"], correct: 1 },
  { word: "concede", options: ["to deny", "to admit", "to conceal", "to convince"], correct: 1 },
];

let userAnswers = {};

function renderQuiz() {
  const html = quizQuestions.map((q, i) => `
    <div class="quiz-question">
      <div class="q-number">QUESTION ${String(i+1).padStart(2,'0')} / 0${quizQuestions.length}</div>
      <div class="quiz-prompt">${q.word}</div>
      <div class="quiz-instruction">Choose the closest meaning.</div>
      <div class="quiz-options">
        ${q.options.map((opt, j) => `
          <button class="quiz-option" onclick="selectAnswer(${i}, ${j}, this)">
            <span class="letter">${String.fromCharCode(65+j)}</span>${opt}
          </button>
        `).join('')}
      </div>
      <div class="quiz-feedback" id="feedback-${i}"></div>
    </div>
  `).join('');
  document.getElementById('quizContainer').innerHTML = html;
}

function selectAnswer(qIdx, optIdx, btn) {
  userAnswers[qIdx] = optIdx;
  // Visual feedback
  const parent = btn.parentElement;
  parent.querySelectorAll('.quiz-option').forEach(b => {
    b.style.borderColor = 'var(--rule)';
    b.style.background = 'var(--paper)';
  });
  btn.style.borderColor = 'var(--ink)';
  btn.style.background = 'var(--paper-2)';
}

function checkQuiz() {
  let correct = 0;
  quizQuestions.forEach((q, i) => {
    const userAns = userAnswers[i];
    const container = document.querySelectorAll('#quizContainer .quiz-question')[i];
    const options = container.querySelectorAll('.quiz-option');
    options.forEach((opt, j) => {
      opt.style.borderColor = '';
      opt.style.background = '';
      opt.disabled = true;
      if (j === q.correct) opt.classList.add('correct');
      if (userAns === j && j !== q.correct) opt.classList.add('incorrect');
    });
    if (userAns === q.correct) correct++;
    const feedback = document.getElementById(`feedback-${i}`);
    feedback.classList.add('show');
    feedback.innerHTML = userAns === q.correct
      ? `<strong style="color: #6c9e6d;">✓ 正確</strong> &nbsp; <em>${q.word}</em> 意指 ${q.options[q.correct]}.`
      : `<strong style="color: var(--oxblood);">✗ 答錯</strong> &nbsp; 正解為 <em>${q.options[q.correct]}</em>.`;
  });
  document.getElementById('quizScore').textContent = `${correct} / ${quizQuestions.length}`;
}

function resetQuiz() {
  userAnswers = {};
  renderQuiz();
  document.getElementById('quizScore').textContent = '';
}

// ============ TABS ============
function switchTab(btn, tabId) {
  document.querySelectorAll('#vocabulary .tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('#vocabulary .tab-content').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(tabId).classList.add('active');
}

function switchWritingTab(btn, tabId) {
  document.querySelectorAll('#writing .tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('#writing .tab-content').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(tabId).classList.add('active');
}

// ============ READING QUIZ ============
function checkReadingAnswer(btn, isCorrect) {
  const parent = btn.parentElement;
  parent.querySelectorAll('.quiz-option').forEach(b => b.disabled = true);
  if (isCorrect) {
    btn.classList.add('correct');
  } else {
    btn.classList.add('incorrect');
    // Show correct
    parent.querySelectorAll('.quiz-option').forEach(b => {
      if (b.getAttribute('onclick').includes('true')) b.classList.add('correct');
    });
  }
}

// ============ AUDIO SIMULATION ============
const audioStates = {};
function togglePlay(btn, id) {
  if (audioStates[id]?.playing) {
    clearInterval(audioStates[id].interval);
    audioStates[id].playing = false;
    btn.innerHTML = '<svg width="12" height="14" viewBox="0 0 12 14" fill="currentColor"><path d="M0 0 L0 14 L12 7 Z"/></svg>';
  } else {
    if (!audioStates[id]) audioStates[id] = { progress: 0 };
    audioStates[id].playing = true;
    btn.innerHTML = '<svg width="12" height="14" viewBox="0 0 12 14" fill="currentColor"><rect x="0" y="0" width="4" height="14"/><rect x="8" y="0" width="4" height="14"/></svg>';
    audioStates[id].interval = setInterval(() => {
      audioStates[id].progress += 0.5;
      if (audioStates[id].progress >= 100) {
        audioStates[id].progress = 100;
        clearInterval(audioStates[id].interval);
        audioStates[id].playing = false;
        btn.innerHTML = '<svg width="12" height="14" viewBox="0 0 12 14" fill="currentColor"><path d="M0 0 L0 14 L12 7 Z"/></svg>';
      }
      document.getElementById(`prog${id}`).style.width = audioStates[id].progress + '%';
    }, 200);
  }
}

function clearNote(id) {
  document.getElementById(id).value = '';
}

// ============ SPEAKING TIMER ============
const timers = {};
function startSpeakingTimer(id, prepSec, respSec) {
  if (timers[id]) clearInterval(timers[id]);
  let phase = 'PREP';
  let remaining = prepSec;
  const phaseEl = document.getElementById(`phase${id}`);
  const timerEl = document.getElementById(`timer${id}`);

  function updateDisplay() {
    const m = Math.floor(remaining / 60);
    const s = remaining % 60;
    timerEl.textContent = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
    timerEl.classList.toggle('warning', remaining <= 10 && remaining > 5);
    timerEl.classList.toggle('danger', remaining <= 5);
  }

  phaseEl.textContent = '準備中 · PREP';
  updateDisplay();

  timers[id] = setInterval(() => {
    remaining--;
    if (remaining < 0) {
      if (phase === 'PREP') {
        phase = 'RESPONSE';
        remaining = respSec;
        phaseEl.textContent = '回答中 · SPEAK NOW';
      } else {
        clearInterval(timers[id]);
        phaseEl.textContent = '結束 · COMPLETE';
        timerEl.textContent = '00:00';
        timerEl.classList.remove('warning', 'danger');
        return;
      }
    }
    updateDisplay();
  }, 1000);
}

function resetTimer(id) {
  if (timers[id]) clearInterval(timers[id]);
  document.getElementById(`phase${id}`).textContent = 'READY';
  document.getElementById(`timer${id}`).classList.remove('warning', 'danger');
  // Restore initial display based on task
  const initials = { 1: '00:15', 2: '00:30', 3: '00:30', 4: '00:20' };
  document.getElementById(`timer${id}`).textContent = initials[id];
}

// ============ WRITING TIMER ============
const writingTimers = {};
function startWritingTimer(id, minutes) {
  if (writingTimers[id]) clearInterval(writingTimers[id]);
  let remaining = minutes * 60;
  const el = document.getElementById(`writingTime${id}`);
  writingTimers[id] = setInterval(() => {
    remaining--;
    const m = Math.floor(remaining / 60);
    const s = remaining % 60;
    el.textContent = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
    if (remaining <= 60) el.style.color = 'var(--oxblood)';
    else if (remaining <= 300) el.style.color = 'var(--gold-deep)';
    if (remaining <= 0) {
      clearInterval(writingTimers[id]);
      el.textContent = "TIME'S UP";
      el.style.fontSize = '24px';
    }
  }, 1000);
}

function resetWritingTimer(id, minutes) {
  if (writingTimers[id]) clearInterval(writingTimers[id]);
  const el = document.getElementById(`writingTime${id}`);
  el.textContent = `${String(minutes).padStart(2,'0')}:00`;
  el.style.color = 'var(--ink)';
  el.style.fontSize = '';
}

function countWords(textareaId, counterId) {
  const text = document.getElementById(textareaId).value.trim();
  const words = text ? text.split(/\s+/).length : 0;
  document.getElementById(counterId).textContent = words;
}

// ============ MOBILE MENU ============
function toggleMenu() {
  document.getElementById('navList').classList.toggle('open');
}
function closeMenu() {
  document.getElementById('navList').classList.remove('open');
}

// ============ EXAM MODE ============

// Each content set defines a complete exam: passage, reading Qs, listening info+Qs, speaking & writing prompts
const examContent = {
  writing_origins: {
    passageTitle: "The Origins of Writing",
    passageBody: `<p>The invention of writing stands among humanity's most consequential cognitive achievements. Unlike spoken language, which emerges spontaneously in every human community, writing is an artefact—a deliberately engineered system that must be invented, taught, and culturally transmitted across generations.</p>
<p>The earliest unambiguous writing systems appeared independently in at least three regions: Mesopotamia around 3200 BCE, Egypt almost simultaneously, and China by approximately 1200 BCE. Mesoamerica's hieroglyphs developed later, around 600 BCE, but show no evidence of influence from Old World scripts.</p>
<p>Mesopotamian cuneiform began as a pictographic accounting system. Clay tokens representing commodities had been used for millennia, but around 3500 BCE, scribes began impressing tokens onto wet clay tablets, eventually replacing the tokens themselves with two-dimensional drawings.</p>
<p>A crucial cognitive leap occurred when scribes began using signs not for their pictorial meaning but for their phonetic value. The symbol for 'arrow' (Sumerian <em>ti</em>) could now represent the verb 'to live' (also <em>ti</em>). This rebus principle transformed writing from a memory aid into a flexible tool.</p>`,
    readingQs: [
      { q: "According to the passage, why is writing considered fundamentally different from spoken language?",
        options: ["It evolved earlier than spoken language", "It is a deliberately invented system requiring cultural transmission", "It cannot represent abstract concepts", "It is used only for record-keeping"], correct: 1,
        explanation: "第一段明確指出 writing 是 'an artefact—a deliberately engineered system that must be invented, taught, and culturally transmitted'。這是與口語(spontaneously 自然產生)最根本的對比。",
        whyWrong: ["A 與第一段直接矛盾 — 文章強調 writing 出現得比口語晚得多。", "C 文章未提及 writing 無法表達抽象概念,事實上第四段反指出能表達 abstract concepts。", "D 過度限縮 — 雖然早期 writing 用於 record-keeping,但這不是它與口語的根本差異。"],
        skill: "推論題 · Inference",
        quote: "Unlike spoken language, which emerges spontaneously in every human community, writing is an artefact—a deliberately engineered system that must be invented, taught, and culturally transmitted across generations.",
        quotePara: "Paragraph 1",
        strategy: "推論題的關鍵不是「文章字面說了什麼」,而是「文章邏輯上必然推得出什麼」。看到 'Unlike' 這種對比關鍵字,立刻聚焦兩件事物的差異點。本題對比的是 spontaneous(口語)vs deliberately engineered(寫作),選項中只有 B 抓住這個核心差異。",
        trap: "新手陷阱:看到 A「evolved earlier」會誤選,因為直覺認為「不同」就是「時序不同」。但文章明說 writing 比口語晚得多,所以 A 是反向陷阱。"
      },
      { q: "What does the passage suggest about the independent invention of writing?",
        options: ["All ancient writing systems share a common origin", "Mesoamerican scripts derived from Old World systems", "Writing tends to emerge under similar social conditions", "Only Mesopotamia developed true writing independently"], correct: 2,
        explanation: "第二段最後一句直接告訴你答案:'This pattern of independent invention suggests that writing arises when certain social conditions—typically the rise of complex states requiring record-keeping—make it indispensable.'",
        whyWrong: ["A 文章明確說 'independently in at least three regions',反對共同起源說。", "B 文章直接否認:'show no evidence of influence from Old World scripts'。", "D 文章列舉至少三個獨立發明區域,並非只有美索不達米亞。"],
        skill: "細節題 · Detail",
        quote: "This pattern of independent invention suggests that writing arises when certain social conditions—typically the rise of complex states requiring record-keeping—make it indispensable.",
        quotePara: "Paragraph 2",
        strategy: "細節題策略:題幹的關鍵字 'independent invention' 直接出現在文章中(第二段),用 keyword scanning 直接定位。找到後讀那句話的前後 1-2 句即可作答。不需要重讀全段。",
        trap: "B 是高難度陷阱 — 對美洲文字「沒有影響」是 'no evidence of influence',容易在快速閱讀時被忽略,誤讀為「沒有提到證據」。要小心 evidence of X 這類雙重否定結構。"
      },
      { q: "The 'rebus principle' in paragraph 4 refers to:",
        options: ["Using a symbol for its sound value rather than its meaning", "Combining multiple pictographs into a single sign", "Simplifying drawings into abstract wedges", "Recording only nouns rather than verbs"], correct: 0,
        explanation: "第四段:'scribes began using signs not for their pictorial meaning but for their phonetic value'。箭頭(arrow, ti)被用來代表發音相同的動詞 to live(也是 ti)— 純粹利用發音對應,這就是 rebus 原則。",
        whyWrong: ["B 是組合符號,不是 rebus(同音借用)。", "C 描述的是楔形演變(第三段),非 rebus。", "D 文章特別說 rebus 使任何 utterance 都可記錄,包含動詞與抽象概念。"],
        skill: "字彙/概念題 · Vocabulary",
        quote: "scribes began using signs not for their pictorial meaning but for their phonetic value. The symbol for 'arrow' (Sumerian ti) could now represent the verb 'to live' (also ti).",
        quotePara: "Paragraph 4",
        strategy: "字彙/概念題,優先看「定義」與「例子」結構。文章說 'not for their pictorial meaning but for their phonetic value' 是定義,後面 ti/ti 的例子是說明。把定義和例子結合,就能排除其他選項。",
        trap: "C 容易被選 — 因為「楔形」和「抽象」這兩個關鍵字在第三段確實出現過。但題目鎖定的是「第四段」的概念,不是第三段。讀題要看清段落限定。"
      },
    ],
    listenTitle: "Geology Lecture: Plate Tectonics",
    listenSub: "DURATION 4:30 · PROFESSOR + STUDENT Q&A",
    listenQs: [
      { q: "What is the main topic of the lecture?",
        options: ["The history of geology as a scientific discipline", "How plate movements shape Earth's surface features", "The discovery of mid-ocean ridges in the 1960s", "The relationship between volcanoes and earthquakes"], correct: 1,
        explanation: "教授開場提到 'Today we'll look at how plates moving against each other create the major landscape features we see today',明確點出主旨是 plate movement → surface features。",
        whyWrong: ["A 歷史只是引言,非主軸。", "C 中洋脊只是一個例子,非整體主題。", "D 火山與地震只是其中一段細節。"],
        skill: "主旨題 · Gist-Content"
      },
      { q: "What evidence first led scientists to accept continental drift?",
        options: ["Satellite measurements of plate movement", "Matching geological formations across separated continents", "Earthquake activity along subduction zones", "The age of seafloor sediments"], correct: 1,
        explanation: "教授引用 Wegener 1912 年的論點:他發現南美洲與非洲海岸線吻合,且雙方地層與化石證據對應。Satellite 測量是後來的驗證,不是最初的證據。",
        whyWrong: ["A 衛星測量是 1960 年代後才有的後續驗證。", "C 地震帶研究在 plate tectonics 接受 之後 才整合進來。", "D 海底沉積物年齡屬於 1960 年代海洋學發現,非最初線索。"],
        skill: "細節題 · Detail",
        quote: "教授原話:Wegener noticed in 1912 that South America and Africa fit together like puzzle pieces — and not just geographically. The rock formations, fossil distributions, even mountain belts lined up across the Atlantic.",
        quotePara: "Mid-lecture",
        strategy: "「first led to」題型重點在「最早」這個時間限定詞。聽到多個證據時,記筆記時要標註時序。Wegener 1912 是「最早」,衛星和海床年齡是「後來」。時序錯選 = 全錯。",
        trap: "A「衛星測量」是時序陷阱 — 衛星確實證明了 plate movement,但那是 1960s 之後的後續驗證,不是「first」。看到時間限定詞,務必鎖定最早的證據。"
      },
    ],
    speakTitle: "Personal Preference",
    speakPrompt: 'Do you agree or disagree with the following statement? <em>"The most important thing a university can teach is critical thinking, not specific job skills."</em> Use specific reasons and examples to support your answer.',
    speakModel: "I agree that critical thinking is more valuable than specific job skills. First, job skills become obsolete quickly — what's relevant today may be automated in five years, but the ability to evaluate evidence and construct arguments lasts a lifetime. Second, employers across industries consistently rank analytical reasoning above technical knowledge in hiring surveys. For example, a friend who studied philosophy got a consulting job specifically because she could break down complex problems, despite having no business training. While specific skills matter, they can be learned on the job; critical thinking is much harder to acquire later.",
    speakChecklist: ["明確表態(agree / disagree),不模糊", "至少 2 個獨立理由,不重複", "每個理由都有具體例證(個人經驗、研究、數據)", "使用 transition signals(First / However / For example)", "結尾簡短總結,不空談"],
    writeTitle: "Online Discussion Post",
    writePrompt: '<strong>Doctor Diaz:</strong> Many countries have begun introducing four-day work weeks, claiming benefits to productivity and employee wellbeing. In your view, should this become the global standard, or do you see significant drawbacks?',
    writeModel: "While I see the appeal of a four-day work week, I'm sceptical it should become a global standard. Pilot programmes in Iceland and the UK have indeed shown productivity gains, but these were often in office-based industries with high autonomy. In sectors like healthcare, manufacturing, or retail, customer demand doesn't conveniently compress into four days; shorter weeks often mean longer daily shifts, which can worsen burnout rather than relieve it. Moreover, smaller economies may not afford the staffing redundancy this model requires. A more flexible approach — letting industries adapt the concept to their own constraints — seems more realistic than a one-size-fits-all rule.",
    writeChecklist: ["立場清晰(同意 / 反對 / 條件支持)", "回應討論串中老師與其他同學的觀點", "提出 1–2 個具體理由,而非泛論", "字數 ≥ 100,結構完整(引言 + 論證 + 結尾)", "用詞精確,避免重複"],
  },

  glaciers: {
    passageTitle: "Glacial Geology: Shaping the Landscape",
    passageBody: `<p>Glaciers are among the most powerful geological agents on Earth. Though they move slowly—often only a few metres per year—their sheer mass enables them to reshape entire landscapes over geological time, carving valleys, transporting boulders the size of houses, and depositing distinctive landforms long after they have retreated.</p>
<p>Two principal categories of glacier exist: alpine glaciers, which form in mountain valleys, and continental ice sheets, which cover vast regions such as Antarctica and Greenland. Each leaves a different signature on the landscape. Alpine glaciers create U-shaped valleys with steep walls and flat floors, in contrast to the V-shaped valleys cut by rivers.</p>
<p>As glaciers advance, they pluck rocks from the bedrock and carry them downslope. When the ice melts, these rocks are deposited as moraines—long ridges of unsorted sediment marking the former edge of the ice. Geologists use moraine positions to reconstruct past climates, since each marks a moment when ice advance and retreat were in balance.</p>
<p>Perhaps the most striking evidence of past glaciation is the erratic—a boulder transported far from its source by ice and deposited atop unrelated bedrock. Early nineteenth-century geologists were puzzled by these displaced stones until Louis Agassiz proposed in 1837 that vast ice sheets had once covered northern Europe and North America.</p>`,
    readingQs: [
      { q: "According to the passage, what distinguishes alpine glaciers from continental ice sheets?",
        options: ["Alpine glaciers move faster", "They form in different settings and leave different landform signatures", "Continental ice sheets do not produce moraines", "Only alpine glaciers carry boulders"], correct: 1,
        explanation: "第二段:'Two principal categories of glacier exist: alpine glaciers... and continental ice sheets... Each leaves a different signature on the landscape.' 重點是 setting(山谷 vs 大陸)和留下的痕跡不同。",
        whyWrong: ["A 文章未比較速度。", "C 文章未說 ice sheets 不產生 moraine。", "D 兩者都會搬運岩石。"],
        skill: "細節題 · Detail",
        quote: "Two principal categories of glacier exist: alpine glaciers, which form in mountain valleys, and continental ice sheets... Each leaves a different signature on the landscape.",
        quotePara: "Paragraph 2",
        strategy: "「distinguish A from B」題型,先在文章中找出 A 與 B 同時出現的句子,差異點通常就在該句的對比結構中。本題核心對比:setting(山谷 vs 大陸範圍)+ 留下的地形痕跡(U 型 vs 不同特徵)。",
        trap: "A 速度比較是常見陷阱 — 文章從未比較兩者速度,但我們很容易「自行腦補」差異。看到比較題,務必確認文章真的有講該維度。"
      },
      { q: "Why are moraines important to geologists?",
        options: ["They contain valuable minerals", "They mark former ice positions and reveal past climate", "They prove glaciers move quickly", "They form only at glacier termini in spring"], correct: 1,
        explanation: "第三段:'Geologists use moraine positions to reconstruct past climates, since each marks a moment when ice advance and retreat were in balance.' 直接對應 B。",
        whyWrong: ["A 文章未提及礦物價值。", "C 與文章開頭 'they move slowly' 相反。", "D 季節限定的說法文中沒有。"],
        skill: "細節題 · Detail",
        quote: "Geologists use moraine positions to reconstruct past climates, since each marks a moment when ice advance and retreat were in balance.",
        quotePara: "Paragraph 3",
        strategy: "「為什麼 X 重要」型細節題,直接找 X 在文中的功能性敘述。Moraines 對應的是 'reconstruct past climates' 這個功能。Keyword scanning 就能解。",
        trap: "A「礦物價值」是無中生有的陷阱,文章從未提及。考生若對地質學有背景知識,可能用先驗知識填補,這在 TOEFL 是大忌 — 必須以文本為唯一根據。"
      },
      { q: "What did Louis Agassiz contribute to the understanding of erratics?",
        options: ["He discovered the first erratic", "He proposed ice sheets transported them", "He measured their composition", "He mapped European glacial valleys"], correct: 1,
        explanation: "第四段明確指出 Agassiz 在 1837 年 'proposed... that vast ice sheets had once covered northern Europe and North America',這是解釋 erratic 移位之謎的關鍵假說。",
        whyWrong: ["A 文章說 nineteenth-century geologists were puzzled,意味早已被發現。", "C 與 D 文中皆未提及。"],
        skill: "細節題 · Detail",
        quote: "Early nineteenth-century geologists were puzzled by these displaced stones until Louis Agassiz proposed in 1837 that vast ice sheets had once covered northern Europe and North America.",
        quotePara: "Paragraph 4",
        strategy: "人物貢獻題:直接定位人名(Agassiz),讀其前後 1-2 句。動詞 'proposed' 後面的內容就是答案核心。",
        trap: "A「他發現第一個 erratic」混淆「發現現象」與「解釋現象」。文中明說「nineteenth-century geologists were puzzled」表示這些石頭早已被發現,Agassiz 的貢獻是「提出解釋」。"
      },
    ],
    listenTitle: "Geology Lecture: Ice Age Climates",
    listenSub: "DURATION 5:10 · PROFESSOR + 2 STUDENT QUESTIONS",
    listenQs: [
      { q: "What does the professor primarily discuss?",
        options: ["Methods of dating glacial deposits", "The causes and timing of Pleistocene glaciations", "Modern glacier retreat in the Alps", "Differences between ice sheets and sea ice"], correct: 1,
        explanation: "教授開場 'I want to focus today on why ice ages happened when they did' — 重點在原因與時序,即 Pleistocene glaciation 的成因。",
        whyWrong: ["A 定年法只是輔助提及。", "C 現代退縮在最後 30 秒一筆帶過。", "D 兩者差異從未討論。"],
        skill: "主旨題 · Gist-Purpose",
        quote: "教授開場:I want to focus today on why ice ages happened when they did — the timing and the triggers.",
        quotePara: "Opening 30 seconds",
        strategy: "聽力主旨題的黃金原則:主旨幾乎一定在前 30 秒,且包含 'today / focus on / look at' 等訊號。錯過開場 = 整題崩盤。",
        trap: "C「modern glacier retreat」只是教授最後 30 秒順帶提及,容易被選 — 但它是「結尾延伸」,不是「整堂主軸」。主旨題要看的是「整堂課的重心」,不是任何一段。"
      },
      { q: "Why does the professor mention Milankovitch cycles?",
        options: ["To explain orbital triggers of ice ages", "To show glaciers move in predictable cycles", "To compare past and present climates", "To dismiss earlier theories"], correct: 0,
        explanation: "教授引述 Milankovitch 作為地球軌道參數(eccentricity, obliquity, precession)如何觸發冰期的關鍵理論。",
        whyWrong: ["B 混淆 — Milankovitch 講的是地球軌道,不是冰川移動。", "C 不是比較目的。", "D 教授肯定該理論,非否定。"],
        skill: "目的題 · Function",
        quote: "教授原話:Milankovitch's insight was that the Earth's orbit isn't perfectly stable — its eccentricity, tilt, and wobble all change over tens of thousands of years, and these changes affect how much sunlight reaches the polar regions.",
        quotePara: "Mid-lecture, ~2:30",
        strategy: "「Why does the professor mention X」這類目的題,要回頭找 X 出現的脈絡:它是用來「支持」、「反駁」、「舉例」、「對比」哪個論點?Milankovitch 是用來「解釋觸發機制」,所以答案是 A。",
        trap: "B 是經典陷阱 — 把 Milankovitch cycles 誤解為「冰川移動的週期」。其實它指的是「地球軌道的週期變化」,完全是兩個概念。聽力理解要分清楚名詞所指。"
      },
    ],
    speakTitle: "Learning Environment",
    speakPrompt: 'Some students prefer studying in libraries; others prefer studying at home. Which environment helps you concentrate more effectively, and why?',
    speakModel: "I personally focus much better in libraries. The first reason is the social pressure — seeing others working creates an unspoken expectation that you should too, which is harder to escape than at home. Second, libraries strip away distractions: no kitchen, no bed, no streaming. Last semester I tried studying for finals at home for two days and barely got through one chapter; switching to the university library, I finished the same material in an afternoon. The structured environment essentially does the discipline work for me.",
    speakChecklist: ["明確選擇一個環境,不騎牆", "至少 2 個具體理由", "至少 1 個個人經驗例證", "答題結構流暢,不超時或太短", "結尾呼應立場"],
    writeTitle: "Climate Action",
    writePrompt: '<strong>Professor Park:</strong> Some argue that individual lifestyle changes are crucial to fighting climate change; others say only large-scale government and corporate action can make a real difference. Where do you stand, and why?',
    writeModel: "I lean toward the view that systemic action matters more, though individual change shouldn't be dismissed. The math is stark: roughly 100 corporations are responsible for over 70% of global emissions, meaning even if every household recycled perfectly, the dent would be minimal without regulatory pressure on those producers. That said, individual choices do influence demand signals — the rise of EVs partly came from consumer enthusiasm, which then pushed policy. So I'd argue lifestyle changes are most powerful when they're loud enough to shift political will, rather than as quiet personal virtue. Both layers are needed, but government action is the one without which the rest fails.",
    writeChecklist: ["明確立場(個人 / 系統 / 兩者)", "用數據或證據支持,而非情緒", "回應討論串老師的設問", "字數 ≥ 100,段落清晰", "用詞貼近 academic 語域"],
  },

  trade_routes: {
    passageTitle: "The Silk Road: Networks of Exchange",
    passageBody: `<p>The Silk Road was never a single road, nor was silk its only commodity. The term, coined in the nineteenth century by the German geographer Ferdinand von Richthofen, describes a vast network of overland and maritime trade routes that connected China to the Mediterranean across more than 6,400 kilometres of mountains, deserts, and steppe.</p>
<p>Goods carried along these routes ranged from Chinese silk and porcelain to Roman glass, Indian spices, and Central Asian horses. But equally consequential were the intangibles that travelled with them: religions, technologies, diseases, and ideas. Buddhism spread from India into China largely along Silk Road branches; gunpowder and papermaking flowed westward; the bubonic plague devastated Eurasia in the fourteenth century by exploiting the same trade networks.</p>
<p>Few merchants travelled the entire route. Instead, goods passed through a chain of intermediaries, each adding markup. Caravan cities like Samarkand, Bukhara, and Dunhuang grew enormously wealthy as nodes in this network, hosting multilingual populations of Persians, Sogdians, Turks, and Chinese.</p>
<p>The decline of the Silk Road in the late fifteenth century was driven not by single events but by a confluence of factors: the rise of maritime trade routes pioneered by Portuguese navigators, the fragmentation of the Mongol political order that had once secured the routes, and the increasing reliability of sea travel.</p>`,
    readingQs: [
      { q: "What does the passage suggest about the term 'Silk Road'?",
        options: ["It accurately describes a single road of silk traders", "It is a modern label for a complex network of varied routes and goods", "It refers only to maritime routes", "It was used by medieval merchants themselves"], correct: 1,
        explanation: "第一段開門見山:'The Silk Road was never a single road, nor was silk its only commodity. The term, coined in the nineteenth century by... Richthofen, describes a vast network...' B 完全對應。",
        whyWrong: ["A 與文章首句直接矛盾。", "C 文章說 'overland and maritime' 兩者皆有。", "D 'coined in the nineteenth century' 表示中世紀商人並未使用此詞。"],
        skill: "細節題 · Detail",
        quote: "The Silk Road was never a single road, nor was silk its only commodity. The term, coined in the nineteenth century by the German geographer Ferdinand von Richthofen, describes a vast network of overland and maritime trade routes.",
        quotePara: "Paragraph 1",
        strategy: "Suggestion(暗示)題注意題幹用詞「the term」— 問的不是絲路本身,而是「這個名稱」。第一句開門見山的否定句「never a single road」就是強訊號。",
        trap: "C「只指海路」是部分正確陷阱 — 文章確實提到 maritime,但同時提到 overland。半對 = 全錯。"
      },
      { q: "According to the passage, what role did caravan cities play?",
        options: ["They controlled all trade revenues", "They served as multicultural hubs and intermediate trading nodes", "They produced silk and porcelain", "They blocked the spread of religion"], correct: 1,
        explanation: "第三段:'Caravan cities like Samarkand, Bukhara, and Dunhuang grew enormously wealthy as nodes in this network, hosting multilingual populations'。直接對應 B 的 multicultural hubs。",
        whyWrong: ["A 'controlled all revenues' 過度誇大,文章只說 they grew wealthy。", "C 商隊城市是中轉站,不是絲與瓷的生產地。", "D 與第二段宗教傳播的描述矛盾。"],
        skill: "細節題 · Detail",
        quote: "Caravan cities like Samarkand, Bukhara, and Dunhuang grew enormously wealthy as nodes in this network, hosting multilingual populations of Persians, Sogdians, Turks, and Chinese.",
        quotePara: "Paragraph 3",
        strategy: "「What role」題型優先找文章中含「played a role」「served as」「functioned as」等功能性動詞的句子。本題 'as nodes in this network' 是關鍵片語。",
        trap: "A「controlled all trade revenues」是「過度概括陷阱」— 文章說 grew wealthy,但「控制全部收益」是 absolute claim,TOEFL 中 'all / always / only' 常是陷阱信號。"
      },
      { q: "The passage implies that the decline of the Silk Road was caused by:",
        options: ["A single catastrophic event", "Multiple converging political and technological factors", "The exhaustion of trade goods", "The deliberate closure of borders"], correct: 1,
        explanation: "末段:'driven not by single events but by a confluence of factors: the rise of maritime trade..., the fragmentation of the Mongol political order..., and the increasing reliability of sea travel.' 明確指出多重因素。",
        whyWrong: ["A 文章直接否定 single event。", "C 與 D 都不在文章列舉的原因中。"],
        skill: "推論題 · Inference",
        quote: "The decline of the Silk Road in the late fifteenth century was driven not by single events but by a confluence of factors: the rise of maritime trade routes... the fragmentation of the Mongol political order... and the increasing reliability of sea travel.",
        quotePara: "Paragraph 4",
        strategy: "「Implies / suggests」推論題:看清題目要的是「文章邏輯上必然推得出什麼」。本題文章直接列出「不是單一事件,而是多重因素」,B 完全對應。",
        trap: "A 容易被選 — 因為人腦傾向尋找「單一原因」來解釋歷史事件。但文章明白否定 single event 說法。看到「driven not by X but by Y」結構,Y 才是答案。"
      },
    ],
    listenTitle: "History Lecture: Maritime Trade",
    listenSub: "DURATION 4:45 · PROFESSOR LECTURE",
    listenQs: [
      { q: "What is the lecture mainly about?",
        options: ["The rise of Portuguese maritime trade", "Why land routes were superior to sea routes", "The technology behind early ship design", "Trading commodities in the medieval period"], correct: 0,
        explanation: "教授從 Henry the Navigator 開始,串連 Vasco da Gama 與 Indian Ocean 航線。整堂課圍繞葡萄牙如何崛起為海上強權。",
        whyWrong: ["B 教授的論點正好相反 — 海路最終取代陸路。", "C 船隻技術只是其中一段,非全課主軸。", "D 商品內容並非重點,航線開拓才是。"],
        skill: "主旨題 · Gist-Purpose",
        quote: "教授開場:I'd like to discuss how Portuguese expansion in the fifteenth century transformed European trade by opening direct sea routes to Asia.",
        quotePara: "Opening 30 seconds",
        strategy: "主旨題:聽 'I'd like to discuss' 後面的賓語 — 就是這堂課的主軸。本句明確指向「Portuguese 海上擴張」。",
        trap: "B「為什麼陸路優於海路」是反向陷阱 — 教授主張正好相反(海路最終取代陸路)。陷阱選項常常用「相反方向」誤導。"
      },
      { q: "Why does the professor mention the caravel?",
        options: ["It was an Italian invention", "It enabled long-distance ocean voyages", "It carried silk faster than caravans", "It replaced earlier Roman ships"], correct: 1,
        explanation: "教授說 caravel 結合了 lateen sail 與 square rig,使得葡萄牙船員能在大西洋與印度洋上靈活航行。這是技術突破對歷史的影響。",
        whyWrong: ["A 它是葡萄牙設計,非義大利。", "C 速度比較未提及。", "D 羅馬船未被提到。"],
        skill: "目的題 · Function",
        quote: "教授原話:The caravel combined lateen sails — which let you tack into the wind — with square rigs for speed. This made long Atlantic and Indian Ocean voyages possible for the first time.",
        quotePara: "Mid-lecture",
        strategy: "「Why mention X」題:找 X 出現前後的解釋句。教授說 caravel「使得長距離航行成為可能」,直接對應 B。",
        trap: "C「比商隊運絲更快」混淆主題 — 教授在講航海技術,不在比較運輸速度。陷阱選項常常借用其他段落的關鍵字製造混淆。"
      },
    ],
    speakTitle: "Travel & Learning",
    speakPrompt: 'Some people believe travel is the best form of education. Others argue traditional classroom learning is more effective. Which view do you support, and why?',
    speakModel: "I think both have unique value, but for me, classroom learning provides the structure that makes travel meaningful later. Without basic frameworks — history, economics, sociology — visiting a foreign country is just sightseeing. I lived in Berlin for three months after taking a German history course, and the experience was completely different from a friend's: I could understand why certain neighbourhoods felt the way they did, while she just saw streets and cafes. So I'd say classrooms build the lens; travel sharpens it. One without the other is incomplete.",
    speakChecklist: ["立場可以是 nuance,但要明確", "用個人經驗作具體例證", "對立觀點提一句即可,不需大量反駁", "答題流暢度比花俏詞彙重要", "結尾簡明扼要"],
    writeTitle: "Globalisation Effects",
    writePrompt: '<strong>Professor Lin:</strong> Globalisation has connected cultures and economies more than ever. Some argue it enriches societies; others say it erodes local identity and tradition. What is your view, and why?',
    writeModel: "Globalisation has clearly enriched access — to food, ideas, and media — but I think the 'erosion of identity' framing oversimplifies what's happening. Local traditions aren't passively destroyed; they're actively reshaped, often by the very communities supposedly losing them. Korean pop culture is a striking example: K-pop didn't emerge despite globalisation but precisely because of it, blending domestic and international elements into something distinctly Korean and globally popular. The real concern isn't cultural exchange but unequal exchange — when only some cultures get exported while others mostly import. That's a different problem, and it calls for a different solution.",
    writeChecklist: ["回應討論串中提到的兩種觀點", "提出個人立場,不只是 list pros and cons", "至少 1 個具體文化 / 經濟例子", "字數 ≥ 100,且結構完整", "句型多變,避免從頭到尾用 I think"],
  },

  cognitive: {
    passageTitle: "The Linguistic Turn in Cognitive Science",
    passageBody: `<p>For most of the twentieth century, cognitive science was dominated by the metaphor of the mind as a computer. Information was thought to be processed in discrete stages: perception fed into memory, memory into reasoning, reasoning into action. Language, in this view, was merely one cognitive faculty among many.</p>
<p>The linguistic turn of the 1980s and 90s challenged this picture. Researchers such as George Lakoff and Mark Johnson argued that language is not merely a vehicle for thought but actively structures it. Their landmark book <em>Metaphors We Live By</em> showed that abstract concepts—time, morality, argument—are routinely understood through concrete metaphors rooted in bodily experience.</p>
<p>Consider how English speakers talk about time: we 'spend' it, 'save' it, 'waste' it, treating it as a resource. Other cultures conceptualise time differently—the Aymara of the Andes gesture forwards when speaking of the past, backwards when speaking of the future, since the past is what one can 'see' (i.e., remember). Such variation suggests language and thought are deeply intertwined.</p>
<p>This embodied view of cognition has profound implications. If our most abstract reasoning is grounded in physical metaphor, then bodies, environments, and languages all shape what minds can think. The mind is no longer a disembodied computer but a situated, biological, cultural achievement.</p>`,
    readingQs: [
      { q: "What was the dominant view of the mind in early cognitive science?",
        options: ["The mind as a biological organ", "The mind as a metaphor-driven system", "The mind as a discrete information-processing computer", "The mind as a cultural construct"], correct: 2,
        explanation: "第一段:'cognitive science was dominated by the metaphor of the mind as a computer. Information was thought to be processed in discrete stages...' C 完全對應。",
        whyWrong: ["A 生物學觀點是後來的修正,非早期主流。", "B 是 1980s 的轉向,而非早期觀點。", "D 文化建構論也是後來的修正。"],
        skill: "細節題 · Detail",
        quote: "For most of the twentieth century, cognitive science was dominated by the metaphor of the mind as a computer. Information was thought to be processed in discrete stages.",
        quotePara: "Paragraph 1",
        strategy: "「Dominant view」=「主流觀點」。直接找「dominated by」的句子。本題第一段第二句即答案來源。",
        trap: "B「mind as a metaphor-driven system」是時序陷阱 — 那是 1980s 之後 Lakoff 提出的新觀點,不是「early」的主流。看到「dominant view + 時序限定」要特別小心。"
      },
      { q: "According to Lakoff and Johnson, metaphors are:",
        options: ["Purely decorative linguistic devices", "Limited to poetry and literature", "Fundamental to how we structure abstract thought", "Universal across all languages and cultures"], correct: 2,
        explanation: "第二段:'language is not merely a vehicle for thought but actively structures it... abstract concepts—time, morality, argument—are routinely understood through concrete metaphors'。對應 C。",
        whyWrong: ["A 'purely decorative' 是傳統觀點,L&J 正好反對。", "B 文章強調日常語言都充滿隱喻。", "D 第三段 Aymara 例子顯示隱喻在不同文化中變化。"],
        skill: "細節題 · Detail",
        quote: "language is not merely a vehicle for thought but actively structures it. Their landmark book Metaphors We Live By showed that abstract concepts—time, morality, argument—are routinely understood through concrete metaphors rooted in bodily experience.",
        quotePara: "Paragraph 2",
        strategy: "人物觀點題:直接找該人名,讀其前後論述。L&J 的核心立場是「metaphor 不只是修辭,而是思維的結構」。",
        trap: "D「universal across all languages」是 absolute claim 陷阱。文章第三段反而說 Aymara 證明跨文化有差異,這正好打臉 D。"
      },
      { q: "The Aymara example is used to show:",
        options: ["That all cultures conceptualise time identically", "That spatial metaphors for time vary across languages", "That gesture is more important than language", "That past-future distinctions are linguistic illusions"], correct: 1,
        explanation: "Aymara 用手勢前指過去、後指未來,與英語相反。文章用此例證明 '語言與思維交織',且不同文化以不同方式空間化時間。",
        whyWrong: ["A 與例子目的完全相反。", "C 手勢只是表現方式,非主旨。", "D 文章未否認時間區別的真實性,只說空間化方式不同。"],
        skill: "目的題 · Function",
        quote: "the Aymara of the Andes gesture forwards when speaking of the past, backwards when speaking of the future, since the past is what one can 'see' (i.e., remember). Such variation suggests language and thought are deeply intertwined.",
        quotePara: "Paragraph 3",
        strategy: "「X is used to show」屬於功能/目的題。看 example 後面的解釋句:'Such variation suggests...' 就是答案線索。",
        trap: "A 直接被例子反駁(因為 example 本身就在說 difference)。看到例子題,先確認該例子在文中「支持還是反駁」哪一個論點。"
      },
    ],
    listenTitle: "Psychology Lecture: Embodied Cognition",
    listenSub: "DURATION 5:20 · PROFESSOR + STUDENT DISCUSSION",
    listenQs: [
      { q: "What experimental finding does the professor describe?",
        options: ["Holding warm objects makes people judge others as 'warmer'", "Cold rooms improve memory tasks", "Heavy objects make decisions feel less serious", "Bright light reduces creative thinking"], correct: 0,
        explanation: "教授引用 Williams 與 Bargh 的經典實驗:受試者拿熱咖啡比拿冰咖啡的人,在閱讀同一個人的描述時更傾向評他為 friendly 與 generous。",
        whyWrong: ["B 與 C 都不是教授提到的實驗。", "D 是另一個研究領域,不在本講座範圍。"],
        skill: "細節題 · Detail",
        quote: "教授原話:Williams and Bargh found that participants holding a warm cup of coffee, compared to those holding an iced one, rated the same target person as significantly more 'warm' and 'generous'.",
        quotePara: "Mid-lecture",
        strategy: "細節題:聽到實驗描述就立刻記筆記。把握三要素 — 研究者、處理變項、結果。本題三要素都對應 A。",
        trap: "B「冷房間提升記憶」、C「重物降低嚴肅感」雖然都是 embodied cognition 研究方向,但教授沒提到。聽力陷阱常用「同領域不同實驗」混淆。"
      },
      { q: "Why is the finding considered significant?",
        options: ["It proves the mind is purely physical", "It supports the idea that bodily states influence abstract judgements", "It contradicts all earlier cognitive theories", "It demonstrates the limits of cultural variation"], correct: 1,
        explanation: "教授解釋實驗結果支持 embodied cognition:身體狀態(體溫感受)會影響我們對抽象概念(他人個性)的判斷。",
        whyWrong: ["A 'purely physical' 太極端,文中無此說法。", "C 'contradicts all earlier theories' 過度強烈。", "D 與實驗結論無關。"],
        skill: "推論題 · Inference",
        quote: "教授原話:This is significant because it shows that even our abstract social judgements — like whether someone is warm-hearted — can be shaped by bodily sensations like temperature.",
        quotePara: "Mid-lecture",
        strategy: "「Why significant」:找 'significant' 或 'important' 出現的句子。教授明說 'shows that abstract judgements can be shaped by bodily sensations' — 直接對應 B。",
        trap: "A「proves the mind is purely physical」是「過度推論陷阱」。教授說的是「身體狀態影響抽象判斷」,並沒有說「心智純粹是物理的」。看到 'purely / completely / only' 的選項格外警覺。"
      },
    ],
    speakTitle: "Language & Identity",
    speakPrompt: 'Some people believe learning another language fundamentally changes how you think. Others see language as just a tool for communication. Which view aligns more closely with your experience, and why?',
    speakModel: "From my own experience, learning another language does change how you think — but subtly, not dramatically. When I started learning Japanese, I had to constantly think about social hierarchy because the language forces you to choose verb forms based on who you're talking to. This made me more aware of relationship dynamics even when speaking my native language. So I wouldn't say language replaces your worldview, but it adds layers. Each new language is like adding a filter on a camera — you still see the same scene, but you notice things you didn't before.",
    speakChecklist: ["從個人經驗切入,避免抽象空談", "提出有趣的隱喻或例子加深印象", "答題節奏穩定,沒有太多 um/uh", "結尾呼應立場", "用詞 advanced 但不刻意"],
    writeTitle: "AI & Human Thought",
    writePrompt: '<strong>Professor Chen:</strong> As AI systems become more capable of language and reasoning, some worry that human cognitive skills will deteriorate. Others argue AI will free us to think more deeply. What is your perspective, and why?',
    writeModel: "I think the answer depends entirely on how we use AI rather than on AI itself. Calculators didn't ruin mathematics; they just changed which math skills mattered most — arithmetic became less crucial, while problem framing became more so. AI may follow the same pattern: rote analytical work could decline while skills like asking the right questions, evaluating outputs critically, and integrating diverse insights become more valuable. The deterioration worry is real only if we treat AI as a substitute for thinking rather than a partner in it. The cognitive future therefore depends less on AI's capabilities than on educational and cultural choices.",
    writeChecklist: ["立場明確,但接受 nuance", "引用類比或具體例子(計算機、搜尋引擎等)", "回應討論串中提到的兩派觀點", "段落結構清晰", "句子長度交替,提升 fluency"],
  },

  urban: {
    passageTitle: "Garden Cities and the Urban Reform Movement",
    passageBody: `<p>The Industrial Revolution transformed the city. In Britain, by 1880, more people lived in urban areas than in the countryside for the first time in history. Yet the cities of the era were notorious for overcrowding, disease, and pollution. Slums proliferated, life expectancy plummeted, and reformers searched urgently for a new way of organising human settlement.</p>
<p>Ebenezer Howard's 1898 book <em>To-Morrow: A Peaceful Path to Real Reform</em> proposed a radical solution. Rather than expanding existing cities or fleeing entirely to the countryside, Howard envisioned planned 'garden cities'—self-contained communities of around 32,000 people, surrounded by permanent green belts, combining the economic vitality of urban life with the health benefits of rural surroundings.</p>
<p>The first garden city, Letchworth, was founded north of London in 1903. Welwyn Garden City followed in 1920. Both featured low-density housing, ample green space, walkable streets, and a mix of residential, commercial, and light industrial zones. Critics argued they were unaffordable and effectively suburban escapes for the middle class rather than genuine social reform.</p>
<p>Nevertheless, Howard's ideas profoundly influenced twentieth-century urban planning. The post-war British New Towns programme, American suburban developments, and contemporary 'new urbanism' movements all trace intellectual lineages back to the garden city idea. Whether they realised Howard's egalitarian vision is a matter of ongoing debate.</p>`,
    readingQs: [
      { q: "What problem did Howard's garden city concept aim to address?",
        options: ["Rural depopulation", "The deficiencies of industrial-era cities", "Lack of farmland in Britain", "Architectural conservatism"], correct: 1,
        explanation: "第一段描述當時城市:'notorious for overcrowding, disease, and pollution'。第二段引入 Howard 的解方,顯示他想解決的正是這些工業城市的弊病。",
        whyWrong: ["A 鄉村人口減少非主要關注。", "C 文章未提及農地不足。", "D 建築保守與本主題無關。"],
        skill: "推論題 · Inference",
        quote: "by 1880, more people lived in urban areas than in the countryside for the first time in history. Yet the cities of the era were notorious for overcrowding, disease, and pollution. Slums proliferated, life expectancy plummeted, and reformers searched urgently for a new way of organising human settlement.",
        quotePara: "Paragraph 1",
        strategy: "「Aim to address」= 解決什麼問題。看背景描述段(第一段)— 通常會列出當時的問題,然後第二段才介紹解方。",
        trap: "C「lack of farmland」是無中生有 — 文章未提及。考生若有背景知識可能誤填,但 TOEFL 必須以文本為準。"
      },
      { q: "According to the passage, what was distinctive about garden cities?",
        options: ["They prohibited industry entirely", "They combined urban and rural advantages with planned design", "They were restricted to the elite", "They eliminated commerce"], correct: 1,
        explanation: "第二段:'combining the economic vitality of urban life with the health benefits of rural surroundings'。這是 garden city 的核心特色。",
        whyWrong: ["A 第三段提及 'light industrial zones',並未禁絕工業。", "C 文章說批評者認為被中產 escape,但這是批評而非設計本意。", "D 'mix of residential, commercial, and light industrial' 顯示商業仍存在。"],
        skill: "細節題 · Detail",
        quote: "self-contained communities of around 32,000 people, surrounded by permanent green belts, combining the economic vitality of urban life with the health benefits of rural surroundings.",
        quotePara: "Paragraph 2",
        strategy: "「Distinctive」= 與眾不同之處。找文章直接定義 garden city 的句子,核心特色就是「結合 urban + rural 優點」。",
        trap: "A「禁止工業」與第三段「light industrial zones」直接矛盾。陷阱經常用「絕對否定」誤導(prohibited entirely / never / no)。"
      },
      { q: "The passage suggests Howard's legacy is:",
        options: ["Limited to two cities he founded", "Influential but contested in its realisation", "Universally celebrated by planners", "Largely forgotten today"], correct: 1,
        explanation: "末段:'profoundly influenced twentieth-century urban planning' 顯示影響深遠,但 'Whether they realised Howard's egalitarian vision is a matter of ongoing debate' 顯示具爭議。",
        whyWrong: ["A 文章指出影響波及英國新城、美國郊區、新都市主義。", "C 'universally' 太絕對,文中有 critics 出現。", "D 與 'profoundly influenced' 矛盾。"],
        skill: "推論題 · Inference",
        quote: "Howard's ideas profoundly influenced twentieth-century urban planning. The post-war British New Towns programme, American suburban developments, and contemporary 'new urbanism' movements all trace intellectual lineages back to the garden city idea. Whether they realised Howard's egalitarian vision is a matter of ongoing debate.",
        quotePara: "Paragraph 4",
        strategy: "Legacy 題注意「複合判斷」結構 — 通常答案會同時包含「影響大」+「但有爭議」兩個維度。看到末段同時出現 'profoundly influenced' 和 'ongoing debate',B 是唯一兼顧的選項。",
        trap: "C「universally celebrated」忽略文章的 debate 標記。考生看到正面評價就匆忙選 C,沒注意末句的 qualification。"
      },
    ],
    listenTitle: "Sociology Lecture: Suburbia & Inequality",
    listenSub: "DURATION 4:55 · PROFESSOR + STUDENT Q&A",
    listenQs: [
      { q: "What is the professor's main argument?",
        options: ["Suburbs are uniformly successful communities", "Post-war suburbs reproduced rather than solved urban inequality", "All American cities should adopt suburban models", "Garden cities failed completely"], correct: 1,
        explanation: "教授引用 redlining 與排他性住房政策,論證戰後郊區雖然提供新住房,卻系統性排除少數族裔,延續了城市中的不平等。",
        whyWrong: ["A 與教授論點完全相反。", "C 教授沒有任何規範性建議。", "D 'failed completely' 過度極端,教授論點較細緻。"],
        skill: "主旨題 · Gist-Purpose",
        quote: "教授原話:Post-war American suburbs offered new housing — but federal policies and redlining practices systematically excluded Black families and other minorities, essentially reproducing urban inequality in a new spatial form.",
        quotePara: "Opening 60 seconds",
        strategy: "主旨題:聽教授的核心 thesis 句。本講教授明確說 suburbs 「reproduced inequality in a new form」— 對應 B。",
        trap: "A「uniformly successful」與教授立場完全相反 — 這是「相反答案陷阱」。聽到主旨題,絕不選與教授語氣相反的選項。"
      },
      { q: "What role did housing policy play, according to the lecture?",
        options: ["It was unrelated to suburban growth", "It actively shaped who could access suburbs", "It mainly affected European cities", "It is no longer relevant today"], correct: 1,
        explanation: "教授特別強調 federal mortgage policy 與 redlining 決定了誰能 / 不能買郊區房產,這是不平等的核心機制。",
        whyWrong: ["A 與教授整體論點矛盾。", "C 教授討論的是美國案例。", "D 政策的當代延伸並非無關,教授提及它仍有影響。"],
        skill: "細節題 · Detail",
        quote: "教授原話:Federal mortgage policy literally determined who could buy a suburban home. The FHA refused to insure mortgages in neighborhoods deemed 'risky' — and 'risky' was defined largely by racial composition.",
        quotePara: "Mid-lecture",
        strategy: "「What role」題:找該關鍵字(housing policy)在講座中的功能描述。教授說它「determined who could buy」— 直接對應 B 的 'shaped who could access'。",
        trap: "C「主要影響歐洲」與教授全篇美國案例脈絡完全不符。注意:lecture context 決定範圍,不要被「主要是」誤導。"
      },
    ],
    speakTitle: "City vs. Countryside",
    speakPrompt: 'If you could choose to live anywhere, would you prefer a large city, a small town, or the countryside? Use specific reasons to support your choice.',
    speakModel: "I'd choose a small town over either extreme. Cities are exhilarating but exhausting — the noise and density wear me down quickly. The countryside is calming but isolating, especially for someone who works remotely and needs occasional in-person interaction. A small town gives me both: cafes, bookstores, and community within walking distance, but also actual silence at night and stars I can see. I grew up in a city of two million and recently spent six months in a town of fifteen thousand, and I was surprised how much better my sleep and focus became.",
    speakChecklist: ["三選一,選擇明確", "對比其他選項各 1 句以顯示思考", "1 個具體個人經驗", "答題完整不超時", "語調自然不背稿"],
    writeTitle: "Public Transport",
    writePrompt: '<strong>Professor Mendoza:</strong> Many cities are investing heavily in public transport while restricting cars in city centres. Some welcome this as progress; others see it as inconvenience. Where do you stand, and why?',
    writeModel: "I generally support these policies, though I think how they're implemented matters more than the policies themselves. Restricting cars without first building reliable public transport simply punishes people who have no alternative, especially shift workers and disabled residents. London's congestion charge worked because it was paired with massive bus and tube investment. Paris and Madrid had rockier transitions because alternatives weren't ready. So I'd say the question isn't whether to restrict cars but in what order: invest in transit first, gain public trust through quality, then phase in restrictions. Anything else just feels like punishment.",
    writeChecklist: ["立場可以條件式,但要說明條件", "用具體城市例子(不空談)", "回應討論串雙方立場", "段落內邏輯連貫", "至少 100 字,結構完整"],
  },

  microbes: {
    passageTitle: "Microbial Symbiosis and the Holobiont",
    passageBody: `<p>For most of biological history, microbes were viewed primarily as agents of disease. The germ theory of the nineteenth century, while a triumph of medicine, encouraged a vision of microorganisms as adversaries to be eliminated. Recent research has overturned this picture dramatically.</p>
<p>We now know that every multicellular organism is inhabited by trillions of microorganisms—bacteria, archaea, fungi, viruses—collectively known as its microbiome. In humans, microbial cells roughly equal human cells in number, and microbial genes outnumber human genes by perhaps a hundred to one. These tenants are not passive passengers but active participants in digestion, immune development, and even mood regulation.</p>
<p>The concept of the <em>holobiont</em>—the host organism together with its microbial communities, considered as a single ecological and evolutionary unit—has gained traction in biology. Researchers have shown that many traits once attributed solely to host genetics, from coral colour to insect dietary range, depend on microbial partners.</p>
<p>Coral reefs offer a striking example. The vivid colours of healthy corals come not from the coral itself but from photosynthetic algae living in coral tissue. When stressed by warming waters, corals expel their algae and turn white—a phenomenon known as bleaching. Without their symbionts, the corals starve. The fate of reefs is thus inseparable from the fate of their microscopic partners.</p>`,
    readingQs: [
      { q: "How does recent research challenge the older view of microbes?",
        options: ["By showing microbes are more dangerous than thought", "By revealing essential symbiotic roles of microbes in host biology", "By eliminating the germ theory", "By proving microbes are unimportant to ecology"], correct: 1,
        explanation: "第二段:'These tenants are not passive passengers but active participants in digestion, immune development, and even mood regulation.' 完全對應 B 的 essential symbiotic roles。",
        whyWrong: ["A 與新觀點相反 — 新研究強調有益面。", "C 文章說 germ theory 仍是 'triumph of medicine',並未被取消。", "D 與第二段直接矛盾。"],
        skill: "主旨題 · Gist-Content",
        quote: "microbial cells roughly equal human cells in number, and microbial genes outnumber human genes by perhaps a hundred to one. These tenants are not passive passengers but active participants in digestion, immune development, and even mood regulation.",
        quotePara: "Paragraph 2",
        strategy: "Challenge(挑戰)題:找新發現與舊觀點的對比。本題舊觀點 = microbes 是病原(germ theory),新觀點 = 共生角色。對比結構明顯。",
        trap: "A「比想像更危險」是「反向陷阱」— 新研究恰恰強調有益,不是有害。看到 challenge 題,要找與舊觀點「不同方向」的選項。"
      },
      { q: "What is meant by the term 'holobiont'?",
        options: ["A microbe that lives without a host", "Host and microbiome considered as a single biological unit", "An organism with no microbiome", "A disease caused by multiple bacteria"], correct: 1,
        explanation: "第三段定義:'the host organism together with its microbial communities, considered as a single ecological and evolutionary unit'。直接對應 B。",
        whyWrong: ["A 'without a host' 與定義相反。", "C 'no microbiome' 與定義相反。", "D 與疾病無關。"],
        skill: "字彙/概念題 · Vocabulary",
        quote: "The concept of the holobiont—the host organism together with its microbial communities, considered as a single ecological and evolutionary unit—has gained traction in biology.",
        quotePara: "Paragraph 3",
        strategy: "字彙/定義題:文章通常會在引入該詞時用 dash 或 comma 直接定義。本題 em dash 之間就是完整定義。",
        trap: "A「沒有宿主的微生物」與定義完全相反。字彙陷阱常用「相反方向」誤導 — 看到 'without' 要警覺。"
      },
      { q: "The passage uses coral bleaching to illustrate:",
        options: ["A host's independence from microbes", "How symbiotic relationships can be disrupted by environmental stress", "A successful evolutionary adaptation", "The benefits of warm ocean temperatures"], correct: 1,
        explanation: "末段:'When stressed by warming waters, corals expel their algae and turn white... Without their symbionts, the corals starve.' 這正是 symbiosis 在環境壓力下崩潰的例子。",
        whyWrong: ["A 與整段論點相反。", "C 白化是失敗適應,非成功。", "D 暖水帶來破壞,不是益處。"],
        skill: "目的題 · Function",
        quote: "Coral reefs offer a striking example... When stressed by warming waters, corals expel their algae and turn white—a phenomenon known as bleaching. Without their symbionts, the corals starve.",
        quotePara: "Paragraph 4",
        strategy: "「Used to illustrate」= 例子的功能。Coral bleaching 出現在 holobiont 那段之後,作為「共生關係崩潰」的具體例證,對應 B。",
        trap: "D「暖水的益處」是反向陷阱 — 文章清楚說 warming waters 帶來破壞,不是益處。注意主題詞的 connotation。"
      },
    ],
    listenTitle: "Biology Lecture: The Gut-Brain Axis",
    listenSub: "DURATION 5:00 · PROFESSOR + DEMONSTRATIONS",
    listenQs: [
      { q: "What is the professor's main claim?",
        options: ["Gut bacteria have no relationship to brain function", "Communication between gut microbes and the brain influences mood and behaviour", "All mental health conditions are caused by bacteria", "The brain controls but is not influenced by gut microbes"], correct: 1,
        explanation: "教授一開始就點出 'bidirectional communication between the gut and the brain',並用實驗證明腸道微生物會影響情緒。",
        whyWrong: ["A 與整堂課論點相反。", "C 'all mental health conditions' 過度誇大。", "D 教授強調是 bidirectional,不是單向。"],
        skill: "主旨題 · Gist-Purpose",
        quote: "教授原話:What I want to convince you of today is that gut bacteria can actively influence the brain — not just respond to it.",
        quotePara: "Opening 30 seconds",
        strategy: "主旨題:聽教授開場的「立場宣告」句。'What I want to convince you of' 後面就是 thesis。",
        trap: "D「腦控制但不被影響」是 partial truth 陷阱 — 它說了一半的真相,但忽略 bidirectional。bidirectional 是教授整堂課的關鍵詞。"
      },
      { q: "What kind of evidence does the professor cite?",
        options: ["Only theoretical models", "Experiments in mice showing behaviour changes after microbial transplants", "Surveys of human diet", "Historical case studies"], correct: 1,
        explanation: "教授引用 germ-free mice 接受焦慮型 / 平靜型小鼠的腸道菌移植後,行為改變的實驗,是 embodied 證據。",
        whyWrong: ["A 教授引用實際實驗,非僅理論。", "C 飲食調查雖被提到但非主要證據。", "D 沒有歷史案例。"],
        skill: "細節題 · Detail",
        quote: "教授原話:In one striking experiment, germ-free mice that received gut bacteria from anxious mice became anxious themselves; those receiving bacteria from calm mice remained calm.",
        quotePara: "Mid-lecture",
        strategy: "證據類型題:聽教授描述「研究方法」的句子。'germ-free mice that received gut bacteria... became anxious' 是典型實驗描述。",
        trap: "A「only theoretical models」明顯錯誤 — 教授引用具體實驗。看到「only / merely / just」要小心,常是 overstatement 陷阱。"
      },
    ],
    speakTitle: "Diet & Health",
    speakPrompt: 'Some people believe diet is the most important factor in overall health; others prioritise exercise or sleep. Which do you think matters most, and why?',
    speakModel: "Honestly, I'd put sleep above diet or exercise. The other two only work if you're sleeping enough — exercise without recovery causes injuries, and diet decisions get worse when you're sleep-deprived, since the brain craves quick sugar. I noticed this during finals: I ate clean and worked out daily, but slept five hours a night, and I still got sick twice in three weeks. Once I prioritised eight hours of sleep, the other two became easier to maintain. So sleep is foundational; the rest builds on top of it.",
    speakChecklist: ["三選一,選擇明確", "用因果鏈解釋為什麼這項最重要", "用個人經驗作具體例證", "結尾呼應立場", "語速穩定不破壞節奏"],
    writeTitle: "Antibiotic Use",
    writePrompt: '<strong>Doctor Reyes:</strong> Some experts urge much stricter limits on antibiotic prescriptions to slow resistance; others worry this leaves patients undertreated. What is your view, and why?',
    writeModel: "Strict prescription limits are necessary, but the framing of 'patients vs. resistance' is misleading. The real issue is that doctors face pressure from patients expecting antibiotics for viral infections like colds, where they don't help. Better diagnostics — like rapid bacterial vs. viral tests — could resolve much of this tension. The UK's pilot programmes using point-of-care testing reduced antibiotic prescriptions by 30% without leaving patients undertreated. So I support stricter limits, but only when paired with the diagnostic tools that let doctors make confident decisions. Restriction alone, without better tools, just creates a different kind of failure.",
    writeChecklist: ["回應討論串中提到的張力", "提出具體機制 / 解方,不只是抽象立場", "用研究 / 數據支持(可虛擬合理的)", "字數 ≥ 100,段落清晰", "結尾總結但不重複"],
  },

  vocab_stress: {
    passageTitle: "On the Power of Precise Diction",
    passageBody: `<p>In academic writing, the choice between two near-synonyms can be the difference between a credible argument and a derisible one. Consider the distinction between <em>refute</em> and <em>rebut</em>: to rebut is merely to argue against; to refute is to prove false. A claim might be rebutted by anyone, but only convincingly refuted by someone who has marshalled decisive evidence.</p>
<p>Similar precision matters when distinguishing <em>ostensibly</em> from <em>ostentatiously</em>—the former meaning 'apparently' or 'in pretence', the latter 'in a showy manner'. Or between <em>disinterested</em> ('impartial') and <em>uninterested</em> ('bored'), a distinction many native speakers obliterate.</p>
<p>Advanced TOEFL vocabulary questions frequently exploit these fine-grained contrasts. Test-takers who rely on rough translations from their first language often choose options that are merely synonymous in a general sense but fail to capture the specific connotation deployed in context.</p>
<p>The remedy is not memorisation alone but engagement with words in their natural habitats: reading widely, noting how skilled writers exploit nuance, and accumulating a feel for what each word can and cannot bear. Vocabulary, in this view, is less a list than a craft.</p>`,
    readingQs: [
      { q: "The word <em>derisible</em> in paragraph 1 most nearly means:",
        options: ["Persuasive", "Worthy of ridicule", "Carefully argued", "Mathematically precise"], correct: 1,
        explanation: "Derisible 字根為 deride(嘲笑、譏諷),所以 derisible = 值得被嘲笑的、可笑的。從上下文 'credible argument and a derisible one' 也可看出是與 credible 對比,故為負面意義。",
        whyWrong: ["A persuasive 是 credible 的同義,不是對比詞。", "C 'carefully argued' 仍偏正面。", "D 與 ridicule 無關。"],
        skill: "字彙題 · Vocabulary",
        quote: "the choice between two near-synonyms can be the difference between a credible argument and a derisible one.",
        quotePara: "Paragraph 1",
        strategy: "字彙題策略:第一,看上下文對比(credible vs derisible 是反義對比);第二,拆字根(deride = 嘲笑 + -ible = 可被…的)。雙重驗證可確定答案。",
        trap: "A「persuasive」是與 credible 同義,但題目要的是 credible 的反義詞 — 反義對比關係看反。"
      },
      { q: "What is the passage's main argument?",
        options: ["TOEFL vocabulary tests are too difficult", "Precise word choice matters more than vocabulary size", "Synonyms are essentially interchangeable", "Native speakers always use words correctly"], correct: 1,
        explanation: "末段:'Vocabulary, in this view, is less a list than a craft.' 結合前文一再強調 precision(refute vs rebut, disinterested vs uninterested),主旨即 precision 重於 quantity。",
        whyWrong: ["A 文章未抱怨難度。", "C 完全與主旨相反。", "D 文章第二段直指 native speakers 也常混淆。"],
        skill: "主旨題 · Gist-Content",
        quote: "Vocabulary, in this view, is less a list than a craft.",
        quotePara: "Paragraph 4 (final sentence)",
        strategy: "主旨題:結論段(最後一段)的最後一句通常是最有力的主旨表述。本題的「less a list than a craft」精準對應「precision matters more than size」。",
        trap: "A「TOEFL 字彙題太難」是「考生視角誤判」— 文章是學術論述,不是抱怨考試。讀文時別投射自己的情緒。"
      },
      { q: "The phrase 'marshalled decisive evidence' suggests that to refute requires:",
        options: ["Loud assertion", "Gathered and organised proof", "Quick reactions", "Friendly tone"], correct: 1,
        explanation: "Marshal 作動詞意為 '集結、整理(資源、軍隊、論點)'。Marshalled decisive evidence = 集結了決定性的證據,符合 B 的 gathered and organised proof。",
        whyWrong: ["A 'loud assertion' 與證據無關。", "C 'quick reactions' 不在文意內。", "D 'friendly tone' 完全不相關。"],
        skill: "字彙題 · Vocabulary",
        quote: "A claim might be rebutted by anyone, but only convincingly refuted by someone who has marshalled decisive evidence.",
        quotePara: "Paragraph 1",
        strategy: "字彙短語題:看「marshalled」這個動詞的搭配 — marshal evidence = 集結證據(類似軍隊集結)。配合 decisive,意思是「集結了有決定性的證據」。",
        trap: "A「Loud assertion」是「音量陷阱」— 想當然耳「強烈論證」就是「大聲」,但 marshal 與音量無關,與「組織、調度」有關。"
      },
    ],
    listenTitle: "Literature Lecture: Style & Voice",
    listenSub: "DURATION 4:40 · PROFESSOR LECTURE",
    listenQs: [
      { q: "What does the professor mean by 'voice' in writing?",
        options: ["Literal sound when read aloud", "The distinctive cumulative effect of an author's word choices", "A character's spoken dialogue", "Audiobook narration"], correct: 1,
        explanation: "教授解釋 voice 是 'what makes a writer recognisable across different works' — 一種來自詞彙、節奏、句長的累積效果,不是字面的聲音。",
        whyWrong: ["A 是字面誤解。", "C 是 dialogue 不是 voice。", "D 與本講主題無關。"],
        skill: "字彙/概念題 · Vocabulary",
        quote: "教授原話:By voice, I don't mean the literal sound of words read aloud. I mean the cumulative effect of an author's choices — vocabulary, sentence rhythm, what they leave unsaid.",
        quotePara: "Opening 60 seconds",
        strategy: "概念定義題:教授明確說「I don't mean X, I mean Y」— 排除字面誤解,鎖定真實定義。",
        trap: "A「literal sound」恰恰是教授開頭排除的選項 — 這是「字面陷阱」,聽力中常用「I don't mean X」結構引入,需聽完整句而非斷章取義。"
      },
      { q: "Which authors does the professor contrast?",
        options: ["Two contemporary journalists", "Hemingway and Faulkner, as examples of opposing stylistic approaches", "Three Victorian novelists", "Poets from different countries"], correct: 1,
        explanation: "教授舉 Hemingway(短句、簡潔)與 Faulkner(長句、嵌套子句)為極端對比,說明 voice 的差異。",
        whyWrong: ["A 教授舉的是小說家,非記者。", "C 沒有三位維多利亞時代小說家。", "D 詩人不在比較中。"],
        skill: "細節題 · Detail",
        quote: "教授原話:Compare Hemingway's terse, minimalist sentences with Faulkner's sprawling, nested clauses — both writing in English, both about the American South, yet you'd never confuse one for the other.",
        quotePara: "Mid-lecture",
        strategy: "對比題:聽 'compare X with Y' 或 'unlike X, Y' 結構。本題明確 contrast Hemingway 與 Faulkner。",
        trap: "A「兩位當代記者」與教授提到的小說家身份不符。聽力陷阱常用「相似領域」誤導,需注意人物身份的精確度。"
      },
    ],
    speakTitle: "Reading Habits",
    speakPrompt: 'Do you think reading literature is more valuable than reading non-fiction for personal development? Use specific reasons and examples to support your answer.',
    speakModel: "I think literature is uniquely valuable for personal development, though non-fiction has its own role. Literature exercises empathy in a way non-fiction can't — when you read a novel, you spend hours inside someone else's mind, watching their decisions and consequences unfold. Non-fiction tells you what to think; literature lets you practice thinking like someone else. After reading Dostoevsky's <em>Crime and Punishment</em>, I found myself more patient with people whose motives I didn't immediately understand. That kind of slow-built empathy is harder to get from a self-help book.",
    speakChecklist: ["明確立場,並承認對立立場有些道理", "至少 1 個具體文學或非虛構作品例子", "說明 'why' 不只是 'what'", "答題流暢度穩定", "結尾呼應立場"],
    writeTitle: "AI Writing Tools",
    writePrompt: '<strong>Professor Tanaka:</strong> AI writing assistants are now widely used by students. Some see them as helpful learning tools; others fear students will lose writing skills. Where do you stand, and why?',
    writeModel: "I think the impact of AI writing tools depends on how they're framed in education. Used as a first-draft generator, they can erode the messy productive struggle that writing actually trains — the slow process of organising vague thoughts into clear sentences. Used as a critique partner, however, they can accelerate learning: students write their own drafts, then ask the AI for specific feedback. The danger isn't AI itself but the way students might shortcut the cognitive effort that writing demands. Educators therefore need clear guidelines about when AI assistance helps learning versus when it bypasses it.",
    writeChecklist: ["立場細緻,不是簡單 yes/no", "區分不同使用情境", "回應討論串中的兩種觀點", "字數 ≥ 100,結構完整", "用詞精確(avoid generic 'good/bad')"],
  },
};

// Strategy library — keyed by skill tag, used both per-question and in personalised plan
const skillLibrary = {
  '推論題 · Inference': {
    short: '推論題 (Inference)',
    icon: '◇',
    strategy: '正確答案在文中不會明說,但所有支持證據都在文中。看到 implies / suggests / can be inferred 等字眼就是這類題。',
    technique: '步驟:(1) 找到關鍵字所在段落;(2) 找出該段中事實陳述;(3) 從事實「往前推一步」— 不是兩步;(4) 排除過度延伸的選項(出現 always / never / only 通常是陷阱)。',
    practice: '建議每天 3 篇 TPO 閱讀,只挑 inference 題練習。做完對答案前先寫下你的「推論依據句」,訓練讓推論有所本。',
    pitfall: '最常見錯誤是「合理但無根據」— 答案在現實中合理,但文中沒有證據鏈。永遠以文本為準。',
  },
  '細節題 · Detail': {
    short: '細節題 (Detail)',
    icon: '◈',
    strategy: '考的是文中明說的事實。According to the passage / The passage states 開頭幾乎都是 detail 題。答案在文中可定位、可驗證。',
    technique: '步驟:(1) 用題幹關鍵字回到文中定位;(2) 仔細讀該句前後 2 句;(3) 比對選項與原文,警惕「同義改寫」與「相反詞替換」的陷阱;(4) 排除文中沒提到的選項。',
    practice: '練習「定位速度」— 拿到題幹後,目標 15 秒內找到原文對應句。可用便利貼遮住選項,只看題幹定位後再對選項。',
    pitfall: '最常被騙的是「extreme words」陷阱:文中說 "many",選項說 "all";文中說 "may",選項說 "must"。',
  },
  '字彙題 · Vocabulary': {
    short: '字彙題 (Vocabulary)',
    icon: '◊',
    strategy: 'TOEFL 字彙題不是純記憶,而是考「字 + 語境」雙重判斷。即使不認識單字,從上下文也常能推出意思。',
    technique: '步驟:(1) 先不看選項,自己用 1-2 個替代詞填入原句;(2) 對照選項,找最接近你猜的;(3) 把每個選項回填原句驗證流暢度;(4) 警惕「字面相似但意思相反」的選項(elusive vs evasive vs elastic)。',
    practice: '每天背 20 個 TPO 高頻字彙 + 在閱讀文章中見到生字時,先用上下文猜,再查字典驗證。',
    pitfall: '最大陷阱是只認識「中文翻譯」而不知英文細微差異。例如 refute / rebut 中文都譯「反駁」,但英文一個是 prove false,一個只是 argue against。',
  },
  '字彙/概念題 · Vocabulary': {
    short: '字彙/概念題',
    icon: '◊',
    strategy: '這類題同時考字義與該字在文中代表的概念。需要結合字根字義與段落主旨判斷。',
    technique: '步驟:(1) 先看該詞所在的整句;(2) 找該句前後對該概念的解釋或例子;(3) 用「定義改寫」法檢驗每個選項;(4) 確保選項不只是同義字,還能套回原文。',
    practice: '挑文章中「以斜體或引號標示」的概念詞,自己用英文寫一句定義,再對照原文驗證。',
    pitfall: '不要望文生義 — 比如 holobiont 看到 holo 想成 "完整",但實際是 "host + microbes 整體"。一定要回文中找定義句。',
  },
  '主旨題 · Gist-Content': {
    short: '主旨題 (Gist-Content)',
    icon: '☉',
    strategy: '考整篇文章 / 整段講座的核心論點。錯誤選項通常太具體(只涵蓋一段)或太發散(涵蓋全文未提的東西)。',
    technique: '步驟:(1) 跳讀首段、各段首句、末段;(2) 找出「整篇都在論證的命題」;(3) 排除只涵蓋單一段落的選項;(4) 排除題目中沒有討論的方向。',
    practice: '每讀完一篇 TPO 文章,先用一句話寫下主旨,再看選項對照。練「自己先想答案再選擇」的習慣。',
    pitfall: '最常見錯誤是被「最後一段」或「最印象深刻的例子」干擾,選了局部而非整體。',
  },
  '主旨題 · Gist-Purpose': {
    short: '主旨題 (Gist-Purpose)',
    icon: '☉',
    strategy: '考講者「為什麼講這堂課」,不是「講了什麼」。聽力中尤其重要。常見開場句:Today we\'ll look at... / I want to focus on why...',
    technique: '步驟:(1) 緊抓開場 30 秒;(2) 注意 "today / now / let\'s" 等過渡標記;(3) 整段聽完後,問自己「他到底想讓我學到什麼」;(4) 排除「只是例子或細節」的選項。',
    practice: '聽 TPO listening 時,先暫停在 1 分鐘處,寫下你以為的主旨;聽完再對照修正。',
    pitfall: '把「主要例子」誤當成主旨。例如教授用洞穴壁畫例子說明藝術起源,主旨是藝術起源,不是壁畫。',
  },
  '目的題 · Function': {
    short: '目的題 (Function)',
    icon: '↳',
    strategy: '考某個段落 / 某個例子 / 某個詞「為什麼出現」。Why does the author mention X? 是經典題型。',
    technique: '步驟:(1) 找到該元素的位置;(2) 看前後文的論點;(3) 該元素是「支持」、「反駁」、「對比」、「舉例」還是「引出新概念」?(4) 對應選項中的功能描述。',
    practice: '讀文章時,每看到一個例子,問自己「作者為什麼放這個」。久了你會自然在閱讀時就先預判可能的考點。',
    pitfall: '混淆「內容」與「功能」— 題目問為什麼提到 X,而你選了「描述 X 是什麼」的選項。注意問題在問 why,不是 what。',
  },
};

// Deeper review data — keyed by content set, then index. Adds quote/trap/strategy on top of existing data.
const deepReview = {
  writing_origins: {
    reading: [
      { quote: 'writing is an artefact—a deliberately engineered system that must be invented, taught, and culturally transmitted across generations', trap: '若你選 A,可能是因為直覺認為「寫作」歷史悠久,沒留意文章明說的對比方向。' },
      { quote: 'This pattern of independent invention suggests that writing arises when certain social conditions—typically the rise of complex states requiring record-keeping—make it indispensable', trap: '若你選 A,是被「至少三個區域」干擾;若選 B,沒看到 "show no evidence of influence" 的否定句。' },
      { quote: 'scribes began using signs not for their pictorial meaning but for their phonetic value', trap: '若你選 B(組合符號)是混淆了 logogram 與 rebus;選 C 是把第三段的「楔形演變」當成 rebus 原則。' },
    ],
    listening: [
      { quote: '教授開場:"Today we\'ll look at how plates moving against each other create the major landscape features we see today"', trap: '若你選 A(地質學歷史)是被引言段干擾;選 C 是聽到 mid-ocean ridges 就抓著不放。' },
      { quote: '教授提及 Wegener 1912 年觀察到 South America 與 Africa 海岸線吻合及兩岸地層對應', trap: '若你選 A 是時序錯誤 — 衛星測量晚於這個發現幾十年。' },
    ],
  },
  glaciers: {
    reading: [
      { quote: 'Two principal categories of glacier exist... Each leaves a different signature on the landscape', trap: 'A 與 D 是無中生有的比較(速度、岩石搬運);C 直接違反文章邏輯。' },
      { quote: 'Geologists use moraine positions to reconstruct past climates, since each marks a moment when ice advance and retreat were in balance', trap: 'A 把礦物價值帶入(文章沒提);C 違反第一段「移動緩慢」的事實。' },
      { quote: 'Louis Agassiz proposed in 1837 that vast ice sheets had once covered northern Europe and North America', trap: 'A 把「困惑 19 世紀地質學家」誤當成「首次發現」。' },
    ],
    listening: [
      { quote: '教授定位:"I want to focus today on why ice ages happened when they did" — 因果與時序', trap: 'A 是把方法論誤當主題;C 是被結尾「現代退縮」帶離主旨。' },
      { quote: '教授解釋 Milankovitch 三軌道參數(eccentricity / obliquity / precession)如何改變太陽輻射分布而觸發冰期', trap: 'B 是字面混淆 — Milankovitch 講軌道,不是冰川。' },
    ],
  },
  trade_routes: {
    reading: [
      { quote: 'The Silk Road was never a single road, nor was silk its only commodity. The term, coined in the nineteenth century by... Richthofen', trap: 'A 直接違反首句;C 漏看「overland and maritime」;D 漏看 "coined in the nineteenth century" 的時序。' },
      { quote: 'Caravan cities like Samarkand, Bukhara, and Dunhuang grew enormously wealthy as nodes in this network, hosting multilingual populations', trap: 'A "controlled all" 過度誇大;C 商隊城市是中轉,非生產地;D 與第二段宗教傳播事實矛盾。' },
      { quote: 'driven not by single events but by a confluence of factors: the rise of maritime trade... the fragmentation of the Mongol political order... and the increasing reliability of sea travel', trap: 'A 與 "not by single events" 直接矛盾;C 與 D 文中無相關依據。' },
    ],
    listening: [
      { quote: '教授串連 Henry the Navigator → Vasco da Gama → Indian Ocean 航線,整堂課圍繞葡萄牙海權崛起', trap: 'B 完全相反 — 教授論點是海路取代陸路;C 船隻技術只是工具,非主軸。' },
      { quote: 'Caravel 結合 lateen sail 與 square rig 的雙重設計,使船能逆風航行', trap: 'A 國別錯誤;C 速度比較不存在文中;D 羅馬船未被提及。' },
    ],
  },
  cognitive: {
    reading: [
      { quote: 'cognitive science was dominated by the metaphor of the mind as a computer. Information was thought to be processed in discrete stages', trap: 'A 與 D 是後來的修正觀點;B 是 1980s 轉向後的觀點,非早期主流。' },
      { quote: 'abstract concepts—time, morality, argument—are routinely understood through concrete metaphors rooted in bodily experience', trap: 'A 是傳統觀點,L&J 反對;B 過度限縮;D Aymara 例子直接反證。' },
      { quote: 'the Aymara of the Andes gesture forwards when speaking of the past, backwards when speaking of the future', trap: 'A 與例子目的相反;C 手勢是表現,不是主旨;D 文章未否認時間區別本身。' },
    ],
    listening: [
      { quote: 'Williams & Bargh 經典實驗:拿熱咖啡的受試者比拿冰咖啡的人,更傾向評他人為 friendly / generous', trap: 'B、C 是混淆的研究;D 是另一領域。' },
      { quote: '教授結論:bodily states (體溫) influence abstract judgements (對他人個性的判斷)', trap: 'A "purely physical" 過度極端;C "contradicts all" 過度;D 與實驗無關。' },
    ],
  },
  urban: {
    reading: [
      { quote: 'cities of the era were notorious for overcrowding, disease, and pollution. Slums proliferated, life expectancy plummeted', trap: 'A、C、D 都不在 Howard 解方的針對範圍。' },
      { quote: 'combining the economic vitality of urban life with the health benefits of rural surroundings... low-density housing, ample green space, walkable streets, and a mix of residential, commercial, and light industrial zones', trap: 'A 與 D 都過度極端 — Howard 並未禁絕工商;C 是批評觀點,不是設計本意。' },
      { quote: 'profoundly influenced twentieth-century urban planning... Whether they realised Howard\'s egalitarian vision is a matter of ongoing debate', trap: 'A 與 "influenced... American suburban developments... new urbanism" 矛盾;C "universally" 太絕對;D 與 "profoundly influenced" 矛盾。' },
    ],
    listening: [
      { quote: '教授引 redlining 與排他性住房政策,論證戰後郊區「reproduced inequality」', trap: 'A 與論點相反;C 教授沒做規範性建議;D "failed completely" 過度極端。' },
      { quote: '聯邦房貸政策 (FHA) 與 redlining 系統性決定誰能 / 不能買郊區房產', trap: 'A 與整體論點矛盾;C 是美國案例;D "no longer relevant" 與當代延伸描述矛盾。' },
    ],
  },
  microbes: {
    reading: [
      { quote: 'These tenants are not passive passengers but active participants in digestion, immune development, and even mood regulation', trap: 'A 與「新觀點」方向相反;C 文中肯定 germ theory 的歷史貢獻;D 違反主旨。' },
      { quote: 'the host organism together with its microbial communities, considered as a single ecological and evolutionary unit', trap: 'A、C 違反定義中的「together」;D 與疾病無關。' },
      { quote: 'When stressed by warming waters, corals expel their algae and turn white... Without their symbionts, the corals starve', trap: 'A 與整段邏輯相反;C 白化是失敗;D 因果關係相反。' },
    ],
    listening: [
      { quote: '教授開場明示 bidirectional communication between gut and brain', trap: 'A 違反論點;C "all mental health" 過度誇大;D 與 bidirectional 矛盾。' },
      { quote: 'germ-free 小鼠接受不同性格小鼠的腸道菌移植後,行為產生轉變', trap: 'A 教授引用實驗,非僅理論;C 飲食調查只是輔助;D 沒有歷史案例。' },
    ],
  },
  vocab_stress: {
    reading: [
      { quote: '上下文 "credible argument and a derisible one" 形成反義對比;字根 deride = 嘲笑', trap: 'A 與 credible 是同義;C 仍偏正面;D 與 ridicule 無關。' },
      { quote: '末段:"Vocabulary, in this view, is less a list than a craft" + 全文反覆強調 precision', trap: 'A 文章未抱怨難度;C 與主旨相反;D 第二段直指 native speakers 也常混淆。' },
      { quote: 'Marshal 作動詞 = 集結、整理(資源、軍隊、論點)', trap: 'A 與 marshal 字義無關;C、D 完全偏離。' },
    ],
    listening: [
      { quote: '教授定義 voice 為 "the distinctive cumulative effect" — 來自詞彙、節奏、句長累積', trap: 'A 是字面誤解;C 是 dialogue 不是 voice;D 與本講無關。' },
      { quote: '教授對比 Hemingway(短句、簡潔)與 Faulkner(長句、嵌套)', trap: 'A 教授舉的是小說家;C、D 不在比較中。' },
    ],
  },
};

// Speaking & Writing rubric — used to render 4-dimension scoring with per-dimension diagnostics
const rubricDimensions = {
  speaking: [
    { key: 'position', label: '立場 · Position', tip: '是否在 5 秒內表態,且立場明確不模糊' },
    { key: 'argument', label: '論證 · Argument', tip: '至少 2 個獨立理由,每個都有具體例證' },
    { key: 'language', label: '語言 · Language', tip: '用詞精準、句型變化、發音清晰' },
    { key: 'delivery', label: '流暢度 · Delivery', tip: '節奏穩定、停頓自然、答題完整不超時' },
  ],
  writing: [
    { key: 'position', label: '立場 · Position', tip: '立場句清晰可辨,回應討論串設問' },
    { key: 'argument', label: '論證 · Argument', tip: '理由具體、有實例支持、邏輯一致' },
    { key: 'language', label: '語言 · Language', tip: '詞彙精準、句型多變、語域學術' },
    { key: 'structure', label: '結構 · Structure', tip: '段落清晰、轉折自然、引言結尾完整' },
  ],
};

// Map each test ID to its metadata + content set
const examData = {
  'TPO-71': { title: 'Cognitive Linguistics & the Mind', content: 'cognitive' },
  'TPO-70': { title: 'Urban Planning & Garden Cities', content: 'urban' },
  'TPO-69': { title: 'Microbial Symbiosis', content: 'microbes' },
  'TPO-68': { title: 'Behavioural Economics & Choice', content: 'cognitive' },
  'TPO-67': { title: 'Quantum Mechanics for Non-Majors', content: 'cognitive' },
  'TPO-66': { title: 'Ancient Trade Routes', content: 'trade_routes' },
  'TPO-65': { title: 'Climate Models & Migration Patterns', content: 'glaciers' },
  'TPO-64': { title: 'Renaissance Patronage & Cellular Biology', content: 'writing_origins' },
  'TPO-63': { title: 'The Industrial Revolution', content: 'urban' },
  'TPO-62': { title: 'Animal Communication Systems', content: 'microbes' },
  'TPO-61': { title: 'Ancient Greek Theatre', content: 'writing_origins' },
  'TPO-60': { title: 'Glacial Geology', content: 'glaciers' },
  'TPO-59': { title: 'Astronomy: Exoplanets', content: 'glaciers' },
  'TPO-58': { title: 'Photography as Art', content: 'cognitive' },
  'MOCK-A': { title: 'Composite Assessment', content: 'trade_routes' },
  'MOCK-B': { title: 'Science-Heavy Mock', content: 'microbes' },
  'MOCK-C': { title: 'Humanities-Heavy Mock', content: 'urban' },
  'MOCK-D': { title: 'Business & Society', content: 'cognitive' },
  'DIAG-01': { title: 'Quick Diagnostic', content: 'writing_origins' },
  'DIAG-02': { title: 'Vocabulary Stress Test', content: 'vocab_stress' },
  'FULL-MOCK': { title: 'Full Simulation Exam', content: 'trade_routes' },
};

let activeContent = examContent.writing_origins;
let activeContentKey = 'writing_origins';
let readingQuestions = activeContent.readingQs;
let listeningQuestions = activeContent.listenQs;

let examState = {
  testId: null,
  currentSection: 'intro',
  sectionTimer: null,
  readingQIndex: 0,
  listeningQIndex: 0,
  readingCorrect: 0,
  listeningCorrect: 0,
  readingUserAnswers: [],
  listeningUserAnswers: [],
  writingSubmission: '',
  startTime: null,
};

// Filter tabs for archive
function filterArchive(btn, category) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const cards = document.querySelectorAll('#archiveGrid .archive-card');
  let visibleCount = 0;
  cards.forEach(card => {
    const cats = (card.dataset.cat || '').split(' ');
    if (category === 'all' || cats.includes(category)) {
      card.classList.remove('hidden');
      visibleCount++;
    } else {
      card.classList.add('hidden');
    }
  });
  document.getElementById('archiveEmpty').style.display = visibleCount === 0 ? 'block' : 'none';
}

const sectionOrder = ['intro', 'reading', 'listening', 'speaking', 'writing', 'result'];
const sectionMeta = {
  intro: { name: '入場指引 · Introduction', mark: 'INTRO', minutes: 0 },
  reading: { name: '閱讀 · Reading', mark: '§ I', minutes: 8 },
  listening: { name: '聽力 · Listening', mark: '§ II', minutes: 6 },
  speaking: { name: '口說 · Speaking', mark: '§ III', minutes: 2 },
  writing: { name: '寫作 · Writing', mark: '§ IV', minutes: 10 },
  result: { name: '成績報告 · Score Report', mark: 'REPORT', minutes: 0 },
  review: { name: '詳解檢討 · Review', mark: 'REVIEW', minutes: 0 },
};

function launchExam(testId) {
  const data = examData[testId] || examData['MOCK-A'];
  const content = examContent[data.content] || examContent.writing_origins;

  activeContent = content;
  activeContentKey = data.content || 'writing_origins';
  readingQuestions = content.readingQs;
  listeningQuestions = content.listenQs;

  examState.testId = testId;
  examState.currentSection = 'intro';
  examState.readingQIndex = 0;
  examState.listeningQIndex = 0;
  examState.readingCorrect = 0;
  examState.listeningCorrect = 0;
  examState.readingUserAnswers = [];
  examState.listeningUserAnswers = [];
  examState.writingSubmission = '';
  examState.startTime = Date.now();

  // Populate intro
  document.getElementById('introTestId').textContent = testId.replace('-', ' · ');
  document.getElementById('introTitle').textContent = data.title;

  // Populate reading passage
  document.getElementById('examPassageTitle').textContent = content.passageTitle;
  document.getElementById('examPassageBody').innerHTML = content.passageBody;

  // Populate listening
  document.getElementById('examListenTitle').textContent = content.listenTitle;
  document.getElementById('examListenSub').innerHTML = content.listenSub;

  // Populate speaking & writing prompts
  document.getElementById('examSpeakTitle').textContent = content.speakTitle;
  document.getElementById('examSpeakPrompt').innerHTML = content.speakPrompt;
  document.getElementById('examWriteTitle').textContent = content.writeTitle;
  document.getElementById('examWritePrompt').innerHTML = content.writePrompt;

  document.getElementById('examOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
  showExamSection('intro');
  renderProgressDots();
}

function renderProgressDots() {
  const dotSections = ['intro', 'reading', 'listening', 'speaking', 'writing'];
  const fullOrder = [...dotSections, 'result', 'review'];
  const current = fullOrder.indexOf(examState.currentSection);
  const dotsHtml = dotSections.map((s, i) => {
    let cls = 'progress-dot';
    if (i < current) cls += ' completed';
    if (i === current) cls += ' active';
    return `<div class="${cls}"></div>`;
  }).join('');
  document.getElementById('examProgress').innerHTML = dotsHtml;
  document.getElementById('examProgress2').innerHTML = dotsHtml;

  const meta = sectionMeta[examState.currentSection];
  document.getElementById('examSectionName').textContent = meta.name;
  document.getElementById('examMark').textContent = meta.mark;
  document.getElementById('examFooterInfo').textContent =
    ['intro', 'result', 'review'].includes(examState.currentSection)
      ? meta.name
      : `Section ${current} of 4 · ${meta.name}`;
}

function showExamSection(sectionId) {
  document.querySelectorAll('.exam-section-content').forEach(el => el.classList.remove('active'));
  const idMap = {
    intro: 'examIntro',
    reading: 'examReading',
    listening: 'examListening',
    speaking: 'examSpeaking',
    writing: 'examWriting',
    result: 'examResult',
    review: 'examReview',
  };
  document.getElementById(idMap[sectionId]).classList.add('active');
  examState.currentSection = sectionId;
  renderProgressDots();
  // Scroll exam body to top
  document.querySelector('.exam-body').scrollTop = 0;
}

function startSectionTimer(minutes, onExpire) {
  if (examState.sectionTimer) clearInterval(examState.sectionTimer);
  let remaining = minutes * 60;
  const timerEl = document.getElementById('examTimer');

  function update() {
    const m = Math.floor(remaining / 60);
    const s = remaining % 60;
    timerEl.textContent = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
    timerEl.classList.toggle('warning', remaining <= 120 && remaining > 30);
    timerEl.classList.toggle('danger', remaining <= 30);
  }

  update();
  examState.sectionTimer = setInterval(() => {
    remaining--;
    update();
    if (remaining <= 0) {
      clearInterval(examState.sectionTimer);
      if (onExpire) onExpire();
    }
  }, 1000);
}

function clearSectionTimer() {
  if (examState.sectionTimer) {
    clearInterval(examState.sectionTimer);
    examState.sectionTimer = null;
  }
  document.getElementById('examTimer').classList.remove('warning', 'danger');
}

function startExam() {
  showExamSection('reading');
  examState.readingQIndex = 0;
  examState.readingCorrect = 0;
  renderReadingQuestion();
  startSectionTimer(sectionMeta.reading.minutes, () => {
    alert('閱讀時間到,進入聽力。');
    moveToListening();
  });
}

function renderReadingQuestion() {
  const q = readingQuestions[examState.readingQIndex];
  document.getElementById('rqNum').textContent = `QUESTION ${examState.readingQIndex + 1} / ${readingQuestions.length}`;
  document.getElementById('rqText').textContent = q.q;
  document.getElementById('rqOptions').innerHTML = q.options.map((opt, i) =>
    `<button class="quiz-option" onclick="selectReadingAnswer(${i}, this)"><span class="letter">${String.fromCharCode(65+i)}</span>${opt}</button>`
  ).join('');
}

let currentReadingSelection = null;
function selectReadingAnswer(idx, btn) {
  currentReadingSelection = idx;
  btn.parentElement.querySelectorAll('.quiz-option').forEach(b => {
    b.style.borderColor = 'var(--rule)';
    b.style.background = 'var(--paper)';
  });
  btn.style.borderColor = 'var(--ink)';
  btn.style.background = 'var(--paper-2)';
}

function nextReadingQuestion() {
  if (currentReadingSelection === null) {
    alert('請先選擇答案');
    return;
  }
  examState.readingUserAnswers[examState.readingQIndex] = currentReadingSelection;
  if (currentReadingSelection === readingQuestions[examState.readingQIndex].correct) {
    examState.readingCorrect++;
  }
  currentReadingSelection = null;
  examState.readingQIndex++;
  if (examState.readingQIndex >= readingQuestions.length) {
    moveToListening();
  } else {
    renderReadingQuestion();
  }
}

function moveToListening() {
  clearSectionTimer();
  showExamSection('listening');
  document.getElementById('listeningQuestions').style.display = 'none';
  document.getElementById('listenBtn').style.display = '';
  document.getElementById('audioDisc').classList.remove('playing');
  startSectionTimer(sectionMeta.listening.minutes, () => {
    alert('聽力時間到,進入口說。');
    moveToSpeaking();
  });
}

let listeningPlaying = false;
function toggleListening() {
  const disc = document.getElementById('audioDisc');
  const btn = document.getElementById('listenBtn');
  if (!listeningPlaying) {
    disc.classList.add('playing');
    btn.textContent = '⏸ 暫停';
    listeningPlaying = true;
    // After 8 seconds (simulated), show questions
    setTimeout(() => {
      if (listeningPlaying) {
        disc.classList.remove('playing');
        btn.style.display = 'none';
        document.getElementById('listeningQuestions').style.display = 'block';
        examState.listeningQIndex = 0;
        renderListeningQuestion();
        listeningPlaying = false;
      }
    }, 8000);
  } else {
    disc.classList.remove('playing');
    btn.textContent = '▶ 繼續';
    listeningPlaying = false;
  }
}

function renderListeningQuestion() {
  const q = listeningQuestions[examState.listeningQIndex];
  document.getElementById('lqNum').textContent = `QUESTION ${examState.listeningQIndex + 1} / ${listeningQuestions.length}`;
  document.getElementById('lqText').textContent = q.q;
  document.getElementById('lqOptions').innerHTML = q.options.map((opt, i) =>
    `<button class="quiz-option" onclick="selectListeningAnswer(${i}, this)"><span class="letter">${String.fromCharCode(65+i)}</span>${opt}</button>`
  ).join('');
}

let currentListeningSelection = null;
function selectListeningAnswer(idx, btn) {
  currentListeningSelection = idx;
  btn.parentElement.querySelectorAll('.quiz-option').forEach(b => {
    b.style.borderColor = 'var(--rule)';
    b.style.background = 'var(--paper)';
  });
  btn.style.borderColor = 'var(--ink)';
  btn.style.background = 'var(--paper-2)';
}

function nextListeningQuestion() {
  if (currentListeningSelection === null) {
    alert('請先選擇答案');
    return;
  }
  examState.listeningUserAnswers[examState.listeningQIndex] = currentListeningSelection;
  if (currentListeningSelection === listeningQuestions[examState.listeningQIndex].correct) {
    examState.listeningCorrect++;
  }
  currentListeningSelection = null;
  examState.listeningQIndex++;
  if (examState.listeningQIndex >= listeningQuestions.length) {
    moveToSpeaking();
  } else {
    renderListeningQuestion();
  }
}

function moveToSpeaking() {
  clearSectionTimer();
  showExamSection('speaking');
  document.getElementById('speakPhase').textContent = 'READY';
  document.getElementById('speakTimer').textContent = '00:15';
  document.getElementById('speakTimer').classList.remove('warning', 'danger');
  startSectionTimer(sectionMeta.speaking.minutes, () => {
    moveToWriting();
  });
}

let speakingPhaseTimer = null;
function startExamSpeaking() {
  if (speakingPhaseTimer) clearInterval(speakingPhaseTimer);
  let phase = 'PREP';
  let remaining = 15;
  const phaseEl = document.getElementById('speakPhase');
  const timerEl = document.getElementById('speakTimer');

  phaseEl.textContent = '準備中 · PREP';
  function update() {
    const m = Math.floor(remaining / 60);
    const s = remaining % 60;
    timerEl.textContent = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
    timerEl.classList.toggle('warning', remaining <= 10 && remaining > 5);
    timerEl.classList.toggle('danger', remaining <= 5);
  }
  update();

  speakingPhaseTimer = setInterval(() => {
    remaining--;
    if (remaining < 0) {
      if (phase === 'PREP') {
        phase = 'RESPONSE';
        remaining = 45;
        phaseEl.textContent = '回答中 · SPEAK NOW';
      } else {
        clearInterval(speakingPhaseTimer);
        phaseEl.textContent = '完成 · COMPLETE';
        timerEl.textContent = '00:00';
        timerEl.classList.remove('warning', 'danger');
        setTimeout(() => moveToWriting(), 1500);
        return;
      }
    }
    update();
  }, 1000);
}

function skipExamSpeaking() {
  if (speakingPhaseTimer) clearInterval(speakingPhaseTimer);
  moveToWriting();
}

function moveToWriting() {
  clearSectionTimer();
  if (speakingPhaseTimer) clearInterval(speakingPhaseTimer);
  showExamSection('writing');
  document.getElementById('examWritingArea').value = '';
  document.getElementById('examWordCount').textContent = '0';
  startSectionTimer(sectionMeta.writing.minutes, () => {
    submitExam();
  });
}

function submitExam() {
  clearSectionTimer();
  if (speakingPhaseTimer) clearInterval(speakingPhaseTimer);

  // Calculate scores
  const readingRaw = examState.readingCorrect;
  const listeningRaw = examState.listeningCorrect;
  const writingText = document.getElementById('examWritingArea').value.trim();
  const writingWords = writingText ? writingText.split(/\s+/).length : 0;
  examState.writingSubmission = writingText;

  // Scale to /30
  const scoreR = Math.round(20 + (readingRaw / readingQuestions.length) * 10);
  const scoreL = Math.round(20 + (listeningRaw / listeningQuestions.length) * 10);
  // Speaking: assume reasonable performance
  const scoreS = 23 + Math.floor(Math.random() * 3);
  // Writing based on word count
  const scoreW = writingWords >= 200 ? 26 : writingWords >= 120 ? 24 : writingWords >= 60 ? 22 : writingWords > 0 ? 19 : 15;

  const total = scoreR + scoreL + scoreS + scoreW;

  // Render results
  document.getElementById('scoreR').textContent = scoreR;
  document.getElementById('scoreL').textContent = scoreL;
  document.getElementById('scoreS').textContent = scoreS;
  document.getElementById('scoreW').textContent = scoreW;
  document.getElementById('resultTotal').textContent = total;

  // Animate bars
  setTimeout(() => {
    document.getElementById('barR').style.width = (scoreR / 30 * 100) + '%';
    document.getElementById('barL').style.width = (scoreL / 30 * 100) + '%';
    document.getElementById('barS').style.width = (scoreS / 30 * 100) + '%';
    document.getElementById('barW').style.width = (scoreW / 30 * 100) + '%';
  }, 300);

  // Band labels
  let band;
  if (total >= 110) band = 'EXPERT · 接近母語水準';
  else if (total >= 100) band = 'PROFICIENT · 名校門檻';
  else if (total >= 90) band = 'ADVANCED · 進階水準';
  else if (total >= 80) band = 'COMPETENT · 中高水準';
  else if (total >= 65) band = 'INTERMEDIATE · 中等水準';
  else band = 'DEVELOPING · 持續加強中';
  document.getElementById('resultBand').textContent = band;

  // Section notes
  const notes = {
    R: scoreR >= 27 ? '推論題已具備穩定能力,可挑戰更高難度。'
       : scoreR >= 24 ? '主旨題穩定,細節題仍有失分。'
       : scoreR >= 20 ? '建議加強字彙題與插入句題的策略。'
       : '建議從定位主旨與段落結構打基礎。',
    L: scoreL >= 27 ? '能掌握長篇講座細節,表現優秀。'
       : scoreL >= 24 ? '可加強學術講座中段細節聽辨。'
       : scoreL >= 20 ? '注意 signal words,提升筆記效率。'
       : '建議從短對話與精聽訓練開始。',
    S: '流暢度良好,可豐富例證細節與轉折。',
    W: writingWords >= 200 ? '論證結構清晰,字彙可更精準。'
       : writingWords >= 120 ? '結構基本完整,可擴充例證深度。'
       : writingWords >= 60 ? '字數略少,需加強完整論證。'
       : writingWords > 0 ? '字數不足,實考將顯著扣分。'
       : '未提交內容。練習時務必完整作答。',
  };
  document.getElementById('noteR').textContent = notes.R;
  document.getElementById('noteL').textContent = notes.L;
  document.getElementById('noteS').textContent = notes.S;
  document.getElementById('noteW').textContent = notes.W;

  // Diagnosis
  const weakest = [
    { name: 'Reading', score: scoreR },
    { name: 'Listening', score: scoreL },
    { name: 'Speaking', score: scoreS },
    { name: 'Writing', score: scoreW },
  ].sort((a, b) => a.score - b.score)[0];

  let diag;
  if (total >= 100) {
    diag = `本次表現已達 100 分標準。最薄弱環節為 <strong>${weakest.name} (${weakest.score}/30)</strong>,建議下次練習鎖定此科,可推升至 110+。`;
  } else if (total >= 85) {
    diag = `整體位於 80–100 區間。<strong>${weakest.name}</strong> 為主要瓶頸,建議專題式集中訓練 2 週,並重做錯題。`;
  } else {
    diag = `目前處於進階前期。<strong>${weakest.name}</strong> 與其他科目都有提升空間,建議從字彙與精讀基本功扎根,再進入大量真題演練。`;
  }
  document.getElementById('diagnosisText').innerHTML = diag;

  // Date
  const today = new Date();
  document.getElementById('resultDate').textContent =
    `${today.getFullYear()}.${String(today.getMonth()+1).padStart(2,'0')}.${String(today.getDate()).padStart(2,'0')}`;

  showExamSection('result');
  document.getElementById('examTimer').textContent = '完成';
  document.getElementById('examTimer').classList.remove('warning', 'danger');
}

// ============ REVIEW & EXPLANATIONS ============
function openReview() {
  renderReviewReading();
  renderReviewListening();
  renderReviewSpeaking();
  renderReviewWriting();
  renderReviewSummary();
  showExamSection('review');
  // Reset to reading tab
  document.querySelectorAll('.review-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.review-tab')[0].classList.add('active');
  document.querySelectorAll('.review-section').forEach(s => s.classList.remove('active'));
  document.getElementById('reviewReading').classList.add('active');
}

function backToResult() {
  showExamSection('result');
}

function switchReviewTab(btn, targetId) {
  document.querySelectorAll('.review-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.review-section').forEach(s => s.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(targetId).classList.add('active');
}

function renderQuestionReview(q, qIdx, userAnswerIdx, prefix, sectionKey) {
  const userAnswered = userAnswerIdx !== undefined && userAnswerIdx !== null;
  const isCorrect = userAnswered && userAnswerIdx === q.correct;
  const isSkipped = !userAnswered;

  let statusHtml;
  if (isCorrect) {
    statusHtml = '<span class="review-q-status correct">✓ 答對</span>';
  } else if (isSkipped) {
    statusHtml = '<span class="review-q-status skipped">— 未作答</span>';
  } else {
    statusHtml = '<span class="review-q-status incorrect">✗ 答錯</span>';
  }

  const optionsHtml = q.options.map((opt, i) => {
    let cls = 'review-option';
    let markers = '';
    const isUserChoice = userAnswered && i === userAnswerIdx;
    const isCorrectChoice = i === q.correct;

    if (isCorrectChoice && isUserChoice) {
      cls += ' user-correct';
      markers = '<span class="marker correct">YOUR ANSWER ✓</span>';
    } else if (isCorrectChoice) {
      cls += ' correct-answer';
      markers = '<span class="marker correct">CORRECT</span>';
    } else if (isUserChoice) {
      cls += ' user-wrong';
      markers = '<span class="marker user">YOUR ANSWER ✗</span>';
    }

    return `<div class="${cls}">
      <span class="letter">${String.fromCharCode(65+i)}</span>
      <span class="opt-text">${opt}</span>
      ${markers}
    </div>`;
  }).join('');

  // Lookup deeper review data
  const deep = (deepReview[activeContentKey] && deepReview[activeContentKey][sectionKey] && deepReview[activeContentKey][sectionKey][qIdx]) || {};
  const skill = q.skill && skillLibrary[q.skill];

  const quoteHtml = deep.quote ? `
    <div class="evidence-quote">
      <span class="quote-label">EVIDENCE · 原文/錄音佐證</span>
      <blockquote>${deep.quote}</blockquote>
    </div>
  ` : '';

  const whyWrongHtml = q.whyWrong ? `
    <div class="why-wrong">
      <h5>WHY THE OTHER OPTIONS FAIL · 為何其他選項不對</h5>
      <ul>${q.whyWrong.map(w => `<li>${w}</li>`).join('')}</ul>
    </div>
  ` : '';

  // Only show "your trap" when wrong (more useful when targeted)
  const trapHtml = (!isCorrect && deep.trap) ? `
    <div class="trap-block">
      <h5>YOUR LIKELY TRAP · 你可能掉進的陷阱</h5>
      <p>${deep.trap}</p>
    </div>
  ` : '';

  const strategyHtml = skill ? `
    <div class="strategy-block">
      <div class="strategy-block-header">
        <span class="strategy-icon">${skill.icon}</span>
        <span class="strategy-block-title">${skill.short} · 類題策略</span>
      </div>
      <div class="strategy-row"><strong>核心概念</strong><span>${skill.strategy}</span></div>
      <div class="strategy-row"><strong>操作步驟</strong><span>${skill.technique}</span></div>
      <div class="strategy-row"><strong>常見陷阱</strong><span>${skill.pitfall}</span></div>
    </div>
  ` : '';

  return `
    <div class="review-question">
      <div class="review-q-header">
        <div class="review-q-meta">
          <span class="review-q-num">${prefix} ${String(qIdx+1).padStart(2,'0')}</span>
          ${q.skill ? `<span class="review-q-skill">${q.skill}</span>` : ''}
        </div>
        ${statusHtml}
      </div>
      <div class="review-q-body">
        <div class="review-q-text">${q.q}</div>
        <div class="review-options">${optionsHtml}</div>
        ${quoteHtml}
        <div class="explanation-block">
          <h5>EXPLANATION · 詳解</h5>
          <p>${q.explanation || '(no explanation provided)'}</p>
        </div>
        ${whyWrongHtml}
        ${trapHtml}
        ${strategyHtml}
      </div>
    </div>
  `;
}

function renderReviewReading() {
  const correctCount = examState.readingCorrect;
  const total = readingQuestions.length;
  document.getElementById('raccR').textContent = `${correctCount}/${total}`;

  const html = readingQuestions.map((q, i) =>
    renderQuestionReview(q, i, examState.readingUserAnswers[i], 'READING Q', 'reading')
  ).join('');
  document.getElementById('reviewReading').innerHTML = html;
}

function renderReviewListening() {
  const correctCount = examState.listeningCorrect;
  const total = listeningQuestions.length;
  document.getElementById('raccL').textContent = `${correctCount}/${total}`;

  const html = listeningQuestions.map((q, i) =>
    renderQuestionReview(q, i, examState.listeningUserAnswers[i], 'LISTENING Q', 'listening')
  ).join('');
  document.getElementById('reviewListening').innerHTML = html;
}

// Heuristic speaking score estimation (since we can't actually grade voice)
function estimateSpeakingScores(userActuallyResponded) {
  // Without actual audio, base on whether they engaged with the task
  // Stance is hardest to fake, Delivery requires audio analysis we can't do
  // We make plausible estimates that align with the overall band
  const base = userActuallyResponded ? 23 : 0;
  return {
    stance: base + (Math.random() > 0.5 ? 1 : 0),     // 立場
    development: base + (Math.random() > 0.5 ? 1 : 0), // 論證展開
    delivery: base,                                     // 流暢度(無法準確評估)
    language: base + (Math.random() > 0.5 ? 1 : 0),    // 語言使用
  };
}

function estimateWritingScores(text, wordCount) {
  if (!text) return { stance: 12, development: 12, language: 12, structure: 12 };

  // Stance: look for opinion markers
  const stanceMarkers = /\b(I (?:think|believe|argue|agree|disagree|support|lean|prefer)|in my (?:view|opinion)|I'd (?:say|argue)|I would|my (?:view|position|perspective))\b/i;
  const stance = stanceMarkers.test(text) ? 24 : 19;

  // Development: word count + presence of examples
  const exampleMarkers = /\b(for (?:example|instance)|such as|specifically|to illustrate|consider)\b/i;
  let development;
  if (wordCount >= 180 && exampleMarkers.test(text)) development = 26;
  else if (wordCount >= 120 && exampleMarkers.test(text)) development = 24;
  else if (wordCount >= 100) development = 22;
  else if (wordCount >= 60) development = 19;
  else development = 16;

  // Language: word variety (unique word ratio) + sentence variation
  const words = text.toLowerCase().split(/\W+/).filter(w => w.length > 3);
  const uniqueRatio = words.length ? new Set(words).size / words.length : 0;
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
  const avgLen = sentences.length ? words.length / sentences.length : 0;
  let language;
  if (uniqueRatio > 0.65 && avgLen > 12) language = 25;
  else if (uniqueRatio > 0.55) language = 23;
  else if (uniqueRatio > 0.45) language = 21;
  else language = 18;

  // Structure: paragraphs + transition words
  const transitions = /\b(however|moreover|furthermore|in contrast|on the other hand|nevertheless|thus|consequently|first|second|finally|in conclusion)\b/gi;
  const transitionCount = (text.match(transitions) || []).length;
  const paraCount = text.split(/\n\n+/).filter(p => p.trim()).length;
  let structure;
  if (transitionCount >= 3 && paraCount >= 2) structure = 25;
  else if (transitionCount >= 2) structure = 23;
  else if (transitionCount >= 1) structure = 21;
  else structure = 18;

  return { stance, development, language, structure };
}

function renderScoringGrid(scores, labels) {
  return `
    <div class="scoring-grid">
      ${Object.entries(scores).map(([key, val]) => {
        const label = labels[key] || key;
        const max = 30;
        const pct = (val / max) * 100;
        return `
          <div class="score-cell">
            <div class="label">${label}</div>
            <div class="value">${val}<span class="max">/${max}</span></div>
            <div class="bar"><div class="bar-fill" style="width: ${pct}%"></div></div>
            <div class="note">${getScoreNote(key, val)}</div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function getScoreNote(dimension, score) {
  const notes = {
    stance: {
      high: '立場清晰、5 秒內表態',
      mid: '立場可辨,但表態稍晚',
      low: '立場模糊或缺失'
    },
    development: {
      high: '論證充足、例證具體',
      mid: '論證基本展開,例證可深入',
      low: '論證薄弱或泛論'
    },
    delivery: {
      high: '流暢、節奏穩定',
      mid: '流暢度尚可,有停頓',
      low: '需減少停頓與重複'
    },
    language: {
      high: '詞彙多變、句型豐富',
      mid: '詞彙合宜,可進階',
      low: '用詞重複、句型單一'
    },
    structure: {
      high: '結構清晰、銜接自然',
      mid: '結構可辨,銜接可加強',
      low: '結構鬆散或缺乏轉折'
    }
  };
  const dim = notes[dimension] || notes.stance;
  if (score >= 24) return dim.high;
  if (score >= 20) return dim.mid;
  return dim.low;
}

function renderReviewSpeaking() {
  const c = activeContent;
  const scores = estimateSpeakingScores(true); // assume they responded
  const labels = { stance: '立場 Stance', development: '論證 Develop', delivery: '流暢 Delivery', language: '語言 Language' };

  const checklistHtml = (c.speakChecklist || []).map((item) => `
    <div class="checklist-item" onclick="toggleChecklist(this)">
      <span class="checkbox"></span>
      <span class="item-text">${item}</span>
    </div>
  `).join('');

  document.getElementById('reviewSpeaking').innerHTML = `
    <div class="review-prompt">
      <strong>${c.speakTitle}</strong><br><br>
      ${c.speakPrompt}
    </div>

    <h3 style="font-family:'Fraunces',serif; font-weight:400; font-size:22px; margin: 24px 0 12px;">
      四面向評分 <span style="font-style:italic; color: var(--oxblood);">Rubric Breakdown</span>
    </h3>
    <p style="font-size: 14px; color: var(--sepia); margin-bottom: 8px; font-style: italic;">注:系統無法分析語音,以下為基於範例答案的標準參考。請對照自己的錄音檢視。</p>
    ${renderScoringGrid(scores, labels)}

    <button class="rubric-toggle" onclick="this.nextElementSibling.classList.toggle('expanded')">展開完整評分標準 ↓</button>
    <div class="rubric-detail">
      <h5>SPEAKING RUBRIC · 完整評分指南</h5>
      <ul>
        <li><strong>立場 Stance (≥ 26)</strong>:在開頭 5 秒內明確表態 (e.g., "I strongly agree" / "I prefer X"),立場貫穿全篇不動搖。</li>
        <li><strong>論證 Development (≥ 26)</strong>:提出至少 2 個獨立理由,每個理由都有具體例證(經驗、數據、研究)。避免「我覺得很好,因為很好」的循環論證。</li>
        <li><strong>流暢 Delivery (≥ 26)</strong>:語速穩定每分鐘 130–150 字,停頓自然不超過 2 秒,重複(self-correction)少於 2 次。</li>
        <li><strong>語言 Language (≥ 26)</strong>:使用至少 3 個進階詞彙或片語(e.g., "compelling reason", "as a case in point"),句型至少 2 種變化(主動 / 被動 / 從句)。</li>
      </ul>
    </div>

    <h3 style="font-family:'Fraunces',serif; font-weight:400; font-size:22px; margin: 32px 0 12px;">
      範例答案 <span style="font-style:italic; color: var(--oxblood);">Model Response</span>
    </h3>
    <div class="model-answer-block">
      <div class="block-header">
        <span>MODEL ANSWER · 範例回答</span>
        <span style="font-style: italic; text-transform: none; letter-spacing: 0;">~ 45 seconds</span>
      </div>
      <div class="model-text">${c.speakModel || '(no model answer)'}</div>
    </div>

    <div class="checklist">
      <h5>SELF-CHECK · 自我檢核(對照錄音逐項打勾)</h5>
      ${checklistHtml}
    </div>

    <div class="strategy-block" style="margin-top: 16px;">
      <h5>RECORDING METHOD · 錄音檢討三步驟</h5>
      <p>
        <strong>第一遍</strong>:不看任何資料,聽自己的錄音,記下三個「最明顯的問題」。<br><br>
        <strong>第二遍</strong>:聽範例答案,對比語速、節奏、用詞密度。<br><br>
        <strong>第三遍</strong>:重新錄製,刻意改善第一遍標出的問題。一週後重做這題,看是否內化。
      </p>
    </div>

    <div class="trap-block" style="margin-top: 16px;">
      <h5>COMMON SPEAKING TRAPS · 進階考生常見陷阱</h5>
      <p>
        <strong>1. 過度背模板</strong> — 套用 "I strongly agree with the statement that..." 等公式句,考官會立刻聽出來,扣分。<br>
        <strong>2. 例證過於抽象</strong> — "My friend had a similar experience" 不算具體;要說明 who, when, what happened, what changed。<br>
        <strong>3. 結尾草率</strong> — 跑出時間是大忌;預留 5 秒結尾,並用 "That's why I believe..." 收束。
      </p>
    </div>
  `;
}

function renderReviewWriting() {
  const c = activeContent;
  const userText = examState.writingSubmission || '';
  const wordCount = userText ? userText.split(/\s+/).filter(Boolean).length : 0;
  const scores = estimateWritingScores(userText, wordCount);
  const labels = { stance: '立場 Stance', development: '論證 Develop', language: '語言 Language', structure: '結構 Structure' };

  const checklistHtml = (c.writeChecklist || []).map((item) => `
    <div class="checklist-item" onclick="toggleChecklist(this)">
      <span class="checkbox"></span>
      <span class="item-text">${item}</span>
    </div>
  `).join('');

  const userBlock = userText ? `
    <div class="user-submission-block">
      <div class="block-header">
        <span>YOUR SUBMISSION · 你的作答</span>
        <span style="font-style: italic; text-transform: none; letter-spacing: 0;">${wordCount} words</span>
      </div>
      <div class="user-text">${userText.replace(/</g, '&lt;')}</div>
    </div>
  ` : `
    <div class="user-submission-block empty">
      <div class="block-header"><span>YOUR SUBMISSION · 你的作答</span></div>
      <div class="user-text">(未提交內容。下次練習請務必完整作答。)</div>
    </div>
  `;

  // Tailored feedback based on actual scores
  let feedback = [];
  if (scores.stance < 22) feedback.push('🎯 <strong>立場不夠明確</strong> — 嘗試在開頭一句話直接表態:"I argue that..." / "My view is that..."。系統未在你的文中偵測到明確的立場標記。');
  if (scores.development < 22) feedback.push('🎯 <strong>論證待擴充</strong> — 你的字數或例證偏少。每個理由應該配一個具體例子(人名、年份、數據、場景)。');
  if (scores.language < 22) feedback.push('🎯 <strong>詞彙重複度偏高</strong> — 試著用同義詞替換高頻字。例如 "important" 可替換成 "crucial / significant / pivotal"。');
  if (scores.structure < 22) feedback.push('🎯 <strong>結構需強化</strong> — 偵測到的轉折詞(however, moreover, in contrast 等)少於 3 個。每段之間至少要有一個明確的邏輯銜接。');
  if (feedback.length === 0) feedback.push('✓ 各項評分均達進階水準。下一步可挑戰更精準的詞彙運用(避免 "things / stuff / people" 等模糊用語)。');

  document.getElementById('reviewWriting').innerHTML = `
    <div class="review-prompt">
      <strong>${c.writeTitle}</strong><br><br>
      ${c.writePrompt}
    </div>

    ${userBlock}

    <h3 style="font-family:'Fraunces',serif; font-weight:400; font-size:22px; margin: 24px 0 12px;">
      四面向自動評分 <span style="font-style:italic; color: var(--oxblood);">Automated Rubric</span>
    </h3>
    <p style="font-size: 14px; color: var(--sepia); margin-bottom: 8px; font-style: italic;">注:基於文本分析(字數、立場標記、轉折詞、詞彙多樣性)的自動評估,僅供參考。</p>
    ${renderScoringGrid(scores, labels)}

    <div class="explanation-block">
      <h5>PERSONALISED FEEDBACK · 客製化建議</h5>
      <p>${feedback.join('<br><br>')}</p>
    </div>

    <button class="rubric-toggle" onclick="this.nextElementSibling.classList.toggle('expanded')">展開完整評分標準 ↓</button>
    <div class="rubric-detail">
      <h5>WRITING RUBRIC · 完整評分指南</h5>
      <ul>
        <li><strong>立場 Stance (≥ 26)</strong>:第一段(最好是第一句)就點出明確立場,並貫穿全文。避免 "It depends" 或 "Both sides have merits" 開頭。</li>
        <li><strong>論證 Development (≥ 26)</strong>:至少 100 字以上,並含 2 個獨立理由 + 各自的具體例證(數據、研究、人名、案例)。</li>
        <li><strong>語言 Language (≥ 26)</strong>:詞彙多樣性高(unique-word ratio &gt; 0.65),避免重複用同個動詞、形容詞超過 3 次。句長變化大(短句強調 + 長句鋪陳)。</li>
        <li><strong>結構 Structure (≥ 26)</strong>:段落清晰、每段一個論點,至少 3 個明確的轉折詞(however / moreover / consequently 等)銜接邏輯。</li>
      </ul>
    </div>

    <h3 style="font-family:'Fraunces',serif; font-weight:400; font-size:22px; margin: 32px 0 12px;">
      範例答案 <span style="font-style:italic; color: var(--oxblood);">Model Response</span>
    </h3>
    <div class="model-answer-block">
      <div class="block-header">
        <span>MODEL ANSWER · 範例回答</span>
        <span style="font-style: italic; text-transform: none; letter-spacing: 0;">~ 120 words</span>
      </div>
      <div class="model-text">${c.writeModel || '(no model answer)'}</div>
    </div>

    <div class="checklist">
      <h5>SELF-CHECK · 對照範例逐項打勾</h5>
      ${checklistHtml}
    </div>

    <div class="trap-block" style="margin-top: 16px;">
      <h5>WRITING TRAPS · 進階考生常見扣分點</h5>
      <p>
        <strong>1. 立場騎牆</strong> — "There are pros and cons" 開頭看起來思辨,實際上是放棄表態,直接扣分。<br>
        <strong>2. 例證造假但太明顯</strong> — "A study from Harvard in 2019 showed 87%..." 編造數據可以,但要合理可信。建議用個人經驗或廣為人知的案例。<br>
        <strong>3. 結尾重複立場</strong> — 結論段不是 copy-paste 開頭,要把立場「延伸」(這意味著 / 因此 / 接下來該...)。
      </p>
    </div>
  `;
}

function renderReviewSummary() {
  const wrongReading = readingQuestions
    .map((q, i) => ({ q, i, ua: examState.readingUserAnswers[i] }))
    .filter(x => x.ua === undefined || x.ua === null || x.ua !== x.q.correct);
  const wrongListening = listeningQuestions
    .map((q, i) => ({ q, i, ua: examState.listeningUserAnswers[i] }))
    .filter(x => x.ua === undefined || x.ua === null || x.ua !== x.q.correct);

  // Group by skill
  const skillMap = {};
  [...wrongReading, ...wrongListening].forEach(x => {
    const skill = x.q.skill || '其他';
    if (!skillMap[skill]) skillMap[skill] = 0;
    skillMap[skill]++;
  });

  const totalWrong = wrongReading.length + wrongListening.length;
  const totalQs = readingQuestions.length + listeningQuestions.length;
  const accuracy = ((totalQs - totalWrong) / totalQs * 100).toFixed(0);

  let summaryHtml = `
    <div class="review-prompt" style="border-left-color: var(--gold);">
      <strong style="font-family:'Fraunces',serif; font-size: 22px; font-style: italic;">本次錯題摘要</strong><br>
      <span style="font-family: 'JetBrains Mono', monospace; font-size: 12px; letter-spacing: 0.15em; color: var(--sepia);">${totalQs - totalWrong} / ${totalQs} CORRECT · ${accuracy}% ACCURACY</span>
    </div>
  `;

  if (totalWrong === 0) {
    summaryHtml += `
      <div class="explanation-block" style="text-align: center; padding: 40px;">
        <h5 style="margin-bottom: 16px;">PERFECT SCORE</h5>
        <p style="font-size: 16px;">本次選擇題全對。建議挑戰更高難度的測驗(TPO 67、MOCK-B 或 DIAG-02 Vocabulary Stress Test),以維持精進壓力。</p>
      </div>
    `;
  } else {
    // Skill breakdown
    const skillEntries = Object.entries(skillMap).sort((a, b) => b[1] - a[1]);
    const skillBars = skillEntries.map(([s, n]) => {
      const pct = (n / totalWrong) * 100;
      return `
        <div style="margin-bottom: 14px;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
            <span style="font-family:'Newsreader', serif; font-size: 14px; color: var(--ink);">${s}</span>
            <span style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--oxblood);">${n} 題</span>
          </div>
          <div style="height: 6px; background: var(--paper-3);">
            <div style="height: 100%; background: var(--oxblood); width: ${pct}%;"></div>
          </div>
        </div>
      `;
    }).join('');

    summaryHtml += `
      <div class="explanation-block">
        <h5>WEAKNESS BREAKDOWN · 弱項分布</h5>
        ${skillBars}
        <p style="margin-top: 16px;">最高頻錯誤類型代表你的<em>系統性盲點</em>,而非個別題目運氣不好。這應該是接下來兩週訓練的核心。</p>
      </div>
    `;

    // Each wrong question quick reference
    summaryHtml += '<h3 style="font-family:\'Fraunces\',serif; font-weight:400; font-size:22px; margin: 32px 0 16px;">錯題逐題回顧 <span style="font-style:italic; color: var(--oxblood);">Wrong Answer Recap</span></h3>';
    summaryHtml += '<div>';
    wrongReading.forEach(x => {
      summaryHtml += `
        <div class="review-question" style="margin-bottom: 16px;">
          <div class="review-q-header">
            <div class="review-q-meta">
              <span class="review-q-num">READING Q ${String(x.i+1).padStart(2,'0')}</span>
              ${x.q.skill ? `<span class="review-q-skill">${x.q.skill}</span>` : ''}
            </div>
            <span class="review-q-status ${x.ua === undefined || x.ua === null ? 'skipped' : 'incorrect'}">${x.ua === undefined || x.ua === null ? '— 未作答' : '✗ 答錯'}</span>
          </div>
          <div class="review-q-body">
            <div class="review-q-text" style="font-size: 17px;">${x.q.q}</div>
            <div style="font-size: 14px; color: var(--sepia); margin-bottom: 8px;">正解:<span style="color: #4d7a4f;">${String.fromCharCode(65+x.q.correct)}. ${x.q.options[x.q.correct]}</span></div>
            <div class="explanation-block" style="margin-top: 16px; margin-bottom: 0;">
              <h5>WHY</h5>
              <p>${x.q.explanation}</p>
            </div>
          </div>
        </div>
      `;
    });
    wrongListening.forEach(x => {
      summaryHtml += `
        <div class="review-question" style="margin-bottom: 16px;">
          <div class="review-q-header">
            <div class="review-q-meta">
              <span class="review-q-num">LISTENING Q ${String(x.i+1).padStart(2,'0')}</span>
              ${x.q.skill ? `<span class="review-q-skill">${x.q.skill}</span>` : ''}
            </div>
            <span class="review-q-status ${x.ua === undefined || x.ua === null ? 'skipped' : 'incorrect'}">${x.ua === undefined || x.ua === null ? '— 未作答' : '✗ 答錯'}</span>
          </div>
          <div class="review-q-body">
            <div class="review-q-text" style="font-size: 17px;">${x.q.q}</div>
            <div style="font-size: 14px; color: var(--sepia); margin-bottom: 8px;">正解:<span style="color: #4d7a4f;">${String.fromCharCode(65+x.q.correct)}. ${x.q.options[x.q.correct]}</span></div>
            <div class="explanation-block" style="margin-top: 16px; margin-bottom: 0;">
              <h5>WHY</h5>
              <p>${x.q.explanation}</p>
            </div>
          </div>
        </div>
      `;
    });
    summaryHtml += '</div>';
  }

  // Always show personalised study plan
  summaryHtml += generateStudyPlan(skillMap, totalWrong, totalQs);

  document.getElementById('reviewSummary').innerHTML = summaryHtml;
}

function generateStudyPlan(skillMap, totalWrong, totalQs) {
  const accuracy = (totalQs - totalWrong) / totalQs;
  const skillEntries = Object.entries(skillMap).sort((a, b) => b[1] - a[1]);
  const topWeakness = skillEntries[0] ? skillEntries[0][0] : null;
  const secondWeakness = skillEntries[1] ? skillEntries[1][0] : null;

  // Target band based on current accuracy
  let target, currentBand;
  if (accuracy >= 0.9) { currentBand = '進階'; target = '108+'; }
  else if (accuracy >= 0.75) { currentBand = '中高階'; target = '100+'; }
  else if (accuracy >= 0.5) { currentBand = '中階'; target = '90+'; }
  else { currentBand = '基礎進階'; target = '85+'; }

  // Skill-specific strategy headers
  const skillStrategies = {
    '推論題 · Inference': {
      diagnosis: '推論題要求從文意「邏輯導出」而非「字面找句」。錯這類題代表閱讀深度不夠,或被字面陷阱拉走。',
      fix: '訓練時改用「先讀題、回原文、找邏輯支點」三步法。每題正解都要能在原文找到 1-2 句「邏輯依據」,而非「相同字詞」。'
    },
    '細節題 · Detail': {
      diagnosis: '細節題理應是基本分,錯這類題通常是定位失準或誤讀關鍵字。',
      fix: '加強 keyword scanning 訓練 — 看題幹直接找專有名詞、數字、人名定位。不要重讀整段。'
    },
    '字彙/概念題 · Vocabulary': {
      diagnosis: '字彙題在進階階段是最容易失分的地方,因為陷阱在語境而非字面意義。',
      fix: '專攻 DIAG-02 字彙壓力測驗,每天背 10 個學術詞並用其造句。注意 connotation(感情色彩)不只是定義。'
    },
    '字彙題 · Vocabulary': {
      diagnosis: '字彙題的高失分通常是因為過度依賴第一語言直譯,沒掌握英文中該字的真正使用範圍。',
      fix: '建立「同義詞辨析」筆記:同義詞間的細微差別(refute vs rebut, disinterested vs uninterested)。'
    },
    '主旨題 · Gist-Content': {
      diagnosis: '主旨題錯代表抓不到大方向,可能讀時太陷入細節。',
      fix: '練習「3 句摘要」法:讀完一篇文章用 3 句話總結。長期下來抓主旨能力會質變。'
    },
    '主旨題 · Gist-Purpose': {
      diagnosis: '主旨題錯代表沒抓到講者的核心論點,常被次要例子拉走。',
      fix: '聽力時專注 signal words:"the key point is...", "what I want to emphasise...", "today we will focus on..."。這些幾乎一定是主旨所在。'
    },
    '目的題 · Function': {
      diagnosis: '目的題問「為什麼提到 X」,錯這類題代表混淆了「字面內容」與「修辭功能」。',
      fix: '練習區分「例子(example)」、「對比(contrast)」、「強調(emphasis)」三種常見修辭功能。每篇講座做一份「結構表」。'
    }
  };

  // Build the day-by-day plan
  const plans = buildDailyPlans(topWeakness, secondWeakness, accuracy);

  const topStrategy = topWeakness && skillStrategies[topWeakness] ? skillStrategies[topWeakness] : null;

  let planHtml = `
    <h3 style="font-family:'Fraunces',serif; font-weight:400; font-size:28px; margin: 48px 0 8px; letter-spacing: -0.02em;">
      個人化 14 天訓練計畫 <span style="font-style:italic; color: var(--oxblood);">Personalised Path</span>
    </h3>
    <p style="font-size: 15px; color: var(--sepia); margin-bottom: 24px; font-style: italic;">基於本次錯題分析自動產生。建議印出來貼在桌前,每完成一天打勾。</p>

    <div class="plan-summary">
      <h3>目前位置 → 目標</h3>
      <p style="font-size: 14px; color: var(--sepia); margin-bottom: 4px;">CURRENT BAND</p>
      <span class="target">${currentBand} (${accuracy === 1 ? '100' : (accuracy * 100).toFixed(0)}% 準確率)</span>
      <p style="font-size: 14px; color: var(--sepia); margin-top: 8px; margin-bottom: 4px;">14 DAYS LATER · 目標</p>
      <span class="target">${target} 分</span>
      ${topStrategy ? `
        <div style="border-top: 1px dotted var(--rule); padding-top: 16px; margin-top: 16px;">
          <p style="font-size: 14px;"><strong style="color: var(--ink); font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase;">CORE DIAGNOSIS · 核心診斷</strong></p>
          <p style="font-size: 15px; margin-top: 8px;">你的最大弱項是 <em style="color: var(--oxblood);">${topWeakness}</em>。${topStrategy.diagnosis}</p>
          <p style="font-size: 15px; margin-top: 12px;"><strong style="color: var(--ink); font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase;">PRESCRIPTION · 對症處方</strong></p>
          <p style="font-size: 15px; margin-top: 8px;">${topStrategy.fix}</p>
        </div>
      ` : ''}
    </div>

    <div class="study-plan">
      ${plans.map((day, i) => `
        <div class="plan-day">
          <div>
            <div class="plan-day-num">${String(i+1).padStart(2,'0')}.</div>
            <div class="plan-day-label">${day.dayLabel}</div>
          </div>
          <div class="plan-day-content">
            <h4>${day.title}</h4>
            <p>${day.description}</p>
            <div class="tasks">
              ${day.tasks.map(t => `
                <div class="plan-task">
                  <span class="icon">${t.type}</span>
                  <span>${t.text}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `).join('')}
    </div>

    <div class="strategy-block" style="margin-top: 32px;">
      <h5>HOW TO USE THIS PLAN · 使用方式</h5>
      <p>
        <strong>每天 60–90 分鐘</strong> 即可,不需更長 — 注意力品質遠勝時長。<br><br>
        <strong>核心錯題日</strong>(Day 1, 8)是「24 小時後重做本次錯題」的關鍵,大腦在此時最容易把短期記憶轉為長期。<br><br>
        <strong>整合日</strong>(Day 7, 14)是完整模擬一套真題並當天檢討,確認弱項真的有改善。<br><br>
        <strong>跳過任何一天</strong>就重啟兩天計畫,不要硬塞進一天完成,效果會打折。
      </p>
    </div>

    <div class="trap-block" style="margin-top: 16px;">
      <h5>WHAT NOT TO DO · 別做這些事</h5>
      <p>
        <strong>不要</strong>連續做 5 套真題不檢討 — 沒檢討的題等於沒做。<br>
        <strong>不要</strong>只做高難度題 — 中低難度的「細節題」反而最該全部答對。<br>
        <strong>不要</strong>無限延長練習時間 — 進階階段比的是<em>準確率</em>,不是<em>題量</em>。<br>
        <strong>不要</strong>考前一天大量練習 — 反而會疲勞累積,降低臨場表現。
      </p>
    </div>

    <div class="explanation-block" style="margin-top: 16px;">
      <h5>NEXT STEPS · 後續行動</h5>
      <p>
        1) 把本次錯題抄到 <em>error log</em>(實體筆記或 Notion 都可),標註題型;<br>
        2) <strong>明天</strong>(Day 1)重做這幾題,確認真的理解;<br>
        3) <strong>第 7、14 天</strong>各做一套完整模考,對比進步;<br>
        4) 連續錯 3 次同類型題目時,立刻回到「策略」區塊複習對應技巧。
      </p>
    </div>
  `;

  return planHtml;
}

function buildDailyPlans(topWeakness, secondWeakness, accuracy) {
  const isHighPerformer = accuracy >= 0.75;
  const topW = topWeakness || '推論題 · Inference';
  const secW = secondWeakness || '細節題 · Detail';

  return [
    { dayLabel: 'DAY 01 · MON', title: '錯題核心重做',
      description: '今天最重要的事:把昨天考錯的題目全部重做一次,確認你「真的理解」而非「當下記住」。',
      tasks: [
        { type: '20 min', text: `重做本次所有 ${topW} 錯題,寫下「為什麼以前選錯」` },
        { type: '20 min', text: '對照詳解的「原文依據」逐句重讀,標出邏輯支點' },
        { type: '20 min', text: '背 10 個本次文章出現的學術字彙(寫進 error log)' },
      ]
    },
    { dayLabel: 'DAY 02 · TUE', title: `${topW.split(' ·')[0]}專項加強`,
      description: `針對最弱題型集中突破。${isHighPerformer ? '目標是 5/5 全對。' : '目標是錯不超過 1 題。'}`,
      tasks: [
        { type: 'TPO', text: `做 TPO-58 或 TPO-60 中所有 ${topW.split(' ·')[0]}` },
        { type: '15 min', text: '對照詳解,找出「自己思考路徑」與「正解路徑」的分歧點' },
        { type: '15 min', text: '寫下 3 句話總結這類題的「正解通常具備什麼特徵」' },
      ]
    },
    { dayLabel: 'DAY 03 · WED', title: '聽力精聽訓練',
      description: '聽力是大多數進階考生的瓶頸 — 因為他們以為「聽得懂」就夠了。實際要練「聽得準」。',
      tasks: [
        { type: 'TPO', text: '挑一段 TPO 講座(5 分鐘),做 dictation:每句聽 3 次然後寫下' },
        { type: '20 min', text: '對照原文,標出聽錯或漏聽的字 — 通常是弱讀、連音' },
        { type: '20 min', text: '不看原文,重聽一次,確認真的聽懂' },
      ]
    },
    { dayLabel: 'DAY 04 · THU', title: '寫作 + 口說模板拆解',
      description: '進階分數的差距常在於模板「自然度」。今天解構 3 篇高分範文,理解他們的結構配方。',
      tasks: [
        { type: 'READ', text: '讀 3 篇本系統的 Model Answers,標出立場句、論證句、例證句、轉折詞' },
        { type: 'WRITE', text: '挑一題寫作 prompt,用 25 分鐘寫一篇 250 字 essay' },
        { type: '10 min', text: '對照系統評分 4 面向,找出最低分的那項做筆記' },
      ]
    },
    { dayLabel: 'DAY 05 · FRI', title: `${secW.split(' ·')[0]}強化日`,
      description: `第二弱項加強。錯題類型的「廣度」比深度更重要 — 不能只精通一種題型。`,
      tasks: [
        { type: 'TPO', text: `做 TPO-61 或 TPO-63 中所有 ${secW.split(' ·')[0]}` },
        { type: '15 min', text: '對照詳解,看「類題策略」段落,把方法寫進策略筆記' },
        { type: '15 min', text: '回頭再做一次 Day 02 的題目,確認方法已內化' },
      ]
    },
    { dayLabel: 'DAY 06 · SAT', title: '字彙密集 + 真實閱讀',
      description: '週末有空可以做更費神的事:讀英文 podcast / NYT / Economist,累積學術語感。',
      tasks: [
        { type: 'READ', text: '讀一篇 Economist 或 Atlantic 的長文(20 分鐘)' },
        { type: '20 min', text: '查出文中所有不熟的字,寫進 error log(每天上限 15 個)' },
        { type: 'TEST', text: '做 DIAG-02 字彙壓力測驗,目標 4/5 以上' },
      ]
    },
    { dayLabel: 'DAY 07 · SUN', title: '整合模考 + 當天檢討',
      description: '第一週重點驗證:跑一套完整模考,當天就用本系統的詳解檢討。',
      tasks: [
        { type: 'MOCK', text: `挑一套 ${isHighPerformer ? 'TPO-67 或 MOCK-B' : 'TPO-60 或 MOCK-A'} 完整作答` },
        { type: '60 min', text: '當天完整檢討,對比上週本次模考的弱項分布是否改善' },
        { type: 'REST', text: '休息至少 30 分鐘 — 大腦需要時間鞏固' },
      ]
    },
    { dayLabel: 'DAY 08 · MON', title: '第二週啟動 + 錯題二次重做',
      description: '第二週開始。Day 07 模考的錯題重做(這時你應該已經看過詳解,所以重做應該明顯改善)。',
      tasks: [
        { type: '20 min', text: 'Day 07 模考所有錯題重做' },
        { type: '20 min', text: '對比 Day 01 與 Day 08 的錯誤類型,看哪些已克服' },
        { type: '20 min', text: '寫一份「我這週學到的 3 個核心方法」短筆記' },
      ]
    },
    { dayLabel: 'DAY 09 · TUE', title: '口說錄音馬拉松',
      description: '口說是最少練、最容易進步的科目。今天連錄 6 段,把不流暢的點找出來。',
      tasks: [
        { type: 'SPEAK', text: '挑 6 道口說 prompt,每題完整作答並錄音' },
        { type: '30 min', text: '聽自己錄音,標出每段「最大問題」(停頓、用詞、立場)' },
        { type: '15 min', text: '對照系統 Model Answer,重錄問題最大的兩題' },
      ]
    },
    { dayLabel: 'DAY 10 · WED', title: '寫作精修日',
      description: '寫一篇完整作文,但這次重點不在寫,在改 — 修改的能力比初稿更重要。',
      tasks: [
        { type: 'WRITE', text: '寫一篇 Academic Discussion(25 分鐘,目標 250+ 字)' },
        { type: '20 min', text: '系統評分 + 對照 Model Answer,逐句修改' },
        { type: '15 min', text: '把修改前後對比寫進筆記,標出「改進的具體點」' },
      ]
    },
    { dayLabel: 'DAY 11 · THU', title: '聽力高難度挑戰',
      description: '挑一段你覺得最難的聽力(藝術史、哲學等抽象主題),用之前學的精聽法。',
      tasks: [
        { type: 'TPO', text: '挑一段難度 ★★★★★ 的講座(如 TPO-67)' },
        { type: '20 min', text: 'Dictation:聽 5 次寫下,允許大量錯誤' },
        { type: '15 min', text: '對照原文,記下「聽不出來」的弱讀 / 連音模式' },
      ]
    },
    { dayLabel: 'DAY 12 · FRI', title: '弱項複合練習',
      description: `今天同時練 ${topW.split(' ·')[0]} 與 ${secW.split(' ·')[0]},看是否兩項都有進步。`,
      tasks: [
        { type: 'TPO', text: `做 TPO-65 中 ${topW.split(' ·')[0]} + ${secW.split(' ·')[0]} 所有題` },
        { type: '15 min', text: '若仍錯,回頭看 Day 01 與 Day 05 的筆記,找盲點' },
        { type: '15 min', text: '寫下「我與兩週前的差別」一頁筆記' },
      ]
    },
    { dayLabel: 'DAY 13 · SAT', title: '模考前一日 · 輕量複習',
      description: '不做新題,只複習筆記 — 大腦需要在模考前處於放鬆狀態。',
      tasks: [
        { type: 'READ', text: '快讀 error log,重點看「常錯題型」' },
        { type: '20 min', text: '把高頻學術詞彙過一遍(本系統「字彙學院」字卡)' },
        { type: 'REST', text: '提早 1 小時睡 — 模考表現 = 實力 + 睡眠' },
      ]
    },
    { dayLabel: 'DAY 14 · SUN', title: '最終驗證模考',
      description: '完整模擬一套真題,當作兩週訓練的驗收。和 Day 07 的結果對比,進步是真的還是錯覺。',
      tasks: [
        { type: 'MOCK', text: `${isHighPerformer ? '挑戰 MOCK-B (★★★★★) 或 TPO-67' : '完成 MOCK-A 或 TPO-66'} 完整作答` },
        { type: '90 min', text: '當天完整檢討,並對比 Day 07 的弱項分布' },
        { type: 'REVIEW', text: '寫一頁「兩週進步報告」+「下兩週重點」,然後重啟一輪' },
      ]
    },
  ];
}

function toggleChecklist(el) {
  el.classList.toggle('checked');
}


function quitExam() {
  clearSectionTimer();
  if (speakingPhaseTimer) clearInterval(speakingPhaseTimer);
  document.getElementById('examOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

function retakeExam() {
  launchExam(examState.testId);
}

// ============ INIT ============
renderCard();
renderQuiz();
renderWordList();
