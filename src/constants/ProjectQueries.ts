import { ProjectType, ProjectId } from '@src/types/ProjectsQueriesType'

const baseUrl = import.meta.env.BASE_URL

const ProjectQueries: Record<ProjectId, Omit<ProjectType, 'id'>> = {
  ucc: {
    corporateTitle: 'UCCホールディングス株式会社',
    corporateTitleEn: 'Ueshima Coffee',
    whet: '2019/4~2021/1',
    charge: ['Direction/Plan', 'Code', 'Frontend Develop', 'Research'],
    imgLogo: `${baseUrl}images/logo/logo-ucc.svg`,
    images: [
      `${baseUrl}images/img/ucc/img-ucc-product-1.png`,
      `${baseUrl}images/img/ucc/img-ucc-product-2.png`,
      `${baseUrl}images/img/ucc/img-ucc-product-3.png`,
      `${baseUrl}images/img/ucc/img-ucc-product-4.png`,
      `${baseUrl}images/img/ucc/img-ucc-product-5.png`,
    ],
    link: 'https://www.ucc.co.jp',
    goalTitle: [
      'コンテンツを管理・更新を各部署担当者で行いたい',
      'CMSから誰でも更新できる',
      'データードリブンな計測と分析',
    ],
    goalDescription: [
      'IT統括部が全てのコンテンツ管理・更新していた状況から、主要なコンテンツは各部署で行わせたい。',
      '商品一覧ページや詳細ページ、レシピページ、キャンペーンなどを各部署が更新できるCMSを導入したい。',
      'PRのLPページもCMS管理し、各の施策のKPIに基づくデーター計測と分析を報告してほしい。',
    ],
    technologies: [
      'JQuery/ECMAScript',
      'HTML/Sass',
      'GoogleTagManager',
      'GoogleAnalytics',
      'LookerStudio',
    ],
    resultTitle: [
      '各部署と連携して情報設計',
      '大型CMS導入とCMS設計会社との連携',
      'Google社のツールを使いレポートを取得・蓄積・集計',
    ],
    resultDescription: [
      'クライアント部署・社内デザイナーと連携し、テンプレートパターンを16まで集約。',
      'WebRelease2.0を導入。今後のテンプレート追加があった場合でも運用でカバーでき、オンプレミスによるCMS。',
      '各プロモーションページやブランドサイトのユーザー行動を定量化。GTMとGA、LookerStudioにて、期間を変えるだけでレポートが見れる状態を作成。クライアントにプレゼンテーション・納品。',
    ],
    termTitle: [
      'テクニカルディレクターとして',
      'コーダー・フロントエンドエンジニアとして',
      'データーアナリストとして',
    ],
    termDescription: [
      'CMSからの入力をフロント側で表示する実装連携を行う。また、公開後の新規テンプレートの作成も担当。',
      'atomicデザインの概念を採用。汎用性と変更に強い構造に置き換え。レスポンシブページに対応に伴うHTML/CSS/JSコーディングを担当。',
      'ページの定量的なデーター収集・分析・レポートに従事。当時GoogleDataStudioを新規で採用。依頼期間外でもクライアント側で簡単に集計できるように。GTMからの情報取得からレポートまでを担当。',
    ],
    pointTitle: [
      'リプレース完了後も考慮',
      '外部PR制作会社のコード管理',
      'データードリブンなPR会社として',
    ],
    pointDescription: [
      'WebReleaseを採用することで、リプレース完了後でもテンプレート新規作成にも新たに手掛けました。',
      '各商品に外部PR制作会社が担当ごとにおり、そのコードもCMSで管理しました。CSSなどのバッティングを防ぐためにクライアント名をprefixにして管理。業務マニュアルを制作会社に発信し、CSSやJSのバッティングを防ぐことができました。',
      '当時従事していたFICCでは、制作会社からPR会社に事業転換していく中で、データードリブンが課題となり、デファクトスタンダードとなるGoogleのツールを仕様し、取得からレポートまでを一元管理化させました。',
    ],
  },
  navinavihoken: {
    corporateTitle: 'ナビナビ保険',
    corporateTitleEn: 'AteamFinargy',
    whet: '2021/1~2025/8',
    charge: [
      'Direction/Plan',
      'Design',
      'Code',
      'Frontend Develop',
      'Research',
    ],
    imgLogo: `${baseUrl}images/logo/logo-navinavihoken.png`,
    images: [
      `${baseUrl}images/img/navinavihoken/img-navinavihoken-product-1.png`,
      `${baseUrl}images/img/navinavihoken/img-navinavihoken-product-2.png`,
      `${baseUrl}images/img/navinavihoken/img-navinavihoken-product-3.png`,
      `${baseUrl}images/img/navinavihoken/img-navinavihoken-product-4.png`,
      `${baseUrl}images/img/navinavihoken/img-navinavihoken-product-5.png`,
    ],
    link: 'https://www.navinavi-hoken.com/',
    goalTitle: [
      '5年以内に黒字化を目指す。',
      'DevOpsの文化をデザイナー・エンジニアチームに定着させる',
      'ユーザーインタビューに伴うUX/UI改善',
    ],
    goalDescription: [
      '全社目標として設定し、プロジェクトを通してその目標を達成していく。',
      '創造・開発体験をより円滑化し、チームの心理的安全性の担保とスピードと質の向上を図る。',
      '定量データによる分析文化から定性データを取得・分析する文化をプロジェクトチームベースに浸透させる。',
    ],
    technologies: [
      'Figma',
      'TypeScript',
      'TailwindCSS',
      'React',
      'Ruby on Rails',
    ],
    resultTitle: [
      '単月での黒字化はあれど、赤字分の回収ができず撤退',
      '浸透がなかったアジャイル開発が定着',
      'デザインスプリントを採用し、2週間で定量データの取得分析を成功',
    ],
    resultDescription: [
      '単月での黒字はあれど、赤字額が膨らみ会社自体を株式譲渡化することが決まる。',
      'エンジニア・デザイナー以外の事業部側の各部署との連携もアジャイル開発を通して浸透する。',
      '定量データの文化から定量と定性データーを組み合わせて、プロジェクトを考える。また、Figmaによるプロトタイプ作成・インタビューを適宜に採用する文化が醸成。',
    ],
    termTitle: ['デザイナーとして', 'コーダーとして', 'ディレクターとして'],
    termDescription: [
      'デザインスプリントによるプロトタイプ作成を1週間で行い、プラス1週間でユーザーインタビューを経験。',
      'React/TailwindCSS/TypeScriptとモダンな開発に挑戦。よりコードに見通しが良くなり、チームのスピードと質の向上・学びの機会を実現。',
      '施策の概要も各々チーム内だけでなされていた文化から、ISSUE化の文化を確立。最初はWF開発をチームのベースに浸透させ、のちアジャイル開発を採用し、優先度の見通しが容易になる仕組みを整えた。',
    ],
    pointTitle: [
      '制作も含めフルスタックでUX/UIを担当',
      '技術力の向上',
      '2度のアワードクリエイター賞のノミネートを体験',
    ],
    pointDescription: [
      'プロトタイプ作成からインタビューを通して経験し、制作だけではなく調査する、改善するを体験。インタビューの導入により、チームにあったステレオタイプを根底から覆すことができた。',
      'モダンな環境とDevOpsの採用により、開発体験がより向上し、開発のスピードを定量化。チーム内のナレッジ向上も図れた。',
      'ISSUE化の文化を確立し、アジャイル開発の礎を築くことで1度目のノミネート、アジャイル開発の浸透による開発体験の向上により2度のノミネート。何より、ログが残る体制に変化した時の喜びは大きかった。',
    ],
  },
  kyotoEternity: {
    corporateTitle: '株式会社京都エタニティ',
    corporateTitleEn: 'Kyoto Eternity',
    whet: '2014/10~2018/1',
    charge: [
      'SalesProduce',
      'Direction/Plan',
      'Design',
      'Code',
      'Frontend Develop',
      'Marketing',
    ],
    imgLogo: `${baseUrl}images/logo/logo-eternity.svg`,
    images: [
      `${baseUrl}images/img/kyotoeternity/img-kyotoeternity-product-1.png`,
      `${baseUrl}images/img/kyotoeternity/img-kyotoeternity-product-2.png`,
      `${baseUrl}images/img/kyotoeternity/img-kyotoeternity-product-3.png`,
      `${baseUrl}images/img/kyotoeternity/img-kyotoeternity-product-4.png`,
      `${baseUrl}images/img/kyotoeternity/img-kyotoeternity-product-5.png`,
    ],
    link: 'https://www.jiyuujinn.com/',
    goalTitle: [
      'まず月商を400万にする。',
      'SEOを向上させたい',
      '収益をブライダル動画以外でも伸ばしたい',
    ],
    goalDescription: [
      '月商120万（月30~40件）から400万（月100件）にしたい。',
      '主要キーワードのSEO順位8位から3位にしたい。',
      'デザイン制作会社として少しでも収益を向上したい。',
    ],
    technologies: ['Design', 'HTML/CSS', 'SEO', 'Jquery', 'GoogleAds'],
    resultTitle: [
      '1年で月商を平均800万に成功',
      '主要キーワードのSEO順位1位~3位に定着。',
      'さまざまなデザインを作成しデザイン力が向上',
    ],
    resultDescription: [
      'デザインを一新。blackベースのシックなデザインからwhiteベースのナチュラルなデザインに変更。HTML構造も変更し件数が向上。CVRが0.35%からおおよそ0.5%台に向上。',
      'デザインと構造のリプレースと件数の向上も有益に働き1位~3位に定着。',
      '名刺・チラシ・吊り革広告・TVのスーパー・パッケージデザインなど幅広くデザインに携わり、Adobeツールや各デザインの考え方を幅広く学習。',
    ],
    termTitle: ['デザイナーとして', 'コーダーとして', 'Web広告配信として'],
    termDescription: [
      '名刺・チラシ・吊り革広告・TVのスーパー・POP・パッケージデザインなど幅広くデザインに携わり、ブライダル動画事業が繁忙期を迎えるまで、副収益として収益を向上させた。',
      '技術力が乏しい当時の状況から、できる範囲内でソート機能を追加したり、新たにJQueryを学び動きのあるWebページを実現させた。レスポンシブデザインにも対応させる。',
      'GoogleAdsの配信と管理を担当。自作したLPページを広告配信する知見も得る。',
    ],
    pointTitle: [
      '3名の会社から最終12名まで拡大',
      '幅広くデザインに携わる',
      'デザイナーとして初めての会社',
    ],
    pointDescription: [
      '最大月商1200万円を達成。それに伴い、3名の会社から最終12名まで拡大した。',
      'DTP業務の経験し、Webデザインだけでなく、幅広くデザインに携わる。失敗と成功を繰り返し、TVの仕事を経験し、デザインの技術力を向上させた。',
      'デザインを変更したり、新規で作成することで収益に直結する感覚を養えたことが大きな経験となる。',
    ],
  },
}
export default ProjectQueries
