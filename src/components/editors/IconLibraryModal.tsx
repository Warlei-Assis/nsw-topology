import React, { useRef, useState } from 'react';
import { Modal, Button, Input } from '@grafana/ui';
import { CustomIcon } from '../../types';
import { sanitizeSvg, getIconDataUri, customIconKey, MAX_ICON_BYTES } from '../icons';
import { COLORS, FONT, RADIUS, SECTION_HEADER } from '../../styles/tokens';

interface Props {
  icons: CustomIcon[];
  onChange: (icons: CustomIcon[]) => void;
  onClose: () => void;
}

const newId = () => `icon-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;

// strip directory and extension — "10021-icon-service-Virtual-Networks.svg" -> readable label
const labelFromFilename = (filename: string) =>
  filename
    .replace(/\.svg$/i, '')
    .replace(/^\d+[-_]*/, '')
    .replace(/^icon[-_]service[-_]/i, '')
    .replace(/[-_]+/g, ' ')
    .trim() || 'icon';

export const IconLibraryModal: React.FC<Props> = ({ icons, onChange, onClose }) => {
  const fileRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState('');
  const [isError, setIsError] = useState(false);

  const totalBytes = icons.reduce((sum, i) => sum + i.svg.length, 0);

  const report = (msg: string, error: boolean) => {
    setStatus(msg);
    setIsError(error);
  };

  const handleFiles = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    e.target.value = '';
    if (files.length === 0) {
      return;
    }

    const added: CustomIcon[] = [];
    const failed: string[] = [];

    for (const file of files) {
      const text = await file.text();
      const { svg, error } = sanitizeSvg(text);
      if (!svg) {
        failed.push(`${file.name} (${error})`);
        continue;
      }
      added.push({ id: newId(), name: labelFromFilename(file.name), svg });
    }

    if (added.length > 0) {
      onChange([...icons, ...added]);
    }

    if (failed.length > 0) {
      report(`Skipped ${failed.length} file(s): ${failed.slice(0, 3).join(', ')}`, true);
    } else {
      report(`Added ${added.length} icon(s).`, false);
    }
  };

  const rename = (id: string, name: string) => onChange(icons.map((i) => (i.id === id ? { ...i, name } : i)));

  const remove = (id: string) => {
    onChange(icons.filter((i) => i.id !== id));
    report('Icon removed. Nodes using it fall back to the default icon.', false);
  };

  return (
    <Modal title="🎨 Icon Library" isOpen={true} onDismiss={onClose}>
      <input
        ref={fileRef}
        type="file"
        accept=".svg,image/svg+xml"
        multiple
        style={{ display: 'none' }}
        onChange={(e) => void handleFiles(e)}
      />

      <div
        style={{
          padding: '12px 16px',
          borderRadius: RADIUS.large,
          background: COLORS.warningBg,
          border: `1px solid ${COLORS.warningBorder}`,
          fontSize: FONT.label,
          color: '#fbbf24',
          lineHeight: 1.6,
        }}
      >
        Upload your own SVG icons — vendor sets such as Azure, AWS or GCP are <strong>not bundled</strong> with this
        plugin. Icons are stored in the dashboard JSON, so they travel with your backups. You are responsible for
        holding the rights to any artwork you upload here.
      </div>

      <div style={SECTION_HEADER}>
        📁 Your Icons
        <span style={{ marginLeft: 'auto', fontSize: FONT.body, fontWeight: 400, color: COLORS.textMuted }}>
          {icons.length} icon(s) · {(totalBytes / 1024).toFixed(1)} KB
        </span>
      </div>

      {icons.length === 0 ? (
        <div
          style={{
            padding: '24px 16px',
            textAlign: 'center',
            fontSize: FONT.label,
            color: COLORS.textMuted,
            border: `1px dashed ${COLORS.borderStrong}`,
            borderRadius: RADIUS.large,
          }}
        >
          No custom icons yet. Upload SVG files to see them in the node icon picker.
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, maxHeight: 260, overflowY: 'auto' }}>
          {icons.map((icon) => (
            <div
              key={icon.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '8px 10px',
                borderRadius: RADIUS.medium,
                background: 'rgba(255,255,255,0.03)',
                border: `1px solid ${COLORS.border}`,
              }}
            >
              <img
                src={getIconDataUri(customIconKey(icon.id))}
                alt={icon.name}
                style={{ width: 28, height: 28, flexShrink: 0 }}
                draggable={false}
              />
              <Input value={icon.name} onChange={(e) => rename(icon.id, e.currentTarget.value)} />
              <Button variant="destructive" size="sm" onClick={() => remove(icon.id)}>
                Remove
              </Button>
            </div>
          ))}
        </div>
      )}

      <div style={{ marginTop: 12, display: 'flex', alignItems: 'center', gap: 10 }}>
        <Button variant="primary" onClick={() => fileRef.current?.click()}>
          Upload SVG
        </Button>
        <span style={{ fontSize: FONT.body, color: COLORS.textMuted }}>
          Multiple files allowed · max {Math.round(MAX_ICON_BYTES / 1024)} KB each
        </span>
      </div>

      {status && (
        <div
          style={{
            marginTop: 12,
            padding: '8px 12px',
            borderRadius: RADIUS.medium,
            fontSize: FONT.label,
            background: isError ? COLORS.dangerBg : 'rgba(74, 222, 128, 0.1)',
            color: isError ? '#f87171' : COLORS.green,
            border: `1px solid ${isError ? 'rgba(239, 68, 68, 0.2)' : 'rgba(74, 222, 128, 0.2)'}`,
          }}
        >
          {status}
        </div>
      )}

      <Modal.ButtonRow>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.ButtonRow>
    </Modal>
  );
};
