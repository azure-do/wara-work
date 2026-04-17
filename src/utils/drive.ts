/** Google ドライブの `/file/d/FILE_ID/` から ID を抽出し、サムネイル表示用 URL を生成 */

const FILE_ID_RE = /\/file\/d\/([a-zA-Z0-9_-]+)/g

export function extractGoogleDriveFileIds(text: string | null | undefined): string[] {
  if (!text) return []
  const ids: string[] = []
  let m: RegExpExecArray | null
  const re = new RegExp(FILE_ID_RE)
  while ((m = re.exec(text)) !== null) {
    ids.push(m[1])
  }
  return [...new Set(ids)]
}

/** ブラウザの img で表示しやすいサムネイル（共有設定が「リンクを知っている全員」などである必要あり） */
export function driveThumbnailUrl(fileId: string, width = 1200): string {
  return `https://drive.google.com/thumbnail?id=${encodeURIComponent(fileId)}&sz=w${width}`
}
