import { CustomIcon } from '../types';

// helper to wrap svg path into a 24x24 icon
const ic = (inner: string) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`;

export const SVG_ICONS: Record<string, string> = {
  router: ic(
    '<rect width="20" height="8" x="2" y="14" rx="2"/><path d="M6.01 18H6"/><path d="M10.01 18H10"/><path d="M15 10v4"/><path d="M17.84 7.17a4 4 0 0 0-5.66 0"/><path d="M20.66 4.34a8 8 0 0 0-11.31 0"/>'
  ),
  switch: ic(
    '<rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/>'
  ),
  olt: ic(
    '<rect width="20" height="8" x="2" y="14" rx="2"/><path d="M6.01 18H6"/><path d="M10.01 18H10"/><path d="M15 10v4"/><path d="M17.84 7.17a4 4 0 0 0-5.66 0"/><path d="M20.66 4.34a8 8 0 0 0-11.31 0"/><circle cx="12" cy="6" r="1.5" fill="#ffffff" stroke="none"/>'
  ),
  server: ic(
    '<rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/>'
  ),
  firewall: ic(
    '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="M12 8v4"/><path d="M12 16h.01"/>'
  ),
  cgnat: ic(
    '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="M9 12h6"/><path d="M12 9v6"/>'
  ),

  cpu: ic(
    '<path d="M12 20v2"/><path d="M12 2v2"/><path d="M17 20v2"/><path d="M17 2v2"/><path d="M2 12h2"/><path d="M2 17h2"/><path d="M2 7h2"/><path d="M20 12h2"/><path d="M20 17h2"/><path d="M20 7h2"/><path d="M7 20v2"/><path d="M7 2v2"/><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="8" y="8" width="8" height="8" rx="1"/>'
  ),
  desktop: ic(
    '<rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/>'
  ),
  laptop: ic(
    '<path d="M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z"/><path d="M20.054 15.987H3.946"/>'
  ),
  vm: ic(
    '<rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/><path d="M7 8l3 3-3 3"/><path d="M14 11h3"/>'
  ),

  db: ic(
    '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/>'
  ),
  nas: ic(
    '<rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/><path d="M11 6h6"/><path d="M11 18h6"/>'
  ),
  harddrive: ic(
    '<path d="M10 16h.01"/><path d="M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/><path d="M21.946 12.013H2.054"/><path d="M6 16h.01"/>'
  ),

  wifi: ic(
    '<path d="M12 20h.01"/><path d="M2 8.82a15 15 0 0 1 20 0"/><path d="M5 12.859a10 10 0 0 1 14 0"/><path d="M8.5 16.429a5 5 0 0 1 7 0"/>'
  ),
  globe: ic(
    '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>'
  ),
  antenna: ic(
    '<path d="M2 12L7 2"/><path d="M22 12l-5-10"/><path d="M4.6 18.2L7 12"/><path d="M19.4 18.2L17 12"/><circle cx="12" cy="19" r="3"/><path d="M12 16v-4"/>'
  ),
  connection: ic(
    '<path d="M9 17H7A5 5 0 0 1 7 7h2"/><path d="M15 7h2a5 5 0 0 1 0 10h-2"/><line x1="8" x2="16" y1="12" y2="12"/>'
  ),
  cable: ic(
    '<path d="M17 21v-2a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1"/><path d="M7 21v-2a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v1a1 1 0 0 0 1 1"/><path d="M19.6 14.4A8 8 0 1 0 6 8"/><path d="M12 10v2"/>'
  ),

  camera: ic(
    '<path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"/><circle cx="12" cy="13" r="3"/>'
  ),
  impressora: ic(
    '<path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"/><rect x="6" y="14" width="12" height="8" rx="1"/>'
  ),
  smartphone: ic('<rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>'),
  tablet: ic('<rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>'),

  shield: ic(
    '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>'
  ),
  lock: ic('<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>'),
  vpn: ic(
    '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><circle cx="12" cy="10.5" r="1.5"/><path d="M12 12v3"/>'
  ),

  retificadora: ic(
    '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>'
  ),
  battery: ic(
    '<rect x="2" y="7" width="18" height="10" rx="2"/><path d="M22 11v2"/><path d="M6 11v2"/><path d="M10 11v2"/>'
  ),

  cloud: ic('<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>'),
  backup: ic(
    '<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/><path d="M12 13v5"/><path d="M9 16l3 3 3-3"/>'
  ),
  vnet: ic(
    '<rect x="2" y="4" width="20" height="16" rx="2"/><circle cx="8" cy="9.5" r="1.5"/><circle cx="16" cy="9.5" r="1.5"/><circle cx="12" cy="15.5" r="1.5"/><path d="M9.5 9.5h5"/><path d="M9.2 10.8 10.8 14.2"/><path d="M14.8 10.8 13.2 14.2"/>'
  ),

  building: ic(
    '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M8 10h.01"/><path d="M16 10h.01"/><path d="M8 14h.01"/><path d="M16 14h.01"/>'
  ),
  datacenter: ic(
    '<rect x="2" y="2" width="20" height="20" rx="2"/><path d="M2 9h20"/><path d="M2 15h20"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="12" y2="12"/><line x1="6" x2="6.01" y1="18" y2="18"/>'
  ),

  satellite: ic(
    '<path d="M13 7L9 3 3 9l4 4"/><path d="M17 11l4 4-6 6-4-4"/><path d="M8 12l4 4"/><circle cx="18.5" cy="5.5" r="2.5"/>'
  ),
  tool: ic(
    '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>'
  ),
  alertTriangle: ic(
    '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>'
  ),
  rack: ic(
    '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 6h8"/><path d="M8 10h8"/><path d="M8 14h8"/><path d="M8 18h8"/><line x1="17" x2="17.01" y1="6" y2="6"/><line x1="17" x2="17.01" y1="10" y2="10"/>'
  ),
};

export const PRIORITY_ICONS = [
  'router',
  'switch',
  'olt',
  'server',
  'firewall',
  'cgnat',
  'cpu',
  'globe',
  'vpn',
  'vnet',
  'cloud',
  'connection',
];

export const ICON_KEYS = Object.keys(SVG_ICONS);

// ── custom icons ────────────────────────────────────────────────────────────
// user-uploaded svgs live in the dashboard JSON, not in this bundle. the panel
// pushes them here on every options change so the sync lookups below — called
// deep inside the canvas — can resolve them without prop drilling.

const CUSTOM_PREFIX = 'custom:';

let customSvg: Record<string, string> = {};
let customName: Record<string, string> = {};

export const customIconKey = (id: string): string => CUSTOM_PREFIX + id;

export const isCustomIcon = (key: string): boolean => key.startsWith(CUSTOM_PREFIX);

export const setCustomIcons = (icons: CustomIcon[] | undefined): void => {
  customSvg = {};
  customName = {};
  for (const item of icons || []) {
    if (!item?.id || !item.svg) {
      continue;
    }
    const key = customIconKey(item.id);
    customSvg[key] = item.svg;
    customName[key] = item.name || item.id;
  }
};

// display label — custom icons carry a user-given name, built-ins are their key
export const getIconLabel = (key: string): string => customName[key] || key;

const resolveSvg = (key: string): string => customSvg[key] || SVG_ICONS[key] || SVG_ICONS['server'];

const toDataUri = (svg: string): string => 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);

// icon key -> data uri (for img src)
export const getIconDataUri = (key: string): string => toDataUri(resolveSvg(key));

// same but with custom stroke color. custom icons are left untouched: they are
// usually full-color artwork with no white stroke to swap, and vendor icon
// terms generally require showing them unaltered.
export const getIconDataUriColored = (key: string, color: string): string => {
  if (customSvg[key]) {
    return toDataUri(customSvg[key]);
  }
  return toDataUri(resolveSvg(key).replace(/stroke="#ffffff"/g, `stroke="${color}"`));
};

// search/filter icons, network ones first, then the user's own
export const searchIcons = (query: string): string[] => {
  const customKeys = Object.keys(customSvg);
  if (!query) {
    return [...PRIORITY_ICONS, ...customKeys, ...ICON_KEYS.filter((k) => !PRIORITY_ICONS.includes(k))];
  }
  const q = query.toLowerCase();
  return [...customKeys, ...ICON_KEYS].filter((k) => getIconLabel(k).toLowerCase().includes(q));
};

// ── svg sanitising ──────────────────────────────────────────────────────────
// icons render through <img src="data:...">, which already blocks scripting,
// but uploads are stripped of active content and external refs anyway so a
// hostile file can never phone home or survive a future inline-render change.

export const MAX_ICON_BYTES = 64 * 1024;

export const sanitizeSvg = (raw: string): { svg?: string; error?: string } => {
  let s = (raw || '').trim();
  if (!s) {
    return { error: 'file is empty' };
  }
  if (s.length > MAX_ICON_BYTES) {
    return { error: `too large (max ${Math.round(MAX_ICON_BYTES / 1024)} KB)` };
  }

  s = s.replace(/<\?xml[\s\S]*?\?>/gi, '');
  s = s.replace(/<!DOCTYPE[^>[]*(\[[\s\S]*?\])?[^>]*>/gi, '');
  s = s.replace(/<!--[\s\S]*?-->/g, '');

  s = s.replace(/<script[\s\S]*?<\/script>/gi, '');
  s = s.replace(/<foreignObject[\s\S]*?<\/foreignObject>/gi, '');
  s = s.replace(/\son[a-z]+\s*=\s*"[^"]*"/gi, '');
  s = s.replace(/\son[a-z]+\s*=\s*'[^']*'/gi, '');
  // keep internal #fragment refs (<use>, gradients) and inline images, drop the rest
  s = s.replace(/\s(?:xlink:)?href\s*=\s*"(?!#|data:image\/)[^"]*"/gi, '');
  s = s.replace(/\s(?:xlink:)?href\s*=\s*'(?!#|data:image\/)[^']*'/gi, '');

  s = s.trim();
  if (!/^<svg[\s>]/i.test(s) || !/<\/svg>$/i.test(s)) {
    return { error: 'not a valid SVG file' };
  }
  return { svg: s };
};
