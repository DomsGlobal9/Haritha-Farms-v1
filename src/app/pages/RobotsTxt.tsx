import React from 'react';
import { ROBOTS_TXT } from '../robots-txt-handler';

/**
 * RobotsTxt — renders robots.txt with syntax highlighting in the browser.
 *
 * Mimics how browsers display plain-text files but adds color coding:
 *   - Green comments (#)
 *   - Purple directives (User-agent, Allow, Disallow, Sitemap, etc.)
 *   - Blue values (paths, URLs, bot names)
 *
 * No document.write(), no iframes. Just a normal page.
 */

function colorizeLine(raw: string): string {
  const trimmed = raw.trimEnd();

  // Empty line → blank spacer
  if (trimmed === '') return '&nbsp;';

  // Escape HTML
  const escaped = trimmed
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

  // Comment line: # …
  if (trimmed.startsWith('#')) {
    return `<span style="color:#6A8759">${escaped}</span>`;
  }

  // Directive line: Key: Value
  const colonIdx = trimmed.indexOf(':');
  if (colonIdx > 0) {
    const key = trimmed.slice(0, colonIdx);
    const value = trimmed.slice(colonIdx + 1).trim();

    const knownDirectives = [
      'User-agent',
      'Allow',
      'Disallow',
      'Sitemap',
      'Crawl-delay',
      'Host',
    ];

    if (knownDirectives.includes(key)) {
      const escapedKey = key
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
      const escapedValue = value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');

      // Make URLs clickable
      const isUrl = value.startsWith('http://') || value.startsWith('https://');
      const valueHtml = isUrl
        ? `<a href="${escapedValue}" target="_blank" rel="noopener noreferrer" style="color:#6897BB;text-decoration:underline">${escapedValue}</a>`
        : `<span style="color:#6897BB">${escapedValue}</span>`;

      return `<span style="color:#CC7832">${escapedKey}</span><span style="color:#A9B7C6">:</span> ${valueHtml}`;
    }
  }

  // Fallback: plain text
  return `<span style="color:#A9B7C6">${escaped}</span>`;
}

export default function RobotsTxt() {
  const lines = ROBOTS_TXT.split('\n');
  const htmlLines = lines.map((line) => colorizeLine(line));

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100%',
        background: '#2B2B2B',
        margin: 0,
        padding: 0,
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}
    >
      {/* Header bar */}
      <div
        style={{
          fontSize: '13px',
          color: '#999',
          padding: '8px 16px',
          borderBottom: '1px solid #3C3F41',
          background: '#313335',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span>robots.txt — Haritha Farms</span>
        <a
          href="https://harithafarms.in/robots.txt"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#6897BB', textDecoration: 'underline', fontSize: '12px' }}
        >
          https://harithafarms.in/robots.txt
        </a>
      </div>

      {/* Content */}
      <pre
        style={{
          fontFamily: "'Menlo', 'Monaco', 'Consolas', 'Courier New', monospace",
          fontSize: '13px',
          lineHeight: '1.7',
          margin: 0,
          padding: '16px 20px',
          whiteSpace: 'pre',
          color: '#A9B7C6',
          background: '#2B2B2B',
        }}
      >
        {htmlLines.map((html, i) => (
          <div key={i} dangerouslySetInnerHTML={{ __html: html }} />
        ))}
      </pre>
    </div>
  );
}
