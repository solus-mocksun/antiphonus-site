/* ============================================================
   CHARACTER DATA — single source of truth
   Used by:
     • story/page.html — name detection + dialogue tint + side panel

   Fields:
     id       — unique key (matches object key; use to link back to character page)
     name     — full display name
     tag      — one-line descriptor shown in panel
     age
     gender
     rank
     notes    — freeform notes shown in panel
     aliases  — array of alternate names detected in prose (includes nicknames)
     palette  — array of hex swatches
   ============================================================ */

const CHARACTER_DATA = {
  anti: {
    id:      'anti',
    name:    'Antiphonus Rivis',
    tag:     'rK2Cnd-826773-240',
    age:     '23',
    gender:  'male',
    rank:    'none',
    notes:   '',
    aliases: ['Anti', 'Antiphonus'],
    palette: ['#ebebeb', '#888888', '#2a2a2a', '#bd5a51', '#f5ece9'],
    href:    '../characters/index.html',
  },
  nyx: {
    id:      'nyx',
    name:    'Nyx Atonal',
    tag:     '2n2De5-637626-335',
    age:     '22',
    gender:  'male',
    rank:    'top 5 / all cities',
    notes:   '',
    aliases: ['Nyx'],
    palette: ['#3d5268', '#424652', '#2a2a2a', '#0c0d0d', '#d4bab2'],
    href:    '../characters/index.html',
  },
  katherine: {
    id:      'katherine',
    name:    'Katherine',
    tag:     'aK7mnd-481927-503',
    age:     'mid-twenties',
    gender:  'female',
    rank:    '—',
    notes:   'Known as Katy in M00. The girl from the engine room.',
    aliases: ['Katy'],
    palette: [],
    href:    '../characters/supporting.html?open=katherine',
  },
};
