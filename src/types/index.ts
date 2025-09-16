// 共通の型定義

// ページコンポーネントの型
export interface PageComponent {
  title: string
  description: string
}

// Reactコンポーネントの基本型
export interface BaseComponent {
  className?: string
  children?: React.ReactNode
}

// スキルの型
export interface Skill {
  category: string
  skills: string[]
}

// お問い合わせフォームの型
export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

// ナビゲーションアイテムの型
export interface NavItem {
  path: string
  label: string
  isActive: boolean
}

// ボタンのバリアントの型
export type ButtonVariant = 'primary' | 'secondary' | 'outline'

// ボタンのサイズの型
export type ButtonSize = 'sm' | 'md' | 'lg'

// カードコンポーネントの型
export interface CardProps {
  title: string
  description: string
  icon?: string
  className?: string
  onClick?: () => void
}

// モーダルの型
export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
}

// アニメーションの型
export type AnimationType = 'fadeIn' | 'slideIn' | 'bounce' | 'pulse'

// レスポンシブブレークポイントの型
export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl'

// テーマの型
export interface Theme {
  colors: {
    primary: string
    secondary: string
    accent: string
    background: string
    surface: string
    text: string
  }
  fonts: {
    primary: string
    secondary: string
  }
  spacing: {
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
  }
}
