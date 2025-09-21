/**
 * スクロール関連のユーティリティ関数
 */

/**
 * 指定された要素へのスムーススクロールを実行する
 * @param targetId スクロール先の要素のID
 * @param onMenuClose メニューを閉じるコールバック関数
 * @param headerOffset ヘッダーの高さ（デフォルト: 80px）
 */
export const scrollToElement = (
  targetId: string,
  onMenuClose: () => void,
  headerOffset: number = 80
) => {
  // メニューを閉じる
  onMenuClose()

  // スクロールコンテナを取得
  const scrollContainer = document.querySelector('.overflow-scroll')
  if (!scrollContainer) return

  // ターゲット要素を取得
  const targetElement = document.getElementById(targetId)
  if (!targetElement) return

  // ターゲット要素の位置を計算
  const containerRect = scrollContainer.getBoundingClientRect()
  const targetRect = targetElement.getBoundingClientRect()

  // スクロール位置を計算（ヘッダーの高さを考慮）
  const targetScrollTop =
    scrollContainer.scrollTop +
    (targetRect.top - containerRect.top) -
    headerOffset

  // スムーススクロールを実行
  scrollContainer.scrollTo({
    top: targetScrollTop,
    behavior: 'smooth',
  })
}

/**
 * リンククリック時のハンドラーを生成する
 * @param onMenuClose メニューを閉じるコールバック関数
 * @param headerOffset ヘッダーの高さ（デフォルト: 80px）
 * @returns リンククリックハンドラー関数
 */
export const createLinkClickHandler = (
  onMenuClose: () => void,
  headerOffset: number = 80
) => {
  return (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    scrollToElement(targetId, onMenuClose, headerOffset)
  }
}
