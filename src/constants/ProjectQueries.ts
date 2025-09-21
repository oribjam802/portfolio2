import { ProjectType, ProjectId } from '@src/types/ProjectsQueriesType'

const ProjectQueries: Record<ProjectId, Omit<ProjectType, 'id'>> = {
  ucc: {
    corporateTitle: 'UCCホールディングス株式会社',
    corporateTitleEn: 'Ueshima Coffee',
    whet: '2019/4~2021/1',
    charge: ['Direction/Plan', 'Code', 'Frontend Develop', 'Research'],
    imgLogo: '/assets/images/logo/logo-ucc.svg',
    images: [
      '/assets/images/img/ucc/img-ucc-product-1.png',
      '/assets/images/img/ucc/img-ucc-product-2.png',
      '/assets/images/img/ucc/img-ucc-product-3.png',
      '/assets/images/img/ucc/img-ucc-product-4.png',
      '/assets/images/img/ucc/img-ucc-product-5.png',
    ],
    link: 'https://www.ucc.co.jp',
    goalTitle: [
      '全てのコンテンツ更新を担当部署にて行わせたい。',
      '更新スピードを向上させたい',
      'PDCAサイクルを回すために、定量的な分析レポートをお願いしたい。',
    ],
    goalDescription: [
      'IT統括部が全てのコンテンツ管理を管理していた現状を踏まえ、全てのコンテンツ・フロントのソースはCMSで一元管理管理し、インシデントの検知のしやすさを明確にするという目的オーダーがあり。',
      '商品一覧ページや詳細ページ、レシピページ、キャンペーンなどもIT統括部がサーバデプロイで行っていた背景から、CMS導入に先駆け、リアルタイムでの情報更新やコンテンツの追加・修正を誰もが簡単に行えるかどうかもオーダーとしてあり。',
      'リプレース後プロモーションページ・ブランドページの定量的な分析の依頼も多数あり、プロモーション業務もオーダーもあり。',
    ],
    technologies: [
      'JQuery/ECMAScript',
      'HTML/Sass',
      'GoogleTagManager',
      'GoogleAnalytics',
      'LookerStudio',
    ],
    resultTitle: [
      '全てのコンテンツをCMS管理しコーポレートサイトリプレース（権限管理/堅牢性）',
      'キャンペーンなど更新頻度が高いページへの対応',
      'PRページの計測と分析・報告（プロモーション・マーケティングリサーチ）',
    ],
    resultDescription: [
      'ブラントページはブランド担当者部署にそれぞれの制作会社と取引があり、CMS上からソースを流し込むことが必要。そのため、ブランドページ用（汎用ページ）のテンプレートを作成し、header/footerの表示・非表示の有無等CMSの設計に従事。',
      'CMS導入によるテンプレートや情報設計により、商品一覧ページや詳細ページ、レシピページ、キャンペーンなどはIT統括部更新から、各部門での更新業務として移行。',
      'リプレース完了後、各プロモーションページやブランドサイトのユーザー行動を定量化。GTMとGA、LookerStudioにて、期間を変えるだけでレポートが見れる状態を作成。クライアントにプレゼンテーション・納品。',
    ],
    termTitle: [
      'テクニカルディレクターとして',
      'コーダー・フロントエンドエンジニアとして',
      'データーアナリストとして',
    ],
    termDescription: [
      'リプレース前のページを全て確認し、カテゴリーごとにデザイナーと確認をおこない、テンプレートを16種類まで削り切る。',
      'atomicデザインを意識し、レスポンシブページ、PCのみ、SPのみの3パターンの構成のOrganismsをページテンプレートとして作成。商品詳一覧・詳細ページやレシピページのHTML/CSS/JSコーディングを担当。',
      'ページの定量的なデーター収集・分析・レポートに従事。',
    ],
    pointTitle: [
      '必要なテンプレート数とその構造をwebReleaseの仕様に合わせて思考',
      'CMS導入によるテンプレートや情報設計により、商品一覧ページや詳細ページ、レシピページ、キャンペーンなどはIT統括部更新から、各部門での更新業務として移行。',
      'リプレース完了後、各プロモーションページやブランドサイトのユーザー行動を定量化。GTMとGA、LookerStudioにて、期間を変えるだけでレポートが見れる状態を作成。クライアントにプレゼンテーション・納品。',
    ],
    pointDescription: [
      'リプレース前のページを全て確認し、カテゴリーごとにデザイナーと確認をおこない、テンプレートを16種類まで削り切る。',
      'testest',
      'google社のツールを使いレポートを作成。レポートも1度使って終わりではなく、LookerStudio(当時はDataStudio)にてレポートを納品。先方のプロジェクトの共有をLookerStudioで一元化することでコストを削減。収集においてもGTMを大枠３つ（リンククリック・アクションクリック・ページスクロール）のトリガーを仕込む方法で、どこからどこへのページ遷移・ページ上でのyoutubeの動画クリック数（再生時間等も別途）・ページスクロール率の数字取得が容易に。',
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
    imgLogo: '/assets/images/logo/logo-navinavihoken.png',
    images: [
      '/assets/images/img/navinavihoken/img-navinavihoken-product-1.png',
      '/assets/images/img/navinavihoken/img-navinavihoken-product-2.png',
      '/assets/images/img/navinavihoken/img-navinavihoken-product-3.png',
      '/assets/images/img/navinavihoken/img-navinavihoken-product-4.png',
      '/assets/images/img/navinavihoken/img-navinavihoken-product-5.png',
    ],
    link: 'https://www.navinavi-hoken.com/',
    goalTitle: [
      '全てのコンテンツ更新を担当部署にて行わせたい。',
      '更新スピードを向上させたい',
      'PDCAサイクルを回すために、定量的な分析レポートをお願いしたい。',
    ],
    goalDescription: [
      'IT統括部が全てのコンテンツ管理を管理していた現状を踏まえ、全てのコンテンツ・フロントのソースはCMSで一元管理管理し、インシデントの検知のしやすさを明確にするという目的オーダーがあり。',
      '商品一覧ページや詳細ページ、レシピページ、キャンペーンなどもIT統括部がサーバデプロイで行っていた背景から、CMS導入に先駆け、リアルタイムでの情報更新やコンテンツの追加・修正を誰もが簡単に行えるかどうかもオーダーとしてあり。',
      'リプレース後プロモーションページ・ブランドページの定量的な分析の依頼も多数あり、プロモーション業務もオーダーもあり。',
    ],
    technologies: ['Figma', 'HTML', 'TailwindCSS', 'React', 'Ruby on Rails'],
    resultTitle: [
      '全てのコンテンツをCMS管理しコーポレートサイトリプレース（権限管理/堅牢性）',
      'キャンペーンなど更新頻度が高いページへの対応',
      'PRページの計測と分析・報告（プロモーション・マーケティングリサーチ）',
    ],
    resultDescription: [
      'ブラントページはブランド担当者部署にそれぞれの制作会社と取引があり、CMS上からソースを流し込むことが必要。そのため、ブランドページ用（汎用ページ）のテンプレートを作成し、header/footerの表示・非表示の有無等CMSの設計に従事。',
      'CMS導入によるテンプレートや情報設計により、商品一覧ページや詳細ページ、レシピページ、キャンペーンなどはIT統括部更新から、各部門での更新業務として移行。',
      'リプレース完了後、各プロモーションページやブランドサイトのユーザー行動を定量化。GTMとGA、LookerStudioにて、期間を変えるだけでレポートが見れる状態を作成。クライアントにプレゼンテーション・納品。',
    ],
    termTitle: [
      'テクニカルディレクターとして',
      'コーダー・フロントエンドエンジニアとして',
      'データーアナリストとして',
    ],
    termDescription: [
      'リプレース前のページを全て確認し、カテゴリーごとにデザイナーと確認をおこない、テンプレートを16種類まで削り切る。',
      'atomicデザインを意識し、レスポンシブページ、PCのみ、SPのみの3パターンの構成のOrganismsをページテンプレートとして作成。商品詳一覧・詳細ページやレシピページのHTML/CSS/JSコーディングを担当。',
      'ページの定量的なデーター収集・分析・レポートに従事。',
    ],
    pointTitle: [
      '必要なテンプレート数とその構造をwebReleaseの仕様に合わせて思考',
      'CMS導入によるテンプレートや情報設計により、商品一覧ページや詳細ページ、レシピページ、キャンペーンなどはIT統括部更新から、各部門での更新業務として移行。',
      'リプレース完了後、各プロモーションページやブランドサイトのユーザー行動を定量化。GTMとGA、LookerStudioにて、期間を変えるだけでレポートが見れる状態を作成。クライアントにプレゼンテーション・納品。',
    ],
    pointDescription: [
      'リプレース前のページを全て確認し、カテゴリーごとにデザイナーと確認をおこない、テンプレートを16種類まで削り切る。',
      'testest',
      'google社のツールを使いレポートを作成。レポートも1度使って終わりではなく、LookerStudio(当時はDataStudio)にてレポートを納品。先方のプロジェクトの共有をLookerStudioで一元化することでコストを削減。収集においてもGTMを大枠３つ（リンククリック・アクションクリック・ページスクロール）のトリガーを仕込む方法で、どこからどこへのページ遷移・ページ上でのyoutubeの動画クリック数（再生時間等も別途）・ページスクロール率の数字取得が容易に。',
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
    imgLogo: '/assets/images/logo/logo-eternity.svg',
    images: [
      '/assets/images/img/kyotoeternity/img-kyotoeternity-product-1.png',
      '/assets/images/img/kyotoeternity/img-kyotoeternity-product-2.png',
      '/assets/images/img/kyotoeternity/img-kyotoeternity-product-3.png',
      '/assets/images/img/kyotoeternity/img-kyotoeternity-product-4.png',
      '/assets/images/img/kyotoeternity/img-kyotoeternity-product-5.png',
    ],
    link: 'https://www.jiyuujinn.com/',
    goalTitle: [
      '全てのコンテンツ更新を担当部署にて行わせたい。',
      '更新スピードを向上させたい',
      'PDCAサイクルを回すために、定量的な分析レポートをお願いしたい。',
    ],
    goalDescription: [
      'IT統括部が全てのコンテンツ管理を管理していた現状を踏まえ、全てのコンテンツ・フロントのソースはCMSで一元管理管理し、インシデントの検知のしやすさを明確にするという目的オーダーがあり。',
      '商品一覧ページや詳細ページ、レシピページ、キャンペーンなどもIT統括部がサーバデプロイで行っていた背景から、CMS導入に先駆け、リアルタイムでの情報更新やコンテンツの追加・修正を誰もが簡単に行えるかどうかもオーダーとしてあり。',
      'リプレース後プロモーションページ・ブランドページの定量的な分析の依頼も多数あり、プロモーション業務もオーダーもあり。',
    ],
    technologies: ['Design', 'HTML/CSS', 'SEO', 'Jquery', 'GoogleAds'],
    resultTitle: [
      '全てのコンテンツをCMS管理しコーポレートサイトリプレース（権限管理/堅牢性）',
      'キャンペーンなど更新頻度が高いページへの対応',
      'PRページの計測と分析・報告（プロモーション・マーケティングリサーチ）',
    ],
    resultDescription: [
      'ブラントページはブランド担当者部署にそれぞれの制作会社と取引があり、CMS上からソースを流し込むことが必要。そのため、ブランドページ用（汎用ページ）のテンプレートを作成し、header/footerの表示・非表示の有無等CMSの設計に従事。',
      'CMS導入によるテンプレートや情報設計により、商品一覧ページや詳細ページ、レシピページ、キャンペーンなどはIT統括部更新から、各部門での更新業務として移行。',
      'リプレース完了後、各プロモーションページやブランドサイトのユーザー行動を定量化。GTMとGA、LookerStudioにて、期間を変えるだけでレポートが見れる状態を作成。クライアントにプレゼンテーション・納品。',
    ],
    termTitle: [
      'テクニカルディレクターとして',
      'コーダー・フロントエンドエンジニアとして',
      'データーアナリストとして',
    ],
    termDescription: [
      'リプレース前のページを全て確認し、カテゴリーごとにデザイナーと確認をおこない、テンプレートを16種類まで削り切る。',
      'atomicデザインを意識し、レスポンシブページ、PCのみ、SPのみの3パターンの構成のOrganismsをページテンプレートとして作成。商品詳一覧・詳細ページやレシピページのHTML/CSS/JSコーディングを担当。',
      'ページの定量的なデーター収集・分析・レポートに従事。',
    ],
    pointTitle: [
      '必要なテンプレート数とその構造をwebReleaseの仕様に合わせて思考',
      'CMS導入によるテンプレートや情報設計により、商品一覧ページや詳細ページ、レシピページ、キャンペーンなどはIT統括部更新から、各部門での更新業務として移行。',
      'リプレース完了後、各プロモーションページやブランドサイトのユーザー行動を定量化。GTMとGA、LookerStudioにて、期間を変えるだけでレポートが見れる状態を作成。クライアントにプレゼンテーション・納品。',
    ],
    pointDescription: [
      'リプレース前のページを全て確認し、カテゴリーごとにデザイナーと確認をおこない、テンプレートを16種類まで削り切る。',
      'testest',
      'google社のツールを使いレポートを作成。レポートも1度使って終わりではなく、LookerStudio(当時はDataStudio)にてレポートを納品。先方のプロジェクトの共有をLookerStudioで一元化することでコストを削減。収集においてもGTMを大枠３つ（リンククリック・アクションクリック・ページスクロール）のトリガーを仕込む方法で、どこからどこへのページ遷移・ページ上でのyoutubeの動画クリック数（再生時間等も別途）・ページスクロール率の数字取得が容易に。',
    ],
  },
}
export default ProjectQueries
