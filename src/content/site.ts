/** サイト内の固定文言（日本語・resume.md 準拠） */

export const site = {
  name: '笑笑',
  title: '笑笑 — フルスタックエンジニア',
  role: 'フルスタックエンジニア / フリーランス',
  heroLead:
    '要件定義から設計・実装・公開・運用まで一貫対応。Web・モバイル・CMS・生成AIを横断し、ビジネス要件とユーザー体験の両立を重視しています。',
  aboutTitle: '自己紹介',
  aboutBody: [
    '6年以上、大規模Webサービス、ECプラットフォーム、業務基幹システム、マッチングサービスの設計・開発・運用に従事。フロントエンドからバックエンド、インフラまで一貫して対応可能です。',
    'フロントエンドでは React / Next.js を中心としたモダンSPA・Headless構成、パフォーマンス最適化（LCP/FCP）、SEO対策、TypeScript による型安全設計を実践。バックエンドでは Node.js / Laravel / Python（FastAPI）による高性能REST API、JWT認証、PostgreSQL チューニングなどを担当。',
    'AWS・Docker を用いたクラウド開発、Power Platform / Azure による業務効率化、テックリード・PM としてのアジャイル推進・コード品質管理・若手育成の経験があります。',
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
  /** resume 記載のツール・計測（タグ表示用） */
  skillTags: [
    'Git / GitHub',
    'Figma',
    'Adobe XD',
    'Google Analytics（GA4）',
    'Google Tag Manager',
  ],
  experienceTitle: '職務経歴ハイライト',
  experienceSubtitle: '職務経歴書に基づく主な所属・プロジェクトです（新しい順）。',
  experience: [
    {
      period: '2025年1月〜現在',
      org: 'フリーランス（CrowdWorks・Lancers）',
      role: 'フルスタックエンジニア',
      summary:
        'Webサイト構築、EC、モバイルアプリ、既存改修、AI機能実装など幅広く担当。要件定義から設計・実装・公開・運用まで一貫対応。',
      highlights: [
        'AIチャットボット（補助金ポータル）単独開発、プロンプト設計〜公開まで',
        'Laravel サイト保守、FlutterFlow＋Firebase で「ドレミとあそぼ」Android/iOS 公開',
        'MERN ポータル、WordPress/Shopify 新規構築、Next.js×WordPress 連携など',
      ],
    },
    {
      period: '2024年10月〜12月',
      org: '金融機関向け既存システム改修（受託）',
      role: 'エンジニア',
      summary: 'Symfony 構築システムにおける本番 SFTP アップロードエラーの原因調査・修正・再発防止。',
      highlights: ['Symfony / PHP / MySQL', 'ログイン情報不備の特定と修正、ナレッジ化'],
    },
    {
      period: '2024年4月〜10月',
      org: '株式会社JUTJOY',
      role: 'フルスタックエンジニア（モバイル・サーバーサイド）',
      summary:
        'Flutter アプリと FastAPI 在庫APIの連携強化、および Laravel 製公式サイト（bifesta.jp）の改修・運用最適化。',
      highlights: [
        '在庫API・リアルタイム同期・キャッシュ見直し、Flutter パフォーマンス改善',
        'Laravel / AWS CloudFront / GA4 / GTM / GSAP / PWA・セキュリティヘッダー対応',
      ],
    },
    {
      period: '2024年1月〜3月',
      org: '株式会社JUTJOY',
      role: 'フルスタックエンジニア',
      summary: 'Power Platform を用いた申請・承認ワークフロー構築。Excel/メール運用のデジタル化。',
      highlights: ['PowerApps / Power Automate / SharePoint 連携', '承認プロセス自動化'],
    },
    {
      period: '2023年7月〜2024年1月',
      org: '株式会社JUTJOY',
      role: 'テックリード / フルスタックエンジニア',
      summary:
        'BtoB向け業務管理SaaSの新規構築。マルチテナント・JWT/RBAC・FastAPI・Next.js・PostgreSQL・AWS（EC2/RDS）。',
      highlights: [
        '要件定義からアーキテクチャ設計、ダッシュボードUI、集計ロジック、Docker 標準化',
        'コードレビュー・技術方針策定',
      ],
    },
    {
      period: '2022年2月〜2023年6月',
      org: '株式会社JUTJOY',
      role: 'フルスタックエンジニア',
      summary:
        '業務管理SaaSにおける FastAPI REST API 基盤の構築・Next.js 管理画面実装。高トラフィック対応・JWT・PostgreSQL 最適化。',
      highlights: [
        '平均レスポンス200ms以下、インデックス最適化',
        'マッチング・データ同期・バッチ処理',
      ],
    },
  ] as const,
  worksTitle: '制作・開発実績',
  worksSubtitle:
    'スプレッドシート（Google Apps Script 連携）をデータソースに表示。画像は共有リンクからサムネイル表示します。',
  contactTitle: 'ご連絡',
  contactBody:
    'お仕事のご相談は、クラウドソーシング経由またはお問い合わせフォーム（準備中）にて承ります。',
  footer: '© 笑笑',
} as const
