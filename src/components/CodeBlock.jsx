import { useState } from 'react'

function CodeBlock({ title = 'terminal', code }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch (error) {
      console.error('No se pudo copiar el texto', error)
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
        <span className="code-block__title mono">{title}</span>
        <button type="button" className="code-block__copy" onClick={handleCopy}>
          {copied ? 'Copiado' : 'Copiar'}
        </button>
      </div>

      <pre className="code-block__body mono">
        <code>{code}</code>
      </pre>
    </div>
  )
}

export default CodeBlock