# Portfolio2 - ポートフォリオサイト

React + TypeScript + Vite + Docker + Rancher で構築されたモダンなポートフォリオサイトです。

## 🛠️ 技術スタック

- **フロントエンド**: React 18, TypeScript, Vite
- **パッケージマネージャー**: Yarn
- **コンテナ**: Docker, Docker Compose
- **オーケストレーション**: Rancher
- **Web サーバー**: Nginx
- **スタイリング**:

## 🚀 クイックスタート

### 前提条件

- Node.js 18+
- Yarn
- Docker
- Docker Compose
- kubectl (Kubernetes デプロイ時)

### セットアップ

```bash
# 自動セットアップスクリプトを実行
./scripts/setup.sh

# または手動でセットアップ
yarn install
docker-compose build
```

### 開発環境

```bash
# 開発サーバーを起動
yarn dev

# またはDockerで開発環境を起動
docker-compose up
```

開発サーバーは `http://localhost:3000` で利用可能です。

### 本番環境

```bash
# 本番ビルド
yarn build

# Dockerで本番環境を起動
docker-compose --profile production up

# プレビュー
yarn preview
```

本番サーバーは `http://localhost:8080` で利用可能です。

## 🐳 Docker

### 開発用コンテナ

```bash
# 開発環境を起動
docker-compose up

# バックグラウンドで起動
docker-compose up -d

# ログを確認
docker-compose logs -f
```

### 本番用コンテナ

```bash
# 本番環境を起動
docker-compose --profile production up

# イメージをビルド
docker build -t portfolio:latest .
```

## ☸️ Kubernetes / Rancher デプロイ

### 前提条件

- Kubernetes クラスター
- Rancher 環境
- kubectl 設定済み

### デプロイ手順

```bash
# 自動デプロイスクリプトを実行
./scripts/deploy.sh

# または手動でデプロイ
kubectl apply -f k8s/
```

### デプロイメント確認

```bash
# ポッドの状態確認
kubectl get pods -n portfolio

# サービスの確認
kubectl get services -n portfolio

# イングレスの確認
kubectl get ingress -n portfolio
```

## 📁 プロジェクト構造

```
portfolio2/
├── src/
│   ├── components/          # Reactコンポーネント
│   │   ├── Header.tsx
│   │   ├── Header.css
│   │   ├── Footer.tsx
│   │   └── Footer.css
│   ├── pages/              # ページコンポーネント
│   │   ├── Home.tsx
│   │   ├── Home.css
│   │   ├── About.tsx
│   │   ├── About.css
│   │   ├── Projects.tsx
│   │   ├── Projects.css
│   │   ├── Contact.tsx
│   │   └── Contact.css
│   ├── App.tsx             # メインアプリケーション
│   ├── App.css
│   ├── main.tsx            # エントリーポイント
│   └── index.css           # グローバルスタイル
├── k8s/                    # Kubernetes設定ファイル
│   ├── namespace.yaml
│   ├── deployment.yaml
│   ├── service.yaml
│   ├── ingress.yaml
│   └── configmap.yaml
├── scripts/                # セットアップ・デプロイスクリプト
│   ├── setup.sh
│   └── deploy.sh
├── Dockerfile              # 本番用Dockerfile
├── Dockerfile.dev          # 開発用Dockerfile
├── docker-compose.yml      # Docker Compose設定
├── nginx.conf              # Nginx設定
├── package.json            # 依存関係
├── vite.config.ts          # Vite設定
└── tsconfig.json           # TypeScript設定
```

## 🎨 機能

- **レスポンシブデザイン**: モバイル・タブレット・デスクトップ対応
- **モダン UI**: グラデーション、アニメーション、ホバーエフェクト
- **ルーティング**: React Router による SPA
- **TypeScript**: 型安全性の確保
- **コンテナ化**: Docker による環境の統一
- **オーケストレーション**: Kubernetes/Rancher によるスケーラブルなデプロイ

## 📝 利用可能なスクリプト

```bash
yarn dev          # 開発サーバー起動
yarn build        # 本番ビルド
yarn preview      # 本番ビルドのプレビュー
yarn lint         # ESLintによるコードチェック
```

## 🔧 設定

### Vite 設定

- ホットリロード対応
- TypeScript サポート
- 開発サーバー: `0.0.0.0:3000`

### Docker 設定

- マルチステージビルド
- Nginx による静的ファイル配信
- 本番最適化

### Kubernetes 設定

- 2 レプリカのデプロイメント
- リソース制限設定
- ヘルスチェック
- イングレス設定

## 📞 サポート

質問や問題がございましたら、お気軽にお問い合わせください。

## 📄 ライセンス

MIT License
