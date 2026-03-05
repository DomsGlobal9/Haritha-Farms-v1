import React from 'react';
import { SITEMAP_XML } from '../sitemap-xml-handler';

/**
 * SitemapXml — renders the sitemap XML with browser-native-style syntax highlighting.
 *
 * Uses simple string splitting + regex replacement to colorize the XML.
 * No complex tokenizer, no position:fixed, no iframes. Just a normal page.
 */

/** Escape HTML entities so raw XML renders as visible text. */
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** Colorize a single line of XML → HTML string with inline styles. */
function colorizeLine(raw: string): string {
  const trimmed = raw.trimEnd();
  if (trimmed === '') return '';

  const escaped = escapeHtml(trimmed);

  // XML declaration  <?xml ... ?>
  if (trimmed.trimStart().startsWith('<?')) {
    return escaped
      .replace(
        /&lt;\?xml/,
        '<span style="color:#0000FF">&lt;?xml</span>'
      )
      .replace(
        /\?&gt;/,
        '<span style="color:#0000FF">?&gt;</span>'
      )
      .replace(
        /(\w[\w-]*)=(&quot;[^&]*&quot;)/g,
        '<span style="color:#FF0000">$1</span>=<span style="color:#0000FF">$2</span>'
      );
  }

  // Inline element with URL in <loc>:  <loc>https://…</loc>
  const locMatch = trimmed.match(/^(\s*)<loc>(https?:\/\/[^<]+)<\/loc>$/);
  if (locMatch) {
    const indent = locMatch[1] || '';
    const url = locMatch[2];
    return (
      indent +
      '<span style="color:#800080">&lt;loc&gt;</span>' +
      `<a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer" style="color:#0000EE;text-decoration:underline">${escapeHtml(url)}</a>` +
      '<span style="color:#800080">&lt;/loc&gt;</span>'
    );
  }

  // Inline element: <tag>text</tag>
  const inlineMatch = trimmed.match(/^(\s*)<(\w[\w-]*)>([^<]*)<\/(\w[\w-]*)>$/);
  if (inlineMatch) {
    const indent = inlineMatch[1] || '';
    const tag = inlineMatch[2];
    const text = inlineMatch[3];
    const closeTag = inlineMatch[4];
    return (
      indent +
      `<span style="color:#800080">&lt;${escapeHtml(tag)}&gt;</span>` +
      `<span style="color:#000">${escapeHtml(text)}</span>` +
      `<span style="color:#800080">&lt;/${escapeHtml(closeTag)}&gt;</span>`
    );
  }

  // Opening tag with attributes: <urlset xmlns="...">
  const openAttrMatch = trimmed.match(/^(\s*)<(\w[\w-]*)\s+(.+?)(\/?>)$/);
  if (openAttrMatch) {
    const indent = openAttrMatch[1] || '';
    const tag = openAttrMatch[2];
    const attrs = openAttrMatch[3];
    const close = openAttrMatch[4];

    let attrHtml = attrs.replace(
      /([\w:-]+)="([^"]*)"/g,
      (_m, name, val) =>
        `<span style="color:#FF0000">${escapeHtml(name)}</span>=<span style="color:#0000FF">&quot;${escapeHtml(val)}&quot;</span>`
    );

    return (
      indent +
      `<span style="color:#800080">&lt;${escapeHtml(tag)}</span> ` +
      attrHtml +
      `<span style="color:#800080">${escapeHtml(close)}</span>`
    );
  }

  // Closing tag: </tagname>
  const closeMatch = trimmed.match(/^(\s*)<\/(\w[\w-]*)>$/);
  if (closeMatch) {
    return (
      (closeMatch[1] || '') +
      `<span style="color:#800080">&lt;/${escapeHtml(closeMatch[2])}&gt;</span>`
    );
  }

  // Simple opening tag: <tagname>
  const openMatch = trimmed.match(/^(\s*)<(\w[\w-]*)>$/);
  if (openMatch) {
    return (
      (openMatch[1] || '') +
      `<span style="color:#800080">&lt;${escapeHtml(openMatch[2])}&gt;</span>`
    );
  }

  // Fallback: plain escaped text
  return escaped;
}

export default function SitemapXml() {
  const lines = SITEMAP_XML.split('\n');
  const htmlLines = lines
    .map((line) => colorizeLine(line))
    .filter((l) => l !== '');

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100%',
        background: '#FFFFFF',
        margin: 0,
        padding: 0,
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}
    >
      {/* Browser-style XML header bar */}
      <div
        style={{
          fontSize: '13px',
          color: '#555',
          padding: '8px 16px',
          borderBottom: '1px solid #ddd',
          background: '#FAFAFA',
        }}
      >
        This XML file does not appear to have any style information associated
        with it. The document tree is shown below.
      </div>

      {/* Canonical URL bar */}
      <div
        style={{
          fontSize: '12px',
          color: '#888',
          padding: '6px 16px',
          borderBottom: '1px solid #eee',
          background: '#FEFEFE',
        }}
      >
        <a
          href="https://harithafarms.in/sitemap.xml"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#0000EE', textDecoration: 'underline' }}
        >
          https://harithafarms.in/sitemap.xml
        </a>
      </div>

      {/* Syntax-highlighted XML */}
      <pre
        style={{
          fontFamily: "'Menlo', 'Monaco', 'Consolas', 'Courier New', monospace",
          fontSize: '13px',
          lineHeight: '1.6',
          margin: 0,
          padding: '12px 16px',
          whiteSpace: 'pre',
          color: '#000',
          background: '#FFFFFF',
        }}
      >
        {htmlLines.map((html, i) => (
          <div key={i} dangerouslySetInnerHTML={{ __html: html }} />
        ))}
      </pre>
    </div>
  );
}
