import { useEffect, useRef, useState } from 'react'

function CodeBlock({ title = 'terminal', code }) {
  const [copied, setCopied] = useState(false)
  const resetTimer = useRef(null)

  useEffect(() => () => window.clearTimeout(resetTimer.current), [])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      window.clearTimeout(resetTimer.current)
      resetTimer.current = window.setTimeout(() => setCopied(false), 1500)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="code-block">
      <div className="code-block__header">
        <div className="code-block__dots" aria-hidden="true">
          <span className="dot dot--red" />
          <span className="dot dot--yellow" />
          <span className="dot dot--green" />
        </div>
        <span className="code-block__title mono" id="code-block-title">{title}</span>
        <button type="button" className="code-block__copy" onClick={handleCopy}>
          {copied ? 'Copiado' : 'Copiar'}
        </button>
      </div>

      <span className="visually-hidden" aria-live="polite">{copied ? 'Copiado' : ''}</span>
      <pre className="code-block__body mono" aria-labelledby="code-block-title">
        <code>{code}</code>
      </pre>
    </div>
  )
}

export default CodeBlock
