/** サイト内の固定文言（日本語・resume.md 準拠。企業名は仮称） */

export const site = {
  name: '笑笑',
  title: '笑笑 — フルスタックエンジニア',
  role: 'フルスタックエンジニア / フリーランス',
  heroLead:
    '要件定義から設計・実装・公開・運用まで一貫対応。Web・モバイル・CMS・生成AIを横断し、ビジネス要件とユーザー体験の両立を重視しています。',
  aboutTitle: '自己紹介',
  aboutBody: [
    '6年以上にわたりフルスタックエンジニアとして、大規模Webサービス、ECプラットフォーム、業務基幹システム、マッチングサービスの設計・開発・運用に従事してきました。要件定義・基本設計・詳細設計・実装・テスト・運用改善までの全工程を主導した実績があります。',
    'フロントエンドでは React / Next.js を中心としたモダンSPA・Headless構成、パフォーマンス最適化（LCP/FCP）、SEO、TypeScript による型安全設計を実践。バックエンドでは Node.js / Laravel / Python（FastAPI）による高性能REST API、JWT認証、RDB チューニング、高トラフィック環境への対応を行ってきました。',
    'AWS・Docker を用いたクラウドネイティブ開発、CI/CD、Power Platform / Azure を用いた業務効率化、テックリード・PM としてのアジャイル推進・設計レビュー・コード品質管理・若手育成の経験があります。生成AI（LLM）を活用したチャットボット設計・実装にも対応可能です。',
    '技術選定から実装・運用まで一貫して責任を持ち、ビジネス価値の最大化を意識しています。フリーランスでは要件整理から公開までを単独で担当する案件が多く、クライアントとの直接折衝を通じて課題を実行可能な形に落とし込んできました。',
  ],
  skillsTitle: '活かせるスキル',
  /** resume.md「活かせる経験・知識・技術」＋技術スタックを網羅 */
  skillGroups: [
    {
      label: 'フロントエンド開発',
      items: [
        'React / Next.js による大規模SPAおよびHeadless構成の設計・開発',
        'TypeScript による型安全な設計および保守性の高いコード実装',
        'パフォーマンス最適化（LCP/FCP改善、コード分割、SSR最適化）',
        '再利用性を意識したコンポーネント設計とUI/UX改善',
        'REST / GraphQL API 連携設計',
        'JavaScript / HTML / CSS / レスポンシブデザイン',
        'GSAP 等を用いたアニメーション・PWA 関連',
      ],
    },
    {
      label: 'バックエンド開発',
      items: [
        'Node.js（Express）/ Laravel / Python（FastAPI）による高性能API設計',
        '高トラフィック環境におけるRESTful API構築およびJWT認証設計',
        'バッチ処理 / 非同期処理設計（データ同期・自動化処理）',
        'RDB / NoSQL を活用したデータモデリング（MySQL / PostgreSQL / MongoDB）',
        'パフォーマンスチューニングおよびSQL最適化',
        'Symfony / PHP を用いた既存システム調査・改修',
      ],
    },
    {
      label: 'クラウド・インフラ / DevOps',
      items: [
        'AWS（EC2 / RDS / S3 / Lambda）を用いたクラウド環境構築・運用',
        'Docker によるコンテナ標準化および開発環境統一',
        'CI/CD パイプライン構築によるデプロイ自動化',
        'セキュリティ対策（認証設計・権限管理・環境分離・HSTS 等）',
        'Power Platform（PowerApps / Power Automate）による業務効率化システム構築',
        'Azure Functions（Python）および Azure SQL Database との連携設計',
        'サーバー構築・ホスティング・ドメイン管理',
      ],
    },
    {
      label: 'プロジェクトマネジメント / チーム開発',
      items: [
        'アジャイル開発（Scrum / Kanban）での進行管理および改善推進',
        'テックリードとしての技術選定・設計レビュー・品質管理',
        'GitHub / GitLab / Jira を活用したチーム開発体制構築',
        'コードレビューおよびドキュメント整備による開発品質向上',
        '国内外メンバーとのリモート開発経験',
      ],
    },
    {
      label: 'ビジネス視点・その他',
      items: [
        '要件定義〜設計〜開発〜運用改善まで一貫対応',
        '技術選定とビジネス要件の両立を意識したアーキテクチャ設計',
        '新技術の迅速なキャッチアップおよび実務適用',
        'エンタープライズ案件およびスタートアップ双方での開発経験',
      ],
    },
    {
      label: '生成AI / モバイル / CMS・EC',
      items: [
        '生成AI（LLM）・プロンプト設計（意図判定・応答制御）・AI API連携・対話フロー設計',
        'Flutter / FlutterFlow・Firebase（Auth / Realtime DB / Firestore / Storage）',
        'Google Play Console / App Store Connect',
        'WordPress（テーマ開発・既存改修）・Shopify（Liquid）・Headless（WordPress × Next.js）',
      ],
    },
  ],
  skillTags: [
    'Git / GitHub',
    'Figma',
    'Adobe XD',
    'Google Analytics（GA4）',
    'Google Tag Manager',
    'Slack / Jira',
  ],
  experienceTitle: '職務経歴',
  experienceSubtitle:
    '職務経歴書に基づく記載です（新しい順）。クライアント・所属企業名はポートフォリオ用に仮称または業態のみとしています。',
  /** 2020年〜現在までの全期間。org は仮称。 */
  experience: [
    {
      id: 'exp-2025-freelance',
      period: '2025年1月〜現在',
      org: 'フリーランス（クラウドソーシング経由）',
      role: 'フルスタックエンジニア',
      summary:
        'Webサイト構築、EC、モバイルアプリ、既存改修、AI機能実装など幅広く担当。要件定義から設計・実装・公開・運用まで一貫対応。',
      highlights: [
        '生成AIを用いたチャットボット単独開発（プロンプト設計〜公開）',
        'Laravel 既存サイト保守、FlutterFlow＋Firebase によるモバイルアプリ公開',
        'MERN・WordPress / Shopify・Next.js×Headless CMS 連携など',
      ],
    },
    {
      id: 'exp-2024-finance',
      period: '2024年10月〜12月',
      org: '受託開発パートナー経由（金融ドメイン）',
      role: 'エンジニア',
      summary:
        'Symfony で構築された既存システムにおける本番環境の SFTP アップロードエラー対応。原因調査、修正、テスト、運用確認まで担当。',
      highlights: ['Symfony / PHP / MySQL', '本番障害の原因特定・再発防止ドキュメント化'],
    },
    {
      id: 'exp-2024-laravel-mobile',
      period: '2024年4月〜10月',
      org: 'レイスター・テクノロジーズ株式会社（仮称）',
      role: 'フルスタックエンジニア（モバイル・サーバーサイド）',
      summary:
        'クロスプラットフォームアプリと FastAPI 在庫APIの連携強化、およびコスメブランド向け公式サイト（Laravel）の改修・CDN・計測・フロント最適化。',
      highlights: [
        'Flutter・在庫API・リアルタイム同期・キャッシュ設計',
        'Laravel / CloudFront / GA4 / GTM / GSAP / PWA・セキュリティヘッダー',
      ],
    },
    {
      id: 'exp-2024-pp',
      period: '2024年1月〜3月',
      org: 'レイスター・テクノロジーズ株式会社（仮称）',
      role: 'フルスタックエンジニア',
      summary:
        'Power Platform を用いた申請・承認ワークフロー構築。従来 Excel・メール運用の業務プロセスをデジタル化。',
      highlights: ['PowerApps / Power Automate / SharePoint 連携', '承認フロー自動化・業務時間削減'],
    },
    {
      id: 'exp-2023-saas-tl',
      period: '2023年7月〜2024年1月',
      org: 'レイスター・テクノロジーズ株式会社（仮称）',
      role: 'テックリード / フルスタックエンジニア',
      summary:
        'BtoB向け業務管理SaaSの新規構築。マルチテナント、JWT・RBAC、FastAPI、Next.js、PostgreSQL、AWS（EC2/RDS）、Docker。',
      highlights: [
        '要件定義〜SaaSアーキテクチャ・ダッシュボード・集計ロジック',
        'コードレビュー・技術方針・開発環境標準化',
      ],
    },
    {
      id: 'exp-2022-api',
      period: '2022年10月〜2023年6月',
      org: 'レイスター・テクノロジーズ株式会社（仮称）',
      role: 'バックエンド中心フルスタックエンジニア',
      summary:
        '大量リクエストを捌く REST API 基盤を FastAPI で構築。マッチング・データ同期・バッチ処理。React フロント連携。',
      highlights: [
        '平均レスポンス200ms以下、PostgreSQL インデックス最適化',
        'JWT 認証・高信頼性API設計',
      ],
    },
    {
      id: 'exp-2022-saas',
      period: '2022年2月〜2022年9月',
      org: 'レイスター・テクノロジーズ株式会社（仮称）',
      role: 'フルスタックエンジニア',
      summary:
        '業務管理SaaS新規構築に参画。FastAPI による REST API、Next.js（TypeScript）管理画面、PostgreSQL、JWT、Docker、チーム開発。',
      highlights: ['API・管理画面の実装・パフォーマンス改善', 'Git を用いたチーム開発'],
    },
    {
      id: 'exp-2021-ec-platform',
      period: '2021年4月〜2021年12月',
      org: 'デルタリンク・パートナーズ株式会社（仮称）経由',
      role: 'フルスタックエンジニア',
      summary:
        '国内大手デジタル・ECプラットフォームにおける機能改善および新機能開発。高トラフィック環境でのパフォーマンスと安定運用を担当。',
      highlights: [
        'React / Next.js・Node.js API・MySQL・Redux/MobX',
        'レンダリング・API最適化、コードレビュー、アジャイル開発',
      ],
    },
    {
      id: 'exp-2020-ec-saas',
      period: '2020年9月〜2021年3月',
      org: 'デルタリンク・パートナーズ株式会社（仮称）経由',
      role: 'フルスタックエンジニア',
      summary:
        'EC事業者向けストア運営支援プラットフォームの設計・開発。商品・受注・売上分析などを統合した管理基盤。',
      highlights: [
        'Laravel / Vue.js・認可・外部API連携・バッチ集計',
        'DB設計・クエリチューニング・管理画面UX改善',
      ],
    },
    {
      id: 'exp-2020-medical-fe',
      period: '2020年5月〜2020年8月',
      org: 'デルタリンク・パートナーズ株式会社（仮称）経由',
      role: 'フロントエンドエンジニア',
      summary:
        '美容医療領域の検索・比較プラットフォーム新規開発。エリア・施術・悩み別検索と SSR による SEO を意識したフロントを担当。',
      highlights: ['Vue.js / Nuxt.js・Vuex・REST 連携', 'SSR・コンポーネント設計・パフォーマンス最適化'],
    },
  ],
  worksTitle: '制作・開発実績',
  worksSubtitle:
    'スプレッドシート（Google Apps Script 連携）をデータソースに表示。画像は共有リンクからサムネイル表示します。',
  contactTitle: 'ご連絡',
  contactIntro: 'お仕事のご相談・ご質問など、下記フォームよりお送りください。',
  footer: '© 笑笑',
} as const
